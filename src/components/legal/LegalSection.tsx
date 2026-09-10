import type { LegalSectionData } from "./types";
import LegalBlocks from "./LegalBlocks";

export default function LegalSection({ number, title, blocks }: LegalSectionData) {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-8">
      <span
        aria-hidden
        className="pointer-events-none absolute right-6 top-2 text-6xl font-bold text-white/[0.06]"
      >
        {number}
      </span>
      <h3 className="relative text-xl font-bold text-white">{title}</h3>
      <div className="relative mt-4">
        <LegalBlocks blocks={blocks} />
      </div>
    </div>
  );
}
