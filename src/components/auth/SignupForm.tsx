"use client";

import Link from "next/link";
import { useState } from "react";
import { signup } from "@/app/auth/actions";

export default function SignupForm({ error }: { error?: string }) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const mismatch = confirmPassword.length > 0 && password !== confirmPassword;

  return (
    <>
      <h1 className="text-center text-2xl font-bold text-white sm:text-3xl">Create Your Account</h1>

      {error && (
        <p className="mt-4 rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-400">{error}</p>
      )}

      <form
        action={signup}
        className="mt-8 flex flex-col gap-5"
        onSubmit={(e) => {
          if (mismatch) e.preventDefault();
        }}
      >
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

        <label className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wide text-white/50">Password</span>
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="text-xs font-semibold uppercase tracking-wide text-white/40 transition-colors hover:text-white"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
            minLength={6}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#a855f7]/50"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-white/50">Confirm Password</span>
          <input
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
            minLength={6}
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#a855f7]/50"
          />
          {mismatch && <span className="text-xs text-red-400">Passwords do not match.</span>}
        </label>

        <button
          type="submit"
          className="mt-2 rounded-full bg-gradient-to-r from-[#4c6fff] to-[#8b5fe8] py-3 text-sm font-bold uppercase tracking-wide text-white shadow-[0_8px_20px_-6px_rgba(76,111,255,0.5)] transition-all duration-300 hover:scale-[1.02]"
        >
          Create Account
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-white/50">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-white transition-colors hover:text-[#a855f7]">
          Log In
        </Link>
      </p>
    </>
  );
}
