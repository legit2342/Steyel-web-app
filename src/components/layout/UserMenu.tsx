"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { logout } from "@/app/auth/actions";

export default function UserMenu({ email }: { email: string }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const name = email.split("@")[0];
  const initial = name.charAt(0).toUpperCase();

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-1.5 pr-3 text-sm font-medium text-white transition-colors hover:border-white/20 hover:bg-white/[0.08]"
      >
        <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#4c6fff] to-[#8b5fe8] text-xs font-bold text-white">
          {initial}
        </span>
        <span className="hidden max-w-[10rem] truncate sm:inline">{name}</span>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          className={`shrink-0 text-white/50 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-[calc(100%+10px)] z-50 w-56 overflow-hidden rounded-2xl border border-white/10 bg-[#0e0c17] p-1.5 shadow-2xl shadow-black/50"
        >
          <div className="flex items-center gap-2 px-3 py-2.5">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#4c6fff] to-[#8b5fe8] text-sm font-bold text-white">
              {initial}
            </span>
            <span className="truncate text-sm text-white/70">{email}</span>
          </div>
          <div className="my-1 h-px bg-white/10" />
          <Link
            href="/dashboard"
            role="menuitem"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/[0.06] hover:text-white"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <rect x="1.5" y="1.5" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
              <rect x="8.5" y="1.5" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
              <rect x="1.5" y="8.5" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
              <rect x="8.5" y="8.5" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
            </svg>
            Dashboard
          </Link>
          <form action={logout}>
            <button
              type="submit"
              role="menuitem"
              className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-red-400 transition-colors hover:bg-red-500/10"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path
                  d="M6 14H3.5A1.5 1.5 0 0 1 2 12.5v-9A1.5 1.5 0 0 1 3.5 2H6M10.5 11l3-3-3-3M13.25 8H6"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Log Out
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
