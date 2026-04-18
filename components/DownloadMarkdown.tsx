"use client";

import {
  PARTNER_NAME,
  PARTNER_SUBURB,
  PROPOSAL_DATE,
  DEAL_PANELS,
  DEAL_ECONOMICS,
  JOURNEY_STEPS,
  STAGE1_LEARNINGS,
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
  push("---");
  blank();

  // 01 Proposition
  push("## 01 \u2014 The Proposition");
  blank();
  push(
    `**The Equinox \u00d7 Function Health model, in ${PARTNER_SUBURB}.**`
  );
  blank();
  push(
    `TMRW runs the clinical layer so premium gyms don\u2019t have to. Equinox does this in the US with Function Health. Life Time built MIORA in-house. Saint Haven built its own. This is the Australian equivalent, starting with ${PARTNER_NAME} in ${PARTNER_SUBURB}.`
  );
  blank();
  push(
    `Stage 1 can be live in 3 weeks with marketing activation. A TMRW clinical node inside ${PARTNER_NAME}. Zero capex, zero clinical risk. 3 revenue lines to ${PARTNER_NAME} from day one.`
  );
  blank();
  push(
    `Deeper integration is also possible \u2014 closer to Life Time\u2019s model \u2014 but that\u2019s a month-6 conversation, once we have real data.`
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
    "Health and fitness spending in Australia rose 27% year-on-year in early 2025 against broader discretionary declines. Fitness has moved from a discretionary purchase to essential lifestyle maintenance. The VRTUS member already pays a premium for outcomes. The question is whether the category next to fitness \u2014 longevity, diagnostics, protocol-driven health \u2014 sits inside VRTUS, or somewhere else."
  );
  blank();
  push(
    "Facility and training revenue is largely capped. Your members are already at the top of what a gym membership alone can charge. The only remaining lever for meaningful ARPU growth is a category shift \u2014 from fitness access to integrated health."
  );
  blank();
  push(
    "Internationally, the integrated model is proven. [Life Time\u2019s MIORA](https://miora.lifetime.life/), [Equinox\u2019s partnership with Function Health](https://www.functionhealth.com/campaign/equinox-function-health), [Fountain Life](https://www.fountainlife.com/). Each was built bespoke over years on proprietary clinical infrastructure. What Australia has lacked is the platform that lets a premium operator run the integrated model without having to build the clinic. That\u2019s what TMRW is \u2014 and VRTUS in Bondi is where we want to prove it."
  );
  blank();
  push(
    "This is especially true for peptides, where consumer demand has already moved into the mainstream and where the prescribing infrastructure \u2014 not the regulation \u2014 is what separates a legitimate clinical offering from a grey-market risk most gym members shouldn\u2019t be taking."
  );
  blank();
  push("---");
  blank();

  // 03 Member Journey
  push("## 03 \u2014 The Member Journey");
  blank();
  push(
    "**From gym floor to personalised protocol.** The entire onboarding happens at VRTUS. No external appointments, no waiting. One visit to start."
  );
  blank();
  for (const s of JOURNEY_STEPS) {
    push(`**Step ${s.step}: ${s.title}** *(${s.time})*`);
    blank();
    push(s.desc);
    blank();
  }
  push("---");
  blank();

  // 04 Deal
  push("## 04 \u2014 The Deal on One Screen");
  blank();
  push("**What\u2019s on the table.** The entire partnership, at a glance.");
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

  // 05 The Longevity Programme
  push("## 05 \u2014 The Longevity Programme");
  blank();
  push("**What the member gets.**");
  blank();
  push(
    "What a VRTUS member receives in year one, and what they\u2019d pay for equivalent care elsewhere in Australia."
  );
  blank();
  push("| Item | Qty | Retail / unit | Subtotal |");
  push("| --- | --- | --- | --- |");
  push(
    "| Epigenetic age testing (TruAge / TruHealth bundle) | 3 \u00d7 | $1,300 | $3,900 |"
  );
  push(
    "| Comprehensive blood panel | 1 \u00d7 | $400 | $400 |"
  );
  push(
    "| Deep-dive clinician consultations | 3 \u00d7 | $220 | $660 |"
  );
  push(
    "| Peptide doctor consultation | 1 \u00d7 | $220 | $220 |"
  );
  push(
    "| Doctor-approved personalised medical plan | 1 \u00d7 | $160 | $160 |"
  );
  push(
    "| Precision supplement protocol | 12 months | $180 | $2,160 |"
  );
  blank();
  push("**Total member value, Year 1: $7,500**");
  blank();
  push("*Assumes full 12-month retention and protocol adherence.*");
  blank();
  push("### The Balance");
  blank();
  push("**Three things worth your feedback.**");
  blank();
  push(
    "We think we\u2019ve structured a compelling offer to drive adoption at scale, but we want your feedback on the balance. Three things in particular."
  );
  blank();
  push("01. **The joining-fee discount** \u2014 currently 50%.");
  push(
    "02. **The peptide and high-performance nutrition consult** \u2014 currently included."
  );
  push(
    "03. **The revenue share mix to VRTUS** \u2014 currently $249 per activation, $10 per active member per month, 10% of product revenue."
  );
  blank();
  push(
    "These are the pieces we expect to move as we learn what works. The next section shows the commercial shape as it currently stands."
  );
  blank();
  push("---");
  blank();

  // 06 Financial
  push("## 06 \u2014 The Financial Partnership");
  blank();
  push("**Model the outcomes.**");
  blank();
  push(
    "The economics from both sides. The interactive calculator on the site updates live against slider inputs across 5 scenarios (Soft Open, Conservative, Base, Strong, Bullish)."
  );
  blank();
  push("**Base-case outputs:**");
  push("- Year 1 total to VRTUS: ~$138k");
  push("- 5-year total: ~$824k");
  push("- Annualised average: ~$165k/yr");
  blank();
  push(
    "Product-line attach and spend assumptions are the model\u2019s most sensitive inputs and have no empirical anchor yet. Base-case attach of 30% assumes members who convert become peptide-tier members at approximately $3,000 annual spend across supplements, compounded peptides, retests, and protocol adjustments. Peptide prescribing operates inside Australia\u2019s existing Schedule 4 pathway via TMRW\u2019s integrative GP network and licensed compounding pharmacy relationships. Stage 1\u2019s first 6 months will confirm or revise these figures."
  );
  blank();
  push("---");
  blank();

  // 07 Hub
  push("## 07 \u2014 The TMRW Hub at VRTUS");
  blank();
  push(
    "**A clinical node inside the gym.** Zero capex. Zero clinical risk to VRTUS. 6-month launch term."
  );
  blank();
  push("### What VRTUS provides");
  blank();
  push(
    "The upstairs room, in its current state. We configure it as a clinical space \u2014 screening, consultation, blood collection. Room access 7\u201310am, 3 days per week, for the initial 6-month term. We can extend to 6 hours per day within the term if volume supports it."
  );
  blank();
  push(
    "Brand access. Signage in the room and at reception, co-branded member communications through your existing channels, and staff briefings so that your trainers understand when and how to refer."
  );
  blank();
  push("### What TMRW brings");
  blank();
  push(
    "The clinical team. A credentialed phlebotomist at every session and a TMRW clinician available for consultations, protocol reviews, and onsite escalation. All staff operate under TMRW\u2019s clinical governance \u2014 their professional indemnity, their liability, their training."
  );
  blank();
  push(
    "The full back-end. Booking system, member app, billing, diagnostic supply, supplement fulfilment, clinical decision support, member comms, and the prescribing pathway itself \u2014 integrative GPs credentialed to prescribe Schedule 4 therapies, paired with licensed Australian compounding pharmacy relationships, which together unlock a peptide-tier offering that is difficult for any gym to build in-house. VRTUS does not operate any part of the clinical workflow."
  );
  blank();
  push(
    "Full indemnity and product liability. No clinical insurance extension required on the VRTUS side."
  );
  blank();
  push("---");
  blank();

  // 08 Launching Together
  push("## 08 \u2014 Launching Together");
  blank();
  push(
    "**A launch, not a soft open.** The partnership works if it\u2019s announced, seen, and talked about."
  );
  blank();
  push("### What TMRW drives");
  blank();
  push(
    "The campaign. Co-branded creative and the paid-media budget, PR, and a launch event held at VRTUS. All content production \u2014 photography, short-form video, founder interviews, member stories \u2014 on the TMRW budget."
  );
  blank();
  push(
    "Ongoing content. Quarterly storytelling drops featuring VRTUS members whose protocols produce meaningful change. TMRW\u2019s ambassador network amplifies the launch; members of the VRTUS community who have reach are introduced into that programme."
  );
  blank();
  push("### What VRTUS provides");
  blank();
  push(
    "Channels and coordination. The VRTUS social accounts announcing the partnership in coordinated sequence with TMRW. Access to the in-gym digital screens on the standard content loop. Modest signage near the entrance noting that VRTUS is a TMRW collection centre."
  );
  blank();
  push(
    "Member comms and introductions. Email, app notification, and newsletter inclusion at launch. Warm introductions to VRTUS members who could be ambassadors or influencer candidates. Founder, trainer, and operations team availability for co-branded content days."
  );
  blank();
  push(
    "A pace-of-aging leaderboard among VRTUS members. Epigenetic data makes competitive wellness visible and shareable \u2014 the gym with the lowest biological age in Bondi."
  );
  blank();
  push(
    "One marketing lead as a point of contact. TMRW integrates into the VRTUS marketing calendar rather than competing with it."
  );
  blank();
  push("---");
  blank();

  // 09 Learnings
  push("## 09 \u2014 What We Learn in Stage 1");
  blank();
  push(
    "**What decides Stage 2.** The launch term is designed to answer 4 questions. The answers determine what \u2014 if anything \u2014 comes next."
  );
  blank();
  for (let i = 0; i < STAGE1_LEARNINGS.length; i++) {
    push(`${String(i + 1).padStart(2, "0")}. ${STAGE1_LEARNINGS[i]}`);
  }
  blank();
  push("---");
  blank();

  // 10 Peptides
  push("## 10 \u2014 Peptides, Specifically");
  blank();
  push("**The category, specifically.**");
  blank();
  push(
    "Peptides have moved from the edges of clinical practice into the mainstream. Consumer demand is ahead of supply \u2014 members are asking, and many are buying from grey-market sources they shouldn\u2019t trust. Global regulatory posture is shifting to match. The United States is in active review of its peptide compounding rules, a process widely expected to broaden clinical access meaningfully through 2026 and 2027. Australia typically follows the US by 18 months to 2 years. Increasing acceptance \u2014 and increasing legitimacy \u2014 is the direction of travel."
  );
  blank();
  push(
    "TMRW already operates inside Australia\u2019s compliant pathway \u2014 Schedule 4 prescription through our integrative GP and nurse-practitioner network, with fulfilment through licensed Australian compounding pharmacies. This is the infrastructure a gym cannot build in-house. Medical networks take years, pharmacy relationships take reputation, and the clinical decision support, dosing protocols, and follow-up workflows take serious investment. By the time the global regulatory environment is fully settled, we want to be the operator premium gyms already trust \u2014 not the operator scrambling to build capability after the rules have moved."
  );
  blank();
  push(
    "Integrated appropriately \u2014 per individual clinical assessment, never as a default \u2014 peptides are what make the model\u2019s ARPU assumptions real. A member on a peptide protocol is paying substantially more per year than a member on supplements alone, which is why the calculator\u2019s base case assumes approximately $3,000 annual spend at 30% attach. Not every member is a candidate; clinicians assess suitability, including any competitive sporting considerations. The 70% who don\u2019t convert still drive the joining-fee and per-member-per-month streams. The 30% who do are what make this category meaningfully more valuable than a typical supplement channel \u2014 and what keep VRTUS\u2019s Stage 1 economics above the threshold that makes this partnership worth doing."
  );
  blank();
  push("---");
  blank();

  // 11 Terms
  push("## 11 \u2014 Partnership Terms");
  blank();
  push(
    "**Indicative term sheet.** Stage 1, launch term. Stage 2 terms are out of scope for this document and would be drafted jointly at month 6 if we proceed."
  );
  blank();
  push("| Term | Detail |");
  push("| --- | --- |");
  for (const t of TERMS_STAGE1) push(`| ${t.label} | ${t.value} |`);
  blank();
  push(
    "*Terms are indicative. A formal agreement will be drafted upon agreement in principle.*"
  );
  blank();
  push("---");
  blank();

  // 12 Next Steps
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
    a.download = `TMRW-x-${PARTNER_NAME}-Partnership-Proposal.md`;
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
      className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] border border-tmrw-grey-800 rounded-sm font-ui text-[0.6rem] uppercase tracking-[0.04em] text-tmrw-grey-300 transition-all duration-300 hover:border-tmrw-syringe hover:text-tmrw-white hover:bg-tmrw-grey-900"
    >
      {icon}
      DOWNLOAD MARKDOWN
    </button>
  );
}
