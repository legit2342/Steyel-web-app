import Image from "next/image";
import Reveal from "@/components/home/Reveal";

const FEATURES = [
  {
    icon: "/images/features/grid/icon-scan.svg",
    title: "AI Outfit Scan",
    description: "Point your camera at any outfit and instantly identify every item, from fabrics to designers.",
    image: "/images/features/grid/sneakers.png",
  },
  {
    icon: "/images/features/grid/icon-tag.svg",
    title: "Brand & Price Match",
    description: "Instantly find where to buy that look at the best price across 500+ global retailers.",
    image: "/images/features/grid/tags.png",
  },
  {
    icon: "/images/features/grid/icon-boards.svg",
    title: "Style Boards",
    description: "Create infinite digital moodboards curated by our AI based on your unique aesthetic DNA.",
    image: "/images/features/grid/moodboard.png",
  },
  {
    icon: "/images/features/grid/icon-discovery.svg",
    title: "Discovery Engine",
    description: "Unlock 'Related Items' that complement your current wardrobe and elevate your vibe.",
    image: "/images/features/grid/mesh.png",
  },
];

export default function FeatureGrid() {
  return (
    <section
      className="relative overflow-hidden px-6 py-24 lg:py-32"
      style={{ backgroundImage: "linear-gradient(90deg, rgb(10,5,26) 0%, rgb(10,5,26) 100%)" }}
    >
      <div className="animate-pulse-glow pointer-events-none absolute left-1/4 top-24 size-96 rounded-full bg-[#9333ea]/15 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Powerful Features for <span className="text-[#c084fc]">Style Icons</span>
          </h2>
          <p className="max-w-xl text-lg text-white/50">Everything you need to master your aesthetic.</p>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => (
            <Reveal
              key={feature.title}
              delay={i * 100}
              className="group flex flex-col gap-3 rounded-[40px] border border-white/5 bg-white/[0.03] p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[#a855f7]/30 hover:bg-white/[0.06]"
            >
              <span className="flex size-14 items-center justify-center rounded-2xl border border-white/5 bg-[#120b2e] shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.05)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Image src={feature.icon} alt="" width={24} height={24} />
              </span>
              <h3 className="mt-2 text-xl font-bold text-white">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-white/50">{feature.description}</p>
              <div className="relative mt-4 aspect-[280/173] w-full overflow-hidden rounded-2xl">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
