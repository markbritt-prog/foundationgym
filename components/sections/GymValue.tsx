import { FadeIn } from "@/components/ui/FadeIn";
import { GYM_VALUE } from "@/lib/constants";

export function GymValue() {
  return (
    <section id="gym-value" className="bg-tmrw-white py-12 sm:py-14 md:py-16 lg:py-20">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <FadeIn>
          <span className="font-ui text-[0.65rem] md:text-[0.7rem] uppercase tracking-[0.04em] text-tmrw-grey-700 block">
            02 &mdash; WHAT CHANGES FOR FOUNDATION
          </span>
        </FadeIn>

        <FadeIn>
          <h2 className="font-display text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] uppercase leading-none tracking-[-0.01em] text-tmrw-black mt-4 mb-10">
            WHAT THIS UNLOCKS.
          </h2>
        </FadeIn>

        <div className="space-y-0">
          {GYM_VALUE.map((item, i) => (
            <FadeIn key={item.title} delay={0.1 * (i + 1)}>
              <div
                className={`py-7 md:py-8 ${
                  i < GYM_VALUE.length - 1 ? "border-b border-tmrw-grey-200" : ""
                }`}
              >
                <h3 className="font-body text-[1.1rem] text-tmrw-black mb-3 tracking-[-0.01em]">
                  {item.title}
                </h3>
                <p className="font-body text-[0.95rem] text-tmrw-grey-700 max-w-xl leading-[1.65] tracking-[-0.01em]">
                  {item.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
