import { startPremiumCheckout, startCreditsCheckout, downgradeToBasic, resumePremium } from "@/app/dashboard/billing-actions";

type CreditPackage = { id: string; credits: number; price: number };

type Props = {
  planSlug: "basic" | "premium";
  planName: string;
  remainingScans: number | null;
  cancelAtPeriodEnd: boolean;
  currentPeriodEnd: string | null;
  creditPackages: CreditPackage[];
};

function formatDate(iso: string | null) {
  if (!iso) return null;
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default function AccountSubscription({
  planSlug,
  planName,
  remainingScans,
  cancelAtPeriodEnd,
  currentPeriodEnd,
  creditPackages,
}: Props) {
  const isPremium = planSlug === "premium";
  const periodEndLabel = formatDate(currentPeriodEnd);

  return (
    <div className="flex flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
      <div className="flex items-center gap-2.5">
        <span className="flex size-7 items-center justify-center rounded-lg bg-white/10">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M2 5.5 5 7l3-4 3 4 3-1.5-1 6.5H3l-1-6.5Z" stroke="white" strokeWidth="1.3" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="text-lg font-bold text-white">Subscription</h3>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/20 p-5">
        <div className="flex items-center gap-4">
          <span
            className={`flex h-10 items-center justify-center rounded-xl px-4 text-sm font-bold text-white ${
              isPremium ? "bg-gradient-to-r from-[#4c6fff] to-[#8b5fe8]" : "bg-white/10"
            }`}
          >
            {isPremium ? "PRO" : "FREE"}
          </span>
          <div>
            <p className="font-bold text-white">{planName} Plan</p>
            <p className="text-sm text-white/50">
              {isPremium
                ? "Unlimited scans, moodboards, and priority support."
                : `${remainingScans ?? 0} of 3 scans remaining today.`}
            </p>
          </div>
        </div>

        {isPremium ? (
          cancelAtPeriodEnd ? (
            <div className="flex flex-col items-end gap-2">
              <p className="text-right text-xs text-white/50">
                {periodEndLabel ? `Switches to Basic on ${periodEndLabel}` : "Switching to Basic soon"}
              </p>
              <form action={resumePremium}>
                <button
                  type="submit"
                  className="rounded-full bg-gradient-to-r from-[#4c6fff] to-[#8b5fe8] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
                >
                  Resume Premium
                </button>
              </form>
            </div>
          ) : (
            <form action={downgradeToBasic}>
              <button
                type="submit"
                className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white/80 transition-colors hover:border-white/30 hover:text-white"
              >
                Downgrade to Basic
              </button>
            </form>
          )
        ) : (
          <form action={startPremiumCheckout}>
            <button
              type="submit"
              className="rounded-full bg-gradient-to-r from-[#4c6fff] to-[#8b5fe8] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
            >
              Upgrade to Pro
            </button>
          </form>
        )}
      </div>

      {!isPremium && creditPackages.length > 0 && (
        <div className="mt-5">
          <p className="text-sm font-semibold text-white">Out of scans? Buy more credits</p>
          <p className="mt-1 text-xs text-white/40">
            Credits top up your daily balance and never expire until used.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {creditPackages.map((pkg) => (
              <form key={pkg.id} action={startCreditsCheckout} className="flex">
                <input type="hidden" name="packageId" value={pkg.id} />
                <button
                  type="submit"
                  className="flex w-full flex-col items-center gap-1 rounded-2xl border border-white/10 bg-black/20 px-4 py-4 transition-colors hover:border-[#a855f7]/40 hover:bg-white/[0.04]"
                >
                  <span className="text-xl font-bold text-white">{pkg.credits}</span>
                  <span className="text-[11px] uppercase tracking-wide text-white/40">credits</span>
                  <span className="mt-1 text-sm font-semibold text-[#c084fc]">${pkg.price.toFixed(2)}</span>
                </button>
              </form>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
