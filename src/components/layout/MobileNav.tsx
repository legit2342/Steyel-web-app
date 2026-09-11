"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type NavLink = { label: string; href: string };

export default function MobileNav({
  navLinks,
  isLoggedIn,
}: {
  navLinks: NavLink[];
  isLoggedIn: boolean;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-white/30 hover:bg-white/[0.06] md:hidden"
      >
        {open ? (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
            <path d="M2 2l14 14M16 2 2 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
            <path d="M2 4.5h14M2 9h14M2 13.5h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full z-50 mt-3 flex flex-col gap-1 rounded-2xl border border-white/10 bg-[#0b0a0f] p-3 shadow-2xl shadow-black/50 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-[#a29fb0] transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <div className="my-1.5 h-px bg-white/10" />
          {!isLoggedIn && (
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-[#a29fb0] transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              Log In
            </Link>
          )}
          <a
            href="/download"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-full bg-gradient-to-r from-[#4c6fff] to-[#8b5fe8] px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Download App
          </a>
        </div>
      )}
    </>
  );
}
