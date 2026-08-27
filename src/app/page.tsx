import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import CTA from "@/components/home/CTA";
import FAQ from "@/components/home/FAQ";
import Features from "@/components/home/Features";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import PaymentsBar from "@/components/home/PaymentsBar";
import Pricing from "@/components/home/Pricing";
import StatsRow from "@/components/home/StatsRow";
import UseCases from "@/components/home/UseCases";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Steyel — See it. Scan it. Wear it.",
  description:
    "Upload any outfit photo and Steyel's AI finds the pieces, the brands, and where to buy them, right from your phone.",
};

export default function Home() {
  return (
    <main
      className={`${plusJakartaSans.variable} bg-[#0b0a0f] font-[family-name:var(--font-plus-jakarta-sans)]`}
    >
      <Hero />
      <StatsRow />
      <HowItWorks />
      <Features />
      <UseCases />
      <Pricing />
      <PaymentsBar />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
