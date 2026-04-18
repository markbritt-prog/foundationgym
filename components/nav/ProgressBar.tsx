"use client";
import { useScrollProgress } from "./useScrollProgress";

export function ProgressBar() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="h-full bg-tmrw-syringe origin-left transition-transform duration-75 ease-linear"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
