import { COMMERCIAL } from "./constants";

export interface CalcInputs {
  activationsY1: number;
  onlineMix: number;          // 0–1, share of activations that happen online via partner code
  activeMembersY2: number;
  retentionMonths: number;
  productAttachRate: number;
}

export interface YearResult {
  year: number;
  activeMembers: number;
  newJoiners: number;
  onlineJoiners: number;
  inPersonJoiners: number;
  joiningIncome: number;       // blended online + in-person
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

  // Year 1
  const y1Active = inputs.activationsY1;
  const y1 = computeYearEcon(
    y1Active,
    y1Active,
    inputs.onlineMix,
    inputs.productAttachRate
  );

  // Year 2
  const y2Active = inputs.activeMembersY2;
  const retainedFromY1 = Math.round(
    inputs.activationsY1 * Math.max(0, 1 - annualChurnRate)
  );
  const y2New = Math.max(0, y2Active - retainedFromY1);
  const y2 = computeYearEcon(
    y2Active,
    y2New,
    inputs.onlineMix,
    inputs.productAttachRate
  );

  // Years 3–5
  const annualNewJoiners = inputs.activationsY1;
  const laterYears: YearResult[] = [];
  let prevActive = y2Active;

  for (let yr = 3; yr <= 5; yr++) {
    const retained = Math.round(prevActive * (1 - annualChurnRate));
    const active = retained + annualNewJoiners;
    const econ = computeYearEcon(
      active,
      annualNewJoiners,
      inputs.onlineMix,
      inputs.productAttachRate
    );
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
    (inputs.activationsY1 * inputs.retentionMonths) / 12
  );
  const steadyState = computeYearEcon(
    equilibriumActive,
    annualNewJoiners,
    inputs.onlineMix,
    inputs.productAttachRate
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
 * Sensitivity cell — 5-year annual average revenue to Foundation.
 * Assumes blended activation rate at inputs.onlineMix held constant.
 */
export function computeSensitivityCell(
  activationsY1: number,
  attachRate: number,
  onlineMix: number = 0.7
): number {
  const blended = blendedActivationRate(onlineMix);
  const yearlyNew = [0, 1, 2, 3, 4].map((i) => activationsY1 + i * 10);

  let total = 0;
  for (let i = 0; i < 5; i++) {
    const priorYearNew = i > 0 ? yearlyNew[i - 1] : 0;
    const active = yearlyNew[i] + 0.5 * priorYearNew;

    const joining = yearlyNew[i] * blended;
    const monthly = active * COMMERCIAL.foundationMonthlyShare * 12;
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
