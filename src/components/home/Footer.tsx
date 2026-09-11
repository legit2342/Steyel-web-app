import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

const ABOUT_LINKS = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQs", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];

const LEGAL_LINKS = [
  { label: "Cookie/GDPR", href: "/legal/gdpr-policy" },
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Terms of Use", href: "/legal/terms-of-use" },
  { label: "PIPEDA Policy", href: "/legal/pipeda-policy" },
];

export default function Footer() {
  return (
    <footer className="rounded-t-[40px] border border-[#4d2f91] bg-[#04050b] px-8 py-16 sm:px-16">
      <Reveal className="mx-auto flex max-w-6xl flex-col gap-16 sm:flex-row sm:justify-between">
        <div className="flex flex-col gap-10">
          <Image src="/images/logo.png" alt="Steyel" width={200} height={50} className="h-10 w-auto" />
          <div className="flex items-center gap-6">
            <a
              href="#"
              aria-label="Instagram"
              className="inline-block transition-transform duration-300 hover:-translate-y-1 hover:scale-110"
            >
              <Image src="/images/home/footer/instagram.svg" alt="" width={32} height={34} />
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="inline-block transition-transform duration-300 hover:-translate-y-1 hover:scale-110"
            >
              <Image src="/images/home/footer/tiktok.svg" alt="" width={32} height={33} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="inline-block transition-transform duration-300 hover:-translate-y-1 hover:scale-110"
            >
              <Image src="/images/home/footer/facebook.svg" alt="" width={20} height={30} />
            </a>
          </div>
        </div>

        <div className="flex gap-16 sm:gap-24">
          <div className="flex flex-col gap-6">
            <h5 className="text-lg font-bold text-[#8b6fd4]">About Steyel</h5>
            <ul className="flex flex-col gap-4">
              {ABOUT_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-block text-white/80 transition-all duration-200 hover:translate-x-1 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h5 className="text-lg font-bold text-[#8b6fd4]">Legal</h5>
            <ul className="flex flex-col gap-4">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-block text-white/80 transition-all duration-200 hover:translate-x-1 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      <div className="mx-auto mt-16 max-w-6xl border-t border-white/10 pt-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-white/40">© 2025 Steyel. All rights Reserved</p>
          <p className="flex items-center gap-2 text-sm text-white/30">
            <Image
              src="/images/home/footer/secure-shield.svg"
              alt=""
              width={16}
              height={16}
              className="h-4 w-4 shrink-0"
            />
            <span className="font-semibold uppercase tracking-wider">Secure Encryption</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
