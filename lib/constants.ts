export const PARTNER_NAME = "VRTUS";
export const PARTNER_SUBURB = "Bondi";
export const PROPOSAL_DATE = "April 2026";

// ─── COMMERCIAL MODEL (canonical) ────────────────────────────

export const COMMERCIAL = {
  joiningFee: 499,
  joiningDiscount: 0.5,
  memberPaysJoining: 249,
  vrtusJoiningShare: 249,
  monthlyFee: 249,
  vrtusMonthlyShare: 10,
  productRevenueShare: 0.1,
  productAvgSpendPerAttached: 3000,
} as const;

// ─── 03 — THE DEAL ON ONE SCREEN ─────────────────────────────

export const DEAL_PANELS = [
  {
    ordinal: "01 \u2014 THE SPACE",
    title: "VRTUS provides",
    lines: [
      "A dedicated room upstairs",
      "7\u201310am access, 3 days per week",
      "6-month launch term",
      "Co-branded signage and member comms",
    ],
    footnote: "Optional extension to 6 hours per day within the term if volume supports it.",
  },
  {
    ordinal: "02 \u2014 THE CLINIC",
    title: "TMRW brings",
    lines: [
      "Phlebotomist and credentialed clinician",
      "All equipment, consumables, clinical governance",
      "Member app, billing, clinical support",
      "Full indemnity, zero capex to VRTUS",
    ],
    footnote: "All clinical risk sits with TMRW under its clinical standard.",
  },
  {
    ordinal: "03 \u2014 THE MEMBER OFFER",
    title: "VRTUS members receive",
    lines: [
      "Joining fee reduced to $249 from $499",
      "Priority onboarding at the VRTUS Hub",
      "The full longevity programme, itemised next",
      "3 epigenetic retests, blood panel, peptide consult included",
    ],
    footnote: "Members bill TMRW directly. No collection, no clinical liability flowing through VRTUS.",
  },
] as const;

export const DEAL_ECONOMICS = {
  ordinal: "04 \u2014 THE ECONOMICS",
  title: "VRTUS earns three ways",
  rows: [
    {
      value: "$249",
      label: "PER ACTIVATION",
      note: "Paid on joining",
    },
    {
      value: "$10",
      label: "PER ACTIVE MEMBER / MONTH",
      note: "Ongoing, for life of membership",
    },
    {
      value: "10%",
      label: "OF TMRW PRODUCT REVENUE",
      note: "Per member, on supplements, peptides, retests",
    },
  ],
  footnote: "Longevity programme next. Financial model after.",
} as const;

// ─── 08 — MEMBER JOURNEY ─────────────────────────────────────

export const JOURNEY_STEPS = [
  {
    step: "01",
    title: "Sign Up",
    desc: "Member registers at VRTUS or online with partner code. 50% off joining fee applied automatically.",
    time: "2 min",
  },
  {
    step: "02",
    title: "Health Story",
    desc: "Complete the TMRW Health Story online or at the VRTUS Hub \u2014 medical history, goals, lifestyle. Done on their phone between sessions.",
    time: "10 min",
  },
  {
    step: "03",
    title: "VRTUS Hub",
    desc: "TMRW phlebotomist takes bloods at the VRTUS Hub upstairs. No fasting drama \u2014 we schedule around their training.",
    time: "15 min",
  },
  {
    step: "04",
    title: "Bloods Dashboard + First Supplements",
    desc: "Full comprehensive bloods dashboard with AI interactivity. First personalised supplement pods selected from 70 clinical-grade ingredients, delivered to the Hub.",
    time: "Within 1 week",
  },
  {
    step: "05",
    title: "Epigenetic Results + Better TMRW Plan",
    desc: "Full epigenetic results including disease risk and system scores. Complete Better TMRW plan including exercise programming, shareable directly with their VRTUS personal trainer.",
    time: "2\u20133 weeks",
  },
  {
    step: "06",
    title: "Retest + Optimise",
    desc: "Full re-test \u2014 bloods plus epigenetics \u2014 compared against baseline. Updated dashboard, protocol refinements, peptide review with TMRW\u2019s prescribing doctor at the Hub.",
    time: "12 weeks after last test",
  },
  {
    step: "07",
    title: "Ongoing Support",
    desc: "Regular clinical check-ins at the Hub and preferred access to TMRW\u2019s prescribing peptide doctor. The retest + optimise cycle runs continuously every 12 weeks.",
    time: "Ongoing",
  },
] as const;

// ─── 09 — WHAT WE LEARN ──────────────────────────────────────

