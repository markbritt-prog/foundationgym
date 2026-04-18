import { FadeIn } from "@/components/ui/FadeIn";

interface StackItem {
  label: string;
  qty: string;
  unitPrice: number;
  subtotal: number;
  reference?: {
    provider: string;
    url: string;
  };
  note?: string;
}

const STACK: StackItem[] = [
  {
    label: "Epigenetic age testing (TruAge / TruHealth bundle)",
    qty: "3 \u00d7",
    unitPrice: 1300,
    subtotal: 3900,
    reference: {
      provider: "Biogenix",
      url: "https://biogenix.com.au/",
    },
    note: "Baseline, 4-month retest, 8-month retest. DNA methylation, OMICmAge, DunedinPACE, SymphonyAge, telomere length.",
  },
  {
    label: "Comprehensive blood panel",
    qty: "1 \u00d7",
    unitPrice: 400,
    subtotal: 400,
    reference: {
      provider: "Bloody Good Tests",
      url: "https://bloodygood.com.au/products/the-bloody-good-test",
    },
    note: "100+ biomarkers across energy, hormones, nutrition, inflammation, organ function.",
  },
  {
    label: "Deep-dive clinician consultations",
    qty: "3 \u00d7",
    unitPrice: 220,
    subtotal: 660,
    note: "45-minute sessions with a TMRW-credentialed integrative clinician. Protocol design, interpretation, adjustments.",
  },
  {
    label: "Peptide doctor consultation",
    qty: "1 \u00d7",
    unitPrice: 220,
    subtotal: 220,
    note: "With a TMRW GP credentialed to prescribe Schedule 4 peptide therapies via licensed Australian compounding pharmacies.",
  },
  {
    label: "Doctor-approved personalised medical plan",
    qty: "1 \u00d7",
    unitPrice: 160,
    subtotal: 160,
    note: "Written, reviewed, and signed off by a registered medical practitioner.",
  },
  {
    label: "Precision supplement protocol",
    qty: "12 months",
    unitPrice: 180,
    subtotal: 2160,
    note: "20\u201335 ingredients per month, formulated per member against biomarker and epigenetic data. Clinical-grade, third-party tested.",
  },
];

const TOTAL_STACK_VALUE = STACK.reduce((sum, item) => sum + item.subtotal, 0);

const DIALS: { label: string; detail: string }[] = [
  {
    label: "The joining-fee discount",
    detail: "currently 50%.",
  },
  {
    label: "The peptide and high-performance nutrition consult",
    detail: "currently included.",
  },
  {
    label: "The revenue share mix to VRTUS",
    detail: "currently $249 per activation, $10 per active member per month, 10% of product revenue.",
  },
];

