import Image from "next/image";

const FEATURES = [
  {
    icon: "/images/home/features/icon-scan.svg",
    iconBg: "bg-[#4c6fff]/10",
    title: "AI Outfit Scan",
    description: "Proprietary vision AI that recognizes 200+ garment types with 99.2% accuracy.",
    image: "/images/home/features/ai-outfit-scan.png",
    imageAspect: "aspect-[558/336]",
  },
  {
    icon: "/images/home/features/icon-tag.svg",
    iconBg: "bg-[#8b5fe8]/10",
    title: "Brand & Price Match",
    description: "Integrated with over 5,000 global retailers to give you real-time pricing and stock status.",
    image: "/images/home/features/brand-price-match.png",
    imageAspect: "aspect-[530/337]",
  },
  {
    icon: "/images/home/features/icon-folder.svg",
    iconBg: "bg-[#4c6fff]/10",
    title: "Personal Steyel Boards",
    description: "Organize your finds into moodboards. Mix and match items from different shops in one place.",
    image: "/images/home/features/steyel-boards.png",
    imageAspect: "aspect-[573/319]",
  },
  {
    icon: "/images/home/features/icon-wand.svg",
    iconBg: "bg-[#8b5fe8]/10",
    title: "Related Item Discovery",
    description: "Can't afford the luxury version? Our AI finds stunning alternatives that fit your budget.",
    image: "/images/home/features/related-item-discovery.png",
    imageAspect: "aspect-[534/320]",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden px-6 py-24"
      style={{ backgroundImage: "linear-gradient(269deg, rgb(11,10,15) 10%, rgb(54,1,63) 170%)" }}
    >
      <div className="pointer-events-none absolute -top-32 right-0 size-96 rounded-full bg-[#9333ea]/20 blur-[75px]" />

      <div className="relative mx-auto max-w-6xl">
        <h2 className="text-center text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
          Features
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[40px] border border-white/5 bg-[#1f1b29]/60 p-8 backdrop-blur-md sm:p-12"
            >
              <span className={`flex size-16 items-center justify-center rounded-2xl ${feature.iconBg}`}>
                <Image src={feature.icon} alt="" width={32} height={32} />
              </span>
              <h3 className="mt-6 text-3xl font-extrabold text-white">{feature.title}</h3>
              <p className="mt-3 text-lg text-[#b8b5c5]">{feature.description}</p>
              <div className={`relative mt-8 w-full overflow-hidden rounded-3xl border border-white/10 bg-[#0b0a0f] ${feature.imageAspect}`}>
                <Image src={feature.image} alt={feature.title} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
