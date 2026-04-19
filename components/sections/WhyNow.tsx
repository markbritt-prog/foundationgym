import { FadeIn } from "@/components/ui/FadeIn";
import { PARTNER_NAME, PARTNER_SUBURB } from "@/lib/constants";

export function WhyNow() {
  return (
    <section id="why-now" className="bg-tmrw-grey-50 py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <FadeIn>
          <span className="font-ui text-[0.65rem] md:text-[0.7rem] uppercase tracking-[0.04em] text-tmrw-grey-700 mb-4 block">
            02 &mdash; WHY NOW
          </span>
        </FadeIn>

        <FadeIn>
          <h2 className="font-display text-[1.375rem] sm:text-[1.625rem] md:text-[2rem] lg:text-[2.5rem] uppercase leading-none tracking-[-0.01em] text-tmrw-black">
            THE CATEGORY HAS SHIFTED.
          </h2>
        </FadeIn>

        <div className="mt-8 md:mt-10 space-y-6 font-body text-[0.925rem] md:text-[0.95rem] leading-[1.65] tracking-[-0.01em] text-tmrw-grey-700">
          <FadeIn delay={0.1}>
            <p>
              Health and fitness spending in Australia rose 27% year-on-year in early 2025 against broader discretionary declines. Fitness has moved from a discretionary purchase to essential lifestyle maintenance. The {PARTNER_NAME} member already pays a premium for outcomes. The question is whether the category next to fitness &mdash; longevity, diagnostics, protocol-driven health &mdash; sits adjacent to {PARTNER_NAME}, or somewhere else.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p>
              Facility and training revenue is largely capped. Your members are already at the top of what a gym membership alone can charge. The only remaining lever for meaningful ARPU growth is a category shift &mdash; from fitness access to integrated health.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p>
              Internationally, the integrated model is proven.{" "}
              <a
                href="https://miora.lifetime.life/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-tmrw-grey-300 hover:decoration-tmrw-black hover:text-tmrw-black transition-colors"
              >
                Life Time&apos;s MIORA
              </a>
              ,{" "}
              <a
                href="https://www.functionhealth.com/campaign/equinox-function-health"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-tmrw-grey-300 hover:decoration-tmrw-black hover:text-tmrw-black transition-colors"
              >
                Equinox&apos;s partnership with Function Health
              </a>
              ,{" "}
              <a
                href="https://www.fountainlife.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-tmrw-grey-300 hover:decoration-tmrw-black hover:text-tmrw-black transition-colors"
              >
                Fountain Life
              </a>
              . Each was built bespoke over years on proprietary clinical infrastructure. What Australia has lacked is the platform that lets a premium operator run the integrated model without having to build the clinic. That&apos;s what TMRW is &mdash; and {PARTNER_NAME} in {PARTNER_SUBURB} is where we want to prove it.
            </p>
          </FadeIn>
          <FadeIn delay={0.25}>
            <p>
              This is especially true for peptides, where consumer demand has already moved into the mainstream and where the prescribing infrastructure &mdash; not the regulation &mdash; is what separates a legitimate clinical offering from a grey-market risk most gym members shouldn&apos;t be taking.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
