export interface NavSection {
  id: string;
  ordinal: string;
  label: string;
  shortLabel: string;
}

export const SECTIONS: readonly NavSection[] = [
  { id: "proposition", ordinal: "01", label: "The Proposition", shortLabel: "Proposition" },
  { id: "why-now", ordinal: "02", label: "Why Now", shortLabel: "Why Now" },
  { id: "member-journey", ordinal: "03", label: "The Member Journey", shortLabel: "Journey" },
  { id: "deal", ordinal: "04", label: "The Deal", shortLabel: "The Deal" },
  { id: "value-stack", ordinal: "05", label: "The Longevity Programme", shortLabel: "Programme" },
  { id: "financial", ordinal: "06", label: "The Financial Partnership", shortLabel: "Financial" },
  { id: "hub", ordinal: "07", label: "The TMRW Hub", shortLabel: "The Hub" },
  { id: "launching-together", ordinal: "08", label: "Launching Together", shortLabel: "Launch" },
  { id: "learnings", ordinal: "09", label: "What We Learn in Stage 1", shortLabel: "Learnings" },
  { id: "peptides", ordinal: "10", label: "Peptides, Specifically", shortLabel: "Peptides" },
  { id: "terms", ordinal: "11", label: "Partnership Terms", shortLabel: "Terms" },
  { id: "next-steps", ordinal: "12", label: "What Happens Next", shortLabel: "Next" },
] as const;
