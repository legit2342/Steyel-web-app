"use client";

import { useActionState, useState } from "react";
import { deleteAccount, type DeleteAccountState } from "@/app/dashboard/actions";

const initialState: DeleteAccountState = { status: "idle" };

export default function AccountDangerZone() {
  const [confirming, setConfirming] = useState(false);
  const [state, formAction, pending] = useActionState(deleteAccount, initialState);

  return (
    <div className="flex flex-col overflow-hidden rounded-[28px] border border-red-500/20 bg-red-500/[0.03] p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-white">Danger Zone</h3>
          <p className="mt-1 text-sm text-white/50">
            Permanently delete your account and all your style boards.
          </p>
        </div>
        {!confirming ? (
          <button
            type="button"
            onClick={() => setConfirming(true)}
            className="shrink-0 rounded-full border border-red-500/40 px-5 py-2.5 text-sm font-semibold text-red-400 transition-colors hover:bg-red-500/10"
          >
            Delete Account
          </button>
        ) : (
          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={() => setConfirming(false)}
              className="rounded-full border border-white/15 px-4 py-2.5 text-sm font-semibold text-white/70 transition-colors hover:text-white"
            >
              Cancel
            </button>
            <form action={formAction}>
              <button
                type="submit"
                disabled={pending}
                className="rounded-full bg-red-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {pending ? "Deleting…" : "Confirm Delete"}
              </button>
            </form>
          </div>
        )}
      </div>
      {state.status === "error" && (
        <p className="mt-4 rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-400">{state.message}</p>
      )}
    </div>
  );
}
