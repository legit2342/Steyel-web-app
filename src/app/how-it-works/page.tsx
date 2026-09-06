import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import BodyBackground from "@/components/home/BodyBackground";
import Footer from "@/components/home/Footer";
import CTA from "@/components/home/CTA";
import HowItWorksHero from "@/components/how-it-works/HowItWorksHero";
import StepsShowcase from "@/components/how-it-works/StepsShowcase";
import JourneySteps from "@/components/how-it-works/JourneySteps";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "How It Works — Steyel",
  description: "From photo to purchase: how Steyel's AI turns any outfit photo into shoppable finds.",
};

export default function HowItWorksPage() {
  return (
    <main
      className={`${plusJakartaSans.variable} bg-[#020617] font-[family-name:var(--font-plus-jakarta-sans)]`}
    >
      <BodyBackground color="#020617" />
      <HowItWorksHero />
      <StepsShowcase />
      <JourneySteps />
      <CTA />
      <Footer />
    </main>
  );
}
