"use client";
import { useState } from "react";
import { compute, type CalcInputs } from "@/lib/calculator";
import { BASE_CASE } from "@/lib/scenarios";
import { CalculatorHero } from "@/components/calculator/CalculatorHero";
import { CalculatorControls } from "@/components/calculator/CalculatorControls";
import { CalculatorOutput } from "@/components/calculator/CalculatorOutput";
import { YearBuildTable } from "@/components/calculator/YearBuildTable";
import { SensitivityMatrix } from "@/components/calculator/SensitivityMatrix";

export function FinancialPartnership() {
  const [inputs, setInputs] = useState<CalcInputs>(BASE_CASE);
  const result = compute(inputs);

  return (
    <section id="financial" className="bg-tmrw-white py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <span className="font-ui text-[0.65rem] md:text-[0.7rem] uppercase tracking-[0.04em] text-tmrw-syringe mb-5 block">
          06 &mdash; THE FINANCIAL PARTNERSHIP
        </span>

        <h2 className="font-display text-[1.875rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[4rem] uppercase leading-[0.95] tracking-[-0.01em] text-tmrw-black">
          MODEL THE OUTCOMES.
        </h2>

        <p className="font-body text-[0.9rem] sm:text-[0.95rem] md:text-[1.05rem] leading-[1.55] tracking-[-0.01em] text-tmrw-grey-700 max-w-2xl mt-5">
          The economics from both sides. Adjust any input &mdash; the model updates live. Scroll for the full 5-year build and sensitivity analysis.
        </p>

        <CalculatorHero result={result} />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 lg:gap-12 mt-14 lg:mt-20">
          <div className="order-2 lg:order-1">
            <CalculatorControls inputs={inputs} setInputs={setInputs} />
          </div>
          <div className="order-1 lg:order-2">
            <CalculatorOutput inputs={inputs} result={result} />
          </div>
        </div>

        <p className="font-body text-[0.75rem] italic text-tmrw-grey-700 mt-10 max-w-3xl leading-[1.6] tracking-[-0.01em]">
          Product-line attach and spend assumptions are the model&apos;s most sensitive inputs and have no empirical anchor yet. Base-case attach of 30% assumes members who convert become peptide-tier members at approximately $3,000 annual spend across supplements, compounded peptides, retests, and protocol adjustments. Peptide prescribing operates inside Australia&apos;s existing Schedule 4 pathway via TMRW&apos;s integrative GP network and licensed compounding pharmacy relationships. Stage 1&apos;s first six months will confirm or revise these figures.
        </p>

        <YearBuildTable result={result} className="mt-24" />

        <SensitivityMatrix inputs={inputs} className="mt-24" />
      </div>
    </section>
  );
}
