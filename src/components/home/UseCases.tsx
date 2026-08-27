"use client";

import Image from "next/image";
import { useState } from "react";

const DOTS = 3;

export default function UseCases() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#0b0a0f] px-6 py-24">
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="h-[560px] w-[1000px] bg-[radial-gradient(ellipse_at_center,rgba(58,0,192,0.15),transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-6 h-16 w-px bg-gradient-to-b from-[#3a00c0] to-transparent" />
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/60">
          Users have used Steyel
        </p>
        <h2 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
          For Various{" "}
          <span className="bg-gradient-to-r from-white to-[#a855f7] bg-clip-text text-transparent">
            Use Cases
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg font-light text-white/60">
          And there&apos;s one for you too. Whether it&apos;s your own outfit or a look you found
          online, you&apos;ll get close, budget-friendly alternatives that match the style and
          vibe in just a couple seconds.
        </p>

        <div className="mt-12 flex flex-col items-center gap-8">
          <a
            href="#how-it-works"
            className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#9333ea] to-[#2563eb] px-8 py-5 text-lg font-medium text-white shadow-[0_10px_20px_rgba(37,99,235,0.4)] transition-transform hover:scale-105"
          >
            Read More
            <Image src="/images/home/usecases/arrow.svg" alt="" width={14} height={14} />
          </a>

          <div className="flex items-center gap-6 opacity-60">
            {Array.from({ length: DOTS }).map((_, i) => (
              <button
                key={i}
                aria-label={`Show use case ${i + 1}`}
                onClick={() => setActive(i)}
                className={`size-1.5 rounded-full transition-colors ${
                  active === i ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
