import Image from "next/image";
import Reveal from "@/components/home/Reveal";

const POINTS = [
  {
    icon: "/images/features/curation/icon-dna.svg",
    title: "Aesthetic DNA Profiling",
    description:
      "We analyze over 5,000 data points including silhouettes, colors, and textures to build your unique style profile.",
  },
  {
    icon: "/images/features/curation/icon-inventory.svg",
    title: "Real-time Inventory Tracking",
    description: "Our AI scans millions of listings globally every minute to ensure the items you want are in stock.",
  },
  {
    icon: "/images/features/curation/icon-sustainability.svg",
    title: "Sustainability Index",
    description: "Check the environmental impact of every recommendation and find pre-loved alternatives instantly.",
  },
];

export default function CurationEngine() {
  return (
    <section className="border-y border-white/5 bg-white/5 px-6 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <Reveal className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#c084fc]">
              Engine Deep Dive
            </span>
            <span className="h-px w-12 bg-[#c084fc]" />
          </div>

          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            <span className="block">Hyper-Personalized</span>
            <span className="block text-[#9333ea]">Curation Engine</span>
          </h2>

          <div className="mt-4 flex flex-col gap-8">
            {POINTS.map((point) => (
              <div key={point.title} className="flex gap-6">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#9333ea]/10">
                  <Image src={point.icon} alt="" width={20} height={20} />
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-white">{point.title}</h3>
                  <p className="text-base leading-relaxed text-white/60">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150} className="relative aspect-[574/634] w-full overflow-hidden rounded-[64px]">
          <Image src="/images/features/curation/curation-image.png" alt="" fill className="object-cover" />
        </Reveal>
      </div>
    </section>
  );
}
