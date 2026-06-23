"use client";
import type { CalcInputs, CalcResult } from "@/lib/calculator";
import { formatDollarsShort } from "@/lib/calculator";
import { COMMERCIAL } from "@/lib/constants";

interface Props {
  inputs: CalcInputs;
  result: CalcResult;
}

export function CalculatorOutput({ result }: Props) {
  const y1 = result.years[0];
  const productShareOfTotal = y1.total > 0 ? (y1.productIncome / y1.total) * 100 : 0;

  return (
    <div className="lg:sticky lg:top-24 border border-tmrw-grey-200 bg-tmrw-grey-50 p-7 rounded-sm">
      <span className="font-ui text-[0.65rem] uppercase tracking-[0.04em] text-tmrw-grey-700">
        CURRENT MODEL
      </span>

      <div className="mt-4">
        <div className="font-body text-[2.25rem] leading-none tracking-[-0.01em] text-tmrw-black">
          {formatDollarsShort(y1.total)}
        </div>
        <div className="font-ui text-[0.65rem] uppercase tracking-[0.04em] text-tmrw-grey-700 mt-2">
          YEAR 1 TO FOUNDATION
        </div>
      </div>

      <div className="mt-6 border-t border-tmrw-grey-200 pt-2">
        <OutputRow
          label="Activation income"
          value={`${y1.newJoiners} \u00d7 ~$${Math.round(
            COMMERCIAL.foundationActivationBlended
          )}`}
        />
        <OutputRow label="Joining total" value={formatDollarsShort(y1.joiningIncome)} />
        <OutputRow label="Ongoing income" value={formatDollarsShort(y1.monthlyIncome)} />
        <OutputRow label="Product revenue share" value={formatDollarsShort(y1.productIncome)} />
        <OutputRow label="Product share of total" value={`${Math.round(productShareOfTotal)}%`} />
      </div>

      <div className="mt-2 pb-2">
        <p className="font-body text-[0.7rem] italic text-tmrw-grey-500 leading-[1.5] tracking-[-0.01em]">
          Blended at 50% Brighter / 50% Cellular.
        </p>
      </div>

      <div className="mt-6 border-t border-tmrw-grey-200 pt-2">
        <OutputRow label="5-year total" value={formatDollarsShort(result.fiveYearTotal)} />
        <OutputRow
          label="Annualised average"
          value={`${formatDollarsShort(result.annualisedAverage)}/yr`}
        />
        <OutputRow
          label="Steady state Y3+"
          value={`${formatDollarsShort(result.steadyStateAnnual)}/yr`}
        />
      </div>
    </div>
  );
}

function OutputRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-baseline py-2.5 border-b border-tmrw-grey-200 last:border-0">
      <span className="font-ui text-[0.6rem] uppercase tracking-[0.04em] text-tmrw-grey-700">
        {label}
      </span>
      <span className="font-body text-[0.95rem] text-tmrw-black tracking-[-0.01em]">
        {value}
      </span>
    </div>
  );
}
