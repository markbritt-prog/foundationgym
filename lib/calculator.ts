import { COMMERCIAL } from "./constants";

export interface CalcInputs {
  activationsY1: number;
  onlineMix: number;          // 0–1, share of activations that happen online via partner code
  annualGrowthRate: number;   // 0–1, YoY growth in new joiners
  retentionMonths: number;
  productAttachRate: number;
}

export interface YearResult {
  year: number;
  activeMembers: number;
  newJoiners: number;
  onlineJoiners: number;
  inPersonJoiners: number;
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

function blendedActivationRate(onlineMix: number): number {
  return (
    onlineMix * COMMERCIAL.onlineActivation +
    (1 - onlineMix) * COMMERCIAL.inPersonActivation
  );
}

function computeYearEcon(
  activeMembers: number,
  newJoiners: number,
  onlineMix: number,
  attachRate: number
): Omit<YearResult, "year"> {
  const onlineJoiners = Math.round(newJoiners * onlineMix);
  const inPersonJoiners = Math.max(0, newJoiners - onlineJoiners);
  const joiningIncome =
    onlineJoiners * COMMERCIAL.onlineActivation +
    inPersonJoiners * COMMERCIAL.inPersonActivation;
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
    onlineJoiners,
    inPersonJoiners,
    joiningIncome,
    monthlyIncome,
    productIncome,
    total: joiningIncome + monthlyIncome + productIncome,
  };
}

export const computeYear = computeYearEcon;

export function compute(inputs: CalcInputs): CalcResult {
  const annualChurnRate = Math.min(1, 12 / Math.max(1, inputs.retentionMonths));
  const growth = inputs.annualGrowthRate;

  const years: YearResult[] = [];
  let prevActive = 0;

  for (let i = 0; i < 5; i++) {
    const newJoiners = Math.round(inputs.activationsY1 * Math.pow(1 + growth, i));
    const retained = Math.round(prevActive * (1 - annualChurnRate));
    const active = retained + newJoiners;
    const econ = computeYearEcon(
      active,
      newJoiners,
      inputs.onlineMix,
      inputs.productAttachRate
    );
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
 * Assumes 20% YoY growth in new joiners and an 18-month average retention
 * unless overridden by caller.
 */
export function computeSensitivityCell(
  activationsY1: number,
  attachRate: number,
  onlineMix: number = 0.7,
  annualGrowthRate: number = 0.2,
  retentionMonths: number = 18
): number {
  const blended = blendedActivationRate(onlineMix);
  const annualChurnRate = Math.min(1, 12 / Math.max(1, retentionMonths));

  let total = 0;
  let prevActive = 0;
  for (let i = 0; i < 5; i++) {
    const newJoiners = activationsY1 * Math.pow(1 + annualGrowthRate, i);
    const active = prevActive * (1 - annualChurnRate) + newJoiners;

    const joining = newJoiners * blended;
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
