import Reveal from "@/components/home/Reveal";
import type { LegalSectionData } from "./types";
import LegalSection from "./LegalSection";

export default function LegalContent({ groups }: { groups: LegalSectionData[][] }) {
  return (
    <section className="relative bg-[#0b0a0f] px-6 pb-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        {groups.map((group, i) => (
          <Reveal key={i} delay={(i % 6) * 60} className="flex flex-col gap-6 sm:flex-row">
            {group.map((section) => (
              <LegalSection key={section.number} {...section} />
            ))}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
