"use client";
import type { YearResult } from "@/lib/calculator";
import { formatDollarsShort } from "@/lib/calculator";

interface Props {
  years: YearResult[];
}

const VIEW_W = 500;
const VIEW_H = 220;
const BAR_AREA_H = 180;
const BAR_W = 70;
const GAP = (VIEW_W - BAR_W * 5) / 6;

export function StackedBars({ years }: Props) {
  const maxTotal = Math.max(...years.map((y) => y.total), 1);

  return (
    <div className="w-full">
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="5-year revenue stacked bar chart"
      >
        {years.map((y, i) => {
          const x = GAP + i * (BAR_W + GAP);
          const totalH = Math.max(16, (y.total / maxTotal) * BAR_AREA_H);
          const joinH = (y.joiningIncome / y.total) * totalH;
          const monthlyH = (y.monthlyIncome / y.total) * totalH;
          const productH = totalH - joinH - monthlyH;
          const bottom = BAR_AREA_H;

          return (
            <g key={y.year}>
              <rect
                x={x}
                y={bottom - joinH}
                width={BAR_W}
                height={joinH}
                fill="#000000"
              >
                <title>Year {y.year} joining: {formatDollarsShort(y.joiningIncome)}</title>
              </rect>
              <rect
                x={x}
                y={bottom - joinH - monthlyH}
                width={BAR_W}
                height={monthlyH}
                fill="#3C3C3C"
              >
                <title>Year {y.year} monthly: {formatDollarsShort(y.monthlyIncome)}</title>
              </rect>
              <rect
                x={x}
                y={bottom - totalH}
                width={BAR_W}
                height={productH}
                fill="#E61317"
              >
                <title>Year {y.year} product share: {formatDollarsShort(y.productIncome)}</title>
              </rect>

              {/* Year label */}
              <text
                x={x + BAR_W / 2}
                y={BAR_AREA_H + 18}
                textAnchor="middle"
                fontSize="9"
                fontFamily="Brown, sans-serif"
                letterSpacing="0.5"
                fill="#3C3C3C"
              >
                Y{y.year}
              </text>
              {/* Total value label */}
              <text
                x={x + BAR_W / 2}
                y={BAR_AREA_H + 33}
                textAnchor="middle"
                fontSize="11"
                fontFamily="Crimson Text, serif"
                fill="#000000"
              >
                {formatDollarsShort(y.total)}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="flex items-center justify-center gap-5 md:gap-8 mt-5 flex-wrap">
        <LegendDot color="bg-tmrw-black" label="JOINING" />
        <LegendDot color="bg-tmrw-grey-700" label="MONTHLY" />
        <LegendDot color="bg-tmrw-syringe" label="PRODUCT SHARE" />
      </div>
    </div>
  );
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`w-2 h-2 ${color}`} />
      <span className="font-ui text-[0.55rem] md:text-[0.6rem] uppercase tracking-[0.04em] text-tmrw-grey-700">
        {label}
      </span>
    </div>
  );
}
