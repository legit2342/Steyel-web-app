import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import BodyBackground from "@/components/home/BodyBackground";
import Footer from "@/components/home/Footer";
import CTA from "@/components/home/CTA";
import FeaturesHero from "@/components/features/FeaturesHero";
import FeatureGrid from "@/components/features/FeatureGrid";
import CurationEngine from "@/components/features/CurationEngine";
import FeaturesCTA from "@/components/features/FeaturesCTA";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Features — Steyel",
  description: "Everything Steyel's AI does to find your outfit's pieces, brands, and best prices.",
};

export default function FeaturesPage() {
  return (
    <main
      className={`${plusJakartaSans.variable} bg-[#0a051a] font-[family-name:var(--font-plus-jakarta-sans)]`}
    >
      <BodyBackground color="#0a051a" />
      <FeaturesHero />
      <FeatureGrid />
      <CurationEngine />
      <FeaturesCTA />
      <CTA />
      <Footer />
    </main>
  );
}
