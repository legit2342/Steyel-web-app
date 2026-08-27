import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact Us", href: "#contact" },
];

const TAGS = [
  { name: "Gold Bracelet", meta: "CARTIER • $6,500", className: "left-[62%] top-[36%] w-36" },
  { name: "Patterned Silk Blouse", meta: "VALENTINO • $1,200", className: "left-[74%] top-[26%] w-44" },
  { name: "Leather Corset Top", meta: "ALEXANDER MCQUEEN • $2,450", className: "left-[68%] top-[46%] w-44" },
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

      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="Steyel" width={140} height={45} className="h-9 w-auto" priority />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#a29fb0] transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#download"
          className="rounded-full bg-gradient-to-r from-[#4c6fff] to-[#8b5fe8] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_-6px_rgba(76,111,255,0.5)] transition-transform hover:scale-105"
        >
          Download App
        </a>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pt-16 lg:pb-32 lg:pt-24">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
            <span className="block">See it.</span>
            <span className="block">Scan it.</span>
            <span className="block bg-gradient-to-r from-white to-[#a855f7] bg-clip-text text-transparent">
              Wear it.
            </span>
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-[#9ca3af] sm:text-xl">
            Upload any outfit photo and Steyel&apos;s AI finds the pieces, the brands, and where
            to buy them, right from your phone.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#download"
              className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/[0.03] px-6 py-3 backdrop-blur-md transition-colors hover:bg-white/[0.08]"
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
              className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/[0.03] px-6 py-3 backdrop-blur-md transition-colors hover:bg-white/[0.08]"
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
              <div className="flex flex-col items-end gap-0.5 rounded-lg border border-white/10 bg-black/20 p-2 backdrop-blur-md">
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
