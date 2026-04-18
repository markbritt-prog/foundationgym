import type { CalcInputs } from "./calculator";

export const BASE_CASE: CalcInputs = {
  activationsY1: 300,
  activeMembersY2: 400,
  retentionMonths: 24,
  productAttachRate: 0.3,
};

export interface Scenario extends CalcInputs {
  key: string;
  label: string;
}

export const SCENARIOS: Scenario[] = [
  {
    key: "softOpen",
    label: "Soft Open",
    activationsY1: 120,
    activeMembersY2: 180,
    retentionMonths: 9,
    productAttachRate: 0.2,
  },
  {
    key: "conservative",
    label: "Conservative",
    activationsY1: 200,
    activeMembersY2: 280,
    retentionMonths: 10,
    productAttachRate: 0.25,
  },
  {
    key: "base",
    label: "Base",
    activationsY1: 300,
    activeMembersY2: 400,
    retentionMonths: 24,
    productAttachRate: 0.3,
  },
  {
    key: "strong",
    label: "Strong",
    activationsY1: 400,
    activeMembersY2: 520,
    retentionMonths: 18,
    productAttachRate: 0.35,
  },
  {
    key: "bullish",
    label: "Bullish",
    activationsY1: 500,
    activeMembersY2: 650,
    retentionMonths: 24,
    productAttachRate: 0.4,
  },
];

export function matchesScenario(
  inputs: CalcInputs,
  scenario: Scenario
): boolean {
  return (
    inputs.activationsY1 === scenario.activationsY1 &&
    inputs.activeMembersY2 === scenario.activeMembersY2 &&
    inputs.retentionMonths === scenario.retentionMonths &&
    Math.abs(inputs.productAttachRate - scenario.productAttachRate) < 0.001
  );
}
