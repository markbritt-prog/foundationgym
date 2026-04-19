import { FadeIn } from "@/components/ui/FadeIn";
import { STAGE1_LEARNINGS } from "@/lib/constants";

export function Learnings() {
  return (
    <section id="learnings" className="bg-tmrw-grey-50 py-12 sm:py-14 md:py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <FadeIn>
          <span className="font-ui text-[0.65rem] md:text-[0.7rem] uppercase tracking-[0.04em] text-tmrw-grey-700 block">
            08 &mdash; WHAT WE LEARN IN STAGE 1
          </span>
        </FadeIn>

        <FadeIn>
          <h2 className="font-display text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] uppercase leading-none tracking-[-0.01em] text-tmrw-black mt-4">
            WHAT DECIDES STAGE 2.
          </h2>
        </FadeIn>

        <FadeIn>
          <p className="font-body text-[0.925rem] md:text-[0.95rem] text-tmrw-grey-700 leading-[1.65] tracking-[-0.01em] mt-6 max-w-xl">
            The launch term is designed to answer 4 questions. The answers determine what &mdash; if anything &mdash; comes next. Referral channels either convert or they don&apos;t; we&apos;ll know inside 6 months.
          </p>
        </FadeIn>

        <div className="mt-10">
          {STAGE1_LEARNINGS.map((item, i) => (
            <FadeIn key={i} delay={0.08 * (i + 1)}>
              <div
                className={`flex items-start gap-5 py-5 ${
                  i < STAGE1_LEARNINGS.length - 1
                    ? "border-b border-tmrw-grey-200"
                    : ""
                }`}
              >
                <span className="font-ui text-[0.7rem] uppercase tracking-[0.04em] text-tmrw-grey-700 mt-1 w-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-body text-[0.95rem] text-tmrw-black leading-[1.6] tracking-[-0.01em] flex-1">
                  {item}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
