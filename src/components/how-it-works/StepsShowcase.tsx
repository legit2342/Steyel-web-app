import Image from "next/image";
import Reveal from "@/components/home/Reveal";

function PhoneFrame({ children, dark = true }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className="relative isolate flex flex-col items-center pb-12">
      <div
        className={`relative aspect-[260/540] w-full max-w-[220px] overflow-hidden rounded-[40px] border-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] ${dark ? "border-[#2a2a35] bg-[#1a1a24]" : "border-[#2a2a35] bg-[#0b0b0f]"}`}
      >
        <div className="absolute inset-x-2 top-2 z-10 flex items-center justify-between px-4">
          <span className="text-[10px] text-white/40">9:41</span>
          <Image src="/images/how-it-works/steps/icon-statusbar2.svg" alt="" width={11} height={6} />
        </div>
        {children}
      </div>
    </div>
  );
}

function StepBadge({ number }: { number: string }) {
  return (
    <span className="absolute bottom-0 left-1/2 z-20 flex size-12 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[#a855f7] bg-[#0b0b0f] text-xs font-bold text-[#a855f7] drop-shadow-[0_0_7.5px_rgba(168,85,247,0.5)]">
      {number}
    </span>
  );
}

const STEPS = [
  { number: "01", title: "Upload", description: "Snap a photo or upload an existing image from your gallery." },
  { number: "02", title: "Detect", description: "Our proprietary AI identifies multiple items and styles in real-time." },
  { number: "03", title: "Discover", description: "Get exact brand details, pricing, and curated alternative options." },
  { number: "04", title: "Shop / Save", description: "Buy instantly through the app or save it to your wishlist for later." },
];

export default function StepsShowcase() {
  return (
    <section className="relative bg-[#020617] px-6 pb-16 pt-24">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg, rgb(149,43,249) 0%, rgb(222,46,251) 100%)" }}
          >
            Inspired?
          </span>{" "}
          Recreate any outfit on a budget
        </h2>
      </Reveal>

      <div className="relative mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2 lg:grid-cols-4">
        <div className="pointer-events-none absolute inset-x-0 top-[calc(50%-24px)] hidden h-0.5 bg-gradient-to-r from-[#a855f7]/0 via-[#a855f7]/50 via-[#3b82f6]/50 to-[#3b82f6]/0 lg:block" />

        <Reveal className="relative">
          <PhoneFrame>
            <div className="flex size-full flex-col items-center justify-center bg-[#0b0b0f] p-6">
              <div className="flex flex-1 flex-col items-center justify-center gap-4 rounded-2xl border-2 border-white/10">
                <span className="flex size-20 items-center justify-center rounded-full bg-[#a855f7]/20">
                  <Image src="/images/how-it-works/steps/icon-upload-cloud.svg" alt="" width={38} height={26} />
                </span>
                <p className="max-w-[140px] text-center text-sm text-[#9ca3af]">
                  Tap to upload a photo of any outfit or furniture
                </p>
              </div>
            </div>
          </PhoneFrame>
          <StepBadge number="01" />
        </Reveal>

        <Reveal delay={100} className="relative">
          <PhoneFrame>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0b0b0f]">
              <div className="absolute inset-0 opacity-60">
                <Image src="/images/how-it-works/steps/upload-bg.png" alt="" fill className="object-cover" />
              </div>
              <div className="relative flex flex-col items-center justify-center gap-4">
                <div className="relative size-24 rounded-lg border-2 border-[#3b82f6]">
                  <span className="absolute -left-1.5 -top-1.5 size-3 rounded-full bg-[#3b82f6]" />
                  <span className="absolute -bottom-1.5 -right-1.5 size-3 rounded-full bg-[#3b82f6]" />
                </div>
                <span className="rounded-full bg-[#3b82f6] px-3 py-1.5 text-[10px] font-bold tracking-wide text-white">
                  SCANNING...
                </span>
              </div>
            </div>
          </PhoneFrame>
          <StepBadge number="02" />
        </Reveal>

        <Reveal delay={200} className="relative">
          <PhoneFrame>
            <div className="absolute inset-0 bg-black">
              <div className="absolute left-[13%] right-[13%] top-[8%] rounded-2xl border border-white/10">
                <p className="px-4 pt-3 text-sm font-bold text-white">Scan results:</p>
                <div className="flex flex-col gap-3 p-3">
                  <div className="relative h-[100px] w-full overflow-hidden rounded-xl">
                    <Image src="/images/how-it-works/steps/scan-result.png" alt="" fill className="object-cover" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">Cream Wool Coat</span>
                    <span className="text-base font-bold text-[#a855f7]">$189</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="flex-1 rounded bg-white/10 px-2 py-1 text-center text-[10px] text-white">
                      Quiet Luxury
                    </span>
                    <span className="flex-1 rounded bg-white/10 px-2 py-1 text-center text-[10px] text-white">
                      In Stock
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[11px] text-white/60">Similar Options:</span>
                    <div className="flex justify-between gap-2">
                      {["thumb-sweater", "thumb-blouse", "thumb-scarf"].map((img) => (
                        <div key={img} className="relative size-9 overflow-hidden rounded bg-white/5">
                          <Image src={`/images/how-it-works/steps/${img}.png`} alt="" fill className="object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PhoneFrame>
          <StepBadge number="03" />
        </Reveal>

        <Reveal delay={300} className="relative">
          <PhoneFrame>
            <div className="flex size-full flex-col items-center justify-center gap-6 bg-[#0b0b0f] p-6">
              <div className="flex flex-col items-center gap-3">
                <span
                  className="flex size-16 items-center justify-center rounded-full"
                  style={{ backgroundImage: "linear-gradient(144deg, rgb(168,85,247) 0%, rgb(59,130,246) 100%)" }}
                >
                  <Image src="/images/how-it-works/steps/icon-check-circle.svg" alt="" width={24} height={24} />
                </span>
                <p className="text-lg font-bold text-white">Item Saved!</p>
                <p className="max-w-[180px] text-center text-xs text-white/60">
                  This item has been added to your &lsquo;Winter Closet&rsquo; board.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3">
                <button className="w-full rounded-xl bg-white py-3 text-xs font-bold text-[#0b0b0f]">
                  Shop on Website
                </button>
                <button className="w-full rounded-xl bg-white/10 py-3 text-xs font-bold text-white">
                  View in Board
                </button>
              </div>
            </div>
          </PhoneFrame>
          <StepBadge number="04" />
        </Reveal>

        {STEPS.map((step) => (
          <div key={step.number} className="-mt-16 flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold text-white">{step.title}</h3>
            <p className="mt-3 max-w-[240px] text-sm text-[#9ca3af]">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
