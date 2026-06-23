import { FadeIn } from "@/components/ui/FadeIn";
import {
  PARTNER_NAME,
  COMMERCIAL,
  PLANS,
  LAUNCH_INCENTIVE_OPTIONS,
} from "@/lib/constants";

export function CustomerProposition() {
  return (
    <section
      id="customer-proposition"
      className="bg-tmrw-grey-50 py-16 sm:py-20 md:py-24 lg:py-32"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <FadeIn>
          <span className="font-ui text-[0.65rem] md:text-[0.7rem] uppercase tracking-[0.04em] text-tmrw-grey-700 mb-5 block">
            06 &mdash; THE MEMBER OFFER
          </span>
        </FadeIn>

        <FadeIn>
          <h2 className="font-display text-[1.875rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[4rem] uppercase leading-[0.95] tracking-[-0.01em] text-tmrw-black">
            TWO WAYS IN.
          </h2>
        </FadeIn>

        <FadeIn>
          <p className="font-body text-[1rem] sm:text-[1.05rem] md:text-[1.15rem] leading-[1.55] tracking-[-0.01em] text-tmrw-grey-700 max-w-3xl mt-5">
            Brighter reads 75+ blood markers. Cellular adds 1,700+ cellular markers and validated clocks. Same clinical team, two depths of read &mdash; the member chooses.
          </p>
        </FadeIn>

        {/* Two plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-12 md:mt-16">
          {PLANS.map((plan, i) => (
            <FadeIn key={plan.key} delay={0.1 + i * 0.1}>
              <PlanCard plan={plan} />
            </FadeIn>
          ))}
        </div>

        {/* Why no joining fee */}
        <FadeIn delay={0.35}>
          <div className="mt-8 md:mt-10 border-t border-tmrw-grey-200 pt-8 md:pt-10">
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-10">
              <span className="font-ui text-[0.65rem] uppercase tracking-[0.04em] text-tmrw-grey-700">
                JOINING FEE
              </span>
              <div>
                <p className="font-body text-[1rem] md:text-[1.1rem] text-tmrw-black tracking-[-0.01em] leading-[1.5]">
                  <span className="text-tmrw-grey-500 line-through">
                    ${COMMERCIAL.previousJoiningFee}
                  </span>{" "}
                  &rarr; <span className="text-tmrw-infusion font-semibold">$0</span>
                </p>
                <p className="font-body text-[0.9rem] md:text-[0.95rem] text-tmrw-grey-700 leading-[1.6] tracking-[-0.01em] mt-2 max-w-2xl">
                  We&apos;ve dropped the joining fee across the board. We found it was a meaningful inhibitor to growth, so we made starting easier. We expect higher adoption as a result. (Still under review &mdash; this may evolve.)
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Foundation-specific add-on */}
        <FadeIn delay={0.4}>
          <div className="mt-6 md:mt-8 border border-tmrw-infusion bg-tmrw-white p-6 sm:p-7 md:p-8 rounded-sm">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-6">
              <span className="font-ui text-[0.65rem] uppercase tracking-[0.04em] text-tmrw-infusion shrink-0">
                ON TOP, FOR {PARTNER_NAME.toUpperCase()} MEMBERS
              </span>
              <p className="font-body text-[0.95rem] md:text-[1rem] text-tmrw-black tracking-[-0.01em] leading-[1.55] mt-2 sm:mt-0">
                One complimentary session with a performance nutritionist or a peptide doctor. Their pick.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Launch incentive options */}
        <FadeIn delay={0.5}>
          <div className="mt-16 md:mt-20 pt-12 md:pt-14 border-t border-tmrw-grey-200">
            <span className="font-ui text-[0.65rem] md:text-[0.7rem] uppercase tracking-[0.04em] text-tmrw-grey-700">
              LAUNCH INCENTIVE &mdash; IDEAS FOR DISCUSSION
            </span>
            <h3 className="font-display text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] uppercase leading-none tracking-[-0.01em] text-tmrw-black mt-4">
              Three ways we could sharpen the launch.
            </h3>
            <p className="font-body text-[0.95rem] md:text-[1rem] text-tmrw-grey-700 leading-[1.6] tracking-[-0.01em] mt-4 max-w-3xl">
              None of these are baked in. They&apos;re shapes we could give the launch offer to drive faster adoption &mdash; pick the one (or none) that fits how Foundation wants to push this.
            </p>

            <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
              {LAUNCH_INCENTIVE_OPTIONS.map((opt, i) => (
                <div
                  key={opt.label}
                  className="border border-tmrw-grey-200 bg-tmrw-white p-6 md:p-7 rounded-sm flex flex-col"
                >
                  <span className="font-ui text-[0.6rem] uppercase tracking-[0.04em] text-tmrw-grey-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="font-body text-[1.05rem] md:text-[1.1rem] text-tmrw-black tracking-[-0.01em] mt-2">
                    {opt.label}
                  </h4>
                  <p className="font-body text-[0.875rem] md:text-[0.9rem] text-tmrw-grey-700 leading-[1.6] tracking-[-0.01em] mt-3 flex-1">
                    {opt.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className="font-body text-[0.85rem] md:text-[0.9rem] italic text-tmrw-grey-700 mt-10 text-center tracking-[-0.01em]">
            What each plan actually buys, itemised next.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

interface PlanCardProps {
  plan: typeof PLANS[number];
}

function PlanCard({ plan }: PlanCardProps) {
  const isDeeper = "badge" in plan;
  return (
    <div
      className={`relative border bg-tmrw-white p-7 sm:p-8 md:p-10 rounded-sm h-full flex flex-col ${
        isDeeper ? "border-tmrw-black" : "border-tmrw-grey-200"
      }`}
    >
      {isDeeper && plan.badge && (
        <span className="absolute -top-3 left-7 sm:left-8 md:left-10 inline-block bg-tmrw-infusion px-3 py-1 rounded-sm font-ui text-[0.6rem] uppercase tracking-[0.08em] text-tmrw-black font-semibold">
          {plan.badge}
        </span>
      )}

      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] uppercase leading-none tracking-[-0.01em] text-tmrw-black">
          {plan.name}
        </h3>
        <div className="text-right shrink-0">
          <span className="font-body text-[1.75rem] sm:text-[2rem] leading-none tracking-[-0.02em] text-tmrw-black">
            ${plan.monthlyPrice}
          </span>
          <span className="font-ui text-[0.6rem] uppercase tracking-[0.04em] text-tmrw-grey-700 ml-1">
            / mo
          </span>
        </div>
      </div>

      <p className="font-body italic text-[1rem] md:text-[1.05rem] text-tmrw-grey-700 leading-[1.5] tracking-[-0.01em] mt-5">
        {plan.tagline}
      </p>

      <p className="font-body text-[0.925rem] md:text-[0.95rem] text-tmrw-grey-700 leading-[1.6] tracking-[-0.01em] mt-3">
        {plan.description}
      </p>

      <ul className="mt-6 space-y-2.5 flex-1">
        {plan.lines.map((line) => (
          <li
            key={line}
            className="font-body text-[0.875rem] md:text-[0.9rem] text-tmrw-grey-700 leading-[1.55] tracking-[-0.01em] flex gap-2"
          >
            <span aria-hidden="true" className="shrink-0">
              &mdash;
            </span>
            <span className="flex-1">{line}</span>
          </li>
        ))}
      </ul>

      <p className="font-body italic text-[0.8rem] md:text-[0.85rem] text-tmrw-grey-700 leading-[1.55] tracking-[-0.01em] mt-6 pt-6 border-t border-tmrw-grey-100">
        {plan.footer}
      </p>
    </div>
  );
}
