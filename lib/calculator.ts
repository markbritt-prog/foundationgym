import { COMMERCIAL } from "./constants";

export interface CalcInputs {
  activationsY1: number;
  activeMembersY2: number;
  retentionMonths: number;
  productAttachRate: number;
}

export interface YearResult {
  year: number;
  activeMembers: number;
  newJoiners: number;
  joiningIncome: number;
  monthlyIncome: number;
  productIncome: number;
  total: number;
}

export interface CalcResult {
  years: YearResult[];
  fiveYearTotal: number;
  annualisedAverage: number;
  y1Total: number;
  steadyStateAnnual: number;
}

function computeYearEcon(
  activeMembers: number,
  newJoiners: number,
  attachRate: number
): Omit<YearResult, "year"> {
  const joiningIncome = newJoiners * COMMERCIAL.vrtusJoiningShare;
  const monthlyIncome = activeMembers * COMMERCIAL.vrtusMonthlyShare * 12;
  const productIncome =
    activeMembers *
    attachRate *
    COMMERCIAL.productAvgSpendPerAttached *
    COMMERCIAL.productRevenueShare;
  return {
    activeMembers,
    newJoiners,
    joiningIncome,
    monthlyIncome,
    productIncome,
    total: joiningIncome + monthlyIncome + productIncome,
  };
}

// Backwards-compatible export for any external callers.
export const computeYear = computeYearEcon;

export function compute(inputs: CalcInputs): CalcResult {
  const annualChurnRate = Math.min(1, 12 / Math.max(1, inputs.retentionMonths));

  // ── Year 1: all activations are new ──
  const y1Active = inputs.activationsY1;
  const y1 = computeYearEcon(y1Active, y1Active, inputs.productAttachRate);

  // ── Year 2: some Y1 members retained, rest are new ──
  const y2Active = inputs.activeMembersY2;
  const retainedFromY1 = Math.round(
    inputs.activationsY1 * Math.max(0, 1 - annualChurnRate)
  );
  const y2New = Math.max(0, y2Active - retainedFromY1);
  const y2 = computeYearEcon(y2Active, y2New, inputs.productAttachRate);

  // ── Years 3-5: gym continues activating at the Y1 rate while the active
  //    base converges toward equilibrium (Y1 × retention / 12). Higher
  //    retention → larger active base → more monthly + product revenue. ──
  const annualNewJoiners = inputs.activationsY1;
  const laterYears: YearResult[] = [];
  let prevActive = y2Active;

  for (let yr = 3; yr <= 5; yr++) {
    const retained = Math.round(prevActive * (1 - annualChurnRate));
    const active = retained + annualNewJoiners;
    const econ = computeYearEcon(active, annualNewJoiners, inputs.productAttachRate);
    laterYears.push({ year: yr, ...econ });
    prevActive = active;
  }

  const years: YearResult[] = [
    { year: 1, ...y1 },
    { year: 2, ...y2 },
    ...laterYears,
  ];

  const fiveYearTotal = years.reduce((s, y) => s + y.total, 0);
  const annualisedAverage = fiveYearTotal / 5;

  const equilibriumActive = Math.round(
    inputs.activationsY1 * inputs.retentionMonths / 12
  );
  const steadyState = computeYearEcon(
    equilibriumActive,
    annualNewJoiners,
    inputs.productAttachRate,
  );

  return {
    years,
    fiveYearTotal,
    y1Total: y1.total,
    annualisedAverage,
    steadyStateAnnual: steadyState.total,
  };
}

/**
 * Sensitivity cell — 5-year *annual average* revenue to VRTUS.
 *
 * Assumptions:
 *  - Y1 new activations = `activationsY1` (matrix x-axis)
 *  - Each subsequent year adds +50 new activations vs the prior year
 *  - 18-month average retention \u2014 modelled as active = this year\u2019s joiners +
 *    50% of last year\u2019s joiners (linear approximation of an 18-month tail)
 *  - Attach rate held constant across the 5 years
 */
export function computeSensitivityCell(
  activationsY1: number,
  attachRate: number
): number {
  const yearlyNew = [0, 1, 2, 3, 4].map(
    (i) => activationsY1 + i * 50
  );

  let total = 0;
  for (let i = 0; i < 5; i++) {
    const priorYearNew = i > 0 ? yearlyNew[i - 1] : 0;
    const active = yearlyNew[i] + 0.5 * priorYearNew;

    const joining = yearlyNew[i] * COMMERCIAL.vrtusJoiningShare;
    const monthly = active * COMMERCIAL.vrtusMonthlyShare * 12;
    const product =
      active *
      attachRate *
      COMMERCIAL.productAvgSpendPerAttached *
      COMMERCIAL.productRevenueShare;

    total += joining + monthly + product;
  }

  return total / 5;
}

export function formatDollarsShort(value: number): string {
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `$${Math.round(value / 1_000)}k`;
  return `$${Math.round(value)}`;
}

export function formatDollars(value: number): string {
  return value.toLocaleString("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0,
  });
}
