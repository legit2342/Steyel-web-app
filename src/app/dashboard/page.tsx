import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Overview — Steyel",
};

export default function DashboardOverviewPage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 text-center">
      <span className="flex size-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
          <path
            d="M14 3v6M14 19v6M3 14h6M19 14h6M6.5 6.5l4.2 4.2M17.3 17.3l4.2 4.2M21.5 6.5l-4.2 4.2M10.7 17.3l-4.2 4.2"
            stroke="#a855f7"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-white sm:text-3xl">Overview</h1>
        <p className="max-w-sm text-sm text-white/50">
          This page is currently in development. Check back soon — your style stats and activity will
          live here.
        </p>
      </div>
    </div>
  );
}
