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
  title: "Terms of Use — Steyel",
  description: "The terms and conditions that govern your use of Steyel's site, app, and services.",
};

const GROUPS: LegalSectionData[][] = [
  [
    {
      number: "01",
      title: "Acceptance of Terms",
      blocks: [
        {
          type: "p",
          text: "By accessing or using the Steyel website, mobile app, or any related services (collectively, the “Site”), you agree to be bound by these Terms of Use. If you do not agree to these terms, you may not access or use the Site or any services provided by Steyel.",
        },
      ],
    },
    {
      number: "02",
      title: "Description of Services",
      blocks: [
        {
          type: "p",
          text: "Steyel is a web and mobile app for AI-powered fashion discovery. Using your device's camera, Steyel identifies clothing and accessories, matches them to similar items across partner retailers, and lets you organize looks into style boards and community features and, where applicable, subscription plans.",
        },
      ],
    },
  ],
  [
    {
      number: "03",
      title: "User Responsibilities",
      blocks: [
        {
          type: "subsection",
          title: "3.1 Account Registration",
          blocks: [
            {
              type: "p",
              text: "To access certain features of the Site, you may be required to create an account. When registering, you agree to provide accurate and complete information and to keep your account credentials confidential. You are responsible for all activity that occurs under your account.",
            },
          ],
        },
        {
          type: "subsection",
          title: "3.2 Prohibited Conduct",
          blocks: [
            {
              type: "list",
              items: [
                "Use the Site for any unlawful purpose or in violation of these Terms of Use.",
                "Impersonate another person or entity, or misrepresent your affiliation with any person or entity.",
                "Interfere with or disrupt the operation of the Site, or access data not intended for you.",
                "Engage in any activity that could damage, disable, overburden, or impair the Site's functionality.",
                "Use any automated means, including bots or scrapers, to collect data from the Site.",
                "Upload, post, or transmit any content that is unlawful, infringing, or otherwise objectionable.",
              ],
            },
          ],
        },
      ],
    },
  ],
  [
    {
      number: "04",
      title: "Intellectual Property Rights",
      blocks: [
        {
          type: "p",
          text: "The Site and all content, features, and functionality — including the Steyel name, logo, software, and AI models — are owned by Steyel or its licensors and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works from any part of the Site without our prior written consent.",
        },
      ],
    },
    {
      number: "05",
      title: "Subscription Fees and Payments",
      blocks: [
        {
          type: "p",
          text: "Certain features of Steyel are available through paid subscription plans. By subscribing, you authorize us to charge your chosen payment method on a recurring basis until you cancel. Fees are billed in advance and, except where required by law, are non-refundable. Prices are subject to change with reasonable prior notice.",
        },
      ],
    },
  ],
  [
    {
      number: "06",
      title: "Privacy Policy",
      blocks: [
        {
          type: "p",
          text: "Your use of the Site is also governed by our Privacy Policy, which explains how we collect, use, and safeguard your personal information. By using the Site, you consent to the data practices described there.",
        },
      ],
    },
    {
      number: "07",
      title: "Disclaimer of Warranties",
      blocks: [
        {
          type: "p",
          text: "The Site and its services are provided on an “as is” and “as available” basis without warranties of any kind, whether express or implied. We do not guarantee that item matches, pricing, or availability shown through the Site will always be accurate, complete, or uninterrupted.",
        },
      ],
    },
  ],
  [
    {
      number: "08",
      title: "Limitation of Liability",
      blocks: [
        {
          type: "p",
          text: "To the fullest extent permitted by law, Steyel and its officers, employees, and partners will not be liable for any indirect, incidental, special, or consequential damages arising from your use of, or inability to use, the Site or its services.",
        },
      ],
    },
    {
      number: "09",
      title: "Indemnification",
      blocks: [
        {
          type: "p",
          text: "You agree to indemnify and hold Steyel harmless from any claims, losses, liabilities, and expenses (including legal fees) arising out of your use of the Site, your violation of these Terms of Use, or your infringement of any third-party rights.",
        },
      ],
    },
  ],
  [
    {
      number: "10",
      title: "Modifications to the Terms of Use",
      blocks: [
        {
          type: "p",
          text: "We may revise these Terms of Use from time to time. Material changes will be posted on this page with an updated effective date. Your continued use of the Site after changes take effect constitutes acceptance of the revised terms.",
        },
      ],
    },
    {
      number: "11",
      title: "Termination",
      blocks: [
        {
          type: "p",
          text: "We may suspend or terminate your access to the Site at any time, with or without notice, for conduct that we believe violates these Terms of Use or is otherwise harmful to other users, us, or third parties. You may also close your account at any time from your dashboard settings.",
        },
      ],
    },
  ],
  [
    {
      number: "12",
      title: "Governing Law and Jurisdiction",
      blocks: [
        {
          type: "p",
          text: "These Terms of Use are governed by the laws of Canada and the province in which Steyel is headquartered, without regard to conflict-of-law principles. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts located there.",
        },
      ],
    },
    {
      number: "13",
      title: "Contact Information",
      blocks: [
        {
          type: "p",
          text: "If you have questions about these Terms of Use, please contact us at legal@steyel.com or through our Contact Us page.",
        },
      ],
    },
  ],
];

export default function TermsOfUsePage() {
  return (
    <main
      className={`${plusJakartaSans.variable} bg-[#0b0a0f] font-[family-name:var(--font-plus-jakarta-sans)]`}
    >
      <BodyBackground color="#0b0a0f" />
      <LegalHero
        title="Terms Of Use"
        description="These Terms of Use govern your access to and use of the Steyel site, app, and services."
        effectiveDate="February 1, 2025"
      />
      <LegalContent groups={GROUPS} />
      <CTA />
      <Footer />
    </main>
  );
}
