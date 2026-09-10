import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import BodyBackground from "@/components/home/BodyBackground";
import Footer from "@/components/home/Footer";
import CTA from "@/components/home/CTA";
import LegalHero from "@/components/legal/LegalHero";
import LegalContent from "@/components/legal/LegalContent";
import type { LegalSectionData } from "@/components/legal/types";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PIPEDA Policy — Steyel",
  description: "How Steyel meets its obligations under Canada's Personal Information Protection and Electronic Documents Act.",
};

const GROUPS: LegalSectionData[][] = [
  [
    {
      number: "01",
      title: "Introduction",
      blocks: [
        {
          type: "p",
          text: "Steyel is committed to complying with the Personal Information Protection and Electronic Documents Act (PIPEDA), Canada's federal private-sector privacy law. This policy explains how we apply PIPEDA's ten fair information principles to the personal information of our Canadian users.",
        },
      ],
    },
    {
      number: "02",
      title: "Accountability",
      blocks: [
        {
          type: "p",
          text: "Steyel is responsible for personal information under its control. We have designated a Privacy Officer who is accountable for our compliance with PIPEDA and can be reached at privacy@steyel.com.",
        },
      ],
    },
  ],
  [
    {
      number: "03",
      title: "Identifying Purposes",
      blocks: [
        {
          type: "p",
          text: "We identify the purposes for which personal information is collected at or before the time of collection. These purposes include creating and managing your account, operating our AI outfit-scanning features, processing payments for subscriptions, personalizing recommendations, and enabling community features.",
        },
      ],
    },
    {
      number: "04",
      title: "Consent",
      blocks: [
        {
          type: "p",
          text: "We obtain your knowledge and consent for the collection, use, or disclosure of personal information, except where permitted or required by law. Consent may be express — such as when you create an account or opt in to community sharing — or implied through your continued use of the Site. You may withdraw consent at any time, subject to legal or contractual restrictions, by contacting us or adjusting your account settings.",
        },
      ],
    },
  ],
  [
    {
      number: "05",
      title: "Limiting Collection",
      blocks: [
        {
          type: "p",
          text: "We limit the collection of personal information to what is necessary for the purposes we have identified. We do not collect information indiscriminately, and we collect it by fair and lawful means.",
        },
      ],
    },
    {
      number: "06",
      title: "Limiting Use, Disclosure, and Retention",
      blocks: [
        {
          type: "p",
          text: "We use or disclose personal information only for the purposes for which it was collected, unless you consent otherwise or it is required by law. We retain personal information only as long as necessary to fulfil those purposes, after which it is securely deleted or anonymized.",
        },
      ],
    },
  ],
  [
    {
      number: "07",
      title: "Accuracy",
      blocks: [
        {
          type: "p",
          text: "We strive to keep personal information as accurate, complete, and up to date as necessary for the purposes for which it is used. You can review and correct your account information at any time from your dashboard.",
        },
      ],
    },
    {
      number: "08",
      title: "Safeguards",
      blocks: [
        {
          type: "p",
          text: "We protect personal information with security safeguards appropriate to its sensitivity, including encryption, access controls, and regular security reviews, to guard against loss, theft, and unauthorized access, disclosure, copying, use, or modification.",
        },
      ],
    },
  ],
  [
    {
      number: "09",
      title: "Openness",
      blocks: [
        {
          type: "p",
          text: "We make information about our privacy policies and practices readily available. This policy, together with our Privacy Policy, describes the personal information we hold, how we use it, and who to contact with questions.",
        },
      ],
    },
    {
      number: "10",
      title: "Individual Access",
      blocks: [
        {
          type: "p",
          text: "Upon written request, we will inform you of the existence, use, and disclosure of your personal information and give you access to it, subject to limited exceptions permitted by PIPEDA. You may also request that inaccurate information be corrected.",
        },
      ],
    },
  ],
  [
    {
      number: "11",
      title: "Challenging Compliance",
      blocks: [
        {
          type: "p",
          text: "You may direct any question or complaint about our compliance with PIPEDA to our Privacy Officer. If we are unable to resolve your concern, you may file a complaint with the Office of the Privacy Commissioner of Canada.",
        },
      ],
    },
    {
      number: "12",
      title: "Contact Information",
      blocks: [
        {
          type: "p",
          text: "For questions about this PIPEDA Policy or to exercise your rights under it, contact our Privacy Officer at privacy@steyel.com or through our Contact Us page.",
        },
      ],
    },
  ],
];

export default function PipedaPolicyPage() {
  return (
    <main
      className={`${plusJakartaSans.variable} bg-[#0b0a0f] font-[family-name:var(--font-plus-jakarta-sans)]`}
    >
      <BodyBackground color="#0b0a0f" />
      <LegalHero
        title="PIPEDA Policy"
        description="How Steyel meets its obligations under Canada's Personal Information Protection and Electronic Documents Act."
        effectiveDate="February 1, 2025"
      />
      <LegalContent groups={GROUPS} />
      <CTA />
      <Footer />
    </main>
  );
}
