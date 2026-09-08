"use client";

import Image from "next/image";
import { useActionState, useEffect, useRef } from "react";
import Header from "@/components/layout/Header";
import Reveal from "@/components/home/Reveal";
import { sendContactMessage, type ContactFormState } from "@/app/contact/actions";

const initialState: ContactFormState = { status: "idle" };

const SOCIALS = [
  { name: "Instagram", icon: "/images/home/footer/instagram.svg", width: 20, height: 20 },
  { name: "TikTok", icon: "/images/home/footer/tiktok.svg", width: 20, height: 20 },
  { name: "Facebook", icon: "/images/home/footer/facebook.svg", width: 14, height: 20 },
];

export default function ContactSection() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <section
      className="relative overflow-hidden bg-[#020617] pb-24"
      style={{
        backgroundImage: "radial-gradient(circle at 50% 0%, rgba(88,28,135,0.4) 0%, transparent 55%)",
      }}
    >
      <Header />

      <div className="relative mx-auto grid max-w-6xl gap-6 px-6 pt-10 lg:grid-cols-2">
        <Reveal className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Send us a message</h2>
          <p className="mt-2 text-sm text-white/50">We&apos;ll get back to you within 24 standard earth hours.</p>

          <form ref={formRef} action={formAction} className="mt-8 flex flex-col gap-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-sm text-white/70">Full Name</span>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-[#a855f7]/50"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm text-white/70">Email Address</span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-[#a855f7]/50"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2">
              <span className="text-sm text-white/70">Message</span>
              <textarea
                name="message"
                required
                placeholder="Tell us about your project or inquiry..."
                rows={5}
                className="resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-[#a855f7]/50"
              />
            </label>

            {state.status !== "idle" && (
              <p
                className={`rounded-lg px-3 py-2 text-sm ${
                  state.status === "success" ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"
                }`}
              >
                {state.message}
              </p>
            )}

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <label className="flex items-center gap-2 text-sm text-white/60">
                <input name="agree" type="checkbox" required className="size-4 rounded border-white/20 bg-white/5 accent-[#a855f7]" />
                I agree to the privacy terms
              </label>
              <button
                type="submit"
                disabled={pending}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#4c6fff] to-[#8b5fe8] px-8 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-[0_8px_20px_-6px_rgba(76,111,255,0.5)] transition-all duration-300 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
              >
                {pending ? "Sending…" : "Submit"}
                {!pending && <span aria-hidden>↗</span>}
              </button>
            </div>
          </form>
        </Reveal>

        <Reveal delay={150} className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Let&apos;s have a chat</h2>
          <p className="mt-2 text-sm text-white/50">
            Got a question? Drop us an email or follow our social channels to get help from the
            community.
          </p>

          <div className="mt-8 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#7c3aed]">
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1h16v12H1V1Zm0 0 8 7 8-7"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-white/50">Mail Us</p>
              <p className="text-base font-bold text-white">support@steyel.com</p>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-wide text-white/50">Follow our journey</p>
            <div className="mt-4 flex items-center gap-4">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href="#"
                  aria-label={s.name}
                  className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]"
                >
                  <Image src={s.icon} alt="" width={s.width} height={s.height} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
