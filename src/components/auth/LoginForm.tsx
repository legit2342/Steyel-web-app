"use client";

import Link from "next/link";
import { useState } from "react";
import { login } from "@/app/auth/actions";
import ResetPasswordModal from "./ResetPasswordModal";

export default function LoginForm({
  error,
  resetSent,
  resetError,
}: {
  error?: string;
  resetSent?: boolean;
  resetError?: string;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [resetOpen, setResetOpen] = useState(Boolean(resetSent || resetError));

  return (
    <>
      <h1 className="text-center text-2xl font-bold text-white sm:text-3xl">Welcome Back</h1>

      {error && (
        <p className="mt-4 rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-400">{error}</p>
      )}

      <form action={login} className="mt-8 flex flex-col gap-5">
        <label className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-white/50">Email Address</span>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="couture@steyel.com"
            className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-[#a855f7]/50"
          />
        </label>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wide text-white/50">Password</span>
            <button
              type="button"
              onClick={() => setResetOpen(true)}
              className="text-xs font-semibold uppercase tracking-wide text-[#8b93ff] transition-colors hover:text-[#a855f7]"
            >
              Reset Password
            </button>
          </div>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              required
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 pr-14 text-sm text-white outline-none transition-colors focus:border-[#a855f7]/50"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold uppercase tracking-wide text-white/40 transition-colors hover:text-white"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="mt-2 rounded-full bg-gradient-to-r from-[#4c6fff] to-[#8b5fe8] py-3 text-sm font-bold uppercase tracking-wide text-white shadow-[0_8px_20px_-6px_rgba(76,111,255,0.5)] transition-all duration-300 hover:scale-[1.02]"
        >
          Login
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-white/50">
        New to the house?{" "}
        <Link href="/signup" className="font-semibold text-white transition-colors hover:text-[#a855f7]">
          Create an Account
        </Link>
      </p>

      <ResetPasswordModal
        open={resetOpen}
        onClose={() => setResetOpen(false)}
        sent={Boolean(resetSent)}
        error={resetError}
      />
    </>
  );
}
