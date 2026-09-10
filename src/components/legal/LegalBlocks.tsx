import type { LegalBlock } from "./types";

export default function LegalBlocks({ blocks }: { blocks: LegalBlock[] }) {
  return (
    <div className="flex flex-col gap-4">
      {blocks.map((block, i) => {
        if (block.type === "p") {
          return (
            <p key={i} className="text-sm leading-relaxed text-white/60">
              {block.text}
            </p>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={i} className="flex flex-col gap-2 pl-1">
              {block.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2.5 text-sm leading-relaxed text-white/60">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-[#a855f7]" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        return (
          <div key={i} className="flex flex-col gap-2">
            <h4 className="text-sm font-bold text-[#c084fc]">{block.title}</h4>
            <LegalBlocks blocks={block.blocks} />
          </div>
        );
      })}
    </div>
  );
}
