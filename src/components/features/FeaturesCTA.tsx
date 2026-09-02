import Reveal from "@/components/home/Reveal";

export default function FeaturesCTA() {
  return (
    <section className="px-6 py-24 lg:py-32">
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <h2 className="text-4xl font-bold text-white sm:text-5xl">
          <span className="block">See It. Scan It.</span>
          <span className="block text-[#c084fc]">Wear it.</span>
        </h2>
        <p className="text-lg text-white/60">
          Raid your favorite celebrity&apos;s wardrobe without breaking the bank or catching a case.
        </p>
      </Reveal>
    </section>
  );
}