export function ValueStack() {
  return (
    <section
      id="value-stack"
      className="bg-tmrw-white py-16 sm:py-20 md:py-24 lg:py-32"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <FadeIn>
          <span className="font-ui text-[0.65rem] md:text-[0.7rem] uppercase tracking-[0.04em] text-tmrw-infusion">
            05 &mdash; THE LONGEVITY PROGRAMME
          </span>
        </FadeIn>

        <FadeIn>
          <h2 className="font-display text-[1.875rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[4rem] leading-[0.95] tracking-[-0.01em] uppercase text-tmrw-black mt-5 md:mt-6">
            What the member gets.
          </h2>
        </FadeIn>

        <FadeIn>
          <p className="font-body text-[0.9rem] sm:text-[0.95rem] md:text-[1.05rem] leading-[1.55] tracking-[-0.01em] text-tmrw-grey-700 max-w-2xl mt-5">
            What a VRTUS member receives in year one, and what they&apos;d
            pay for equivalent care elsewhere in Australia.
          </p>
        </FadeIn>

        <div className="mt-12 md:mt-16">
          <div className="hidden md:grid grid-cols-[1fr_80px_120px_120px] gap-4 pb-3 border-b border-tmrw-grey-200">
            <span className="font-ui text-[0.6rem] tracking-[0.04em] uppercase text-tmrw-grey-700">
              Item
            </span>
            <span className="font-ui text-[0.6rem] tracking-[0.04em] uppercase text-tmrw-grey-700 text-right">
              Qty
            </span>
            <span className="font-ui text-[0.6rem] tracking-[0.04em] uppercase text-tmrw-grey-700 text-right">
              Retail / unit
            </span>
            <span className="font-ui text-[0.6rem] tracking-[0.04em] uppercase text-tmrw-grey-700 text-right">
              Subtotal
            </span>
          </div>

          {STACK.map((item, i) => (
            <FadeIn key={item.label} delay={0.04 * i}>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_80px_120px_120px] gap-2 md:gap-4 py-5 md:py-6 border-b border-tmrw-grey-200">
                <div>
                  <p className="font-body text-[0.95rem] md:text-[1rem] text-tmrw-black tracking-[-0.01em] leading-[1.4]">
                    {item.label}
                  </p>
                  {item.note && (
                    <p className="font-body text-[0.8rem] md:text-[0.825rem] text-tmrw-grey-700 tracking-[-0.01em] leading-[1.5] mt-1.5 max-w-xl">
                      {item.note}
                    </p>
                  )}
                  {item.reference && (
                    <a
                      href={item.reference.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-2 font-ui text-[0.6rem] tracking-[0.04em] uppercase text-tmrw-grey-700 hover:text-tmrw-syringe transition-colors min-h-[32px]"
                    >
                      Priced at {item.reference.provider}
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                        <path d="M2 2h5v5M2 7l5-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                      </svg>
                    </a>
                  )}
                </div>

                <div className="md:text-right">
                  <span className="md:hidden font-ui text-[0.55rem] tracking-[0.04em] uppercase text-tmrw-grey-700 mr-2">
                    Qty
                  </span>
                  <span className="font-body text-[0.9rem] text-tmrw-black">
                    {item.qty}
                  </span>
                </div>

                <div className="md:text-right">
                  <span className="md:hidden font-ui text-[0.55rem] tracking-[0.04em] uppercase text-tmrw-grey-700 mr-2">
                    Per unit
                  </span>
                  <span className="font-body text-[0.9rem] text-tmrw-grey-700">
                    ${item.unitPrice.toLocaleString()}
                  </span>
                </div>

                <div className="md:text-right">
                  <span className="md:hidden font-ui text-[0.55rem] tracking-[0.04em] uppercase text-tmrw-grey-700 mr-2">
                    Subtotal
                  </span>
                  <span className="font-body text-[1rem] md:text-[1.05rem] text-tmrw-black font-semibold tracking-[-0.01em]">
                    ${item.subtotal.toLocaleString()}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}

          <FadeIn delay={0.3}>
            <div className="grid grid-cols-[1fr_auto] md:grid-cols-[1fr_80px_120px_120px] gap-2 md:gap-4 pt-6 md:pt-8">
              <div className="md:col-span-3">
                <p className="font-ui text-[0.65rem] md:text-[0.7rem] tracking-[0.04em] uppercase text-tmrw-black">
                  Total member value, Year 1
                </p>
                <p className="font-body text-[0.8rem] italic text-tmrw-grey-700 tracking-[-0.01em] mt-1">
                  Assumes full 12-month retention and protocol adherence.
                </p>
              </div>
              <div className="text-right">
                <p className="font-body text-[2rem] md:text-[2.5rem] leading-none tracking-[-0.02em] text-tmrw-black">
                  ${TOTAL_STACK_VALUE.toLocaleString()}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="mt-20 md:mt-24 pt-16 md:pt-20 border-t border-tmrw-grey-200">
          <FadeIn>
            <span className="font-ui text-[0.65rem] md:text-[0.7rem] tracking-[0.04em] uppercase text-tmrw-grey-700">
              THE BALANCE
            </span>
          </FadeIn>

          <FadeIn>
            <h3 className="font-display text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] leading-none tracking-[-0.01em] uppercase text-tmrw-black mt-4">
              Three things worth your feedback.
            </h3>
          </FadeIn>

          <FadeIn>
            <p className="font-body text-[0.95rem] md:text-[1rem] leading-[1.6] tracking-[-0.01em] text-tmrw-grey-700 max-w-2xl mt-5">
              We think we&apos;ve structured a compelling offer to drive
              adoption at scale, but we want your feedback on the balance.
              Three things in particular.
            </p>
          </FadeIn>

          <div className="mt-8 md:mt-10">
            {DIALS.map((dial, i) => (
              <FadeIn key={dial.label} delay={0.06 * i}>
                <div className="flex items-baseline gap-4 md:gap-6 py-4 md:py-5 border-b border-tmrw-grey-200 last:border-0">
                  <span className="font-ui text-[0.6rem] tracking-[0.04em] uppercase text-tmrw-grey-700 shrink-0 w-8">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-body text-[0.95rem] md:text-[1rem] text-tmrw-black leading-[1.5] tracking-[-0.01em]">
                    <span className="text-tmrw-black">{dial.label}</span>
                    <span className="text-tmrw-grey-700"> &mdash; {dial.detail}</span>
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <p className="font-body text-[0.875rem] md:text-[0.95rem] leading-[1.6] tracking-[-0.01em] text-tmrw-grey-700 max-w-2xl mt-8">
              These are the pieces we expect to move as we learn what works.
              The next section shows the commercial shape as it currently stands.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
