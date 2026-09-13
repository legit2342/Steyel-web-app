import Image from "next/image";
import Header from "@/components/layout/Header";
import Reveal from "@/components/home/Reveal";

export default function PricingHero() {
  return (
    <section className="relative overflow-hidden bg-[#020617]">
      <div className="absolute inset-0">
        <Image src="/images/pricing/hero/Container.png" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative">
        <Header />
      </div>

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center lg:py-40">
        <Reveal>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Elevate Your Style with Steyel Premium
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
            The future of fashion is personal. Unlock advanced AI styling tools, unlimited scans,
            and priority processing.
          </p>
          <a
            href="#pricing-plan"
            className="mt-8 inline-block rounded-full bg-gradient-to-r from-[#4c6fff] to-[#8b5fe8] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_8px_20px_-6px_rgba(76,111,255,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_28px_-6px_rgba(139,95,232,0.7)]"
          >
            Upgrade Now
          </a>
        </Reveal>
      </div>
    </section>
  );
}
