import { FadeIn } from "@/components/ui/FadeIn";

export function LaunchingTogether() {
  return (
    <section id="launching-together" className="bg-tmrw-white py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <FadeIn>
          <span className="font-ui text-[0.65rem] md:text-[0.7rem] uppercase tracking-[0.04em] text-tmrw-grey-700 mb-4 block">
            07 &mdash; LAUNCHING TOGETHER
          </span>
        </FadeIn>

        <FadeIn>
          <h2 className="font-display text-[1.375rem] sm:text-[1.625rem] md:text-[2rem] lg:text-[2.5rem] uppercase leading-none tracking-[-0.01em] text-tmrw-black">
            YOU&apos;RE STILL LAYING FOUNDATIONS.<br />SO ARE WE.
          </h2>
        </FadeIn>

        <FadeIn>
          <p className="font-body text-[0.9rem] sm:text-[0.95rem] md:text-[1.05rem] leading-[1.55] tracking-[-0.01em] text-tmrw-grey-700 max-w-xl mt-4">
            This isn&apos;t a partnership between two mature brands trying to extract from a stable market. It&apos;s two teams at the beginning of something, choosing to do the next bit together. The launch should feel like that.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mt-14">
          <FadeIn delay={0.1}>
            <div>
              <span className="font-ui text-[0.65rem] uppercase tracking-[0.04em] text-tmrw-grey-700 block">
                WHAT TMRW DRIVES
              </span>
              <div className="mt-5 space-y-5 font-body text-[0.95rem] leading-[1.65] tracking-[-0.01em] text-tmrw-grey-700">
                <p>
                  The campaign. Co-branded creative and the paid-media budget, PR, and a launch event held at 350 Bourke. All content production &mdash; photography, short-form video, founder interviews, member stories &mdash; on the TMRW budget.
                </p>
                <p>
                  Ongoing content. Quarterly storytelling drops featuring Foundation members whose protocols produce meaningful change. TMRW&apos;s ambassador network amplifies the launch; members of the Foundation community who have reach are introduced into that programme.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              <span className="font-ui text-[0.65rem] uppercase tracking-[0.04em] text-tmrw-grey-700 block">
                WHAT FOUNDATION PROVIDES
              </span>
              <div className="mt-5 space-y-5 font-body text-[0.95rem] leading-[1.65] tracking-[-0.01em] text-tmrw-grey-700">
                <p>
                  Channels and coordination. Foundation&apos;s social accounts and email announcing the partnership in coordinated sequence with TMRW. Partner code in the member app and new-member welcome sequence. One co-branded in-gym launch event, plus one TMRW event per quarter after that.
                </p>
                <p>
                  Member comms and introductions. Warm introductions to Foundation members who could be ambassadors or influencer candidates. Founder, coach, and operations team availability for co-branded content days.
                </p>
                <p>
                  A pace-of-aging leaderboard among Foundation members. Epigenetic data makes competitive wellness visible and shareable &mdash; the Surry Hills gym with the lowest biological age.
                </p>
                <p>
                  One marketing lead as a point of contact. TMRW integrates into the Foundation marketing calendar rather than competing with it.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
