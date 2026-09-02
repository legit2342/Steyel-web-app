import Image from "next/image";
import Header from "@/components/layout/Header";

const TAGS = [
  { name: "Gold Bracelet", meta: "CARTIER • $6,500", className: "left-[62%] top-[36%] w-36", delay: "0s" },
  {
    name: "Patterned Silk Blouse",
    meta: "VALENTINO • $1,200",
    className: "left-[74%] top-[26%] w-44",
    delay: "1.5s",
  },
  {
    name: "Leather Corset Top",
    meta: "ALEXANDER MCQUEEN • $2,450",
    className: "left-[68%] top-[46%] w-44",
    delay: "3s",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#08060d]">
      <div className="absolute inset-0">
        <Image
          src="/images/home/hero/hero-photo.png"
          alt=""
          fill
          priority
          className="object-cover object-[70%_center] opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08060d] via-[#08060d]/70 to-transparent" />
      </div>

      <Header />

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pt-16 lg:pb-32 lg:pt-24">
        <div className="max-w-2xl">
          <h1 className="animate-in fade-in slide-in-from-bottom-6 fill-mode-both text-6xl font-bold leading-[0.95] tracking-tight text-white duration-700 ease-out sm:text-7xl lg:text-8xl">
            <span className="block">See it.</span>
            <span className="block">Scan it.</span>
            <span className="block bg-gradient-to-r from-white to-[#a855f7] bg-clip-text text-transparent">
              Wear it.
            </span>
          </h1>
          <p
            className="animate-in fade-in slide-in-from-bottom-6 fill-mode-both mt-8 max-w-md text-lg leading-relaxed text-[#9ca3af] duration-700 ease-out sm:text-xl"
            style={{ animationDelay: "150ms" }}
          >
            Upload any outfit photo and Steyel&apos;s AI finds the pieces, the brands, and where
            to buy them, right from your phone.
          </p>
          <div
            className="animate-in fade-in slide-in-from-bottom-6 fill-mode-both mt-8 flex flex-wrap items-center gap-4 duration-700 ease-out"
            style={{ animationDelay: "300ms" }}
          >
            <a
              href="#download"
              className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/[0.03] px-6 py-3 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/40 hover:bg-white/[0.08]"
            >
              <Image src="/images/icons/apple.svg" alt="" width={23} height={30} className="h-[30px] w-auto" />
              <span className="flex flex-col leading-tight">
                <span className="text-[10px] font-bold uppercase tracking-wide text-[#9ca3af]">
                  Download on the
                </span>
                <span className="text-lg font-bold text-white">App Store</span>
              </span>
            </a>
            <a
              href="#download"
              className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/[0.03] px-6 py-3 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/40 hover:bg-white/[0.08]"
            >
              <Image
                src="/images/icons/google-play.svg"
                alt=""
                width={26}
                height={28}
                className="h-7 w-auto"
              />
              <span className="flex flex-col leading-tight">
                <span className="text-[10px] font-bold uppercase tracking-wide text-[#9ca3af]">
                  Get it on
                </span>
                <span className="text-lg font-bold text-white">Google Play</span>
              </span>
            </a>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden>
          {TAGS.map((tag) => (
            <div key={tag.name} className={`absolute ${tag.className}`}>
              <div
                className="animate-float flex flex-col items-end gap-0.5 rounded-lg border border-white/10 bg-black/20 p-2 backdrop-blur-md"
                style={{ animationDelay: tag.delay }}
              >
                <div className="flex items-center gap-2">
                  <span className="size-2 shrink-0 rounded-full bg-[#a855f7] shadow-[0_0_8px_0_rgba(168,85,247,0.8)]" />
                  <span className="text-[10px] font-bold text-white">{tag.name}</span>
                </div>
                <span className="text-[9px] uppercase tracking-wide text-[#9ca3af]">{tag.meta}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
