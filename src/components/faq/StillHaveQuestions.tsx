import Image from "next/image";
import Reveal from "@/components/home/Reveal";

export default function StillHaveQuestions() {
  return (
    <section className="bg-[#0b0a0f] px-6 pb-24">
      <Reveal className="relative mx-auto flex max-w-3xl flex-col items-center overflow-hidden rounded-[32px] border border-white/10 bg-[#0f0a1f] px-8 py-16 text-center">
        <Image
          src="/images/faq/still-questions-bg.png"
          alt=""
          fill
          className="object-cover opacity-70 blur-md"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0a1f] via-[#0f0a1f]/60 to-transparent" />

        <div className="relative flex flex-col items-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Still have questions?</h2>
          <p className="mt-3 max-w-sm text-white/60">
            Can&apos;t find the answer you&apos;re looking for? Please chat to our team.
          </p>
          <a
            href="/contact"
            className="mt-6 rounded-full bg-gradient-to-r from-[#4c6fff] to-[#8b5fe8] px-8 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_-6px_rgba(76,111,255,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_28px_-6px_rgba(139,95,232,0.7)]"
          >
            Get In Touch
          </a>
        </div>
      </Reveal>
    </section>
  );
}
