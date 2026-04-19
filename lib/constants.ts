export const PARTNER_NAME = "The Foundation";
export const PARTNER_SUBURB = "Surry Hills";
export const PROPOSAL_DATE = "April 2026";

// ─── COMMERCIAL MODEL (canonical, two-tier activation) ───────

export const COMMERCIAL = {
  joiningFee: 499,
  joiningDiscount: 0.5,
  memberPaysJoining: 249,

  // Two-tier activation revenue to Foundation:
  onlineActivation: 100,         // member signs up online with Foundation's partner code
  inPersonActivation: 300,       // member activates at a TMRW collection centre (Foundation code attributed)

  monthlyFee: 249,
  foundationMonthlyShare: 10,    // per active TMRW member, per month, for life of membership
  productRevenueShare: 0.05,     // 5% of TMRW product revenue per active member
  productAvgSpendPerAttached: 3000,
} as const;

// ─── 04 — THE DEAL ON ONE SCREEN ─────────────────────────────

export const DEAL_PANELS = [
  {
    ordinal: "01 \u2014 THE CHANNEL",
    title: "Foundation introduces",
    lines: [
      "Partner code activated across member channels",
      "Email, app, in-class mentions, new-member onboarding",
      "Featured in Foundation\u2019s email newsletter and member comms",
      "One TMRW event per quarter at 350 Bourke, co-hosted",
    ],
    footnote: "Foundation introduces. TMRW operates. Zero clinical risk, zero capex, zero ops burden on Foundation.",
  },
  {
    ordinal: "02 \u2014 THE MEMBER OFFER",
    title: "Foundation members receive",
    lines: [
      "50% off TMRW joining fee ($249 vs $499)",
      "Priority access and scheduling at TMRW collection centres",
      "The full longevity programme, itemised next",
      "Protocols designed to integrate with Foundation\u2019s training",
    ],
    footnote: "Members bill TMRW directly. No collection, no clinical liability flowing through Foundation.",
  },
  {
    ordinal: "03 \u2014 THE OPERATIONS",
    title: "TMRW runs it all",
    lines: [
      "Member onboarding, booking, billing, fulfilment",
      "Clinical team, prescribing pathway, compounding pharmacy",
      "All bloods drawn at TMRW collection centres",
      "Full indemnity and product liability sit with TMRW",
    ],
    footnote: "No staff briefings, no room, no signage burden, no clinical insurance extension required.",
  },
] as const;

export const DEAL_ECONOMICS = {
  ordinal: "04 \u2014 THE ECONOMICS",
  title: "Foundation earns four ways",
  rows: [
    {
      value: "$100",
      label: "PER ONLINE ACTIVATION",
      note: "Member signs up with Foundation\u2019s partner code",
    },
    {
      value: "$300",
      label: "PER COLLECTION-CENTRE ACTIVATION",
      note: "Member activates in person at a TMRW collection centre",
    },
    {
      value: "$10",
      label: "PER ACTIVE MEMBER / MONTH",
      note: "Ongoing, for life of membership",
    },
    {
      value: "5%",
      label: "OF TMRW PRODUCT REVENUE",
      note: "Per member, on supplements, peptides, retests",
    },
  ],
  footnote: "Longevity programme next. Financial model after.",
} as const;

// ─── 03 — MEMBER JOURNEY ─────────────────────────────────────

export const JOURNEY_STEPS = [
  {
    step: "01",
    title: "Sign Up",
    desc: "Member signs up at startmytomorrow.com with Foundation\u2019s partner code, or books into a TMRW collection centre. 50% off joining fee applied automatically.",
    time: "2 min",
  },
  {
    step: "02",
    title: "Health Story",
    desc: "Complete the TMRW Health Story online \u2014 medical history, goals, training context. Done on their phone before bloods.",
    time: "10 min",
  },
  {
    step: "03",
    title: "Bloods at a TMRW Collection Centre",
    desc: "TMRW phlebotomist takes bloods at the member\u2019s nearest TMRW collection centre. Scheduling optimised around their Foundation training week.",
    time: "15 min",
  },
  {
    step: "04",
    title: "Bloods Dashboard + First Supplements",
    desc: "Full comprehensive bloods dashboard with AI interactivity. First personalised supplement pods selected from 70 clinical-grade ingredients, shipped direct to the member.",
    time: "Within 1 week",
  },
  {
    step: "05",
    title: "Epigenetic Results + Better TMRW Plan",
    desc: "Full epigenetic results including disease risk and system scores. Complete Better TMRW plan including exercise programming, shareable with their Foundation coach.",
    time: "2\u20133 weeks",
  },
  {
    step: "06",
    title: "Retest + Optimise",
    desc: "Full re-test \u2014 bloods plus epigenetics \u2014 compared against baseline. Updated dashboard, protocol refinements, peptide review with TMRW\u2019s prescribing doctor.",
    time: "12 weeks after last test",
  },
  {
    step: "07",
    title: "Ongoing Support",
    desc: "Regular clinical check-ins and preferred access to TMRW\u2019s prescribing peptide doctor. The retest + optimise cycle runs continuously every 12 weeks.",
    time: "Ongoing",
  },
] as const;

