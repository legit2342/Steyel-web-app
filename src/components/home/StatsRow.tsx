import Image from "next/image";
import Reveal from "./Reveal";

export default function StatsRow() {
  return (
    <section className="bg-[#0b0a0f] py-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-10 px-6 sm:flex-row sm:gap-16">
        <Reveal className="flex flex-col items-center gap-2 transition-transform duration-300 hover:-translate-y-1">
          <div className="flex items-center gap-1">
            {Array.from({ length: 4 }).map((_, i) => (
              <Image key={i} src="/images/home/stats/star_full.svg" alt="" width={27} height={24} />
            ))}
            <Image src="/images/home/stats/star_half.svg" alt="" width={30} height={24} />
          </div>
          <p className="text-3xl font-bold tracking-tight text-white">4.8 Rating</p>
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[#a29fb0]">
            App Store Average
          </p>
        </Reveal>

        <div className="hidden h-16 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent sm:block" />

        <Reveal
          delay={120}
          className="flex flex-col items-center gap-2 transition-transform duration-300 hover:-translate-y-1"
        >
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full bg-[#a855f7]/20">
              <Image src="/images/home/stats/check_badge.svg" alt="" width={14} height={16} />
            </span>
            <p className="text-[26px] font-bold tracking-tight text-white">1000+</p>
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[#a29fb0]">
            Outfits Identified &amp; Verified
          </p>
        </Reveal>
      </div>
    </section>
  );
}
