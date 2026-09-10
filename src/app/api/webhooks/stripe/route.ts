import { NextRequest, NextResponse } from "next/server";
import type Stripe from "stripe";
import type { SupabaseClient } from "@supabase/supabase-js";
import { getStripe } from "@/lib/stripe/server";
import { createAdminClient } from "@/lib/supabase/admin";

async function getPlanId(admin: SupabaseClient, slug: "basic" | "premium") {
  const { data, error } = await admin.from("pricing_plans").select("id").eq("slug", slug).single();
  if (error || !data) throw new Error(`Missing pricing plan: ${slug}`);
  return data.id as string;
}

function resolveUserId(session: Stripe.Checkout.Session) {
  return session.client_reference_id ?? (session.metadata?.supabase_user_id as string | undefined) ?? null;
}

async function handleCheckoutCompleted(admin: SupabaseClient, stripe: Stripe, session: Stripe.Checkout.Session) {
  const userId = resolveUserId(session);
  if (!userId) return;

  const customerId = typeof session.customer === "string" ? session.customer : session.customer?.id;

  if (session.mode === "subscription" && session.subscription) {
    const subscriptionId = typeof session.subscription === "string" ? session.subscription : session.subscription.id;
    const subscription = await stripe.subscriptions.retrieve(subscriptionId);
    const premiumId = await getPlanId(admin, "premium");
    const periodEnd = subscription.items.data[0]?.current_period_end;

    await admin
      .from("profiles")
      .update({
        plan_id: premiumId,
        stripe_customer_id: customerId ?? null,
        stripe_subscription_id: subscription.id,
        subscription_status: subscription.status,
        cancel_at_period_end: subscription.cancel_at_period_end,
        current_period_end: periodEnd ? new Date(periodEnd * 1000).toISOString() : null,
      })
      .eq("id", userId);
    return;
  }

  if (session.mode === "payment") {
    const credits = parseInt((session.metadata?.credits as string | undefined) ?? "0", 10);
    if (credits > 0) {
      await admin.rpc("add_credits", { p_user_id: userId, p_amount: credits });
    }
  }
}

async function handleSubscriptionUpdated(admin: SupabaseClient, subscription: Stripe.Subscription) {
  const periodEnd = subscription.items.data[0]?.current_period_end;
  const update: Record<string, unknown> = {
    subscription_status: subscription.status,
    cancel_at_period_end: subscription.cancel_at_period_end,
    current_period_end: periodEnd ? new Date(periodEnd * 1000).toISOString() : null,
  };

  if (subscription.status === "active" || subscription.status === "trialing") {
    update.plan_id = await getPlanId(admin, "premium");
  }

  await admin.from("profiles").update(update).eq("stripe_subscription_id", subscription.id);
}

async function handleSubscriptionDeleted(admin: SupabaseClient, subscription: Stripe.Subscription) {
  const basicId = await getPlanId(admin, "basic");

  await admin
    .from("profiles")
    .update({
      plan_id: basicId,
      stripe_subscription_id: null,
      subscription_status: "canceled",
      cancel_at_period_end: false,
      current_period_end: null,
      remaining_scans: 3,
      scans_refreshed_at: new Date().toISOString().slice(0, 10),
    })
    .eq("stripe_subscription_id", subscription.id);
}

async function handleInvoicePaymentFailed(admin: SupabaseClient, invoice: Stripe.Invoice) {
  const customerId = typeof invoice.customer === "string" ? invoice.customer : invoice.customer?.id;
  if (!customerId) return;

  await admin.from("profiles").update({ subscription_status: "past_due" }).eq("stripe_customer_id", customerId);
}

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  const stripe = getStripe();
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const admin = createAdminClient();
  if (!admin) {
    return NextResponse.json({ error: "Server not configured" }, { status: 500 });
  }

  // Idempotency guard: Stripe may deliver the same event more than once.
  const { error: dedupeError } = await admin.from("stripe_events").insert({ id: event.id, type: event.type });
  if (dedupeError) {
    return NextResponse.json({ received: true, deduped: true });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed":
        await handleCheckoutCompleted(admin, stripe, event.data.object as Stripe.Checkout.Session);
        break;
      case "customer.subscription.updated":
        await handleSubscriptionUpdated(admin, event.data.object as Stripe.Subscription);
        break;
      case "customer.subscription.deleted":
        await handleSubscriptionDeleted(admin, event.data.object as Stripe.Subscription);
        break;
      case "invoice.payment_failed":
        await handleInvoicePaymentFailed(admin, event.data.object as Stripe.Invoice);
        break;
    }
  } catch (err) {
    console.error(`Stripe webhook handler failed for ${event.type}:`, err);
    return NextResponse.json({ error: "Handler failed" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
