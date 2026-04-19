import { FadeIn } from "@/components/ui/FadeIn";
import { PARTNER_NAME, PARTNER_SUBURB, PARTNER_ADDRESS } from "@/lib/constants";

export function WhatYouveBuilt() {
  return (
    <section id="what-youve-built" className="bg-tmrw-white py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <FadeIn>
          <span className="font-ui text-[0.65rem] md:text-[0.7rem] uppercase tracking-[0.04em] text-tmrw-grey-700 mb-5 block">
            01 &mdash; WHAT YOU&apos;VE BUILT
          </span>
        </FadeIn>

        <FadeIn>
          <h2 className="font-display text-[1.875rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[4rem] uppercase leading-[0.95] tracking-[-0.01em] text-tmrw-black">
            YOUR MEMBERS ARE ALREADY DOING THE WORK.
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-8 md:mt-10 space-y-6 font-body text-[0.95rem] sm:text-[1rem] md:text-[1.1rem] leading-[1.6] tracking-[-0.01em] text-tmrw-grey-700">
            <p>
              Your members are paying $55 to $90 a week to train at {PARTNER_ADDRESS}. They chose {PARTNER_NAME} because they wanted real coaching, real programming, real outcomes &mdash; not a commodity gym.
            </p>
            <p>
              The work they&apos;re putting in &mdash; the lifts, the conditioning, the recovery &mdash; is changing their biology in ways they can&apos;t see, and can&apos;t feel, until years later. That&apos;s the gap. It&apos;s not a gap in {PARTNER_NAME}; it&apos;s a gap in what any gym can offer on its own.
            </p>
            <p>
              We run the clinic. You run the gym. Together, your members get what Life Time members get at{" "}
              <a
                href="https://miora.lifetime.life/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-tmrw-grey-300 hover:decoration-tmrw-black hover:text-tmrw-black transition-colors"
              >
                MIORA
              </a>
              {" "}and Equinox members get at{" "}
              <a
                href="https://www.functionhealth.com/campaign/equinox-function-health"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-tmrw-grey-300 hover:decoration-tmrw-black hover:text-tmrw-black transition-colors"
              >
                Function Health
              </a>
              {" "}&mdash; a precision health layer that sits next to their training, operated end-to-end by us.
            </p>
            <p>
              We&apos;d like to start with {PARTNER_NAME}. No other independent gym in {PARTNER_SUBURB} has this. We think you&apos;re the right partner to prove it does.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
