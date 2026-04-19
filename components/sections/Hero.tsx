"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { PARTNER_NAME, PROPOSAL_DATE, PARTNER_SUBURB } from "@/lib/constants";
import { getHeroImage } from "@/lib/brand-images";

const ease = [0.22, 1, 0.36, 1];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-tmrw-black">
      {/* Background image — kept intentionally atmospheric, heavily darkened */}
      <Image
        src={getHeroImage()}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-45"
      />

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-tmrw-black/60 via-tmrw-black/40 to-tmrw-black/70" />
      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.5) 100%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-2xl">
        <motion.div
          className="inline-flex items-center gap-5 sm:gap-6 md:gap-10 bg-tmrw-white border border-tmrw-grey-200 px-8 sm:px-10 md:px-14 py-7 sm:py-9 md:py-11 rounded-sm shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease }}
        >
          <Image
            src="https://res.cloudinary.com/dkbhatjde/image/upload/v1774156339/TMRW_Wordmark_White_feybxl.svg"
            alt="TMRW"
            width={200}
            height={56}
            priority
            className="h-7 sm:h-9 md:h-10 w-auto invert"
          />
          <span className="font-ui text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] text-tmrw-grey-700">
            &times;
          </span>
          <Image
            src="/foundation-logo.png"
            alt={PARTNER_NAME}
            width={200}
            height={56}
            priority
            className="h-9 sm:h-11 md:h-14 w-auto"
          />
        </motion.div>

        <motion.div
          className="max-w-xl text-center mt-8 sm:mt-10 md:mt-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease, delay: 0.4 }}
        >
          <p className="font-body text-[1rem] md:text-[1.2rem] leading-[1.55] tracking-[-0.01em] text-tmrw-grey-300">
            A partnership proposal from TMRW to {PARTNER_NAME}.
            <br className="hidden md:block" /> {PARTNER_SUBURB}, {PROPOSAL_DATE}.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
