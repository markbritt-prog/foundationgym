import { FadeIn } from "@/components/ui/FadeIn";

export function Proposition() {
  return (
    <section id="proposition" className="bg-tmrw-white py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <FadeIn>
          <span className="font-ui text-[0.65rem] md:text-[0.7rem] uppercase tracking-[0.04em] text-tmrw-syringe mb-5 block">
            01 &mdash; THE PROPOSITION
          </span>
        </FadeIn>

        <FadeIn>
          <h2 className="font-display text-[1.875rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[4rem] uppercase leading-[0.95] tracking-[-0.01em] text-tmrw-black">
            REFERRAL-ONLY. ZERO OPS. FOUR REVENUE LINES.
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-8 md:mt-10 space-y-6 font-body text-[0.9rem] sm:text-[0.95rem] md:text-[1.05rem] leading-[1.6] tracking-[-0.01em] text-tmrw-grey-700">
            <p>
              The deal is straightforward. Foundation introduces its members to TMRW through a partner code. TMRW operates everything clinical &mdash; onboarding, bloods, results, supplements, prescribing, fulfilment, indemnity. Foundation keeps doing what Foundation does.
            </p>
            <p>
              Four revenue lines to Foundation for life of membership. No room, no staff, no clinical insurance extension, no operational burden on your side. Stage 1 can be live in 2 to 3 weeks with a co-branded launch event at 350 Bourke.
            </p>
            <p>
              A deeper integration is possible &mdash; onsite collection days, dedicated clinical space, peptide intensives for Foundation members &mdash; but that&apos;s a month-6 conversation, once we have real data about what your members respond to.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
