import { FadeIn } from "@/components/ui/FadeIn";
import { JOURNEY_STEPS, PARTNER_NAME } from "@/lib/constants";

function accentFor(i: number): { text: string; border: string } {
  // Quiet default, vitality on the retest/optimise step which is the payoff
  if (i === 5) return { text: "text-tmrw-vitality", border: "border-tmrw-vitality" };
  return { text: "text-tmrw-grey-700", border: "border-tmrw-grey-300" };
}

export function MemberJourney() {
  return (
    <section id="member-journey" className="bg-tmrw-black py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <FadeIn>
          <span className="font-ui text-[0.65rem] md:text-[0.7rem] uppercase tracking-[0.04em] text-tmrw-grey-300 mb-4 block">
            04 &mdash; THE MEMBER JOURNEY
          </span>
        </FadeIn>

        <FadeIn>
          <h2 className="font-display text-[1.375rem] sm:text-[1.625rem] md:text-[2rem] lg:text-[2.5rem] uppercase leading-none tracking-[-0.01em] text-tmrw-white">
            FROM GYM FLOOR TO PERSONALISED PROTOCOL.
          </h2>
        </FadeIn>

        <FadeIn>
          <p className="font-body text-[0.9rem] sm:text-[0.95rem] md:text-[1.05rem] text-tmrw-grey-300 mt-4 max-w-xl leading-[1.55] tracking-[-0.01em]">
            A {PARTNER_NAME} member signs up online or at a TMRW collection centre. Protocol is built on their data and shipped direct.
          </p>
        </FadeIn>

        {/* Desktop: 4-column grid (4+3 for 7 items) */}
        <div className="hidden md:grid md:grid-cols-4 gap-x-6 gap-y-10 mt-14">
          {JOURNEY_STEPS.map((s, i) => {
            const accent = accentFor(i);
            return (
              <FadeIn key={s.step} delay={0.08 * (i + 1)}>
                <div className="transition-transform duration-300 hover:-translate-y-1">
                  <div className={`border-t-2 ${accent.border} pt-7 pb-5`}>
                    <span className={`font-ui text-[0.65rem] ${accent.text} tracking-[0.04em] uppercase`}>
                      {s.step}
                    </span>
                    <h3 className="font-body text-[1.1rem] text-tmrw-white mt-2 mb-3 tracking-[-0.01em]">
                      {s.title}
                    </h3>
                    <p className="font-body text-[0.8rem] text-tmrw-grey-300 leading-[1.5] mb-4 tracking-[-0.01em]">
                      {s.desc}
                    </p>
                    <span
                      className={`inline-block font-ui text-[0.7rem] ${accent.text} uppercase tracking-[0.08em] border border-current px-2.5 py-1 rounded-sm`}
                    >
                      {s.time}
                    </span>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden space-y-0 mt-10">
          {JOURNEY_STEPS.map((s, i) => {
            const accent = accentFor(i);
            return (
              <FadeIn key={s.step} delay={0.08 * (i + 1)}>
                <div className="flex gap-6 py-6">
                  <div className="flex flex-col items-center">
                    <span className={`font-ui text-[0.6rem] ${accent.text} tracking-[0.04em] uppercase`}>
                      {s.step}
                    </span>
                    {i < JOURNEY_STEPS.length - 1 && (
                      <div className="w-px flex-1 bg-tmrw-grey-800 mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-2">
                    <h3 className="font-body text-[1.1rem] text-tmrw-white mb-1 tracking-[-0.01em]">
                      {s.title}
                    </h3>
                    <p className="font-body text-[0.8rem] text-tmrw-grey-300 leading-[1.5] mb-3 tracking-[-0.01em]">
                      {s.desc}
                    </p>
                    <span
                      className={`inline-block font-ui text-[0.65rem] ${accent.text} uppercase tracking-[0.08em] border border-current px-2 py-0.5 rounded-sm`}
                    >
                      {s.time}
                    </span>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
