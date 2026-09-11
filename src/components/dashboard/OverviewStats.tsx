type Props = {
  totalScans: number;
  scansThisWeek: number;
  savedItemsCount: number;
  savedItemsBoards: number;
  planSlug: "basic" | "premium";
  planName: string;
  currentPeriodEnd: string | null;
};

function formatDate(iso: string | null) {
  if (!iso) return null;
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function OverviewStats({
  totalScans,
  scansThisWeek,
  savedItemsCount,
  savedItemsBoards,
  planSlug,
  planName,
  currentPeriodEnd,
}: Props) {
  const isPremium = planSlug === "premium";
  const periodEndLabel = formatDate(currentPeriodEnd);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <div className="flex flex-col gap-2 rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
        <span className="text-[11px] font-bold uppercase tracking-wide text-white/40">Total Scans</span>
        <span className="text-3xl font-bold text-white">{totalScans}</span>
        {scansThisWeek > 0 && (
          <span className="text-xs font-semibold text-[#c084fc]">+{scansThisWeek} this week</span>
        )}
      </div>

      <div className="flex flex-col gap-2 rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
        <span className="text-[11px] font-bold uppercase tracking-wide text-white/40">Saved Items</span>
        <span className="text-3xl font-bold text-white">{savedItemsCount}</span>
        <span className="text-xs text-white/40">Across {savedItemsBoards} boards</span>
      </div>

      <div className="flex flex-col justify-between gap-3 rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
        <span
          className={`flex h-6 w-fit items-center justify-center rounded-lg px-2.5 text-[10px] font-bold text-white ${
            isPremium ? "bg-gradient-to-r from-[#4c6fff] to-[#8b5fe8]" : "bg-white/10"
          }`}
        >
          {isPremium ? "PRO" : "FREE"}
        </span>
        <div>
          <p className="text-sm font-bold text-white">{planName} Plan</p>
          <p className="text-xs text-white/40">
            {isPremium && periodEndLabel ? `Next billing: ${periodEndLabel}` : isPremium ? "Unlimited scans" : "Upgrade for unlimited scans"}
          </p>
        </div>
      </div>
    </div>
  );
}
