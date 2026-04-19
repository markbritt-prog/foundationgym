"use client";
import type { CalcInputs } from "@/lib/calculator";
import { computeSensitivityCell, formatDollarsShort } from "@/lib/calculator";

interface Props {
  inputs: CalcInputs;
  className?: string;
}

const ATTACH_ROWS = [0.15, 0.2, 0.25, 0.3, 0.35];
const ACTIVATION_COLS = [15, 25, 35, 50, 70];

function nearest<T extends number>(value: T, options: T[]): T {
  return options.reduce((a, b) =>
    Math.abs(b - value) < Math.abs(a - value) ? b : a
  );
}

export function SensitivityMatrix({ inputs, className = "" }: Props) {
  const currentAttach = nearest(
    Math.round(inputs.productAttachRate * 100) / 100,
    ATTACH_ROWS
  );
  const currentActivations = nearest(inputs.activationsY1, ACTIVATION_COLS);

  return (
    <div className={className}>
      <span className="font-ui text-[0.65rem] uppercase tracking-[0.04em] text-tmrw-grey-700">
        SENSITIVITY ANALYSIS
      </span>
      <h3 className="font-display text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] uppercase leading-none tracking-[-0.01em] text-tmrw-black mt-3">
        WHAT THE PARTNERSHIP IS POTENTIALLY WORTH.
      </h3>
      <p className="font-body text-[0.9rem] text-tmrw-grey-700 mt-4 max-w-2xl leading-[1.6] tracking-[-0.01em]">
        5-year annual average revenue to Foundation across activation and attach scenarios. Assumes a 70% online / 30% collection-centre channel mix, +10 new activations per year on top of the Year 1 base, and an 18-month average retention. The highlighted cell reflects your current slider position.
      </p>

      <div className="mt-8 md:mt-10 -mx-6 md:mx-0 overflow-x-auto">
        <div className="font-ui text-[0.55rem] md:text-[0.6rem] uppercase tracking-[0.04em] text-tmrw-grey-700 text-right mb-3 pr-6 md:pr-0">
          ACTIVATIONS (YEAR 1) &rarr;
        </div>
        <table className="w-full min-w-[560px] px-6 md:px-0">
          <thead>
            <tr className="border-b border-tmrw-grey-200">
              <th className="sticky left-0 bg-tmrw-grey-50 md:bg-transparent z-10 py-4 pl-6 md:pl-0 pr-6 text-left min-w-[120px]" />
              {ACTIVATION_COLS.map((c) => (
                <th
                  key={c}
                  className="py-4 px-2 text-center font-ui text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.04em] text-tmrw-grey-700 min-w-[70px]"
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ATTACH_ROWS.map((attach) => (
              <tr
                key={attach}
                className="border-b border-tmrw-grey-100 last:border-0"
              >
                <td className="sticky left-0 bg-tmrw-grey-50 md:bg-transparent z-10 py-4 pl-6 md:pl-0 pr-6 font-ui text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.04em] text-tmrw-grey-700 text-left whitespace-nowrap">
                  {Math.round(attach * 100)}% ATTACH
                </td>
                {ACTIVATION_COLS.map((acts) => {
                  const v = computeSensitivityCell(acts, attach, inputs.onlineMix);
                  const isCurrent =
                    attach === currentAttach && acts === currentActivations;
                  return (
                    <td
                      key={acts}
                      className={`py-4 px-2 text-center font-body text-[0.875rem] md:text-[0.95rem] tracking-[-0.01em] transition-colors whitespace-nowrap ${
                        isCurrent
                          ? "bg-tmrw-syringe text-tmrw-white font-semibold"
                          : "text-tmrw-black"
                      }`}
                    >
                      {formatDollarsShort(v)}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="md:hidden font-ui text-[0.6rem] uppercase tracking-[0.04em] text-tmrw-grey-700 mt-3 px-1">
        &larr; scroll to compare &rarr;
      </p>

      <p className="font-body text-[0.75rem] italic text-tmrw-grey-700 mt-5 leading-[1.55] tracking-[-0.01em] max-w-2xl">
        Average of Year 1 through Year 5. Cohort model: each year adds +10 new members vs the previous year. Active members in any year = that year&apos;s new joiners + 50% of the prior year&apos;s joiners. Channel mix held constant at 70% online.
      </p>
    </div>
  );
}
