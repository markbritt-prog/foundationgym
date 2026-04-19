import { FadeIn } from "@/components/ui/FadeIn";

export function Peptides() {
  return (
    <section
      id="peptides"
      className="bg-tmrw-white py-12 md:py-16 lg:py-20 scroll-mt-14"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <FadeIn>
          <span className="font-ui text-[0.65rem] md:text-[0.7rem] uppercase tracking-[0.04em] text-tmrw-grey-700">
            09 &mdash; PEPTIDES, SPECIFICALLY
          </span>
        </FadeIn>

        <FadeIn>
          <h2 className="font-display text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] leading-none tracking-[-0.01em] uppercase text-tmrw-black mt-5 md:mt-6">
            RAPIDLY CHANGING CATEGORY.
          </h2>
        </FadeIn>

        <div className="mt-8 md:mt-10 space-y-6 font-body text-[0.925rem] md:text-[0.95rem] leading-[1.65] tracking-[-0.01em] text-tmrw-grey-700">
          <FadeIn delay={0.05}>
            <p>
              Peptides have moved from the edges of clinical practice into the mainstream. Consumer demand is ahead of supply &mdash; members are asking, and many are buying from grey-market sources they shouldn&apos;t trust. Global regulatory posture is shifting to match. The United States is in active review of its peptide compounding rules, a process widely expected to broaden clinical access meaningfully through 2026 and 2027. Australia typically follows the US by 18 months to 2 years. Increasing acceptance &mdash; and increasing legitimacy &mdash; is the direction of travel.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p>
              TMRW already operates inside Australia&apos;s compliant pathway &mdash; Schedule 4 prescription through our integrative GP and nurse-practitioner network, with fulfilment through licensed Australian compounding pharmacies. This is the infrastructure a gym cannot build in-house. Medical networks take years, pharmacy relationships take reputation, and the clinical decision support, dosing protocols, and follow-up workflows take serious investment. By the time the global regulatory environment is fully settled, we want to be the operator premium gyms already trust &mdash; not the operator scrambling to build capability after the rules have moved.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p>
              Integrated appropriately &mdash; per individual clinical assessment, never as a default &mdash; peptides are what make the model&apos;s ARPU assumptions real. A member on a peptide protocol is paying substantially more per year than a member on supplements alone, which is why the calculator&apos;s base case assumes approximately $3,000 annual spend at 25% attach. Not every member is a candidate; clinicians assess suitability, including any competitive sporting considerations. The 75% who don&apos;t convert still drive the joining-fee and per-member-per-month streams, but we&apos;ll make an additional purchase of supplements, sleep protocols, HRT, etc.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
