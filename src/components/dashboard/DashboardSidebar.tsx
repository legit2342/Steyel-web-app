"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { logout } from "@/app/auth/actions";

const NAV_ITEMS = [
  {
    label: "Overview",
    href: "/dashboard",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
        <rect x="1.5" y="1.5" width="6.5" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <rect x="10" y="1.5" width="6.5" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <rect x="1.5" y="10" width="6.5" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <rect x="10" y="10" width="6.5" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    label: "Account",
    href: "/dashboard/account",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
        <circle cx="7.5" cy="6" r="3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M2 16c0-3 2.5-5 5.5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="14" cy="13.5" r="3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M14 12v1.5l1 .8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const LogoutIcon = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
    <path
      d="M6.5 16H4a1.5 1.5 0 0 1-1.5-1.5v-11A1.5 1.5 0 0 1 4 2h2.5M11.5 12.5l4-4-4-4M15 8.5H6.5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <>
      {NAV_ITEMS.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold shrink-0 transition-all duration-200 ${
              active
                ? "bg-gradient-to-r from-[#6d28d9] to-[#8b5fe8] text-white shadow-[0_8px_24px_-8px_rgba(139,95,232,0.6)]"
                : "text-white/50 hover:bg-white/[0.04] hover:text-white"
            }`}
          >
            {item.icon}
            {item.label}
          </Link>
        );
      })}
    </>
  );
}

export default function DashboardSidebar() {
  return (
    <>
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-white/5 bg-[#0a0812] px-4 py-8 md:flex">
        <Link href="/" className="flex items-center gap-2 px-2">
          <Image src="/images/logo.png" alt="Steyel" width={160} height={52} className="h-10 w-auto" />
        </Link>

        <nav className="mt-10 flex flex-col gap-1.5">
          <NavLinks />
        </nav>

        <form action={logout} className="mt-auto">
          <button
            type="submit"
            className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-red-400 transition-colors hover:bg-red-500/10"
          >
            {LogoutIcon}
            Logout
          </button>
        </form>
      </aside>

      <div className="flex items-center gap-2 overflow-x-auto border-b border-white/5 bg-[#0a0812] px-4 py-3 md:hidden">
        <NavLinks />
        <form action={logout} className="ml-auto shrink-0">
          <button
            type="submit"
            className="flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold text-red-400 transition-colors hover:bg-red-500/10"
          >
            {LogoutIcon}
            Logout
          </button>
        </form>
      </div>
    </>
  );
}
