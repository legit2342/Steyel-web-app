import type { Metadata } from "next";
import { createClient, getAuthUser } from "@/lib/supabase/server";
import OverviewStats from "@/components/dashboard/OverviewStats";
import RecentOutfitHistory from "@/components/dashboard/RecentOutfitHistory";

export const metadata: Metadata = {
  title: "Overview — Steyel",
};

type Usage = {
  remaining_scans: number | null;
  is_unlimited: boolean;
  plan_slug: "basic" | "premium";
  plan_name: string;
  cancel_at_period_end: boolean;
  current_period_end: string | null;
  total_scans: number;
};

const SAVED_ITEMS_COUNT = 42;
const SAVED_ITEMS_BOARDS = 3;

export default async function DashboardOverviewPage() {
  const supabase = await createClient();
  const user = await getAuthUser();

  const email = user?.email ?? "";
  const avatarUrl = (user?.user_metadata?.avatar_url as string | undefined) ?? null;
  const displayName = (user?.user_metadata?.full_name as string | undefined) || email.split("@")[0];
  const firstName = displayName.split(/[\s._-]/)[0];
  const initial = displayName.charAt(0).toUpperCase();

  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const [{ data: usageRows }, { count: weekCount }, { data: recentScans }] = await Promise.all([
    supabase.rpc("get_my_usage"),
    supabase.from("scan_history").select("id", { count: "exact", head: true }).gte("created_at", sevenDaysAgo.toISOString()),
    supabase
      .from("scan_history")
      .select("id, title, image_url, created_at")
      .order("created_at", { ascending: false })
      .limit(4),
  ]);

  const usage = (usageRows as Usage[] | null)?.[0];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Welcome back, {firstName}!</h1>
          <p className="mt-1 text-sm text-white/50">Your personal style assistant is ready for a new look today.</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full border border-[#a855f7]/40 bg-[#a855f7]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[#c084fc]">
            {usage?.plan_slug === "premium" ? "Pro Member" : "Free Member"}
          </span>
          {avatarUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={avatarUrl} alt="" className="size-9 rounded-full object-cover" />
          ) : (
            <span className="flex size-9 items-center justify-center rounded-full bg-gradient-to-r from-[#4c6fff] to-[#8b5fe8] text-sm font-bold text-white">
              {initial}
            </span>
          )}
          <span className="text-sm font-semibold text-white">{displayName}</span>
        </div>
      </div>

      <OverviewStats
        totalScans={usage?.total_scans ?? 0}
        scansThisWeek={weekCount ?? 0}
        savedItemsCount={SAVED_ITEMS_COUNT}
        savedItemsBoards={SAVED_ITEMS_BOARDS}
        planSlug={usage?.plan_slug ?? "basic"}
        planName={usage?.plan_name ?? "Basic"}
        currentPeriodEnd={usage?.current_period_end ?? null}
      />

      <RecentOutfitHistory scans={recentScans ?? []} />
    </div>
  );
}
