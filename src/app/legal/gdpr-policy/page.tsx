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
  title: "GDPR / Cookie Policy — Steyel",
  description: "How Steyel collects, processes, and protects personal data, and how we use cookies.",
};

const GROUPS: LegalSectionData[][] = [
  [
    {
      number: "01",
      title: "Introduction",
      blocks: [
        {
          type: "p",
          text: "Steyel is committed to protecting the privacy and personal data of its users. This GDPR (General Data Protection Regulation) and Cookie Policy outlines how Steyel collects, uses, stores, and protects personal data, and how we use cookies and similar technologies, in accordance with applicable Canadian and international privacy laws.",
        },
      ],
    },
  ],
  [
    {
      number: "02",
      title: "Data Collection and Processing",
      blocks: [
        {
          type: "subsection",
          title: "2.1 Types of Personal Data Collected",
          blocks: [
            {
              type: "list",
              items: [
                "User-provided information — name, email address, and password when you create an account.",
                "Community data — content you share within style boards or community features.",
                "Usage data — the photos you scan, the items and boards you save, and how you interact with the app.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          title: "2.2 Legal Basis for Data Processing",
          blocks: [
            {
              type: "list",
              items: [
                "Consent — for optional features such as community sharing and marketing communications.",
                "Contractual necessity — to create your account, process scans, and fulfil subscriptions you purchase.",
                "Legitimate interests — to keep the Site secure, improve our AI models, and prevent misuse.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          title: "2.3 Purpose of Data Processing",
          blocks: [
            {
              type: "list",
              items: [
                "Account registration and management.",
                "Service improvement and personalization of style recommendations.",
                "Payment processing for subscription plans.",
                "Enabling community interactions between users.",
                "Legal compliance and fraud prevention.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          title: "2.4 Data Retention",
          blocks: [
            {
              type: "p",
              text: "Steyel retains personal data for as long as your account is active or as needed to provide the services you request. We may retain certain data for a further period where required to comply with legal, accounting, or reporting obligations.",
            },
          ],
        },
      ],
    },
  ],
  [
    {
      number: "03",
      title: "Data Security and Sharing",
      blocks: [
        {
          type: "subsection",
          title: "3.1 Data Security Measures",
          blocks: [
            {
              type: "p",
              text: "We implement appropriate technical and organizational safeguards, including encryption in transit and at rest, access controls, and regular reviews, to protect personal data against unauthorized access, alteration, or loss.",
            },
          ],
        },
        {
          type: "subsection",
          title: "3.2 Third-Party Service Providers",
          blocks: [
            {
              type: "p",
              text: "We rely on trusted third-party providers for functions such as hosting, authentication, payment processing, and email delivery. These providers only process personal data on our instructions and are bound by confidentiality and data protection obligations.",
            },
          ],
        },
        {
          type: "subsection",
          title: "3.3 Data Sharing and Disclosure",
          blocks: [
            {
              type: "list",
              items: [
                "With your consent — when you choose to share content publicly or with other users.",
                "Legal requirements — where disclosure is required to comply with a law, regulation, or valid legal process.",
                "Business transfers — in connection with a merger, acquisition, or sale of assets, subject to this policy.",
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
      title: "Cookies and Similar Technologies",
      blocks: [
        {
          type: "p",
          text: "We use cookies and similar technologies to keep you signed in, remember your preferences, and understand how the Site is used.",
        },
        {
          type: "list",
          items: [
            "Essential cookies — required for core functionality such as authentication and security.",
            "Preference cookies — remember settings like language and display preferences.",
            "Analytics cookies — help us understand usage patterns so we can improve the Site.",
          ],
        },
        {
          type: "p",
          text: "You can control or disable cookies through your browser settings. Disabling essential cookies may affect the availability of some features.",
        },
      ],
    },
  ],
  [
    {
      number: "05",
      title: "User Rights",
      blocks: [
        {
          type: "subsection",
          title: "5.1 Right to Access, Rectify, and Erase",
          blocks: [
            {
              type: "p",
              text: "You have the right to request a copy of your personal data, correct inaccuracies, or ask us to delete your data, subject to certain legal exceptions.",
            },
          ],
        },
        {
          type: "subsection",
          title: "5.2 Right to Restrict Processing and Data Portability",
          blocks: [
            {
              type: "p",
              text: "You may ask us to limit how we use your data, or request your data in a structured, machine-readable format to transfer to another provider.",
            },
          ],
        },
        {
          type: "subsection",
          title: "5.3 Right to Object and Withdraw Consent",
          blocks: [
            {
              type: "p",
              text: "Where we rely on consent or legitimate interests, you may object to processing or withdraw consent at any time, without affecting processing carried out before your objection.",
            },
          ],
        },
        {
          type: "subsection",
          title: "5.4 Right to Lodge a Complaint",
          blocks: [
            {
              type: "p",
              text: "If you believe we have not handled your personal data properly, you may lodge a complaint with your local data protection authority.",
            },
          ],
        },
      ],
    },
  ],
  [
    {
      number: "06",
      title: "International Data Transfers",
      blocks: [
        {
          type: "p",
          text: "Personal data may be processed and stored in countries outside your own, including Canada and the United States. When we transfer data internationally, we use appropriate safeguards such as standard contractual clauses to protect it.",
        },
      ],
    },
    {
      number: "07",
      title: "Changes to This Policy",
      blocks: [
        {
          type: "p",
          text: "We may update this GDPR / Cookie Policy from time to time to reflect changes in our practices or legal requirements. We will post the revised policy here with an updated effective date.",
        },
      ],
    },
  ],
  [
    {
      number: "08",
      title: "Contact Information",
      blocks: [
        {
          type: "p",
          text: "For questions about this policy or to exercise your data protection rights, contact our privacy team at privacy@steyel.com or through our Contact Us page.",
        },
      ],
    },
  ],
];

export default function GdprPolicyPage() {
  return (
    <main
      className={`${plusJakartaSans.variable} bg-[#0b0a0f] font-[family-name:var(--font-plus-jakarta-sans)]`}
    >
      <BodyBackground color="#0b0a0f" />
      <LegalHero
        title="GDPR / Cookie Policy"
        description="How Steyel collects, processes, and protects personal data, and how we use cookies."
        effectiveDate="February 1, 2025"
      />
      <LegalContent groups={GROUPS} />
      <CTA />
      <Footer />
    </main>
  );
}
