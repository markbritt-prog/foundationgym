export const PARTNER_NAME = "The Foundation";
export const PARTNER_SUBURB = "Surry Hills";
export const PARTNER_ADDRESS = "350 Bourke Street";
export const PROPOSAL_DATE = "April 2026";

// ─── COMMERCIAL MODEL (unchanged) ────────────────────────────

export const COMMERCIAL = {
  joiningFee: 499,
  joiningDiscount: 0.5,
  memberPaysJoining: 249,
  onlineActivation: 100,
  inPersonActivation: 300,
  monthlyFee: 249,
  foundationMonthlyShare: 10,
  productRevenueShare: 0.05,
  productAvgSpendPerAttached: 3000,
} as const;

// ─── 02 — THE DEAL (reframed panels) ─────────────────────────

export const DEAL_PANELS = [
  {
    ordinal: "01 \u2014 FOUNDATION'S PART",
    title: "What you do",
    lines: [
      "Partner code in the member app and welcome sequence",
      "One quarterly TMRW event at 350 Bourke",
      "One marketing lead as point of contact",
      "Nothing clinical. Nothing operational. Nothing you're not already doing.",
    ],
    footnote: "We're asking Foundation to introduce. Everything that happens after that sits with us.",
  },
  {
    ordinal: "02 \u2014 THE MEMBER OFFER",
    title: "What your members get",
    lines: [
      "50% off TMRW joining fee \u2014 $249, not $499",
      "Priority scheduling at TMRW collection centres",
      "The full longevity programme, itemised below ($7,500 value)",
      "Protocols designed to integrate with their Foundation training",
    ],
    footnote: "Members bill TMRW directly. Foundation never touches a clinical transaction.",
  },
  {
    ordinal: "03 \u2014 TMRW'S PART",
    title: "What we do",
    lines: [
      "Every member, onboarded, serviced, and supported by us",
      "Credentialled clinicians, compounding pharmacy, prescribing pathway",
      "Full indemnity and product liability sit with TMRW",
      "Member comms, bookings, billing, fulfilment \u2014 all of it",
    ],
    footnote: "Foundation introduces. TMRW operates. That's the whole shape of it.",
  },
] as const;

export const DEAL_ECONOMICS = {
  ordinal: "04 \u2014 THE ECONOMICS",
  title: "What Foundation earns",
  rows: [
    { value: "$100", label: "PER ONLINE ACTIVATION", note: "Member signs up with Foundation's partner code" },
    { value: "$300", label: "PER IN-PERSON ACTIVATION", note: "Member activates at a TMRW collection centre" },
    { value: "$10", label: "PER ACTIVE MEMBER / MONTH", note: "Ongoing, for the life of their TMRW membership" },
    { value: "5%", label: "OF TMRW PRODUCT REVENUE", note: "Per member, on supplements, peptides, retests" },
  ],
  footnote: "Modest on paper. The real return is in the section next door \u2014 what this does to your retention.",
} as const;

// ─── 04 — MEMBER JOURNEY ─────────────────────────────────────

export const JOURNEY_STEPS = [
  {
    step: "01",
    title: "Sign Up",
    desc: "Member signs up at startmytomorrow.com with Foundation's partner code, or books into a TMRW collection centre. 50% off joining applied automatically.",
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
    title: "Bloods",
    desc: "TMRW phlebotomist takes bloods at the member\u2019s nearest collection centre. Scheduling worked around their Foundation training week.",
    time: "15 min",
  },
  {
    step: "04",
    title: "Dashboard + First Supplements",
    desc: "Full comprehensive bloods dashboard with AI interactivity. First personalised supplement pods shipped direct to the member.",
    time: "Within 1 week",
  },
  {
    step: "05",
    title: "Epigenetic Results + Plan",
    desc: "Full epigenetic results including disease risk and system scores. Complete Better TMRW plan \u2014 shareable with their Foundation coach.",
    time: "2\u20133 weeks",
  },
  {
    step: "06",
    title: "Retest + Optimise",
    desc: "Full re-test \u2014 bloods plus epigenetics \u2014 compared against baseline. This is where the pattern becomes visible. Updated protocols, peptide review with TMRW\u2019s prescribing doctor.",
    time: "12 weeks after last test",
  },
  {
    step: "07",
    title: "Ongoing Support",
    desc: "Regular clinical check-ins and preferred access to TMRW\u2019s prescribing peptide doctor. The retest + optimise cycle runs every 12 weeks.",
    time: "Ongoing",
  },
] as const;

