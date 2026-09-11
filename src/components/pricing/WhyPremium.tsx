import Image from "next/image";
import Reveal from "@/components/home/Reveal";

const FEATURES = [
  {
    icon: "/images/pricing/why-premium/icon-scans.png",
    thumb: "/images/pricing/why-premium/thumb-scans.png",
    title: "Unlimited daily scans",
    description: "Scan as many outfits as you need to find your perfect match, anytime.",
  },
  {
    icon: "/images/pricing/why-premium/icon-priority.png",
    thumb: "/images/pricing/why-premium/thumb-priority.png",
    title: "Priority AI Processing",
    description: "Jump to the front of the queue. Get your style analysis and shopping links in seconds.",
  },
  {
    icon: "/images/pricing/why-premium/icon-boards.png",
    thumb: "/images/pricing/why-premium/thumb-boards.png",
    title: "Exclusive Style Boards",
    description: "Curate unlimited personalized collections and mood boards for every occasion.",
  },
  {
    icon: "/images/pricing/why-premium/icon-related.png",
    thumb: "/images/pricing/why-premium/thumb-related.png",
    title: "Related items on each scan",
    description: "Be the first to try our latest AI features, beta tools, and upcoming fashion integrations.",
  },
];

export default function WhyPremium() {
  return (
    <section className="bg-[#0d0620] px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <h2 className="text-4xl font-bold text-white">Why Premium?</h2>
          <p className="mt-3 text-white/50">Unlock the full power of Steyel AI styling.</p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {FEATURES.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 100}
              className="flex items-start justify-between gap-4 rounded-[32px] border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#a855f7]/30"
            >
              <div className="flex flex-col gap-4">
                <span className="flex size-12 items-center justify-center overflow-hidden rounded-2xl">
                  <Image src={f.icon} alt="" width={48} height={48} className="size-full object-cover" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">{f.description}</p>
                </div>
              </div>
              <span className="relative hidden size-16 shrink-0 overflow-hidden rounded-2xl sm:block">
                <Image src={f.thumb} alt="" fill className="object-cover" />
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
