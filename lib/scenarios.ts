import type { CalcInputs } from "./calculator";

export const BASE_CASE: CalcInputs = {
  activationsY1: 35,
  onlineMix: 0.7,
  annualGrowthRate: 0.2,
  retentionMonths: 24,
  productAttachRate: 0.25,
};

export interface Scenario extends CalcInputs {
  key: string;
  label: string;
}

export const SCENARIOS: Scenario[] = [
  {
    key: "softOpen",
    label: "Soft Open",
    activationsY1: 15,
    onlineMix: 0.8,
    annualGrowthRate: 0.1,
    retentionMonths: 12,
    productAttachRate: 0.1,
  },
  {
    key: "conservative",
    label: "Conservative",
    activationsY1: 25,
    onlineMix: 0.75,
    annualGrowthRate: 0.15,
    retentionMonths: 18,
    productAttachRate: 0.2,
  },
  {
    key: "base",
    label: "Base",
    activationsY1: 35,
    onlineMix: 0.7,
    annualGrowthRate: 0.2,
    retentionMonths: 24,
    productAttachRate: 0.25,
  },
  {
    key: "strong",
    label: "Strong",
    activationsY1: 50,
    onlineMix: 0.6,
    annualGrowthRate: 0.25,
    retentionMonths: 30,
    productAttachRate: 0.3,
  },
  {
    key: "bullish",
    label: "Bullish",
    activationsY1: 70,
    onlineMix: 0.5,
    annualGrowthRate: 0.3,
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
    Math.abs(inputs.onlineMix - scenario.onlineMix) < 0.001 &&
    Math.abs(inputs.annualGrowthRate - scenario.annualGrowthRate) < 0.001 &&
    inputs.retentionMonths === scenario.retentionMonths &&
    Math.abs(inputs.productAttachRate - scenario.productAttachRate) < 0.001
  );
}
