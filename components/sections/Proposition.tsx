import { FadeIn } from "@/components/ui/FadeIn";
import { PARTNER_NAME, PARTNER_SUBURB } from "@/lib/constants";

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
            THE EQUINOX &times; FUNCTION HEALTH MODEL, IN {PARTNER_SUBURB.toUpperCase()}.
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-8 md:mt-10 space-y-6 font-body text-[0.9rem] sm:text-[0.95rem] md:text-[1.05rem] leading-[1.6] tracking-[-0.01em] text-tmrw-grey-700">
            <p>
              TMRW runs the clinical layer so premium gyms don&apos;t have to. Equinox does this in the US with Function Health. Life Time built MIORA in-house. Saint Haven built its own. This is the Australian equivalent, starting with {PARTNER_NAME} in {PARTNER_SUBURB}.
            </p>
            <p>
              Stage 1 can be live in 3 weeks with marketing activation. A TMRW clinical node inside {PARTNER_NAME}. Zero capex, zero clinical risk. 3 revenue lines to {PARTNER_NAME} from day one.
            </p>
            <p>
              Deeper integration is also possible &mdash; closer to Life Time&apos;s model &mdash; but that&apos;s a month-6 conversation, once we have real data.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
