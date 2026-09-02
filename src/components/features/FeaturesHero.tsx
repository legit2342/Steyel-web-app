import Image from "next/image";
import Header from "@/components/layout/Header";
import Reveal from "@/components/home/Reveal";

const FLOATING_ITEMS = [
  {
    image: "/images/features/hero/coat-card.png",
    was: "$1,200.00",
    now: "$185.00",
    className: "-left-16 -top-4 w-44",
  },
  {
    image: "/images/features/hero/necklace-card.png",
    was: "$450.00",
    now: "$48.00",
    className: "-right-12 top-10 w-44",
  },
  {
    image: "/images/features/hero/sneaker-card.png",
    was: "$890.00",
    now: "$115.00",
    className: "-left-14 bottom-16 w-44",
  },
];

export default function FeaturesHero() {
  return (
    <section className="relative overflow-hidden bg-[#08060d]">
      <Header />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-6 lg:grid-cols-2 lg:pb-32 lg:pt-16">
        <Reveal className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
            <span className="size-2 shrink-0 rounded-full bg-[#9333ea]" />
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white/60">
              New AI Model 4.0 Live
            </span>
          </div>

          <h1 className="mt-6 text-6xl font-bold leading-[0.95] tracking-tight text-white sm:text-7xl">
            <span className="block">Redefine Your</span>
            <span className="block">
              <span className="bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#9333ea] bg-clip-text text-transparent">
                Wardrobe
              </span>{" "}
              with AI.
            </span>
          </h1>
        </Reveal>

        <Reveal
          delay={150}
          className="relative mx-auto hidden aspect-[576/650] w-full max-w-[576px] lg:block"
        >
          <div className="absolute inset-0 rounded-full bg-[#9333ea]/20 blur-[60px]" />

          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <Image
              src="/images/features/hero/line-top.svg"
              alt=""
              width={95}
              height={60}
              className="absolute left-[10%] top-[6%] w-24 opacity-70"
            />
            <Image
              src="/images/features/hero/line-left.svg"
              alt=""
              width={105}
              height={60}
              className="absolute -left-4 bottom-[28%] w-28 opacity-70"
            />
            <Image
              src="/images/features/hero/line-right.svg"
              alt=""
              width={95}
              height={50}
              className="absolute right-[8%] top-[22%] w-24 opacity-70"
            />
          </div>

          <div className="relative mx-auto flex h-full max-w-[280px] items-center justify-center">
            <div className="relative h-[560px] w-[280px] overflow-hidden rounded-[48px] border-8 border-[#262b35] bg-gradient-to-b from-[#1e293b] to-[#0f172a] shadow-2xl">
              <Image
                src="/images/features/hero/phone-screen.png"
                alt="Steyel AI scanning an outfit"
                fill
                className="object-cover opacity-90"
              />
              <div className="absolute inset-x-0 bottom-1/2 top-1/2 bg-gradient-to-t from-black to-transparent" />

              <div className="absolute inset-x-4 bottom-8 flex flex-col items-center gap-4">
                <div className="flex w-full flex-col items-center gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#60a5fa]">
                    Scanning...
                  </span>
                  <div className="h-1 w-full overflow-hidden rounded-full bg-gray-600/50">
                    <div className="h-full w-[65%] rounded-full bg-[#3b82f6]" />
                  </div>
                </div>
                <div className="w-full rounded-xl bg-[#2563eb] py-3 text-center text-xs font-bold text-white shadow-lg">
                  Original Inspiration
                </div>
              </div>
            </div>

            {FLOATING_ITEMS.map((item) => (
              <div
                key={item.image}
                className={`animate-float absolute flex flex-col items-start gap-3 rounded-2xl border border-gray-700/50 bg-[#1a1d26]/90 p-3 backdrop-blur-md ${item.className}`}
              >
                <div className="relative h-32 w-full overflow-hidden rounded-xl bg-[#1f2937]">
                  <Image src={item.image} alt="" fill className="object-cover" />
                </div>
                <div className="flex w-full items-end justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-500 line-through">{item.was}</span>
                    <span className="text-sm font-bold text-white">{item.now}</span>
                  </div>
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#3b82f6]">
                    <Image src="/images/features/hero/plus-icon.svg" alt="" width={10} height={10} />
                  </span>
                </div>
              </div>
            ))}

            <div className="absolute -right-16 bottom-4 flex w-[170px] flex-col items-start gap-1 rounded-3xl border border-white/20 bg-gradient-to-br from-[#22c55e] to-[#059669] p-5 shadow-xl">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/80">
                Total Savings
              </span>
              <span className="text-[25px] font-black leading-tight text-white">$2,192.00</span>
              <span className="mt-1 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1">
                <Image src="/images/features/hero/savings-icon.svg" alt="" width={10} height={10} />
                <span className="text-[10px] font-bold text-white">91% SAVED</span>
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
