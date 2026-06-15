export const PARTNER_NAME = "The Foundation";
export const PARTNER_SUBURB = "Surry Hills";
export const PARTNER_ADDRESS = "350 Bourke Street";
export const PROPOSAL_DATE = "April 2026";

// ─── COMMERCIAL MODEL ────────────────────────────────────────

export const COMMERCIAL = {
  // Public retail — joining fee waived across the board.
  joiningFee: 0,
  weeklyFee: 69,
  monthlyFee: 299, // weeklyFee * 52 / 12, rounded
  // Public retail before the simplification (referenced in the
  // member-offer comparison panel).
  previousJoiningFee: 499,
  previousMonthlyFee: 249,
  // Foundation’s referral economics.
  foundationActivation: 75,
  foundationMonthlyShare: 15,
  productRevenueShare: 0.05,
  productAvgSpendPerAttached: 3000,
} as const;

// ─── 02 — THE DEAL (reframed panels) ─────────────────────────

export const DEAL_PANELS = [
  {
    ordinal: "01 — FOUNDATION'S PART",
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
    ordinal: "02 — THE MEMBER OFFER",
    title: "What your members get",
    lines: [
      "No joining fee today — we’re still testing whether to bring one back",
      "$69 a week, all in",
      "The full longevity programme, itemised later ($7,500 value)",
      "Complimentary session with a performance nutritionist or peptide doctor",
      "Protocols designed to integrate with their Foundation training",
    ],
    footnote: "Members bill TMRW directly. Foundation never touches a clinical transaction.",
  },
  {
    ordinal: "03 — TMRW'S PART",
    title: "What we do",
    lines: [
      "Every member, onboarded, serviced, and supported by us",
      "Credentialled clinicians, compounding pharmacy, prescribing pathway",
      "Full indemnity and product liability sit with TMRW",
      "Member comms, bookings, billing, fulfilment — all of it",
    ],
    footnote: "Foundation introduces. TMRW operates. That's the whole shape of it.",
  },
] as const;

export const DEAL_ECONOMICS = {
  ordinal: "04 — THE ECONOMICS",
  title: "What Foundation earns",
  rows: [
    { value: "$75", label: "PER ACTIVATION", note: "Member signs up via Foundation’s partner code" },
    { value: "$15", label: "PER ACTIVE MEMBER / MONTH", note: "Ongoing, for the life of their TMRW membership" },
    { value: "5%", label: "OF TMRW PRODUCT REVENUE", note: "Per member, on supplements, peptides, retests" },
  ],
  footnote: "Modest on paper. The real return is in the section next door — what this does to your retention.",
} as const;

// ─── 04 — MEMBER JOURNEY ─────────────────────────────────────

export const JOURNEY_STEPS = [
  {
    step: "01",
    title: "Sign Up",
    desc: "Member signs up at startmytomorrow.com with Foundation’s partner code, or books into a TMRW collection centre. No joining fee — same for everyone.",
    time: "2 min",
  },
  {
    step: "02",
    title: "Health Story",
    desc: "Complete the TMRW Health Story online — medical history, goals, training context. Done on their phone before bloods.",
    time: "10 min",
  },
  {
    step: "03",
    title: "Bloods",
    desc: "TMRW phlebotomist takes bloods at the member’s nearest collection centre. Scheduling worked around their Foundation training week.",
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
    desc: "Full epigenetic results including disease risk and system scores. Complete Better TMRW plan — shareable with their Foundation coach.",
    time: "2–3 weeks",
  },
  {
    step: "06",
    title: "Retest + Optimise",
    desc: "Full re-test — bloods plus epigenetics — compared against baseline. This is where the pattern becomes visible. Updated protocols, peptide review with TMRW’s prescribing doctor.",
    time: "12 weeks after last test",
  },
  {
    step: "07",
    title: "Ongoing Support",
    desc: "Regular clinical check-ins and preferred access to TMRW’s prescribing peptide doctor. The retest + optimise cycle runs every 12 weeks.",
    time: "Ongoing",
  },
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

// ─── 11 — TERMS ──────────────────────────────────────────────

export const TERMS_STAGE1 = [
  { label: "Type", value: "Referral channel partnership. TMRW runs the clinic end-to-end." },
  { label: "Exclusivity", value: `Launch TMRW gym partner in ${PARTNER_SUBURB} for first 6 months` },
  { label: "Term", value: "3 years from go-live" },
  { label: "Attribution", value: "Foundation-assigned partner code. Used at signup." },
  { label: "Member pricing", value: "$69 per week ($299/month). No joining fee currently — TMRW is still testing whether to reintroduce one." },
  { label: "Foundation revenue lines", value: "$75 per activation + $15 per active member per month + 5% of TMRW product revenue per member" },
  { label: "Setup fee", value: "None" },
  { label: "Clinical liability", value: "TMRW. Foundation carries none." },
  { label: "Co-branded events", value: "2–4 per year at 350 Bourke, at Foundation’s choice. TMRW provides speakers and content." },
  { label: "Co-launch marketing", value: "Coordinated social launch. TMRW provides creative, assets, and paid budget." },
  { label: "Temporary signage", value: "Modest co-branded signage during the launch period. Comes down when the launch window ends." },
  { label: "Digital device for sign-up", value: "TMRW provides an iPad or similar in-gym for on-the-spot member activation during the launch window." },
  { label: "Influencer visibility", value: "Foundation members with reach invited into TMRW’s ambassador programme. Co-branded content, amplified across both sides." },
  { label: "Data and privacy", value: "Clinical record sits with TMRW. Australian Privacy Act." },
  { label: "Termination", value: "Either party, 30 days written notice" },
] as const;

// ─── 12 — NEXT STEPS ─────────────────────────────────────────

export const NEXT_STEPS = [
  {
    step: "01",
    title: "Alignment between the teams",
    desc: "A working session between the Foundation and TMRW teams. Align on the shape, adjust anything that doesn’t feel right, confirm the launch plan.",
    timeline: "28 April",
  },
  {
    step: "02",
    title: "Launch preparation",
    desc: "Partner code issued. Member-facing assets produced — email copy, in-app messages, in-class script, launch social. TMRW briefs the clinical team. Foundation schedules the launch event.",
    timeline: "Early May",
  },
  {
    step: "03",
    title: "Go live",
    desc: "Launch across Foundation’s channels with a co-branded event at 350 Bourke. Members sign up, onboard, and start their programme.",
    timeline: "Mid-May",
  },
] as const;

// ─── NAV (legacy, not used) ──────────────────────────────────

export const NAV_SECTIONS = [
  { id: "what-youve-built", label: "01 — WHAT YOU'VE BUILT" },
  { id: "why-now", label: "02 — WHY NOW" },
  { id: "deal", label: "03 — HOW THIS WORKS" },
  { id: "compounding-benefit", label: "04 — COMPOUNDING BENEFIT" },
  { id: "member-journey", label: "05 — JOURNEY" },
  { id: "customer-proposition", label: "06 — THE MEMBER OFFER" },
  { id: "value-stack", label: "07 — PROGRAMME" },
  { id: "financial", label: "08 — ECONOMICS" },
  { id: "launching-together", label: "09 — LAUNCHING" },
  { id: "peptides", label: "10 — PEPTIDES" },
  { id: "terms", label: "11 — TERMS" },
  { id: "next-steps", label: "12 — NEXT" },
] as const;
