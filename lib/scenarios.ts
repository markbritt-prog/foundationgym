import type { CalcInputs } from "./calculator";

export const BASE_CASE: CalcInputs = {
  activationsY1: 75,
  onlineMix: 0.7,
  annualNewJoinerIncrement: 25,
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
    activationsY1: 30,
    onlineMix: 0.8,
    annualNewJoinerIncrement: 10,
    retentionMonths: 12,
    productAttachRate: 0.1,
  },
  {
    key: "conservative",
    label: "Conservative",
    activationsY1: 50,
    onlineMix: 0.75,
    annualNewJoinerIncrement: 15,
    retentionMonths: 18,
    productAttachRate: 0.2,
  },
  {
    key: "base",
    label: "Base",
    activationsY1: 75,
    onlineMix: 0.7,
    annualNewJoinerIncrement: 25,
    retentionMonths: 24,
    productAttachRate: 0.25,
  },
  {
    key: "strong",
    label: "Strong",
    activationsY1: 100,
    onlineMix: 0.6,
    annualNewJoinerIncrement: 35,
    retentionMonths: 30,
    productAttachRate: 0.3,
  },
  {
    key: "bullish",
    label: "Bullish",
    activationsY1: 140,
    onlineMix: 0.5,
    annualNewJoinerIncrement: 50,
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
    inputs.annualNewJoinerIncrement === scenario.annualNewJoinerIncrement &&
    inputs.retentionMonths === scenario.retentionMonths &&
    Math.abs(inputs.productAttachRate - scenario.productAttachRate) < 0.001
  );
}
