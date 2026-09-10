"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { updatePassword, type CredentialsState } from "@/app/dashboard/actions";

const initialState: CredentialsState = { status: "idle" };

export default function AccountSecurityForm({ email }: { email: string }) {
  const [state, formAction, pending] = useActionState(updatePassword, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <div className="flex flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
      <div className="flex items-center gap-2.5">
        <span className="flex size-7 items-center justify-center rounded-lg bg-white/10">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M3 8.5 6.5 12 13 4.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="text-lg font-bold text-white">Security &amp; Login</h3>
      </div>

      <form ref={formRef} action={formAction} className="mt-6 flex flex-col gap-5">
        <label className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-white/40">Email Address</span>
          <input
            type="email"
            value={email}
            disabled
            className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white/50"
          />
        </label>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <label className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wide text-white/40">New Password</span>
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="text-xs font-semibold uppercase tracking-wide text-white/40 transition-colors hover:text-white"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              minLength={6}
              required
              className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#a855f7]/50"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-white/40">Confirm New Password</span>
            <input
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              minLength={6}
              required
              className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#a855f7]/50"
            />
          </label>
        </div>

        {state.status !== "idle" && (
          <p
            className={`rounded-lg px-3 py-2 text-sm ${
              state.status === "success" ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"
            }`}
          >
            {state.message}
          </p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-[#4c6fff] to-[#8b5fe8] px-6 py-3 text-sm font-bold text-white shadow-[0_8px_20px_-6px_rgba(76,111,255,0.5)] transition-all duration-300 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
        >
          {pending ? "Updating…" : "Update Credentials"}
          {!pending && <span aria-hidden>→</span>}
        </button>
      </form>
    </div>
  );
}
