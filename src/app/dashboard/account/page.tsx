import type { Metadata } from "next";
import { createClient, getAuthUser } from "@/lib/supabase/server";
import AccountProfilePhoto from "@/components/dashboard/AccountProfilePhoto";
import AccountSecurityForm from "@/components/dashboard/AccountSecurityForm";
import AccountSubscription from "@/components/dashboard/AccountSubscription";
import AccountDangerZone from "@/components/dashboard/AccountDangerZone";

export const metadata: Metadata = {
  title: "Account Settings — Steyel",
};

type Usage = {
  remaining_scans: number | null;
  is_unlimited: boolean;
  plan_slug: "basic" | "premium";
  plan_name: string;
  cancel_at_period_end: boolean;
  current_period_end: string | null;
};

type SearchParams = { checkout?: string; downgrade?: string; error?: string };

function resolveBanner({ checkout, downgrade, error }: SearchParams) {
  if (error) return { tone: "error" as const, message: error };
  if (checkout === "success") return { tone: "success" as const, message: "Payment successful — your account has been updated." };
  if (checkout === "cancelled") return { tone: "info" as const, message: "Checkout was cancelled — no charge was made." };
  if (downgrade === "scheduled") return { tone: "info" as const, message: "You'll switch to the Basic plan at the end of your current billing period." };
  if (downgrade === "cancelled") return { tone: "success" as const, message: "Your Premium subscription will continue — the downgrade was cancelled." };
  return null;
}

export default async function AccountSettingsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const banner = resolveBanner(params);

  const supabase = await createClient();
  const user = await getAuthUser();

  const email = user?.email ?? "";
  const avatarUrl = (user?.user_metadata?.avatar_url as string | undefined) ?? null;
  const displayName = (user?.user_metadata?.full_name as string | undefined) || email.split("@")[0];
  const initial = displayName.charAt(0).toUpperCase();

  const [{ data: usageRows }, { data: creditPackages }] = await Promise.all([
    supabase.rpc("get_my_usage"),
    supabase.from("credit_packages").select("id, credits, price").order("sort_order"),
  ]);

  const usage = (usageRows as Usage[] | null)?.[0];

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Account Settings</h1>
          <p className="mt-1 text-sm text-white/50">Manage your profile, credentials, and subscription preferences.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {avatarUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={avatarUrl} alt="" className="size-9 rounded-full object-cover" />
          ) : (
            <span className="flex size-9 items-center justify-center rounded-full bg-gradient-to-r from-[#4c6fff] to-[#8b5fe8] text-sm font-bold text-white">
              {initial}
            </span>
          )}
          <span className="text-sm font-semibold text-white">{displayName}</span>
          {usage?.is_unlimited ? (
            <span className="flex items-center gap-1.5 rounded-full border border-[#4c6fff]/40 bg-gradient-to-r from-[#4c6fff]/15 to-[#8b5fe8]/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[#a5b4ff]">
              <span aria-hidden className="text-xs leading-none">∞</span>
              Unlimited Scans
            </span>
          ) : (
            <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white/70">
              <svg width="10" height="10" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M9 1 2.5 9.5h4L6 15l6.5-8.5h-4L9 1Z" fill="currentColor" />
              </svg>
              {usage?.remaining_scans ?? 0} Scans Left
            </span>
          )}
          <span className="rounded-full border border-[#a855f7]/40 bg-[#a855f7]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[#c084fc]">
            {usage?.plan_slug === "premium" ? "Pro Member" : "Free Member"}
          </span>
        </div>
      </div>

      {banner && (
        <p
          className={`rounded-xl px-4 py-3 text-sm ${
            banner.tone === "success"
              ? "bg-green-500/10 text-green-400"
              : banner.tone === "error"
                ? "bg-red-500/10 text-red-400"
                : "bg-white/5 text-white/70"
          }`}
        >
          {banner.message}
        </p>
      )}

      <AccountProfilePhoto email={email} initialAvatarUrl={avatarUrl} />
      <AccountSecurityForm email={email} />

      <AccountSubscription
        planSlug={usage?.plan_slug ?? "basic"}
        planName={usage?.plan_name ?? "Basic"}
        remainingScans={usage?.remaining_scans ?? null}
        cancelAtPeriodEnd={usage?.cancel_at_period_end ?? false}
        currentPeriodEnd={usage?.current_period_end ?? null}
        creditPackages={
          (creditPackages ?? []).map((p) => ({ id: p.id as string, credits: p.credits as number, price: Number(p.price) }))
        }
      />

      <AccountDangerZone />
    </div>
  );
}
