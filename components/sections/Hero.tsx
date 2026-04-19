"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { PARTNER_NAME, PROPOSAL_DATE, PARTNER_SUBURB } from "@/lib/constants";
import { getHeroImage } from "@/lib/brand-images";

const ease = [0.22, 1, 0.36, 1];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-tmrw-black">
      {/* Hero photo — deliberately chosen, heavily darkened */}
      <Image
        src={getHeroImage()}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-55"
      />

      {/* Bottom-weighted gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-tmrw-black/50 via-tmrw-black/30 to-tmrw-black/85" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-3xl">

        {/* Logo lockup — thinner, more editorial card */}
        <motion.div
          className="inline-flex items-center gap-8 sm:gap-12 md:gap-16 bg-tmrw-white px-10 sm:px-14 md:px-20 py-5 sm:py-6 md:py-7 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease }}
        >
          <Image
            src="https://res.cloudinary.com/dkbhatjde/image/upload/v1774156339/TMRW_Wordmark_Black_fo2tpb.svg"
            alt="TMRW"
            width={200}
            height={56}
            priority
            className="h-6 sm:h-7 md:h-8 w-auto"
          />
          <span
            className="font-body text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] text-tmrw-grey-400 leading-none"
            aria-hidden="true"
          >
            &times;
          </span>
          <Image
            src="/foundation-logo.png"
            alt={PARTNER_NAME}
            width={240}
            height={60}
            priority
            className="h-7 sm:h-8 md:h-10 w-auto invert"
          />
        </motion.div>

        {/* Grounding line — one sentence, no tagline competition */}
        <motion.p
          className="font-body text-[1rem] md:text-[1.15rem] leading-[1.5] tracking-[-0.01em] text-tmrw-grey-300 mt-10 sm:mt-12 md:mt-14 max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease, delay: 0.4 }}
        >
          A partnership proposal from TMRW to {PARTNER_NAME}.
          <br />
          {PARTNER_SUBURB}, {PROPOSAL_DATE}.
        </motion.p>

      </div>

      {/* Scroll affordance */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-pulse-scroll">
          <span className="font-ui text-[0.6rem] uppercase tracking-[0.08em] text-tmrw-grey-400">
            Scroll
          </span>
          <div className="w-px h-8 bg-tmrw-grey-400" />
        </div>
      </div>
    </section>
  );
}