export const STAGE1_LEARNINGS = [
  "Conversion rate from VRTUS member exposure to activated TMRW member",
  "Product-line attach and spend \u2014 the most sensitive input in the model",
  "Hub utilisation and the economics of the clinician rotation",
  "Retention and outcome signal for the Stage-1 cohort over 6 to 12 months",
] as const;

// ─── 11 — WHAT CHANGES FOR VRTUS ─────────────────────────────

export const GYM_VALUE = [
  {
    title: "Geographic exclusivity",
    body: `TMRW will not partner with another independent gym in ${PARTNER_SUBURB} for 6 months. ${PARTNER_NAME} is the only premium gym in the suburb with an integrated precision health offering. No hedge, no second partner \u2014 this is a commitment.`,
  },
  {
    title: "A clinical layer, without the clinic",
    body: "A credentialed medical team operating inside VRTUS, without a single clinical hire, regulatory filing, or insurance extension from your side. What Life Time built internally over 3 years is available from week 1, at zero capex.",
  },
  {
    title: "ARPU at the category level, not the feature level",
    body: "A member paying $70 a week for a gym cannot be charged meaningfully more for the gym. A member whose health trajectory is being measured, interpreted, and actively managed \u2014 that member is in a different category. The path from fitness access to integrated health is how premium operators grow ARPU from here. TMRW is the mechanism.",
  },
] as const;

// ─── 12 — TERMS (Stage 1 only) ───────────────────────────────

export const TERMS_STAGE1 = [
  { label: "Type", value: "Referral channel + TMRW Hub at VRTUS" },
  { label: "Exclusivity", value: `Sole TMRW gym partner in ${PARTNER_SUBURB} for first 6 months` },
  { label: "Term", value: "3 years from go-live" },
  { label: "Hub access", value: "Upstairs room, 7\u201310am, 3 days per week" },
  { label: "Extension option", value: "Up to 6 hours per day within the term, volume dependent" },
  { label: "Member pricing", value: "$249 joining (50% off), $249 per month thereafter" },
  { label: "VRTUS revenue lines", value: "$249 per activation + $10 per active member per month + 10% of TMRW product revenue per active member" },
  { label: "Setup fee", value: "None" },
  { label: "Clinical liability", value: "TMRW (credentialed staff under TMRW governance)" },
  { label: "Co-branded events", value: "3 events during the launch period. TMRW provides speakers and content." },
  { label: "Co-launch marketing", value: "Coordinated social launch across both brands. TMRW provides creative, assets, and paid budget." },
  { label: "In-gym visibility", value: "Digital screen loop, entry signage, member comms." },
  { label: "Influencer activation", value: "TMRW runs the ambassador programme and funds content production." },
  { label: "Data and privacy", value: "Clinical record sits with TMRW. Australian Privacy Act." },
  { label: "Termination", value: "Either party, 30 days written notice" },
] as const;

// ─── 13 — NEXT STEPS ─────────────────────────────────────────

export const NEXT_STEPS = [
  {
    step: "01",
    title: "Founders alignment",
    desc: "A conversation between founders. We align on the shape, adjust anything that doesn\u2019t feel right, and confirm the launch plan.",
    timeline: "This week",
  },
  {
    step: "02",
    title: "Launch preparation",
    desc: "Hub fit-out in the upstairs room, staff briefing, partner-code setup, launch creative and PR plan. TMRW produces co-branded collateral and briefs the clinical team.",
    timeline: "2\u20133 weeks",
  },
  {
    step: "03",
    title: "Go live",
    desc: "Launch with a co-branded event at VRTUS. Members sign up, complete their Health Story, and have their first bloods taken at the Hub. Live.",
    timeline: "Week 4",
  },
] as const;

// ─── NAV ──────────────────────────────────────────────────────

export const NAV_SECTIONS = [
  { id: "proposition", label: "01 \u2014 PROPOSITION" },
  { id: "why-now", label: "02 \u2014 WHY NOW" },
  { id: "member-journey", label: "03 \u2014 JOURNEY" },
  { id: "deal", label: "04 \u2014 THE DEAL" },
  { id: "value-stack", label: "05 \u2014 PROGRAMME" },
  { id: "financial", label: "06 \u2014 FINANCIAL" },
  { id: "hub", label: "07 \u2014 THE HUB" },
  { id: "launching-together", label: "08 \u2014 LAUNCHING" },
  { id: "learnings", label: "09 \u2014 LEARNINGS" },
  { id: "peptides", label: "10 \u2014 PEPTIDES" },
  { id: "terms", label: "11 \u2014 TERMS" },
  { id: "next-steps", label: "12 \u2014 NEXT" },
] as const;
