import { FadeIn } from "@/components/ui/FadeIn";
import { PARTNER_NAME, COMMERCIAL } from "@/lib/constants";

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
            WE&apos;VE SIMPLIFIED EVERYTHING.
          </h2>
        </FadeIn>

        <FadeIn>
          <p className="font-body text-[0.9rem] sm:text-[0.95rem] md:text-[1.05rem] leading-[1.55] tracking-[-0.01em] text-tmrw-grey-700 max-w-2xl mt-5">
            We&apos;ve dropped the joining fee across the board and reduced the weekly price &mdash; same offer for everyone, no special-case discount. On top of that, {PARTNER_NAME} members get one complimentary clinical consult.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-12 md:mt-16">
          {/* Before */}
          <FadeIn delay={0.1}>
            <div className="border border-tmrw-grey-200 bg-tmrw-white p-7 sm:p-8 md:p-10 rounded-sm h-full flex flex-col">
              <span className="font-ui text-[0.65rem] uppercase tracking-[0.04em] text-tmrw-grey-500">
                PUBLIC RETAIL &mdash; BEFORE
              </span>
              <h3 className="font-body text-[1.25rem] tracking-[-0.01em] text-tmrw-grey-500 mt-3">
                What it used to cost
              </h3>

              <div className="mt-8 space-y-6 flex-1">
                <PriceRow
                  label="Joining fee"
                  value={`$${COMMERCIAL.previousJoiningFee}`}
                  note="One-off"
                  muted
                />
                <PriceRow
                  label="Monthly"
                  value={`$${COMMERCIAL.previousMonthlyFee}`}
                  note="~$57 / week"
                  muted
                />
              </div>
            </div>
          </FadeIn>

          {/* Now */}
          <FadeIn delay={0.2}>
            <div className="border border-tmrw-black bg-tmrw-white p-7 sm:p-8 md:p-10 rounded-sm h-full flex flex-col">
              <span className="font-ui text-[0.65rem] uppercase tracking-[0.04em] text-tmrw-infusion">
                PUBLIC RETAIL &mdash; NOW
              </span>
              <h3 className="font-body text-[1.25rem] tracking-[-0.01em] text-tmrw-black mt-3">
                What everyone pays today
              </h3>

              <div className="mt-8 space-y-6 flex-1">
                <PriceRow
                  label="Joining fee"
                  value="$0"
                  note="Waived across the board"
                  emphasised
                />
                <PriceRow
                  label="Weekly"
                  value={`$${COMMERCIAL.weeklyFee}`}
                  note={`$${COMMERCIAL.monthlyFee} / month, all in`}
                />
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Foundation-specific add-on */}
        <FadeIn delay={0.3}>
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
  note?: string;
  emphasised?: boolean;
  muted?: boolean;
}

function PriceRow({ label, value, note, emphasised, muted }: PriceRowProps) {
  return (
    <div className="border-t border-tmrw-grey-100 pt-6 first:border-t-0 first:pt-0">
      <div
        className={`font-ui text-[0.6rem] uppercase tracking-[0.04em] ${
          muted ? "text-tmrw-grey-500" : "text-tmrw-grey-700"
        }`}
      >
        {label}
      </div>
      <div className="flex items-baseline gap-3 mt-2">
        <span
          className={`font-body leading-none tracking-[-0.02em] ${
            muted ? "text-tmrw-grey-500 line-through" : "text-tmrw-black"
          } ${
            emphasised
              ? "text-[2.5rem] sm:text-[2.75rem] md:text-[3rem]"
              : "text-[2rem] sm:text-[2.25rem] md:text-[2.5rem]"
          }`}
        >
          {value}
        </span>
      </div>
      {note && (
        <p
          className={`font-body text-[0.8rem] md:text-[0.85rem] tracking-[-0.01em] mt-2 ${
            emphasised
              ? "text-tmrw-infusion"
              : muted
              ? "text-tmrw-grey-500 italic"
              : "text-tmrw-grey-700 italic"
          }`}
        >
          {note}
        </p>
      )}
    </div>
  );
}
