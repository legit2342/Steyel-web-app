import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Steyel — See it. Scan it. Wear it.",
  description:
    "Upload any outfit photo and Steyel's AI finds the pieces, the brands, and where to buy them, right from your phone.",
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${plusJakartaSans.variable} font-[family-name:var(--font-plus-jakarta-sans)]`}>
      {children}
    </div>
  );
}
