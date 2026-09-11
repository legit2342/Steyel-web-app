type ScanRecord = {
  id: string;
  title: string;
  image_url: string | null;
  created_at: string;
};

function formatRelativeTime(iso: string) {
  const diffMs = Date.now() - new Date(iso).getTime();
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (days <= 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days} days ago`;
  if (days < 14) return "Last week";
  if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export default function RecentOutfitHistory({ scans }: { scans: ScanRecord[] }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
      <div className="flex items-center gap-2.5">
        <span className="flex size-7 items-center justify-center rounded-lg bg-white/10">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M3 8.5 6.5 12 13 4.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="text-lg font-bold text-white">Recent Outfit History</h3>
      </div>

      {scans.length === 0 ? (
        <div className="mt-8 flex flex-col items-center gap-2 py-8 text-center">
          <span className="flex size-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M4 7h16M4 12h16M4 17h10"
                stroke="#a855f7"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <p className="text-sm font-semibold text-white">No scans yet</p>
          <p className="max-w-xs text-xs text-white/40">
            Scan an outfit in the Steyel app and it will show up here.
          </p>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {scans.map((scan) => (
            <div key={scan.id} className="flex flex-col gap-2">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-white/5">
                {scan.image_url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={scan.image_url} alt={scan.title} className="size-full object-cover" />
                ) : (
                  <div className="flex size-full items-center justify-center text-white/20">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.4" />
                      <circle cx="9" cy="9" r="1.6" stroke="currentColor" strokeWidth="1.4" />
                      <path d="M21 15l-5-5-9 9" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                  </div>
                )}
              </div>
              <p className="truncate text-sm font-bold text-white">{scan.title}</p>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-white/40">
                {formatRelativeTime(scan.created_at)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
