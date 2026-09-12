import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/home/Reveal";

const QR_PATTERN = [
  1, 1, 0, 1, 1, 1, 0, 0, 1,
  1, 0, 1, 0, 1, 0, 1, 0, 1,
  0, 1, 1, 0, 1, 1, 0, 1, 0,
  1, 1, 0, 1, 0, 0, 1, 1, 1,
];

export default function DownloadHero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-[#08060d]">
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <Image src="/images/logo.png" alt="Steyel" width={124} height={54} className="h-11 w-auto" priority />
        </Link>
        <Link href="/" className="text-sm font-semibold text-white transition-colors hover:text-white/70">
          Back to Home
        </Link>
      </div>

      <div className="relative mx-auto flex w-full max-w-3xl flex-1 flex-col items-center px-6 pt-10 text-center">
        <Reveal>
          <div className="inline-flex items-center rounded-full border border-[#a855f7]/30 bg-[#a855f7]/10 px-4 py-1">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c084fc]">
              Ready for style?
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Get <span className="text-[#3b82f6]">STEYEL</span> on your device
          </h1>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <a
              href="#"
              className="flex items-center gap-3 rounded-2xl border border-white/20 bg-black px-6 py-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-white/40"
            >
              <Image src="/images/icons/apple.svg" alt="" width={23} height={30} className="h-[26px] w-auto" />
              <span className="flex flex-col items-start leading-tight">
                <span className="text-[10px] font-bold uppercase tracking-wide text-white/40">
                  Download on the
                </span>
                <span className="text-lg font-bold text-white">App Store</span>
              </span>
            </a>

            <div className="flex flex-col items-center gap-2">
              <div className="grid grid-cols-6 gap-0.5 rounded-2xl bg-white p-3">
                {QR_PATTERN.map((filled, i) => (
                  <span key={i} className={`size-2 rounded-[1px] ${filled ? "bg-[#08060d]" : "bg-transparent"}`} />
                ))}
              </div>
              <span className="text-xs text-white/40">Scan to download</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200} className="relative mt-16 flex flex-1 items-end">
          <div className="relative h-[420px] w-[220px] overflow-hidden rounded-[36px] border-8 border-[#1a1a24] bg-[#1a1a24] shadow-2xl">
            <Image
              src="/images/how-it-works/hero/model-purple.png"
              alt="Steyel identifying a look"
              fill
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
            <div className="absolute inset-x-4 bottom-4 flex flex-col gap-1.5">
              <span className="text-sm font-bold text-white">Look Identified</span>
              <div className="h-1 w-full overflow-hidden rounded-full bg-white/20">
                <div className="h-full w-2/3 rounded-full bg-[#3b82f6]" />
              </div>
            </div>
          </div>

          <div className="animate-float absolute -left-20 top-16 flex flex-col gap-0.5 rounded-lg border border-white/10 bg-black/40 p-2.5 backdrop-blur-md">
            <span className="text-[10px] font-bold text-white">$129</span>
            <span className="text-[9px] text-white/50">Sunglasses</span>
          </div>

          <div
            className="animate-float absolute -right-14 top-1/2 flex items-center gap-1.5 rounded-full bg-[#052e1b] px-3 py-1.5"
            style={{ animationDelay: "1.5s" }}
          >
            <span className="text-[#4ade80]">✓</span>
            <span className="text-xs font-bold text-[#4ade80]">Saved</span>
          </div>
        </Reveal>
      </div>

      <div className="relative mx-auto w-full max-w-3xl px-6 pb-8 pt-16 text-center">
        <div className="border-t border-white/10 pt-6">
          <p className="text-sm text-white/30">© 2025 STEYEL. All rights Reserved</p>
        </div>
      </div>
    </section>
  );
}