// ─── 08 — WHAT WE LEARN ──────────────────────────────────────

export const STAGE1_LEARNINGS = [
  "Conversion rate from Foundation member exposure to activated TMRW member",
  "Channel mix \u2014 what share of activations come online vs in-person",
  "Product attach and spend \u2014 the most sensitive input in the model",
  "The retention effect on Foundation\u2019s cohort \u2014 the number that matters most",
] as const;

// ─── WHAT CHANGES FOR FOUNDATION (unused but kept) ───────────

export const GYM_VALUE = [
  {
    title: "Geographic exclusivity",
    body: `TMRW will not partner with another independent gym in ${PARTNER_SUBURB} for 6 months. ${PARTNER_NAME} is the only premium training environment in the suburb with an integrated precision health offering.`,
  },
  {
    title: "A clinical layer, zero ops",
    body: "A credentialed medical team looking after your members, without a single clinical hire, regulatory filing, or insurance extension from Foundation. You introduce, we operate.",
  },
  {
    title: "ARPU where the ceiling is low",
    body: "A gym membership has a price ceiling. TMRW adds a revenue line for every active Foundation member, for the life of their TMRW membership, without changing anything about how Foundation operates.",
  },
] as const;

// ─── 10 — TERMS ──────────────────────────────────────────────

export const TERMS_STAGE1 = [
  { label: "Type", value: "Referral channel partnership. TMRW runs the clinic end-to-end." },
  { label: "Exclusivity", value: `Sole TMRW gym partner in ${PARTNER_SUBURB} for first 6 months` },
  { label: "Term", value: "3 years from go-live" },
  { label: "Attribution", value: "Foundation-assigned partner code. Used for online signup and at TMRW collection centre booking." },
  { label: "Member pricing", value: "$249 joining (50% off), $249 per month thereafter" },
  { label: "Foundation revenue lines", value: "$100 per online activation + $300 per in-person activation + $10 per active member per month + 5% of TMRW product revenue per member" },
  { label: "Setup fee", value: "None" },
  { label: "Clinical liability", value: "TMRW. Foundation carries none." },
  { label: "Co-branded events", value: "4 per year at 350 Bourke. TMRW provides speakers and content." },
  { label: "Co-launch marketing", value: "Coordinated social launch. TMRW provides creative, assets, and paid budget." },
  { label: "In-gym visibility", value: "Modest partner mark. No dedicated signage, screens, or staff script required." },
  { label: "Influencer activation", value: "TMRW runs the ambassador programme and funds content production. Foundation members with reach invited in." },
  { label: "Data and privacy", value: "Clinical record sits with TMRW. Australian Privacy Act." },
  { label: "Termination", value: "Either party, 30 days written notice" },
] as const;

// ─── 11 — NEXT STEPS ─────────────────────────────────────────

export const NEXT_STEPS = [
  {
    step: "01",
    title: "Founders\u2019 conversation",
    desc: "Thirty minutes, founders to founders. We align on the shape, adjust anything that doesn\u2019t feel right, and confirm the launch plan.",
    timeline: "This week",
  },
  {
    step: "02",
    title: "Launch preparation",
    desc: "Partner code issued. Member-facing assets produced \u2014 email copy, in-app messages, in-class script, launch social. TMRW briefs the clinical team. Foundation schedules the launch event.",
    timeline: "1\u20132 weeks",
  },
  {
    step: "03",
    title: "Go live",
    desc: "Launch across Foundation\u2019s channels with a co-branded event at 350 Bourke. Members sign up, onboard, and start their programme.",
    timeline: "Week 3",
  },
] as const;

// ─── NAV (legacy, not used) ──────────────────────────────────

export const NAV_SECTIONS = [
  { id: "what-youve-built", label: "01 \u2014 WHAT YOU'VE BUILT" },
  { id: "deal", label: "02 \u2014 HOW THIS WORKS" },
  { id: "compounding-benefit", label: "03 \u2014 COMPOUNDING BENEFIT" },
  { id: "member-journey", label: "04 \u2014 JOURNEY" },
  { id: "value-stack", label: "05 \u2014 PROGRAMME" },
  { id: "financial", label: "06 \u2014 ECONOMICS" },
  { id: "launching-together", label: "07 \u2014 LAUNCHING" },
  { id: "learnings", label: "08 \u2014 LEARNINGS" },
  { id: "peptides", label: "09 \u2014 PEPTIDES" },
  { id: "terms", label: "10 \u2014 TERMS" },
  { id: "next-steps", label: "11 \u2014 NEXT" },
] as const;
