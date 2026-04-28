"use client";

import {
  PARTNER_NAME,
  PARTNER_SUBURB,
  PROPOSAL_DATE,
  DEAL_PANELS,
  DEAL_ECONOMICS,
  JOURNEY_STEPS,
  TERMS_STAGE1,
  NEXT_STEPS,
} from "@/lib/constants";

function generateMarkdown(): string {
  const l: string[] = [];
  const push = (...lines: string[]) => lines.forEach((x) => l.push(x));
  const blank = () => l.push("");

  // Header
  push(`# TMRW \u00d7 ${PARTNER_NAME} \u2014 Partnership Proposal`);
  blank();
  push(
    `*A partnership proposal from TMRW to ${PARTNER_NAME}. ${PARTNER_SUBURB}, ${PROPOSAL_DATE}.*`
  );
  blank();
  push("> Come down. Get measured. Rise up with a plan.");
  blank();
  push("---");
  blank();

  // 01 What You've Built
  push("## 01 \u2014 What You\u2019ve Built");
  blank();
  push("**Come down. Get measured. Rise up with a plan.**");
  blank();
  push(
    "You call yourselves Longevity Specialists. Train like an athlete at any age. Live stronger for longer. But the fitness layer alone can only take a member so far toward it."
  );
  blank();
  push(
    `Your members have already made the investment to train at Bourke Street. They chose ${PARTNER_NAME} because they wanted real coaching, real programming, real outcomes, real community. The work they\u2019re putting in is changing their biology \u2014 in ways they can\u2019t see, and can\u2019t feel, until years later.`
  );
  blank();
  push(
    "We run the clinical layer. Bloods, epigenetic testing, personalised protocols, prescribing, supplements. End-to-end. The thing you\u2019ve positioned yourselves toward, operated by us, for your members."
  );
  blank();
  push(
    `No other independent gym in ${PARTNER_SUBURB} has this. We think ${PARTNER_NAME} should be the pilot.`
  );
  blank();
  push(
    "The integrated model is proven internationally \u2014 [Life Time\u2019s MIORA](https://miora.lifetime.life/), [Equinox \u00d7 Function Health](https://www.functionhealth.com/campaign/equinox-function-health), [Fountain Life](https://www.fountainlife.com/). Each was built bespoke, over years, on proprietary clinical infrastructure. " +
      `${PARTNER_NAME} doesn\u2019t need to build anything. We already did.`
  );
  blank();
  push("---");
  blank();

  // 02 Why Now
  push("## 02 \u2014 Why Now");
  blank();
  push("**The category has shifted.**");
  blank();
  push(
    `Health and fitness spending in Australia rose 27% year-on-year in early 2025 against broader discretionary declines. Fitness has moved from a discretionary purchase to essential lifestyle maintenance. The ${PARTNER_NAME} member already pays a premium for outcomes. The question is whether the category next to fitness \u2014 longevity, diagnostics, protocol-driven health \u2014 sits adjacent to ${PARTNER_NAME}, or somewhere else.`
  );
  blank();
  push(
    "Facility and training revenue is largely capped. Your members are already at the top of what a gym membership alone can charge. The only remaining lever for meaningful ARPU growth is a category shift \u2014 from fitness access to integrated health."
  );
  blank();
  push(
    `Internationally, the integrated model is proven. [Life Time\u2019s MIORA](https://miora.lifetime.life/), [Equinox\u2019s partnership with Function Health](https://www.functionhealth.com/campaign/equinox-function-health), [Fountain Life](https://www.fountainlife.com/). Each was built bespoke over years on proprietary clinical infrastructure. What Australia has lacked is the platform that lets a premium operator run the integrated model without having to build the clinic. That\u2019s what TMRW is \u2014 and ${PARTNER_NAME} in ${PARTNER_SUBURB} is where we want to prove it.`
  );
  blank();
  push(
    "This is especially true for peptides, where consumer demand has already moved into the mainstream and where the prescribing infrastructure \u2014 not the regulation \u2014 is what separates a legitimate clinical offering from a grey-market risk most gym members shouldn\u2019t be taking."
  );
  blank();
  push("---");
  blank();

  // 03 Deal
  push("## 03 \u2014 How This Works");
  blank();
  push("**Foundation introduces. TMRW operates.**");
  blank();
  push("The whole deal, on one screen.");
  blank();
  for (const p of DEAL_PANELS) {
    push(`### ${p.ordinal}`);
    blank();
    push(`**${p.title}**`);
    blank();
    for (const line of p.lines) push(`- ${line}`);
    blank();
    push(`*${p.footnote}*`);
    blank();
  }
  push(`### ${DEAL_ECONOMICS.ordinal}`);
  blank();
  push(`**${DEAL_ECONOMICS.title}**`);
  blank();
  for (const r of DEAL_ECONOMICS.rows) {
    push(`- **${r.value}** \u2014 ${r.label} *(${r.note})*`);
  }
  blank();
  push(`*${DEAL_ECONOMICS.footnote}*`);
  blank();
  push("---");
  blank();

  // 04 Compounding Benefit
  push("## 04 \u2014 The Compounding Benefit");
  blank();
  push("**The member who can see their biology change doesn\u2019t cancel.**");
  blank();
  push(
    `Every ${PARTNER_NAME} member who does this with us is a member who can see, in data, what their training is actually doing. Six months in, their epigenetic age drops. Twelve months in, their biomarkers shift. They attribute that to you, and to us. Both.`
  );
  blank();
  push(
    "We want to be honest: we haven\u2019t proven this out at scale yet. The launch window is partly designed to measure it. But the logic is clean \u2014 a member on an integrated protocol doesn\u2019t churn out of either side. Fitness alone churns. Supplements alone churn. Fitness plus measured biology plus personalised protocols? That\u2019s different."
  );
  blank();
  push(
    `Our working hypothesis: ${PARTNER_NAME}\u2019s retention across the TMRW cohort improves by **15 to 25 percent** over 12 months. We\u2019d love to prove that together over 12 months.`
  );
  blank();
  push(
    "This is the part of the partnership we\u2019re actually most interested in finding out about."
  );
  blank();
  push("---");
  blank();

  // 05 Member Journey
  push("## 05 \u2014 The Member Journey");
  blank();
  for (const s of JOURNEY_STEPS) {
    push(`**Step ${s.step}: ${s.title}** *(${s.time})*`);
    blank();
    push(s.desc);
    blank();
  }
  push("---");
  blank();

  // 06 Customer Proposition
  push("## 06 \u2014 The Member Offer");
  blank();
  push("**What your members pay.**");
  blank();
  push(
    `Public retail pricing on the left. The ${PARTNER_NAME} member offer on the right. Same programme, same monthly price, half the joining fee.`
  );
  blank();
  push("| | Public retail | Foundation members |");
  push("| --- | --- | --- |");
  push("| Joining fee | $499 (one-off) | **$249** (50% off, save $250) |");
  push("| Monthly | $249 | $249 |");
  push("| Weekly equivalent | ~$57 / week | ~$57 / week |");
  blank();
  push("*What that membership actually buys, itemised next.*");
  blank();
  push("---");
  blank();

  // 07 Programme
  push("## 07 \u2014 The Longevity Programme");
  blank();
  push("**What the member gets.**");
  blank();
  push(
    `What a ${PARTNER_NAME} member receives in year one, and what they\u2019d pay for equivalent care elsewhere in Australia.`
  );
  blank();
  push("| Item | Qty | Retail / unit | Subtotal |");
  push("| --- | --- | --- | --- |");
  push("| Epigenetic age testing (TruAge / TruHealth bundle) | 3 \u00d7 | $1,300 | $3,900 |");
  push("| Comprehensive blood panel | 1 \u00d7 | $400 | $400 |");
  push("| Deep-dive clinician consultations | 3 \u00d7 | $220 | $660 |");
  push("| Peptide doctor consultation | 1 \u00d7 | $220 | $220 |");
  push("| Doctor-approved personalised medical plan | 1 \u00d7 | $160 | $160 |");
  push("| Precision supplement protocol | 12 months | $180 | $2,160 |");
  blank();
  push("**Total member value, Year 1: $7,500**");
  blank();
  push("*Assumes full 12-month retention and protocol adherence.*");
  blank();
  push("### The Dials");
  blank();
  push("**Three things we\u2019d like your take on.**");
  blank();
  push(
    "We\u2019ve structured this to go live in three weeks. Before anything gets locked in, there are three dials we\u2019d genuinely like your view on \u2014 we want this to be a shape you\u2019ll push, not a shape you\u2019ll tolerate."
  );
  blank();
  push("01. **The joining-fee discount (50%)** \u2014 is this the hook that\u2019ll actually move your members, or are they price-insensitive enough that we could dial it back to 25%?");
  push("02. **What\u2019s the right additional offer value?** \u2014 peptide consultation, performance nutrition, deep-dive on gut health \u2014 there are several extras we could pull into the member offer to sharpen it. Which one moves your members?");
  push("03. **The revenue share mix ($100 / $300 / $10 / 5%)** \u2014 is this enough for you to actively champion this, or should we stretch it to make sure you\u2019re pushing it hard?");
  blank();
  push("---");
  blank();

  // 07 Economics
  push("## 08 \u2014 The Economics");
  blank();
  push("**Realistic forecasts.**");
  blank();
  push(
    "The interactive calculator on the site updates live against slider inputs across 5 scenarios (Soft Open, Conservative, Base, Strong, Bullish)."
  );
  blank();
  push("**Base-case outputs:**");
  push(`- Year 1 to ${PARTNER_NAME}: 75 new members; +25 each subsequent year.`);
  push("- 5-year run rate compounds as the active cohort builds against 24-month average retention.");
  blank();
  push(
    "Product-line attach and spend assumptions are the model\u2019s most sensitive inputs and have no empirical anchor yet. Base-case attach of 25% assumes members who convert become peptide-tier members at approximately $3,000 annual spend across supplements, compounded peptides, retests, and protocol adjustments. The online-vs-collection-centre channel mix is the second-most sensitive input \u2014 collection-centre activations pay 3\u00d7 online rates, reflecting their higher conversion and lifetime value. The first six months of the launch will confirm or revise these figures."
  );
  blank();
  push("---");
  blank();

  // 08 Launching Together
  push("## 09 \u2014 Launching Together");
  blank();
  push("**Inviting your members on a new journey.**");
  blank();
  push(
    "Your model is clearly more mature and developed than us, but you\u2019re pushing the boundaries on a different approach. We\u2019re not framing this as a partnership between two brands trying to extract from a stable market. The launch should feel like inviting customers to join a new type of journey."
  );
  blank();
  push("### What TMRW drives");
  blank();
  push(
    "The campaign. Co-branded creative and marketing materials for in the gym, PR, and a launch event held at 350 Bourke. All content production \u2014 photography, short-form video, founder interviews, member stories \u2014 on the TMRW budget."
  );
  blank();
  push(
    `Ongoing content. Quarterly storytelling drops featuring ${PARTNER_NAME} members whose protocols produce meaningful change. TMRW\u2019s ambassador network amplifies the launch; members of the ${PARTNER_NAME} community who have reach are introduced into that programme.`
  );
  blank();
  push(`### What ${PARTNER_NAME} provides`);
  blank();
  push(
    `Channels and coordination. ${PARTNER_NAME}\u2019s social accounts and email announcing the partnership in coordinated sequence with TMRW. Partner code in the member app and new-member welcome sequence. One co-branded in-gym launch event, plus one TMRW event per quarter after that.`
  );
  blank();
  push(
    `Member comms and introductions. Warm introductions to ${PARTNER_NAME} members who could be ambassadors or influencer candidates. Founder, coach, and operations team availability for co-branded content days.`
  );
  blank();
  push(
    `A pace-of-aging leaderboard among ${PARTNER_NAME} members. Epigenetic data makes competitive wellness visible and shareable \u2014 the ${PARTNER_SUBURB} gym with the lowest biological age.`
  );
  blank();
  push(
    `One marketing lead as a point of contact. TMRW integrates into the ${PARTNER_NAME} marketing calendar rather than competing with it.`
  );
  blank();
  push("---");
  blank();

  // 09 Peptides
  push("## 10 \u2014 Peptides, Specifically");
  blank();
  push("**Rapidly changing category.**");
  blank();
  push(
    "Peptides have moved from the edges of clinical practice into the mainstream. Consumer demand is ahead of supply \u2014 members are asking, and many are buying from grey-market sources they shouldn\u2019t trust. Global regulatory posture is shifting to match. The United States is in active review of its peptide compounding rules, a process widely expected to broaden clinical access meaningfully through 2026 and 2027. Australia typically follows the US by 18 months to 2 years."
  );
  blank();
  push(
    "TMRW already operates inside Australia\u2019s compliant pathway \u2014 Schedule 4 prescription through our integrative GP and nurse-practitioner network, with fulfilment through licensed Australian compounding pharmacies. This is the infrastructure a gym cannot build in-house."
  );
  blank();
  push(
    "Integrated appropriately \u2014 per individual clinical assessment, never as a default \u2014 peptides are what make the model\u2019s ARPU assumptions real. A member on a peptide protocol is paying substantially more per year than a member on supplements alone, which is why the calculator\u2019s base case assumes approximately $3,000 annual spend at 25% attach."
  );
  blank();
  push("---");
  blank();

  // 10 Terms
  push("## 11 \u2014 Partnership Terms");
  blank();
  push(
    "**Indicative term sheet.** The launch-term shape. Everything below is indicative \u2014 the formal agreement is drafted once we align."
  );
  blank();
  push("| Term | Detail |");
  push("| --- | --- |");
  for (const t of TERMS_STAGE1) push(`| ${t.label} | ${t.value} |`);
  blank();
  push("*Terms are indicative. A formal agreement will be drafted upon agreement in principle.*");
  blank();
  push("---");
  blank();

  // 11 Next Steps
  push("## 12 \u2014 What Happens Next");
  blank();
  push("**3 steps to launch.**");
  blank();
  for (const s of NEXT_STEPS) {
    push(`### Step ${s.step} \u2014 ${s.title} *(${s.timeline})*`);
    blank();
    push(s.desc);
    blank();
  }
  push("---");
  blank();

  // Footer
  push("**TMRW**");
  blank();
  push("*The doctor will see you now.*");
  blank();
  push("Precision health. Personalised protocols. Brighter tomorrows.");
  blank();
  push("[startmytomorrow.com](https://startmytomorrow.com)");
  blank();
  push(
    `*This document is confidential and prepared exclusively for ${PARTNER_NAME}.*`
  );

  return l.join("\n");
}

