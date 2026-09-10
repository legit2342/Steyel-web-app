"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { getStripe } from "@/lib/stripe/server";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

async function getAuthedUser() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user?.email) redirect("/login");
  return { supabase, user: user! };
}

async function getOrCreateStripeCustomer(userId: string, email: string) {
  const admin = createAdminClient();
  if (!admin) throw new Error("Billing is not configured yet. Please contact support@steyel.com.");

  const { data: profile } = await admin
    .from("profiles")
    .select("stripe_customer_id")
    .eq("id", userId)
    .single();

  if (profile?.stripe_customer_id) return { admin, customerId: profile.stripe_customer_id };

  const stripe = getStripe();
  const customer = await stripe.customers.create({
    email,
    metadata: { supabase_user_id: userId },
  });

  await admin.from("profiles").update({ stripe_customer_id: customer.id }).eq("id", userId);

  return { admin, customerId: customer.id };
}

export async function startPremiumCheckout() {
  const { user } = await getAuthedUser();
  const admin = createAdminClient();
  if (!admin) redirect("/dashboard/account?error=" + encodeURIComponent("Billing isn't available yet. Please contact support@steyel.com."));

  const { data: plan } = await admin
    .from("pricing_plans")
    .select("stripe_price_id")
    .eq("slug", "premium")
    .single();

  if (!plan?.stripe_price_id) {
    redirect("/dashboard/account?error=" + encodeURIComponent("Premium isn't available for checkout right now."));
  }

  const { customerId } = await getOrCreateStripeCustomer(user.id, user.email!);

  const stripe = getStripe();
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    customer: customerId,
    client_reference_id: user.id,
    line_items: [{ price: plan.stripe_price_id, quantity: 1 }],
    success_url: `${SITE_URL}/dashboard/account?checkout=success`,
    cancel_url: `${SITE_URL}/dashboard/account?checkout=cancelled`,
    subscription_data: { metadata: { supabase_user_id: user.id } },
    metadata: { supabase_user_id: user.id, kind: "subscription" },
  });

  if (!session.url) redirect("/dashboard/account?error=" + encodeURIComponent("Couldn't start checkout. Please try again."));
  redirect(session.url);
}

export async function startCreditsCheckout(formData: FormData) {
  const { user } = await getAuthedUser();
  const packageId = formData.get("packageId") as string | null;
  if (!packageId) redirect("/dashboard/account?error=" + encodeURIComponent("Please choose a credit package."));

  const admin = createAdminClient();
  if (!admin) redirect("/dashboard/account?error=" + encodeURIComponent("Billing isn't available yet. Please contact support@steyel.com."));

  const { data: pkg } = await admin
    .from("credit_packages")
    .select("id, credits, stripe_price_id")
    .eq("id", packageId)
    .single();

  if (!pkg?.stripe_price_id) {
    redirect("/dashboard/account?error=" + encodeURIComponent("That credit package isn't available right now."));
  }

  const { customerId } = await getOrCreateStripeCustomer(user.id, user.email!);

  const stripe = getStripe();
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    customer: customerId,
    client_reference_id: user.id,
    line_items: [{ price: pkg.stripe_price_id, quantity: 1 }],
    success_url: `${SITE_URL}/dashboard/account?checkout=success`,
    cancel_url: `${SITE_URL}/dashboard/account?checkout=cancelled`,
    metadata: { supabase_user_id: user.id, kind: "credits", credits: String(pkg.credits) },
  });

  if (!session.url) redirect("/dashboard/account?error=" + encodeURIComponent("Couldn't start checkout. Please try again."));
  redirect(session.url);
}

export async function downgradeToBasic() {
  const { user } = await getAuthedUser();
  const admin = createAdminClient();
  if (!admin) redirect("/dashboard/account?error=" + encodeURIComponent("Billing isn't available yet. Please contact support@steyel.com."));

  const { data: profile } = await admin
    .from("profiles")
    .select("stripe_subscription_id")
    .eq("id", user.id)
    .single();

  if (!profile?.stripe_subscription_id) {
    redirect("/dashboard/account?error=" + encodeURIComponent("You don't have an active subscription to cancel."));
  }

  const stripe = getStripe();
  await stripe.subscriptions.update(profile.stripe_subscription_id, { cancel_at_period_end: true });
  await admin.from("profiles").update({ cancel_at_period_end: true }).eq("id", user.id);

  redirect("/dashboard/account?downgrade=scheduled");
}

export async function resumePremium() {
  const { user } = await getAuthedUser();
  const admin = createAdminClient();
  if (!admin) redirect("/dashboard/account?error=" + encodeURIComponent("Billing isn't available yet. Please contact support@steyel.com."));

  const { data: profile } = await admin
    .from("profiles")
    .select("stripe_subscription_id")
    .eq("id", user.id)
    .single();

  if (!profile?.stripe_subscription_id) {
    redirect("/dashboard/account?error=" + encodeURIComponent("You don't have a subscription to resume."));
  }

  const stripe = getStripe();
  await stripe.subscriptions.update(profile.stripe_subscription_id, { cancel_at_period_end: false });
  await admin.from("profiles").update({ cancel_at_period_end: false }).eq("id", user.id);

  redirect("/dashboard/account?downgrade=cancelled");
}
