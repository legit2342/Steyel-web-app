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
  title: "Privacy Policy — Steyel",
  description: "How Steyel collects, uses, discloses, and safeguards your personal information.",
};

const GROUPS: LegalSectionData[][] = [
  [
    {
      number: "01",
      title: "Introduction",
      blocks: [
        {
          type: "p",
          text: "Steyel (“we,” “us,” or “our”) is committed to protecting the privacy of its users (“you” or “your”). This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our website and app (the “Site”) and the services provided through it. By accessing or using the Site, you consent to the terms of this Privacy Policy.",
        },
      ],
    },
  ],
  [
    {
      number: "02",
      title: "Information We Collect",
      blocks: [
        {
          type: "subsection",
          title: "2.1 Personal Information",
          blocks: [
            {
              type: "list",
              items: [
                "Contact information — such as your name and email address.",
                "Account information — your username, password, and account preferences.",
                "Payment information — billing details processed by our payment provider when you subscribe to a paid plan.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          title: "2.2 Usage Information",
          blocks: [
            {
              type: "list",
              items: [
                "Device and browser type, and operating system.",
                "IP address and general location.",
                "Photos submitted for outfit scanning and the results generated from them.",
                "Pages viewed, items saved, and boards created within the app.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          title: "2.3 Cookies and Similar Technologies",
          blocks: [
            {
              type: "p",
              text: "We use cookies and similar technologies to operate the Site, remember your preferences, and understand usage patterns. See our GDPR / Cookie Policy for details on the categories of cookies we use and how to manage them.",
            },
          ],
        },
      ],
    },
  ],
  [
    {
      number: "03",
      title: "Use of Information",
      blocks: [
        {
          type: "list",
          items: [
            "Operate, maintain, and improve the Site and its AI-powered scanning features.",
            "Process transactions and send related information, including confirmations and invoices.",
            "Personalize your experience, including style and item recommendations.",
            "Communicate with you about updates, security alerts, and support requests.",
            "Detect, investigate, and prevent fraudulent or unauthorized activity.",
          ],
        },
      ],
    },
    {
      number: "04",
      title: "Data Retention",
      blocks: [
        {
          type: "p",
          text: "We retain personal information for as long as your account remains active or as needed to provide the services you request. We may retain and use information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.",
        },
      ],
    },
  ],
  [
    {
      number: "05",
      title: "Data Security",
      blocks: [
        {
          type: "p",
          text: "We implement reasonable administrative, technical, and physical safeguards designed to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
        },
      ],
    },
    {
      number: "06",
      title: "Data Sharing and Disclosure",
      blocks: [
        {
          type: "subsection",
          title: "Service providers",
          blocks: [
            { type: "p", text: "We share information with vendors who perform services on our behalf, such as hosting, payments, and analytics." },
          ],
        },
        {
          type: "subsection",
          title: "Legal requirements",
          blocks: [
            { type: "p", text: "We may disclose information when required by law, regulation, or a valid legal process, or to protect the rights and safety of Steyel and our users." },
          ],
        },
        {
          type: "subsection",
          title: "Business transfers",
          blocks: [
            { type: "p", text: "Information may be transferred in connection with a merger, acquisition, or sale of assets, subject to the protections described in this policy." },
          ],
        },
      ],
    },
  ],
  [
    {
      number: "07",
      title: "Your Rights and Choices",
      blocks: [
        {
          type: "subsection",
          title: "7.1 Access and Correction",
          blocks: [
            {
              type: "p",
              text: "You can review and update your account information at any time from your dashboard, or request a copy or correction of your data by contacting us.",
            },
          ],
        },
        {
          type: "subsection",
          title: "7.2 Opt-out",
          blocks: [
            {
              type: "p",
              text: "You may opt out of marketing communications at any time using the unsubscribe link in our emails, without affecting service-related messages.",
            },
          ],
        },
      ],
    },
    {
      number: "08",
      title: "Children's Privacy",
      blocks: [
        {
          type: "p",
          text: "The Site is not directed to children under 13, and we do not knowingly collect personal information from children under that age. If we learn we have collected such information, we will delete it promptly.",
        },
      ],
    },
  ],
  [
    {
      number: "09",
      title: "International Data Transfers",
      blocks: [
        {
          type: "p",
          text: "Your information may be transferred to, and processed in, countries other than your own, including Canada and the United States, where privacy laws may differ. We take steps to ensure appropriate protection wherever your data is processed.",
        },
      ],
    },
    {
      number: "10",
      title: "Contact Us",
      blocks: [
        {
          type: "p",
          text: "If you have questions or concerns about this Privacy Policy or our data practices, contact us at privacy@steyel.com or through our Contact Us page.",
        },
      ],
    },
  ],
  [
    {
      number: "11",
      title: "Changes to this Privacy Policy",
      blocks: [
        {
          type: "p",
          text: "We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on this page with a revised effective date.",
        },
      ],
    },
  ],
];

export default function PrivacyPolicyPage() {
  return (
    <main
      className={`${plusJakartaSans.variable} bg-[#0b0a0f] font-[family-name:var(--font-plus-jakarta-sans)]`}
    >
      <BodyBackground color="#0b0a0f" />
      <LegalHero
        title="Privacy Policy"
        description="How Steyel collects, uses, discloses, and safeguards your personal information."
        effectiveDate="February 1, 2025"
      />
      <LegalContent groups={GROUPS} />
      <CTA />
      <Footer />
    </main>
  );
}
