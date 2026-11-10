import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import BodyBackground from "@/components/home/BodyBackground";
import Footer from "@/components/home/Footer";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import PricingHero from "@/components/pricing/PricingHero";
import PricingPlans from "@/components/pricing/PricingPlans";
import Credits from "@/components/pricing/Credits";
import WhyPremium from "@/components/pricing/WhyPremium";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

// Prices come from Supabase; re-fetch them at most every 5 minutes.
export const revalidate = 300;

export const metadata: Metadata = {
  title: "Pricing — Steyel",
  description: "Elevate your style with Steyel Premium — plans and scan credits for every wardrobe.",
};

export default function PricingPage() {
  return (
    <main
      className={`${plusJakartaSans.variable} bg-[#0b0a0f] font-[family-name:var(--font-plus-jakarta-sans)]`}
    >
      <BodyBackground color="#0b0a0f" />
      <PricingHero />
      <PricingPlans />
      <Credits />
      <WhyPremium />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
