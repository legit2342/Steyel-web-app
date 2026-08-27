import Image from "next/image";

export default function CTA() {
  return (
    <section className="px-6 pb-24">
      <div
        className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 overflow-hidden rounded-[64px] border border-white/10 px-8 py-24 text-center"
        style={{ backgroundImage: "linear-gradient(161deg, rgb(18,11,46) 0%, rgb(10,5,26) 100%)" }}
      >
        <div className="pointer-events-none absolute -bottom-48 -left-48 size-96 rounded-full bg-[#a855f7]/10 blur-[75px]" />

        <h2 className="relative text-5xl font-bold text-white sm:text-6xl">
          Your next outfit is
          <br />
          <span className="bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#9333ea] bg-clip-text text-transparent">
            one scan away.
          </span>
        </h2>

        <div className="relative flex flex-wrap items-center justify-center gap-6 pt-6">
          <a
            href="#download"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black px-8 py-4"
          >
            <Image src="/images/icons/apple.svg" alt="" width={23} height={30} className="h-[30px] w-auto" />
            <span className="flex flex-col leading-tight">
              <span className="text-[10px] font-bold uppercase tracking-wide text-white/40">
                Download on the
              </span>
              <span className="text-xl font-bold text-white">App Store</span>
            </span>
          </a>
          <a
            href="#download"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black px-8 py-4"
          >
            <Image src="/images/home/cta/gplay-icon.svg" alt="" width={30} height={30} />
            <span className="flex flex-col leading-tight">
              <span className="text-[10px] font-bold uppercase tracking-wide text-white/40">
                Get it on
              </span>
              <span className="text-xl font-bold text-white">Google Play</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