interface DownloadMarkdownProps {
  inlineInDropdown?: boolean;
  inverted?: boolean;
}

export function DownloadMarkdown({
  inlineInDropdown,
  inverted,
}: DownloadMarkdownProps = {}) {
  const handleDownload = () => {
    const markdown = generateMarkdown();
    const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `TMRW-x-${PARTNER_NAME.replace(/\s+/g, "-")}-Partnership-Proposal.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const icon = (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-60 shrink-0"
    >
      <path
        d="M7 1v8.5M7 9.5L4 6.5M7 9.5l3-3M2 12h10"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  if (inlineInDropdown) {
    return (
      <button
        onClick={handleDownload}
        className={`w-full flex items-center gap-3 px-4 py-3 min-h-[44px] font-ui text-[0.65rem] uppercase tracking-[0.04em] text-left transition-colors duration-150 ${
          inverted
            ? "text-tmrw-grey-300 hover:bg-tmrw-grey-900 hover:text-tmrw-white"
            : "text-tmrw-grey-700 hover:bg-tmrw-grey-50 hover:text-tmrw-black"
        }`}
      >
        {icon}
        Markdown (.md)
      </button>
    );
  }

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] border border-tmrw-grey-800 rounded-sm font-ui text-[0.6rem] uppercase tracking-[0.04em] text-tmrw-grey-300 transition-all duration-300 hover:border-tmrw-white hover:text-tmrw-white hover:bg-tmrw-grey-900"
    >
      {icon}
      DOWNLOAD MARKDOWN
    </button>
  );
}
