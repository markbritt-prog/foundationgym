import { FadeIn } from "@/components/ui/FadeIn";
import { PARTNER_NAME, PARTNER_SUBURB } from "@/lib/constants";

export function WhatYouveBuilt() {
  return (
    <section
      id="what-youve-built"
      className="bg-tmrw-white py-20 sm:py-24 md:py-32 lg:py-40"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Section tag — the single accent moment */}
        <FadeIn>
          <span className="font-ui text-[0.65rem] md:text-[0.7rem] uppercase tracking-[0.04em] text-tmrw-infusion mb-8 block">
            01 &mdash; WHAT YOU&apos;VE BUILT
          </span>
        </FadeIn>

        {/* Display headline — Foundation's tagline, extended */}
        <FadeIn>
          <h2 className="font-display text-[2.25rem] sm:text-[2.75rem] md:text-[3.5rem] lg:text-[5rem] uppercase leading-[0.9] tracking-[-0.01em] text-tmrw-black">
            COME DOWN.<br />
            GET MEASURED.<br />
            RISE UP WITH A PLAN.
          </h2>
        </FadeIn>

        {/* Body — longevity positioning + members frame */}
        <FadeIn delay={0.15}>
          <div className="mt-12 md:mt-16 space-y-6 font-body text-[1rem] sm:text-[1.05rem] md:text-[1.15rem] leading-[1.65] tracking-[-0.01em] text-tmrw-grey-700 max-w-3xl">
            <p>
              {PARTNER_NAME} is uniquely framed in the longevity space &mdash; train like an athlete at any age, live stronger for longer. But the fitness layer alone can only take a member so far toward it.
            </p>
            <p>
              Your members have already made the investment to train at Bourke Street. They chose {PARTNER_NAME} because they wanted real coaching, real programming, real outcomes, real community. The work they&apos;re putting in is changing their biology &mdash; in ways they can&apos;t see, and can&apos;t feel, until years later.
            </p>
            <p>
              We run the clinical layer. Bloods, epigenetic testing, personalised protocols, prescribing, supplements. End-to-end. The thing you&apos;ve positioned yourselves toward, operated by us, for your members.
            </p>
            <p className="text-tmrw-black">
              No other independent gym in {PARTNER_SUBURB} has this. We think {PARTNER_NAME} should be the pilot.
            </p>
          </div>
        </FadeIn>

        {/* Quiet reference links to the international comparables */}
        <FadeIn delay={0.3}>
          <p className="mt-12 font-body text-[0.85rem] md:text-[0.9rem] text-tmrw-grey-500 leading-[1.6] tracking-[-0.01em] max-w-3xl">
            The integrated model is proven internationally &mdash;{" "}
            <a
              href="https://miora.lifetime.life/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tmrw-grey-700 underline underline-offset-4 decoration-tmrw-grey-300 hover:decoration-tmrw-black hover:text-tmrw-black transition-colors"
            >
              Life Time&apos;s MIORA
            </a>
            ,{" "}
            <a
              href="https://www.functionhealth.com/campaign/equinox-function-health"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tmrw-grey-700 underline underline-offset-4 decoration-tmrw-grey-300 hover:decoration-tmrw-black hover:text-tmrw-black transition-colors"
            >
              Equinox &times; Function Health
            </a>
            ,{" "}
            <a
              href="https://www.fountainlife.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tmrw-grey-700 underline underline-offset-4 decoration-tmrw-grey-300 hover:decoration-tmrw-black hover:text-tmrw-black transition-colors"
            >
              Fountain Life
            </a>
            . Each was built bespoke, over years, on proprietary clinical infrastructure. {PARTNER_NAME} doesn&apos;t need to build anything. We already did.
          </p>
        </FadeIn>

      </div>
    </section>
  );
}
