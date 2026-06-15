import { COMMERCIAL } from "./constants";

export interface CalcInputs {
  activationsY1: number;
  annualNewJoinerIncrement: number; // integer count added to new joiners each subsequent year
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
  const joiningIncome = newJoiners * COMMERCIAL.foundationActivation;
  const monthlyIncome =
    activeMembers * COMMERCIAL.foundationMonthlyShare * 12;
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

export const computeYear = computeYearEcon;

export function compute(inputs: CalcInputs): CalcResult {
  const annualChurnRate = Math.min(1, 12 / Math.max(1, inputs.retentionMonths));

  const years: YearResult[] = [];
  let prevActive = 0;

  for (let i = 0; i < 5; i++) {
    const newJoiners = Math.max(
      0,
      inputs.activationsY1 + i * inputs.annualNewJoinerIncrement
    );
    const retained = Math.round(prevActive * (1 - annualChurnRate));
    const active = retained + newJoiners;
    const econ = computeYearEcon(active, newJoiners, inputs.productAttachRate);
    years.push({ year: i + 1, ...econ });
    prevActive = active;
  }

  const fiveYearTotal = years.reduce((s, y) => s + y.total, 0);
  const annualisedAverage = fiveYearTotal / 5;
  const y1Total = years[0].total;
  const steadyStateAnnual = years[years.length - 1].total;

  return {
    years,
    fiveYearTotal,
    y1Total,
    annualisedAverage,
    steadyStateAnnual,
  };
}

/**
 * Sensitivity cell — 5-year annual average revenue to Foundation.
 * Assumes +25 new joiners per year and 18-month retention unless overridden.
 */
export function computeSensitivityCell(
  activationsY1: number,
  attachRate: number,
  annualNewJoinerIncrement: number = 25,
  retentionMonths: number = 18
): number {
  const annualChurnRate = Math.min(1, 12 / Math.max(1, retentionMonths));

  let total = 0;
  let prevActive = 0;
  for (let i = 0; i < 5; i++) {
    const newJoiners = Math.max(0, activationsY1 + i * annualNewJoinerIncrement);
    const active = prevActive * (1 - annualChurnRate) + newJoiners;

    const joining = newJoiners * COMMERCIAL.foundationActivation;
    const monthly = active * COMMERCIAL.foundationMonthlyShare * 12;
    const product =
      active *
      attachRate *
      COMMERCIAL.productAvgSpendPerAttached *
      COMMERCIAL.productRevenueShare;

    total += joining + monthly + product;
    prevActive = active;
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
