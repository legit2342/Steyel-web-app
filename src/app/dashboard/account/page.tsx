import type { Metadata } from "next";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import AccountProfilePhoto from "@/components/dashboard/AccountProfilePhoto";
import AccountSecurityForm from "@/components/dashboard/AccountSecurityForm";
import AccountDangerZone from "@/components/dashboard/AccountDangerZone";

export const metadata: Metadata = {
  title: "Account Settings — Steyel",
};

export default async function AccountSettingsPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const email = user?.email ?? "";
  const avatarUrl = (user?.user_metadata?.avatar_url as string | undefined) ?? null;
  const displayName = (user?.user_metadata?.full_name as string | undefined) || email.split("@")[0];
  const initial = displayName.charAt(0).toUpperCase();

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Account Settings</h1>
          <p className="mt-1 text-sm text-white/50">Manage your profile, credentials, and subscription preferences.</p>
        </div>
        <div className="flex items-center gap-3">
          {avatarUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={avatarUrl} alt="" className="size-9 rounded-full object-cover" />
          ) : (
            <span className="flex size-9 items-center justify-center rounded-full bg-gradient-to-r from-[#4c6fff] to-[#8b5fe8] text-sm font-bold text-white">
              {initial}
            </span>
          )}
          <span className="text-sm font-semibold text-white">{displayName}</span>
          <span className="rounded-full border border-[#a855f7]/40 bg-[#a855f7]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[#c084fc]">
            Free Member
          </span>
        </div>
      </div>

      <AccountProfilePhoto email={email} initialAvatarUrl={avatarUrl} />
      <AccountSecurityForm email={email} />

      <div className="flex flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
        <div className="flex items-center gap-2.5">
          <span className="flex size-7 items-center justify-center rounded-lg bg-white/10">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M2 5.5 5 7l3-4 3 4 3-1.5-1 6.5H3l-1-6.5Z"
                stroke="white"
                strokeWidth="1.3"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <h3 className="text-lg font-bold text-white">Subscription</h3>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/20 p-5">
          <div className="flex items-center gap-4">
            <span className="flex h-10 items-center justify-center rounded-xl bg-white/10 px-4 text-sm font-bold text-white">
              FREE
            </span>
            <div>
              <p className="font-bold text-white">Free Plan</p>
              <p className="text-sm text-white/50">Limited scans and standard support.</p>
            </div>
          </div>
          <Link
            href="/pricing"
            className="rounded-full bg-gradient-to-r from-[#4c6fff] to-[#8b5fe8] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
          >
            Upgrade to Pro
          </Link>
        </div>
      </div>

      <AccountDangerZone />
    </div>
  );
}
