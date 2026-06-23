import type { CalcInputs } from "./calculator";

export const BASE_CASE: CalcInputs = {
  activationsY1: 30,
  annualNewJoinerIncrement: 15,
  retentionMonths: 24,
  productAttachRate: 0.25,
};

export interface Scenario extends CalcInputs {
  key: string;
  label: string;
}

// Cohort-peak guidance against a 24-month retention:
//   active equilibrium ~ 2 × (current annual joiners), so Y5 ≈ 2 × (Y1 + 4×inc)
// Base case (Y1=30, +15/yr) peaks at ~150 active in Year 5.
export const SCENARIOS: Scenario[] = [
  {
    key: "softOpen",
    label: "Soft Open",
    activationsY1: 10,
    annualNewJoinerIncrement: 5,
    retentionMonths: 12,
    productAttachRate: 0.1,
  },
  {
    key: "conservative",
    label: "Conservative",
    activationsY1: 20,
    annualNewJoinerIncrement: 10,
    retentionMonths: 18,
    productAttachRate: 0.2,
  },
  {
    key: "base",
    label: "Base",
    activationsY1: 30,
    annualNewJoinerIncrement: 15,
    retentionMonths: 24,
    productAttachRate: 0.25,
  },
  {
    key: "strong",
    label: "Strong",
    activationsY1: 40,
    annualNewJoinerIncrement: 20,
    retentionMonths: 30,
    productAttachRate: 0.3,
  },
  {
    key: "bullish",
    label: "Bullish",
    activationsY1: 50,
    annualNewJoinerIncrement: 25,
    retentionMonths: 36,
    productAttachRate: 0.35,
  },
];

export function matchesScenario(
  inputs: CalcInputs,
  scenario: Scenario
): boolean {
  return (
    inputs.activationsY1 === scenario.activationsY1 &&
    inputs.annualNewJoinerIncrement === scenario.annualNewJoinerIncrement &&
    inputs.retentionMonths === scenario.retentionMonths &&
    Math.abs(inputs.productAttachRate - scenario.productAttachRate) < 0.001
  );
}
