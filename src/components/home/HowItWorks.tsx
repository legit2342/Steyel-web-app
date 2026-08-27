import Image from "next/image";
import Reveal from "./Reveal";

const STEPS = [
  {
    number: "01",
    title: "Upload",
    description: "Snap a photo or upload an existing image from your gallery.",
    image: "/images/home/howitworks/step1-upload.png",
  },
  {
    number: "02",
    title: "Detect",
    description: "Our proprietary AI identifies multiple items and styles in real-time.",
    image: "/images/home/howitworks/step2-detect.png",
  },
  {
    number: "03",
    title: "Discover",
    description: "Get exact brand details, pricing, and curated alternative options at any budget.",
    image: "/images/home/howitworks/step3-discover.png",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#0b0a0f] px-6 py-24">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          How <span className="bg-gradient-to-r from-white to-[#a855f7] bg-clip-text text-transparent">It Works</span>
        </h2>
        <p className="mt-6 text-lg text-[#9ca3af]">
          Transform your inspiration into ownership in four simple steps. Our advanced AI
          handles the complex discovery so you don&apos;t have to.
        </p>
      </Reveal>

      <div className="relative mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="pointer-events-none absolute inset-x-0 top-[270px] hidden h-px bg-gradient-to-r from-[#a855f7]/0 via-[#a855f7]/50 to-[#3b82f6]/0 lg:block" />

        {STEPS.map((step, i) => (
          <Reveal
            key={step.number}
            delay={i * 120}
            className="group relative flex flex-col items-center text-center"
          >
            <div className="relative mb-6 h-[270px] w-[130px] overflow-hidden rounded-[28px] border-4 border-[#2a2a35] bg-[#1a1a24] shadow-2xl transition-all duration-300 group-hover:-translate-y-2 group-hover:border-[#a855f7]/50 group-hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.4)]">
              <Image src={step.image} alt={`${step.title} screen`} fill className="object-cover" />
            </div>
            <span className="absolute top-[254px] flex size-9 items-center justify-center rounded-full border-2 border-[#a855f7] bg-[#0b0b0f] text-xs font-bold text-[#a855f7] drop-shadow-[0_0_7px_rgba(168,85,247,0.5)] transition-transform duration-300 group-hover:scale-110">
              {step.number}
            </span>
            <h3 className="mt-6 text-xl font-bold text-white">{step.title}</h3>
            <p className="mt-2 max-w-[220px] text-sm text-[#9ca3af]">{step.description}</p>
          </Reveal>
        ))}

        <Reveal delay={360} className="group relative flex flex-col items-center text-center">
          <div className="mb-6 flex h-[270px] w-[190px] flex-col items-center justify-center gap-4 rounded-[28px] border-4 border-[#2a2a35] bg-[#0b0b0f] p-4 shadow-2xl transition-all duration-300 group-hover:-translate-y-2 group-hover:border-[#3b82f6]/50 group-hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.4)]">
            <span
              className="flex size-14 items-center justify-center rounded-full"
              style={{ backgroundImage: "linear-gradient(144deg, rgb(168,85,247) 0%, rgb(59,130,246) 100%)" }}
            >
              <Image src="/images/home/howitworks/check_icon.svg" alt="" width={24} height={24} />
            </span>
            <div>
              <p className="text-base font-bold text-white">Item Saved!</p>
              <p className="mt-1 text-xs text-white/60">Added to your &lsquo;Winter Closet&rsquo; board.</p>
            </div>
            <div className="flex w-full flex-col gap-2">
              <button className="w-full rounded-lg bg-white py-2 text-xs font-bold text-[#0b0b0f] transition-colors hover:bg-white/90">
                Shop on Website
              </button>
              <button className="w-full rounded-lg bg-white/10 py-2 text-xs font-bold text-white transition-colors hover:bg-white/20">
                View in Board
              </button>
            </div>
          </div>
          <span className="absolute top-[254px] flex size-9 items-center justify-center rounded-full border-2 border-[#a855f7] bg-[#0b0b0f] text-xs font-bold text-[#a855f7] drop-shadow-[0_0_7px_rgba(59,130,246,0.5)] transition-transform duration-300 group-hover:scale-110">
            04
          </span>
          <h3 className="mt-6 text-xl font-bold text-white">Shop / Save</h3>
          <p className="mt-2 max-w-[220px] text-sm text-[#9ca3af]">
            Buy instantly through the app or save it to your wishlist for later.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
