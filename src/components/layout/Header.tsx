import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import UserMenu from "./UserMenu";

const NAV_LINKS = [
  { label: "Features", href: "/features" },
  { label: "How it Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];

export default async function Header() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
      <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
        <Image src="/images/logo.png" alt="Steyel" width={168} height={54} className="h-11 w-auto" priority />
      </Link>
      <nav className="hidden items-center gap-8 md:flex">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="group relative text-sm font-medium text-[#a29fb0] transition-colors hover:text-white"
          >
            {link.label}
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-[#4c6fff] to-[#a855f7] transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-3">
        {user?.email ? (
          <UserMenu email={user.email} />
        ) : (
          <>
            <Link
              href="/login"
              className="hidden rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:border-white/30 hover:bg-white/[0.06] sm:inline-flex"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="rounded-full bg-gradient-to-r from-[#4c6fff] to-[#8b5fe8] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_-6px_rgba(76,111,255,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_28px_-6px_rgba(139,95,232,0.7)]"
            >
              Sign Up
            </Link>
          </>
        )}
        <a
          href="/download"
          className="hidden rounded-full bg-gradient-to-r from-[#4c6fff] to-[#8b5fe8] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_-6px_rgba(76,111,255,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_28px_-6px_rgba(139,95,232,0.7)] sm:inline-block"
        >
          Download App
        </a>
      </div>
    </div>
  );
}
