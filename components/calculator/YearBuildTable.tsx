"use client";
import type { CalcResult } from "@/lib/calculator";
import { formatDollarsShort } from "@/lib/calculator";

interface Props {
  result: CalcResult;
  className?: string;
}

export function YearBuildTable({ result, className = "" }: Props) {
  const totals = {
    joining: result.years.reduce((s, y) => s + y.joiningIncome, 0),
    monthly: result.years.reduce((s, y) => s + y.monthlyIncome, 0),
    product: result.years.reduce((s, y) => s + y.productIncome, 0),
    total: result.fiveYearTotal,
  };

  return (
    <div className={className}>
      <span className="font-ui text-[0.65rem] uppercase tracking-[0.04em] text-tmrw-grey-700">
        THE 5-YEAR VIEW
      </span>
      <h3 className="font-display text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] uppercase leading-none tracking-[-0.01em] text-tmrw-black mt-3">
        HOW IT BUILDS.
      </h3>

      <div className="mt-8 md:mt-10 -mx-6 md:mx-0 overflow-x-auto">
        <table className="w-full min-w-[640px] px-6 md:px-0">
          <thead>
            <tr className="border-b border-tmrw-grey-200">
              <th className="sticky left-0 bg-tmrw-white z-10 py-4 pl-6 md:pl-0 pr-6 text-left min-w-[140px]" />
              {result.years.map((y) => (
                <th
                  key={y.year}
                  className="py-4 px-3 text-right font-ui text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.04em] text-tmrw-grey-700 whitespace-nowrap"
                >
                  Year {y.year}
                </th>
              ))}
              <th className="py-4 pl-3 pr-6 md:pr-0 text-right font-ui text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.04em] text-tmrw-grey-700">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            <Row
              label="ACTIVE MEMBERS"
              cells={result.years.map((y) => y.activeMembers.toLocaleString())}
              total={"\u2014"}
            />
            <Row
              label="JOINING FEE"
              cells={result.years.map((y) => formatDollarsShort(y.joiningIncome))}
              total={formatDollarsShort(totals.joining)}
            />
            <Row
              label="MONTHLY"
              cells={result.years.map((y) => formatDollarsShort(y.monthlyIncome))}
              total={formatDollarsShort(totals.monthly)}
            />
            <Row
              label="PRODUCT SHARE"
              cells={result.years.map((y) => formatDollarsShort(y.productIncome))}
              total={formatDollarsShort(totals.product)}
            />
            <tr className="border-t-2 border-tmrw-black">
              <td className="sticky left-0 bg-tmrw-white z-10 py-5 pl-6 md:pl-0 pr-6 font-ui text-[0.7rem] uppercase tracking-[0.04em] text-tmrw-black">
                YEAR TOTAL
              </td>
              {result.years.map((y) => (
                <td
                  key={y.year}
                  className="py-5 px-3 text-right font-body text-[0.95rem] md:text-[1rem] text-tmrw-black tracking-[-0.01em] whitespace-nowrap"
                >
                  {formatDollarsShort(y.total)}
                </td>
              ))}
              <td className="py-5 pl-3 pr-6 md:pr-0 text-right font-body text-[0.95rem] md:text-[1rem] text-tmrw-black tracking-[-0.01em] font-semibold whitespace-nowrap">
                {formatDollarsShort(totals.total)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-5 font-body text-[0.75rem] italic text-tmrw-grey-700 leading-[1.55] tracking-[-0.01em] max-w-2xl">
        New joiners grow by the fixed annual increment you&apos;ve set (Base assumes Year&nbsp;1 = 75 with +25 each year). Existing members churn at the rate implied by your retention slider. Higher retention means more members stay, compounding the active base and its recurring revenue across the five years.
      </p>
    </div>
  );
}

function Row({
  label,
  cells,
  total,
}: {
  label: string;
  cells: string[];
  total: string;
}) {
  return (
    <tr className="border-b border-tmrw-grey-100">
      <td className="sticky left-0 bg-tmrw-white z-10 py-4 pl-6 md:pl-0 pr-6 font-ui text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.04em] text-tmrw-grey-700 whitespace-nowrap">
        {label}
      </td>
      {cells.map((c, i) => (
        <td
          key={i}
          className="py-4 px-3 text-right font-body text-[0.85rem] md:text-[0.9rem] text-tmrw-black tracking-[-0.01em] whitespace-nowrap"
        >
          {c}
        </td>
      ))}
      <td className="py-4 pl-3 pr-6 md:pr-0 text-right font-body text-[0.85rem] md:text-[0.9rem] text-tmrw-black tracking-[-0.01em] whitespace-nowrap">
        {total}
      </td>
    </tr>
  );
}
