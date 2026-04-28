export interface NavSection {
  id: string;
  ordinal: string;
  label: string;
  shortLabel: string;
}

export const SECTIONS: readonly NavSection[] = [
  { id: "what-youve-built", ordinal: "01", label: "What You've Built", shortLabel: "Your Members" },
  { id: "why-now", ordinal: "02", label: "Why Now", shortLabel: "Why Now" },
  { id: "deal", ordinal: "03", label: "How This Works", shortLabel: "The Deal" },
  { id: "compounding-benefit", ordinal: "04", label: "The Compounding Benefit", shortLabel: "Retention" },
  { id: "member-journey", ordinal: "05", label: "The Member Journey", shortLabel: "Journey" },
  { id: "customer-proposition", ordinal: "06", label: "The Member Offer", shortLabel: "Offer" },
  { id: "value-stack", ordinal: "07", label: "The Longevity Programme", shortLabel: "Programme" },
  { id: "financial", ordinal: "08", label: "The Economics", shortLabel: "Economics" },
  { id: "launching-together", ordinal: "09", label: "Launching Together", shortLabel: "Launch" },
  { id: "peptides", ordinal: "10", label: "Peptides, Specifically", shortLabel: "Peptides" },
  { id: "terms", ordinal: "11", label: "Partnership Terms", shortLabel: "Terms" },
  { id: "next-steps", ordinal: "12", label: "What Happens Next", shortLabel: "Next" },
] as const;
