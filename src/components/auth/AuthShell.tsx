import Image from "next/image";
import Link from "next/link";

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Terms of Service", href: "/legal/terms-of-use" },
];

export default function AuthShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] px-4 py-16">
      <Link href="/" className="flex flex-col items-center gap-2">
        <Image src="/images/logo.png" alt="Steyel" width={119} height={52} className="h-11 w-auto" priority />
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8b93ff]">
          Digital Wardrobe Couture
        </span>
      </Link>

      <div className="mt-10 w-full max-w-md rounded-3xl border border-white/10 bg-[#131313] p-8 shadow-2xl sm:p-10">
        {children}
      </div>

      <footer className="mt-16 flex flex-col items-center gap-4 text-center">
        <p className="flex flex-wrap items-center justify-center gap-2 text-xs text-white/30">
          <span>© 2026 STEYEL, INC.</span>
          {LEGAL_LINKS.map((link) => (
            <span key={link.label} className="flex items-center gap-2">
              <span aria-hidden>•</span>
              <a href={link.href} className="transition-colors hover:text-white/60">
                {link.label}
              </a>
            </span>
          ))}
        </p>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Instagram" className="text-white/30 transition-colors hover:text-white/60">
            <Image src="/images/home/footer/instagram.svg" alt="" width={18} height={18} />
          </a>
          <a href="#" aria-label="TikTok" className="text-white/30 transition-colors hover:text-white/60">
            <Image src="/images/home/footer/tiktok.svg" alt="" width={18} height={18} />
          </a>
          <a href="#" aria-label="Facebook" className="text-white/30 transition-colors hover:text-white/60">
            <Image src="/images/home/footer/facebook.svg" alt="" width={13} height={18} />
          </a>
        </div>
      </footer>
    </div>
  );
}
