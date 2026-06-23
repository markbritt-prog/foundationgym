export const PARTNER_NAME = "The Foundation";
export const PARTNER_SUBURB = "Surry Hills";
export const PARTNER_ADDRESS = "350 Bourke Street";
export const PROPOSAL_DATE = "April 2026";

// ─── PLANS — TMRW's two-tier membership ──────────────────────

export const PLANS = [
  {
    key: "brighter",
    name: "Brighter",
    monthlyPrice: 199,
    tagline: "A daily formula, made from your own blood.",
    description:
      "Read in full, compounded from your results, and retested through the year so you can watch it work.",
    lines: [
      "75+ blood markers across 11 organ systems",
      "Estimated biological age and disease risk, from your blood",
      "A medical plan and daily formula compounded to your results",
      "Bloods retested twice a year, formula adjusted every quarter",
      "A doctor and a naturopath on one team, all year",
      "Advanced treatments — hormone, cognitive, peptide — where indicated",
    ],
    footer: "The picture an advanced longevity doctor would build for you — at the price of a membership.",
  },
  {
    key: "cellular",
    name: "Cellular",
    monthlyPrice: 299,
    badge: "DEEPER",
    tagline: "The deepest read of your biology.",
    description:
      "Your cells reveal what your blood can’t — validated against the clocks built at Harvard, Yale and Dunedin.",
    lines: [
      "Biological age, validated and read organ by organ",
      "Disease risk, validated against your cells",
      "Your pace of ageing, tracked year on year, and toxin exposure",
      "1,700+ cellular biomarkers, read three times a year",
      "A doctor consult on every cellular read",
      "Everything in Brighter, included",
      "Advanced treatments — hormone, cognitive, peptide — where indicated",
    ],
    footer: "The only membership that reads your cells. ~$2,600 a year of testing, included.",
  },
] as const;

// ─── COMMERCIAL MODEL ────────────────────────────────────────

export const COMMERCIAL = {
  // Public retail history (referenced in the before/after panel).
  previousJoiningFee: 499,
  previousMonthlyFee: 249,

  // No joining fee. TMRW dropped it across the board — meaningful
  // inhibitor to growth, so we’ve made it easier to start.
  joiningFee: 0,

  // Per-plan public prices.
  brighterMonthlyPrice: 199,
  cellularMonthlyPrice: 299,

  // Per-plan Foundation referral economics.
  brighterFoundationActivation: 50,
  brighterFoundationQuarterly: 50,        // paid quarterly in arrears (churn-dependent)
  cellularFoundationActivation: 75,
  cellularFoundationMonthlyShare: 15,

  // Blended economics assuming a 50/50 Brighter/Cellular mix.
  // Used by the financial calculator.
  foundationActivationBlended:
    (50 + 75) / 2,                        // $62.50 per activation
  foundationMonthlyShareBlended:
    (50 / 3 + 15) / 2,                    // ≈ $15.83 per active member / month

  // Product revenue share (incl. peptides) is the third Foundation
  // revenue line, on top of the plan economics.
  productRevenueShare: 0.05,
  productAvgSpendPerAttached: 3000,
} as const;

// ─── 03 — THE DEAL (reframed panels) ─────────────────────────

export const DEAL_PANELS = [
  {
    ordinal: "01 — FOUNDATION'S PART",
    title: "What you do",
    lines: [
      "Partner code in the member app and welcome sequence",
      "One quarterly TMRW event at 350 Bourke",
      "Host 2–3 on-site activation events during the launch window",
      "One marketing lead as point of contact",
      "Nothing clinical. Nothing operational beyond hosting.",
    ],
    footnote: "We’re asking Foundation to introduce. Everything that happens after that sits with us.",
  },
  {
    ordinal: "02 — THE MEMBER OFFER",
    title: "What your members get",
    lines: [
      "Their choice of Brighter ($199/mo) or Cellular ($299/mo)",
      "No joining fee — dropped across the board",
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
      "Phlebotomists on-site for the activation events at 350 Bourke",
      "Credentialled clinicians, compounding pharmacy, prescribing pathway",
      "Full indemnity and product liability sit with TMRW",
    ],
    footnote: "Foundation introduces. TMRW operates. That’s the whole shape of it.",
  },
] as const;