// ─── 08 — WHAT WE LEARN ──────────────────────────────────────

export const STAGE1_LEARNINGS = [
  "Conversion rate from Foundation member exposure to activated TMRW member",
  "Channel mix \u2014 what share of activations come online vs in-person at collection centres",
  "Product-line attach and spend \u2014 the most sensitive input in the model",
  "Retention and outcome signal for the Stage-1 cohort over 6 to 12 months",
] as const;

// ─── 10 — WHAT CHANGES FOR FOUNDATION ────────────────────────

export const GYM_VALUE = [
  {
    title: "Geographic exclusivity",
    body: `TMRW will not partner with another independent gym in ${PARTNER_SUBURB} for 6 months. ${PARTNER_NAME} is the only premium training environment in the suburb with an integrated precision health offering. No hedge, no second partner \u2014 this is a commitment.`,
  },
  {
    title: "A clinical layer, zero ops",
    body: "A credentialed medical team looking after your members, without a single clinical hire, regulatory filing, or insurance extension from Foundation. You introduce, we operate. Everything clinical sits with TMRW.",
  },
  {
    title: "ARPU where the ceiling is low",
    body: "A gym membership has a price ceiling. A member whose health trajectory is being measured, interpreted, and actively managed \u2014 that member is in a different category. TMRW adds a revenue line for every active Foundation member, for the life of their TMRW membership, without changing anything about how Foundation operates.",
  },
] as const;

// ─── 10 — TERMS (Stage 1 only) ───────────────────────────────

export const TERMS_STAGE1 = [
  { label: "Type", value: "Referral channel partnership. No TMRW physical presence at Foundation." },
  { label: "Exclusivity", value: `Sole TMRW gym partner in ${PARTNER_SUBURB} for first 6 months` },
  { label: "Term", value: "3 years from go-live" },
  { label: "Attribution", value: "Foundation-assigned partner code. Used for online signup; entered at booking for collection-centre activation." },
  { label: "Member pricing", value: "$249 joining (50% off), $249 per month thereafter" },
  { label: "Foundation revenue lines", value: "$100 per online activation + $300 per collection-centre activation + $10 per active member per month + 5% of TMRW product revenue per active member" },
  { label: "Setup fee", value: "None" },
  { label: "Clinical liability", value: "TMRW. Foundation carries none." },
  { label: "Co-branded events", value: "1 event per quarter at 350 Bourke (4 per year). TMRW provides speakers and content." },
  { label: "Co-launch marketing", value: "Coordinated social launch across both brands. TMRW provides creative, assets, and paid budget." },
  { label: "In-gym visibility", value: "Modest partner mark. No dedicated signage, screens, or staff script required." },
  { label: "Influencer activation", value: "TMRW runs the ambassador programme and funds content production. Foundation members with reach invited into the programme." },
  { label: "Data and privacy", value: "Clinical record sits with TMRW. Australian Privacy Act." },
  { label: "Termination", value: "Either party, 30 days written notice" },
] as const;

// ─── 11 — NEXT STEPS ─────────────────────────────────────────

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
    desc: "Partner code issued. Member-facing assets produced \u2014 email copy, app-message copy, in-class script, launch social. TMRW briefs the clinical team. Foundation schedules the launch event.",
    timeline: "1\u20132 weeks",
  },
  {
    step: "03",
    title: "Go live",
    desc: "Launch across Foundation\u2019s channels with a co-branded event at 350 Bourke. Members sign up, onboard online or at a collection centre, and start their programme. Live.",
    timeline: "Week 3",
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
  { id: "launching-together", label: "07 \u2014 LAUNCHING" },
  { id: "learnings", label: "08 \u2014 LEARNINGS" },
  { id: "peptides", label: "09 \u2014 PEPTIDES" },
  { id: "terms", label: "10 \u2014 TERMS" },
  { id: "next-steps", label: "11 \u2014 NEXT" },
] as const;
