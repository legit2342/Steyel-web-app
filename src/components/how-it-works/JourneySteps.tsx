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
      { icon: "/images/how-it-works/journey/step2-icon-fabric.svg", color: "purple", title: "Neural Fabric Analysis", subtitle: "Identifying silk, cotton, or leather with 99% accuracy" },
      { icon: "/images/how-it-works/journey/step2-icon-brand.svg", color: "blue", title: "Brand Signature Recognition", subtitle: "Scanning for logos, buttons, and unique stitching patterns" },
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
      { icon: "/images/how-it-works/journey/step3-icon-merchant.svg", color: "blue", title: "Direct Merchant Links", subtitle: "Shop directly from over 5,000+ luxury and streetwear retailers" },
      { icon: "/images/how-it-works/journey/step3-icon-alternatives.svg", color: "purple", title: "Aesthetic Alternatives", subtitle: "Get budget-friendly options that maintain the same vibe" },
    ],
    resultsCount: 3,
    matches: [
      { image: "/images/how-it-works/journey/step3-match-1.png", barWidth: 140, fillWidth: 80, action: "cart" as const },
      { image: "/images/how-it-works/journey/step3-match-2.png", barWidth: 110, fillWidth: 60, action: "plus" as const },
      { image: "/images/how-it-works/journey/step3-match-3.png", barWidth: 160, fillWidth: 90, action: "plus" as const },
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
      { icon: "/images/how-it-works/journey/step4-icon-categories.svg", color: "blue", title: "Custom Categories", subtitle: "Sort by 'Date Night', 'Winter Essential' or 'Office Chic'" },
      { icon: "/images/how-it-works/journey/step4-icon-collaborative.svg", color: "purple", title: "Collaborative Boards", subtitle: "Share your collections with friends or professional stylists" },
    ],
    board: {
      name: "Fall Capsule '24",
      itemsLabel: "12 items curated",
      updatedLabel: "Updated 2h ago",
      tiles: [
        { image: "/images/how-it-works/journey/step4-board-1.png", tag: "Essential", tall: true },
        { image: "/images/how-it-works/journey/step4-board-2.png" },
        { image: "/images/how-it-works/journey/step4-board-3.png" },
        { image: "/images/how-it-works/journey/step4-board-4.png" },
      ],
      toast: { title: "Import Successful", subtitle: "Added to Fall Capsule '24" },
    },
    reverse: true,
  },
];

const CHIP_COLORS = {
  blue: "bg-[#007aff]",
  purple: "bg-[#8b5cf6]",
} as const;

function StepRing() {
  return (
    <div className="pointer-events-none absolute -left-2 -top-2 size-[116px]">
      <Image src="/images/how-it-works/journey/ring-outer.svg" alt="" width={116} height={116} className="size-full" />
      <Image src="/images/how-it-works/journey/ring-inner.svg" alt="" width={66} height={66} className="absolute left-[17px] top-[17px] size-[66px]" />
    </div>
  );
}

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
              <div className="relative flex items-center gap-4">
                <div className="relative flex size-[52px] shrink-0 items-center justify-center">
                  <StepRing />
                  <span className="relative text-2xl font-bold text-white">{s.step}</span>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">{s.label}</div>
                  <div className="text-sm font-medium text-white/30">{s.step} / 04</div>
                </div>
              </div>
              <h3 className="mt-6 text-3xl font-bold text-white sm:text-4xl">{s.title}</h3>
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
                      <span className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${CHIP_COLORS[chip.color as keyof typeof CHIP_COLORS]}`}>
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
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-white">Matches Found</p>
                      <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40">{s.resultsCount} Results</p>
                    </div>
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                      <Image src="/images/how-it-works/journey/step3-menu.svg" alt="" width={14} height={13} />
                    </span>
                  </div>
                  <div className="mt-4 flex flex-col gap-3">
                    {s.matches.map((match) => (
                      <div key={match.image} className="flex items-center gap-3">
                        <div className="relative size-12 shrink-0 overflow-hidden rounded-lg bg-white/5">
                          <Image src={match.image} alt="" fill className="object-cover" />
                        </div>
                        <div className="flex flex-1 flex-col gap-1.5">
                          <div className="h-1.5 rounded-full bg-white/10" style={{ width: `${match.barWidth / 2}px` }} />
                          <div className="h-1 rounded-full bg-[#3b82f6]/70" style={{ width: `${match.fillWidth / 2}px` }} />
                        </div>
                        {match.action === "cart" ? (
                          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#007aff] shadow-[0_4px_10px_rgba(0,122,255,0.4)]">
                            <Image src="/images/how-it-works/journey/step3-icon-cart.svg" alt="" width={13} height={13} />
                          </span>
                        ) : (
                          <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                            <Image src="/images/how-it-works/journey/step3-icon-plus.svg" alt="" width={10} height={10} />
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                  <button className="mt-4 w-full rounded-full bg-gradient-to-r from-[#007aff] to-[#8b5cf6] py-2.5 text-sm font-bold text-white">
                    Shop All Matches
                  </button>
                </div>
              )}

              {s.board && (
                <div className="relative mx-auto w-full max-w-[320px]">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#007aff] to-[#8b5cf6]">
                        <Image src="/images/how-it-works/journey/step4-icon-badge.svg" alt="" width={16} height={16} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-bold text-white">{s.board.name}</p>
                        <div className="flex items-center gap-1.5 text-[11px] text-white/40">
                          <span>{s.board.itemsLabel}</span>
                          <span className="size-0.5 rounded-full bg-white/40" />
                          <span>{s.board.updatedLabel}</span>
                        </div>
                      </div>
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/10">
                        <Image src="/images/how-it-works/journey/step4-icon-menu.svg" alt="" width={11} height={13} className="opacity-40" />
                      </span>
                    </div>

                    <div className="mt-5 grid grid-cols-2 grid-rows-3 gap-2.5">
                      {s.board.tiles.map((tile, i) => (
                        <div
                          key={tile.image}
                          className={`relative overflow-hidden rounded-xl bg-white/5 ${i === 0 ? "row-span-2" : "aspect-square"}`}
                        >
                          <Image src={tile.image} alt="" fill className="object-cover" />
                          {tile.tag && (
                            <span className="absolute bottom-2 left-2 rounded bg-white/20 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                              {tile.tag}
                            </span>
                          )}
                        </div>
                      ))}
                      <div className="flex aspect-square items-center justify-center rounded-xl border-2 border-dashed border-white/10">
                        <span className="flex size-8 items-center justify-center rounded-full bg-white/5">
                          <Image src="/images/how-it-works/journey/step4-icon-plus.svg" alt="" width={12} height={12} />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -right-4 top-1/3 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/80 p-3 shadow-2xl backdrop-blur-md">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#22c55e]/20">
                      <Image src="/images/how-it-works/journey/step4-icon-check.svg" alt="" width={12} height={13} />
                    </span>
                    <div>
                      <p className="text-xs font-bold text-white">{s.board.toast.title}</p>
                      <p className="text-[10px] text-white/40">{s.board.toast.subtitle}</p>
                    </div>
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
