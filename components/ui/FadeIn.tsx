"use client";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.8,
  y = 40,
  className,
  once = true,
}: FadeInProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount: 0.15 });
  const prefersReducedMotion = useReducedMotion();

  const effectiveY = prefersReducedMotion ? 0 : y;
  const effectiveDuration = prefersReducedMotion ? 0.2 : duration;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: effectiveY }}
      animate={
        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: effectiveY }
      }
      transition={{
        duration: effectiveDuration,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
