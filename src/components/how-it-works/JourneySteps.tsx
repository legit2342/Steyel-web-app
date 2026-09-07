import Image from "next/image";
import Reveal from "@/components/home/Reveal";

const STEPS = [
  {
    step: "01",
    label: "Step One",
    title: "Upload your pic",
    description:
      "Start by uploading a picture containing the fashion item you're interested in. Use our elegant interface to select your muse.",
    cta: "Upload Image",
    image: "/images/how-it-works/journey/step1-photo.png",
    reverse: false,
  },
  {
    step: "02",
    label: "Step Two",
    title: "Launch the detector",
    description:
      "Our proprietary AI analyzes the image to identify every layer of the outfit, from designer tags to unique fabric patterns.",
    chips: [
      { icon: "/images/how-it-works/journey/step2-icon-fabric.svg", title: "Neural Fabric Analysis", subtitle: "Identifying silk, cotton, or wool with 99% accuracy" },
      { icon: "/images/how-it-works/journey/step2-icon-brand.svg", title: "Brand Signature Recognition", subtitle: "Scanning for logos, buttons, and unique stitching" },
    ],
    image: "/images/how-it-works/journey/step2-photo.png",
    reverse: true,
  },
  {
    step: "03",
    label: "Step Three",
    title: "Get the goods",
    description:
      "Receive instant shopping links to exact matches or curated alternatives that perfectly capture the aesthetic of the original look.",
    chips: [
      { icon: "/images/how-it-works/journey/step3-icon-merchant.svg", title: "Direct Merchant Links", subtitle: "Shop directly from over 5,000+ luxury and streetwear retailers" },
      { icon: "/images/how-it-works/journey/step3-icon-alternatives.svg", title: "Aesthetic Alternatives", subtitle: "Get budget-friendly options that match the look" },
    ],
    matches: [
      "/images/how-it-works/journey/step3-match-1.png",
      "/images/how-it-works/journey/step3-match-2.png",
      "/images/how-it-works/journey/step3-match-3.png",
    ],
    reverse: false,
  },
  {
    step: "04",
    label: "Step Four",
    title: "Import to Steyel Board",
    description:
      "Organize your finds into curated boards. Categorize by season, occasion, or celebrity to build your ultimate digital dream closet.",
    chips: [
      { icon: "/images/how-it-works/journey/step4-icon-categories.svg", title: "Custom Categories", subtitle: "Sort by Date Night, Winter Essentials or Office Chic" },
      { icon: "/images/how-it-works/journey/step4-icon-collaborative.svg", title: "Collaborative Boards", subtitle: "Share your collections with friends or professional stylists" },
    ],
    board: [
      "/images/how-it-works/journey/step4-board-1.png",
      "/images/how-it-works/journey/step4-board-2.png",
      "/images/how-it-works/journey/step4-board-3.png",
    ],
    reverse: true,
  },
];

export default function JourneySteps() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a12] px-6 py-24 lg:py-32">
      <div className="animate-pulse-glow pointer-events-none absolute left-1/3 top-1/3 size-[600px] -translate-x-1/2 rounded-full bg-[#9333ea]/10 blur-[100px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-24 lg:gap-32">
        {STEPS.map((s) => (
          <Reveal
            key={s.step}
            className={`flex flex-col items-center gap-10 lg:gap-16 ${s.reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#a855f7]">
                <span>{s.step}</span>
                <span className="text-white/30">·</span>
                <span>{s.label}</span>
              </div>
              <h3 className="mt-4 text-3xl font-bold text-white sm:text-4xl">{s.title}</h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-[#94a3b8]">{s.description}</p>

              {s.cta && (
                <button className="mt-6 rounded-full bg-gradient-to-r from-[#4c6fff] to-[#8b5fe8] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_-6px_rgba(76,111,255,0.5)] transition-transform duration-300 hover:scale-105">
                  {s.cta}
                </button>
              )}

              {s.chips && (
                <div className="mt-6 flex flex-col gap-3">
                  {s.chips.map((chip) => (
                    <div key={chip.title} className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#9333ea]/15">
                        <Image src={chip.icon} alt="" width={16} height={16} />
                      </span>
                      <div>
                        <p className="text-sm font-bold text-white">{chip.title}</p>
                        <p className="mt-0.5 text-xs text-white/50">{chip.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="relative flex-1">
              {s.image && (
                <div className="relative mx-auto aspect-[280/480] w-full max-w-[280px] overflow-hidden rounded-[32px] border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]">
                  <Image src={s.image} alt={s.title} fill className="object-cover" />
                </div>
              )}

              {s.matches && (
                <div className="mx-auto w-full max-w-[320px] rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md">
                  <p className="text-sm font-bold text-white">Matches Found</p>
                  <div className="mt-4 flex flex-col gap-3">
                    {s.matches.map((img) => (
                      <div key={img} className="flex items-center gap-3">
                        <div className="relative size-12 shrink-0 overflow-hidden rounded-lg bg-white/5">
                          <Image src={img} alt="" fill className="object-cover" />
                        </div>
                        <div className="h-1.5 flex-1 rounded-full bg-white/10">
                          <div className="h-full w-2/3 rounded-full bg-[#3b82f6]" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="mt-4 w-full rounded-full bg-[#3b82f6] py-2.5 text-sm font-bold text-white">
                    Shop All Matches
                  </button>
                </div>
              )}

              {s.board && (
                <div className="relative mx-auto w-full max-w-[320px] rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md">
                  <p className="text-sm font-bold text-white">Fall Capsule &lsquo;24</p>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {s.board.map((img) => (
                      <div key={img} className="relative aspect-square overflow-hidden rounded-xl bg-white/5">
                        <Image src={img} alt="" fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#22c55e]/20 px-3 py-1.5">
                    <span className="size-1.5 rounded-full bg-[#22c55e]" />
                    <span className="text-[11px] font-bold text-[#4ade80]">Import Successful</span>
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