export const DEAL_ECONOMICS = {
  ordinal: "04 — THE ECONOMICS",
  title: "What Foundation earns",
  rows: [
    {
      value: "$50",
      label: "PER BRIGHTER ACTIVATION",
      note: "+ $50 per active Brighter member, paid quarterly in arrears",
    },
    {
      value: "$75",
      label: "PER CELLULAR ACTIVATION",
      note: "+ $15 per active Cellular member, paid monthly",
    },
    {
      value: "5%",
      label: "OF TMRW PRODUCT REVENUE",
      note: "Per member, on supplements, peptides, retests",
    },
  ],
  footnote: "Modest on paper. The real return is in the section next door — what this does to your retention.",
} as const;

// ─── 05 — MEMBER JOURNEY ─────────────────────────────────────

export const JOURNEY_STEPS = [
  {
    step: "01",
    title: "Sign Up",
    desc: "Member signs up at startmytomorrow.com with Foundation’s partner code, picks Brighter or Cellular, or activates on-site at a TMRW pop-up event. No joining fee — same for everyone.",
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
    desc: "TMRW phlebotomist takes bloods on-site at 350 Bourke (during activation events) or at the member’s nearest collection centre. Scheduling worked around their Foundation training week.",
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
    title: "Cellular + Plan",
    desc: "For Cellular members: 1,700+ cellular markers read against the Harvard/Yale/Dunedin clocks. For everyone: complete Better TMRW plan — shareable with their Foundation coach.",
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

// ─── LAUNCH INCENTIVE OPTIONS (ideas for discussion) ─────────

export const LAUNCH_INCENTIVE_OPTIONS = [
  {
    label: "Option A — Standard",
    body: "Run the economics above as-is. No joining fee for any member, the revenue share runs from day one, and the launch sells itself on the new pricing alone.",
  },
  {
    label: "Option B — 50% off first one or two months",
    body: "Foundation members get their first one or two months at half price, then revert to the standard $199 (Brighter) or $299 (Cellular). TMRW absorbs the discount.",
  },
  {
    label: "Option C — First month of Brighter free",
    body: "Every new Foundation member gets their first month of Brighter included in the gym offer. TMRW absorbs the supplement and clinical cost. Foundation forgoes the $50 activation payment for that signup — so the member gets the value instead of the channel.",
  },
] as const;

// ─── 11 — TERMS ──────────────────────────────────────────────

export const TERMS_STAGE1 = [
  { label: "Type", value: "Referral channel partnership. TMRW runs the clinic end-to-end." },
  { label: "Exclusivity", value: `Launch TMRW gym partner in ${PARTNER_SUBURB} for first 6 months` },
  { label: "Term", value: "3 years from go-live" },
  { label: "Attribution", value: "Foundation-assigned partner code. Used at signup or at on-site activation events." },
  { label: "Member pricing", value: "Brighter $199/mo. Cellular $299/mo. No joining fee — TMRW is still testing whether to reintroduce one." },
  { label: "Foundation revenue lines", value: "Brighter: $50 per activation + $50 per active member per quarter (in arrears). Cellular: $75 per activation + $15 per active member per month. Plus 5% of TMRW product revenue (incl. peptides) per member." },
  { label: "Setup fee", value: "None" },
  { label: "Clinical liability", value: "TMRW. Foundation carries none." },
  { label: "On-site activation events", value: "2–3 TMRW pop-ups at 350 Bourke during the launch window. TMRW supplies phlebotomist, kit, and on-the-day signage." },
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
    desc: "Partner code issued. On-site event dates locked. Member-facing assets produced — email copy, in-app messages, in-class script, launch social. TMRW briefs the clinical team and schedules phlebotomists.",
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
