export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "subsection"; title: string; blocks: LegalBlock[] };

export type LegalSectionData = {
  number: string;
  title: string;
  blocks: LegalBlock[];
};

export type LegalPageData = {
  title: string;
  description: string;
  effectiveDate: string;
  groups: LegalSectionData[][];
};
