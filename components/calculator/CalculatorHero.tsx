"use client";
import { useEffect, useState } from "react";
import type { CalcResult } from "@/lib/calculator";
import { formatDollarsShort } from "@/lib/calculator";
import { StackedBars } from "./StackedBars";

interface Props {
  result: CalcResult;
}

export function CalculatorHero({ result }: Props) {
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    setFlash(true);
    const t = setTimeout(() => setFlash(false), 200);
    return () => clearTimeout(t);
  }, [result.fiveYearTotal]);

  return (
    <div className="mt-16 flex flex-col items-center text-center">
      <span className="font-ui text-[0.65rem] uppercase tracking-[0.04em] text-tmrw-grey-700 mb-4">
        STEADY-STATE ANNUAL RUN-RATE
      </span>
      <div
        className={`font-body text-[4rem] md:text-[5rem] leading-[0.9] tracking-[-0.02em] text-tmrw-black transition-opacity duration-200 ${
          flash ? "opacity-60" : "opacity-100"
        }`}
      >
        {formatDollarsShort(result.annualisedAverage)}/yr
      </div>
      <div className="font-body text-[1rem] text-tmrw-grey-600 mt-3 tracking-[-0.01em]">
        {formatDollarsShort(result.fiveYearTotal)} over five years. A channel you do nothing operational to maintain.
      </div>
      <div className="w-full max-w-3xl mt-12">
        <StackedBars years={result.years} />
      </div>
    </div>
  );
}
