import { FadeIn } from "@/components/ui/FadeIn";
import { NEXT_STEPS } from "@/lib/constants";

export function NextSteps() {
  return (
    <section id="next-steps" className="bg-tmrw-grey-50 py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <FadeIn>
          <h2 className="font-body text-[1.125rem] sm:text-[1.25rem] md:text-[1.5rem] lg:text-[1.75rem] leading-[1.1] tracking-[-0.01em] text-tmrw-black mb-10">
            3 steps to launch.
          </h2>
        </FadeIn>

        <div>
          {NEXT_STEPS.map((s, i) => (
            <FadeIn key={s.step} delay={0.12 * (i + 1)}>
              <div
                className={`grid grid-cols-[40px_1fr] md:grid-cols-[60px_1fr_100px] py-6 md:py-7 ${
                  i < NEXT_STEPS.length - 1
                    ? "border-b border-tmrw-grey-200"
                    : ""
                }`}
              >
                <span className="font-ui text-[0.7rem] text-tmrw-grey-700 uppercase tracking-[0.04em] pt-1">
                  STEP {s.step}
                </span>
                <div>
                  <h3 className="font-body text-[1.1rem] text-tmrw-black mb-2 tracking-[-0.01em]">
                    {s.title}
                  </h3>
                  <p className="font-body text-[0.875rem] text-tmrw-grey-700 leading-[1.6] tracking-[-0.01em]">
                    {s.desc}
                  </p>
                  <span className="font-ui text-[0.6rem] text-tmrw-grey-700 uppercase tracking-[0.04em] mt-3 inline-block md:hidden">
                    {s.timeline}
                  </span>
                </div>
                <span className="font-ui text-[0.6rem] text-tmrw-grey-700 uppercase tracking-[0.04em] text-right hidden md:block pt-2">
                  {s.timeline}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
