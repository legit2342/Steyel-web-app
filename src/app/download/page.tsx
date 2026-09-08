import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import BodyBackground from "@/components/home/BodyBackground";
import DownloadHero from "@/components/download/DownloadHero";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Download — Steyel",
  description: "Get Steyel on your device — download the app or scan the QR code.",
};

export default function DownloadPage() {
  return (
    <main
      className={`${plusJakartaSans.variable} bg-[#08060d] font-[family-name:var(--font-plus-jakarta-sans)]`}
    >
      <BodyBackground color="#08060d" />
      <DownloadHero />
    </main>
  );
}
