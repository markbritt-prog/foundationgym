import { FadeIn } from "@/components/ui/FadeIn";
import { TERMS_STAGE1 } from "@/lib/constants";

export function Terms() {
  return (
    <section id="terms" className="bg-tmrw-white border-t border-tmrw-grey-200 py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <FadeIn>
          <h2 className="font-body text-[1.125rem] sm:text-[1.25rem] md:text-[1.5rem] lg:text-[1.75rem] leading-[1.1] tracking-[-0.01em] text-tmrw-black">
            Indicative term sheet.
          </h2>
        </FadeIn>

        <FadeIn>
          <p className="font-body text-[0.875rem] text-tmrw-grey-700 leading-[1.6] tracking-[-0.01em] mt-4 mb-10 max-w-xl">
            The launch-term shape. Everything below is indicative &mdash; the formal agreement is drafted once we align.
          </p>
        </FadeIn>

        <div>
          {TERMS_STAGE1.map((term, i) => (
            <FadeIn key={term.label} delay={0.03 * (i + 1)}>
              <div
                className={`grid grid-cols-1 md:grid-cols-[200px_1fr] py-4 md:py-4 ${
                  i < TERMS_STAGE1.length - 1
                    ? "border-b border-tmrw-grey-200"
                    : ""
                }`}
              >
                <span className="font-ui text-[0.65rem] text-tmrw-grey-700 uppercase tracking-[0.04em] mb-1 md:mb-0">
                  {term.label}
                </span>
                <span className="font-body text-[0.875rem] text-tmrw-black leading-[1.5] tracking-[-0.01em]">
                  {term.value}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <p className="font-body text-[0.8rem] italic text-tmrw-grey-700 leading-[1.6] tracking-[-0.01em] mt-8">
            Terms are indicative. A formal agreement will be drafted upon agreement in principle.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
