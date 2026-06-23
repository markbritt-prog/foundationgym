import { FadeIn } from "@/components/ui/FadeIn";
import { PARTNER_NAME } from "@/lib/constants";

export function CompoundingBenefit() {
  return (
    <section id="compounding-benefit" className="bg-tmrw-black py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <FadeIn>
          <span className="font-ui text-[0.65rem] md:text-[0.7rem] uppercase tracking-[0.04em] text-tmrw-grey-500 mb-5 block">
            04 &mdash; OUR HYPOTHESIS
          </span>
        </FadeIn>

        <FadeIn>
          <h2 className="font-display text-[1.875rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[4rem] uppercase leading-[0.95] tracking-[-0.01em] text-tmrw-white">
            THE MEMBER WHO CAN SEE THEIR BIOLOGY CHANGE<br />DOESN&apos;T CANCEL EITHER SERVICE.
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-8 md:mt-10 space-y-6 font-body text-[0.95rem] sm:text-[1rem] md:text-[1.1rem] leading-[1.65] tracking-[-0.01em] text-tmrw-grey-300">
            <p>
              Every {PARTNER_NAME} member who does this with us is a member who can see, in data, what their training is actually doing. Six months in, their epigenetic age drops. Twelve months in, their biomarkers shift. They attribute that to you, and to us. Both.
            </p>
            <p>
              Fitness alone churns. Supplements alone churn. Fitness plus measured biology plus personalised protocols? That&apos;s different.
            </p>
            <p className="text-tmrw-white">
              We&apos;d love to prove that together over 12 months.
            </p>
            <p>
              This is the part of the partnership we&apos;re actually most interested in finding out about.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
