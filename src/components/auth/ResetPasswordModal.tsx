"use client";

import { resetPassword } from "@/app/auth/actions";

export default function ResetPasswordModal({
  open,
  onClose,
  sent,
  error,
}: {
  open: boolean;
  onClose: () => void;
  sent: boolean;
  error?: string;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#131313] p-8 text-center shadow-2xl sm:p-10">
        <h2 className="text-2xl font-bold text-white">Reset Password</h2>
        <p className="mt-3 text-sm text-white/50">
          Enter your email address and we&apos;ll send you a link to reset your password.
        </p>

        {error && (
          <p className="mt-4 rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-400">{error}</p>
        )}

        {sent ? (
          <p className="mt-6 rounded-lg bg-green-500/10 px-3 py-3 text-sm text-green-400">
            Check your email for a link to reset your password.
          </p>
        ) : (
          <form action={resetPassword} className="mt-6 flex flex-col gap-2 text-left">
            <label htmlFor="reset-email" className="text-xs font-semibold uppercase tracking-wide text-white/50">
              Email Address
            </label>
            <input
              id="reset-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="couture@steyel.com"
              className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-[#a855f7]/50"
            />
            <button
              type="submit"
              className="mt-6 rounded-full bg-gradient-to-r from-[#4c6fff] to-[#8b5fe8] py-3 text-sm font-bold uppercase tracking-wide text-white shadow-[0_8px_20px_-6px_rgba(76,111,255,0.5)] transition-all duration-300 hover:scale-[1.02]"
            >
              Send Reset Link
            </button>
          </form>
        )}

        <button
          type="button"
          onClick={onClose}
          className="mt-6 text-sm font-medium text-white/50 transition-colors hover:text-white"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}
