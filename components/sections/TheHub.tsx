import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { getHubImage } from "@/lib/brand-images";

export function TheHub() {
  return (
    <section id="hub" className="bg-tmrw-grey-50 py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <FadeIn>
          <span className="font-ui text-[0.65rem] md:text-[0.7rem] uppercase tracking-[0.04em] text-tmrw-infusion mb-4 block">
            07 &mdash; THE TMRW HUB AT VRTUS
          </span>
        </FadeIn>

        <FadeIn>
          <h2 className="font-display text-[1.375rem] sm:text-[1.625rem] md:text-[2rem] lg:text-[2.5rem] uppercase leading-none tracking-[-0.01em] text-tmrw-black">
            A CLINICAL NODE INSIDE THE GYM.
          </h2>
        </FadeIn>

        <FadeIn>
          <p className="font-body text-[0.9rem] sm:text-[0.95rem] md:text-[1.05rem] leading-[1.55] tracking-[-0.01em] text-tmrw-grey-700 max-w-xl mt-4">
            Zero capex. Zero clinical risk to VRTUS. 6-month launch term.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="relative w-full h-[240px] md:h-[340px] my-14 rounded-sm overflow-hidden">
            <Image
              src={getHubImage()}
              alt="TMRW clinical space"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1100px"
            />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <FadeIn delay={0.1}>
            <div>
              <span className="font-ui text-[0.65rem] uppercase tracking-[0.04em] text-tmrw-grey-700 block">
                WHAT VRTUS PROVIDES
              </span>
              <div className="mt-5 space-y-5 font-body text-[0.95rem] leading-[1.65] tracking-[-0.01em] text-tmrw-grey-700">
                <p>
                  The upstairs room, in its current state. We configure it as a clinical space &mdash; screening, consultation, blood collection. Room access 7&ndash;10am, 3 days per week, for the initial 6-month term. We can extend to 6 hours per day within the term if volume supports it.
                </p>
                <p>
                  Brand access. Signage in the room and at reception, co-branded member communications through your existing channels, and staff briefings so that your trainers understand when and how to refer.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              <span className="font-ui text-[0.65rem] uppercase tracking-[0.04em] text-tmrw-grey-700 block">
                WHAT TMRW BRINGS
              </span>
              <div className="mt-5 space-y-5 font-body text-[0.95rem] leading-[1.65] tracking-[-0.01em] text-tmrw-grey-700">
                <p>
                  The clinical team. A credentialed phlebotomist at every session and a TMRW clinician available for consultations, protocol reviews, and onsite escalation. All staff operate under TMRW&apos;s clinical governance &mdash; their professional indemnity, their liability, their training.
                </p>
                <p>
                  The full back-end. Booking system, member app, billing, diagnostic supply, supplement fulfilment, clinical decision support, member comms, and the prescribing pathway itself &mdash; integrative GPs credentialed to prescribe Schedule 4 therapies, paired with licensed Australian compounding pharmacy relationships, which together unlock a peptide-tier offering that is difficult for any gym to build in-house. VRTUS does not operate any part of the clinical workflow. If a member asks a clinical question in the gym, your staff refer them to TMRW. That is the extent of the clinical interaction from the VRTUS side.
                </p>
                <p>
                  Full indemnity and product liability. No clinical insurance extension required on the VRTUS side. To be confirmed with your broker as part of launch preparation.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
