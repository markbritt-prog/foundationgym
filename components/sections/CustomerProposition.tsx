import { FadeIn } from "@/components/ui/FadeIn";
import { PARTNER_NAME, COMMERCIAL } from "@/lib/constants";

const RETAIL_WEEKLY = Math.round((COMMERCIAL.monthlyFee * 12) / 52);
const MEMBER_SAVINGS = COMMERCIAL.joiningFee - COMMERCIAL.memberPaysJoining;

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
            WHAT YOUR MEMBERS PAY.
          </h2>
        </FadeIn>

        <FadeIn>
          <p className="font-body text-[0.9rem] sm:text-[0.95rem] md:text-[1.05rem] leading-[1.55] tracking-[-0.01em] text-tmrw-grey-700 max-w-2xl mt-5">
            Retail pricing on the left. The {PARTNER_NAME} member offer on the right. Same programme, same monthly price, half the joining fee.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-12 md:mt-16">
          {/* Retail */}
          <FadeIn delay={0.1}>
            <div className="border border-tmrw-grey-200 bg-tmrw-white p-7 sm:p-8 md:p-10 rounded-sm h-full flex flex-col">
              <span className="font-ui text-[0.65rem] uppercase tracking-[0.04em] text-tmrw-grey-700">
                PUBLIC RETAIL
              </span>
              <h3 className="font-body text-[1.25rem] tracking-[-0.01em] text-tmrw-black mt-3">
                Anyone off the street
              </h3>

              <div className="mt-8 space-y-6 flex-1">
                <PriceRow
                  label="Joining fee"
                  value={`$${COMMERCIAL.joiningFee}`}
                  note="One-off"
                />
                <PriceRow
                  label="Monthly"
                  value={`$${COMMERCIAL.monthlyFee}`}
                  note={`~$${RETAIL_WEEKLY} / week`}
                />
              </div>
            </div>
          </FadeIn>

          {/* Foundation member */}
          <FadeIn delay={0.2}>
            <div className="border border-tmrw-black bg-tmrw-white p-7 sm:p-8 md:p-10 rounded-sm h-full flex flex-col">
              <span className="font-ui text-[0.65rem] uppercase tracking-[0.04em] text-tmrw-infusion">
                {PARTNER_NAME.toUpperCase()} MEMBERS
              </span>
              <h3 className="font-body text-[1.25rem] tracking-[-0.01em] text-tmrw-black mt-3">
                With the partner code
              </h3>

              <div className="mt-8 space-y-6 flex-1">
                <PriceRow
                  label="Joining fee"
                  value={`$${COMMERCIAL.memberPaysJoining}`}
                  strikethrough={`$${COMMERCIAL.joiningFee}`}
                  note={`Save $${MEMBER_SAVINGS} — 50% off`}
                  emphasised
                />
                <PriceRow
                  label="Monthly"
                  value={`$${COMMERCIAL.monthlyFee}`}
                  note={`~$${RETAIL_WEEKLY} / week`}
                />
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4}>
          <p className="font-body text-[0.85rem] md:text-[0.9rem] italic text-tmrw-grey-700 mt-8 text-center tracking-[-0.01em]">
            What that membership actually buys, itemised next.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

interface PriceRowProps {
  label: string;
  value: string;
  strikethrough?: string;
  note?: string;
  emphasised?: boolean;
}

function PriceRow({ label, value, strikethrough, note, emphasised }: PriceRowProps) {
  return (
    <div className="border-t border-tmrw-grey-100 pt-6 first:border-t-0 first:pt-0">
      <div className="font-ui text-[0.6rem] uppercase tracking-[0.04em] text-tmrw-grey-700">
        {label}
      </div>
      <div className="flex items-baseline gap-3 mt-2">
        <span
          className={`font-body leading-none tracking-[-0.02em] text-tmrw-black ${
            emphasised
              ? "text-[2.5rem] sm:text-[2.75rem] md:text-[3rem]"
              : "text-[2rem] sm:text-[2.25rem] md:text-[2.5rem]"
          }`}
        >
          {value}
        </span>
        {strikethrough && (
          <span className="font-body text-[1.1rem] md:text-[1.25rem] text-tmrw-grey-500 line-through tracking-[-0.01em]">
            {strikethrough}
          </span>
        )}
      </div>
      {note && (
        <p
          className={`font-body text-[0.8rem] md:text-[0.85rem] tracking-[-0.01em] mt-2 ${
            emphasised ? "text-tmrw-infusion" : "text-tmrw-grey-700 italic"
          }`}
        >
          {note}
        </p>
      )}
    </div>
  );
}
