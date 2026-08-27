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

export default function HomePage() {
  return (
    <main className="bg-[#0b0a0f]">
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
