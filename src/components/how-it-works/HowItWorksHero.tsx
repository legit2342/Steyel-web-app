import Image from "next/image";
import Header from "@/components/layout/Header";
import Reveal from "@/components/home/Reveal";

export default function HowItWorksHero() {
  return (
    <section
      className="relative overflow-hidden bg-[#020617]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 0% 0%, rgba(16,15,21,1) 0%, transparent 50%), radial-gradient(circle at 50% 0%, rgba(47,62,106,0.6) 0%, transparent 50%), radial-gradient(circle at 100% 0%, rgba(114,39,65,0.6) 0%, transparent 50%)",
      }}
    >
      <div className="animate-pulse-glow pointer-events-none absolute -right-48 -top-48 size-[800px] rounded-full bg-[#9333ea]/10 blur-[60px]" />

      <Header />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-6 lg:grid-cols-2 lg:pb-32 lg:pt-16">
        <Reveal>
          <div className="inline-flex items-center rounded-full border border-[#a855f7]/30 bg-[#a855f7]/10 px-4 py-1">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c084fc]">
              Simple. Smart. Stylish.
            </span>
          </div>

          <h1 className="mt-6 text-[64px] font-extrabold leading-[0.95] tracking-tight text-white sm:text-[80px] lg:text-[100px]">
            <span className="block">HOW</span>
            <span className="block bg-gradient-to-br from-white via-[#a855f7] to-[#3b82f6] bg-clip-text text-transparent">
              IT
            </span>
            <span className="block">
              WORKS
              <span className="text-[#8663f6]">.</span>
            </span>
          </h1>

          <p className="mt-8 max-w-md text-lg leading-relaxed text-[#94a3b8]">
            Our app turns your favorite fashion looks into shoppable finds. Simply upload a
            photo, and our AI identifies every item and helps you discover where to buy it, all
            in one place.
          </p>
        </Reveal>

        <Reveal delay={150} className="relative mx-auto hidden aspect-[592/650] w-full max-w-[520px] lg:block">
          <div className="absolute -left-8 top-4 h-[420px] w-[240px] overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] opacity-80 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-md">
            <Image src="/images/how-it-works/hero/man-suit.png" alt="" fill className="object-cover" style={{ filter: "saturate(1.3)" }} />
            <div className="absolute inset-x-4 bottom-4 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-md">
              <Image src="/images/how-it-works/hero/icon-pin.svg" alt="" width={12} height={12} />
              <span className="text-xs font-medium text-white">Look Identified</span>
            </div>
            <span className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md">
              <Image src="/images/how-it-works/hero/icon-heart.svg" alt="" width={9} height={10} />
            </span>
          </div>

          <div className="absolute right-0 top-0 h-[420px] w-[240px] overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] opacity-60 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-md">
            <Image src="/images/how-it-works/hero/woman-yellow.png" alt="" fill className="object-cover" />
            <span className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md">
              <Image src="/images/how-it-works/hero/icon-heart2.svg" alt="" width={9} height={10} />
            </span>
          </div>

          <div className="absolute left-1/2 top-10 h-[480px] w-[280px] -translate-x-1/2 overflow-hidden rounded-[40px] border-6 border-[#1e293b] bg-[#0f172a] shadow-[0_0_0_4px_rgba(168,85,247,0.2),0_25px_50px_-12px_rgba(0,0,0,0.25)]">
            <Image src="/images/how-it-works/hero/model-purple.png" alt="AI scanning a fashion look" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent" />

            <div className="absolute left-1/4 right-[33%] top-1/4 bottom-1/2 rounded-lg border-2 border-white/50">
              <span className="absolute -left-1 -top-1 size-4 border-l-2 border-t-2 border-[#c084fc]" />
              <span className="absolute -right-1 -top-1 size-4 border-r-2 border-t-2 border-[#c084fc]" />
              <span className="absolute -bottom-1 -left-1 size-4 border-b-2 border-l-2 border-[#c084fc]" />
              <span className="absolute -bottom-1 -right-1 size-4 border-b-2 border-r-2 border-[#c084fc]" />
            </div>

            <span className="absolute right-6 top-6 flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md">
              <Image src="/images/how-it-works/hero/icon-bookmark.svg" alt="" width={16} height={14} />
            </span>

            <div className="absolute inset-x-[5%] bottom-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-white">12</span>
                <span className="text-[10px] font-medium uppercase leading-tight tracking-tight text-slate-300">
                  matching items
                  <br />
                  found
                </span>
              </div>
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#9333ea]">
                <Image src="/images/how-it-works/hero/icon-arrow.svg" alt="" width={12} height={14} />
              </span>
            </div>
          </div>

          <div className="absolute -bottom-8 -right-12 size-[200px]">
            <div className="absolute inset-0 rounded-full bg-[#a855f7]/20 blur-[32px]" />
            <Image
              src="/images/how-it-works/hero/handbag.png"
              alt="Purple designer handbag"
              width={192}
              height={192}
              className="relative size-[192px] shadow-[0_20px_50px_0_rgba(168,85,247,0.5)]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
