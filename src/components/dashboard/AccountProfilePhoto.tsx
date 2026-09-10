"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const MAX_BYTES = 10 * 1024 * 1024;

export default function AccountProfilePhoto({
  email,
  initialAvatarUrl,
}: {
  email: string;
  initialAvatarUrl?: string | null;
}) {
  const [avatarUrl, setAvatarUrl] = useState(initialAvatarUrl ?? null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const initial = email.charAt(0).toUpperCase();

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;

    if (!["image/jpeg", "image/png"].includes(file.type)) {
      setError("Please upload a JPG or PNG image.");
      return;
    }
    if (file.size > MAX_BYTES) {
      setError("Image must be 10MB or smaller.");
      return;
    }

    setBusy(true);
    setError(null);

    try {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) throw new Error("You must be signed in to upload a photo.");

      const ext = file.name.split(".").pop() ?? "jpg";
      const path = `${user.id}/avatar.${ext}`;

      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(path, file, { upsert: true, cacheControl: "3600" });
      if (uploadError) throw uploadError;

      const { data: publicUrlData } = supabase.storage.from("avatars").getPublicUrl(path);
      const url = `${publicUrlData.publicUrl}?t=${Date.now()}`;

      const { error: updateError } = await supabase.auth.updateUser({ data: { avatar_url: url } });
      if (updateError) throw updateError;

      setAvatarUrl(url);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Couldn't upload your photo. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  async function handleRemove() {
    setBusy(true);
    setError(null);
    try {
      const supabase = createClient();
      const { error: updateError } = await supabase.auth.updateUser({ data: { avatar_url: null } });
      if (updateError) throw updateError;
      setAvatarUrl(null);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Couldn't remove your photo. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
      <h3 className="text-lg font-bold text-white">Profile Photo</h3>
      <div className="mt-5 flex flex-wrap items-center gap-6">
        <div className="relative shrink-0">
          {avatarUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={avatarUrl}
              alt=""
              className="size-20 rounded-full border-2 border-[#8b5fe8]/40 object-cover"
            />
          ) : (
            <div className="flex size-20 items-center justify-center rounded-full border-2 border-[#8b5fe8]/40 bg-gradient-to-r from-[#4c6fff] to-[#8b5fe8] text-2xl font-bold text-white">
              {initial}
            </div>
          )}
          <span className="absolute bottom-0 right-0 flex size-7 items-center justify-center rounded-full bg-[#a855f7] ring-4 ring-[#0e0c17]">
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M2 5.5A1.5 1.5 0 0 1 3.5 4h1.6l.7-1.2c.2-.3.5-.5.9-.5h2.6c.4 0 .7.2.9.5l.7 1.2h1.6A1.5 1.5 0 0 1 14 5.5v6A1.5 1.5 0 0 1 12.5 13h-9A1.5 1.5 0 0 1 2 11.5v-6Z"
                stroke="white"
                strokeWidth="1.3"
              />
              <circle cx="8" cy="8.3" r="2.3" stroke="white" strokeWidth="1.3" />
            </svg>
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              disabled={busy}
              onClick={() => inputRef.current?.click()}
              className="rounded-full bg-gradient-to-r from-[#4c6fff] to-[#8b5fe8] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
            >
              {busy ? "Uploading…" : "Upload New Image"}
            </button>
            {avatarUrl && (
              <button
                type="button"
                disabled={busy}
                onClick={handleRemove}
                className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white/80 transition-colors hover:border-white/30 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                Remove
              </button>
            )}
          </div>
          <p className="text-xs text-white/40">JPG, PNG · Max 10MB</p>
          {error && <p className="text-xs text-red-400">{error}</p>}
        </div>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}
