export interface NavSection {
  id: string;
  ordinal: string;
  label: string;
  shortLabel: string;
}

export const SECTIONS: readonly NavSection[] = [
  { id: "what-youve-built", ordinal: "01", label: "What You've Built", shortLabel: "Your Members" },
  { id: "deal", ordinal: "02", label: "How This Works", shortLabel: "The Deal" },
  { id: "compounding-benefit", ordinal: "03", label: "The Compounding Benefit", shortLabel: "Retention" },
  { id: "member-journey", ordinal: "04", label: "The Member Journey", shortLabel: "Journey" },
  { id: "value-stack", ordinal: "05", label: "The Longevity Programme", shortLabel: "Programme" },
  { id: "financial", ordinal: "06", label: "The Economics", shortLabel: "Economics" },
  { id: "launching-together", ordinal: "07", label: "Launching Together", shortLabel: "Launch" },
  { id: "learnings", ordinal: "08", label: "What We Learn", shortLabel: "Learnings" },
  { id: "peptides", ordinal: "09", label: "Peptides, Specifically", shortLabel: "Peptides" },
  { id: "terms", ordinal: "10", label: "Partnership Terms", shortLabel: "Terms" },
  { id: "next-steps", ordinal: "11", label: "What Happens Next", shortLabel: "Next" },
] as const;
