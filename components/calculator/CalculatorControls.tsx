"use client";
import type { CalcInputs } from "@/lib/calculator";
import { SCENARIOS, matchesScenario } from "@/lib/scenarios";

interface Props {
  inputs: CalcInputs;
  setInputs: (i: CalcInputs) => void;
}

export function CalculatorControls({ inputs, setInputs }: Props) {
  const applyScenario = (key: string) => {
    const s = SCENARIOS.find((x) => x.key === key);
    if (!s) return;
    setInputs({
      activationsY1: s.activationsY1,
      onlineMix: s.onlineMix,
      annualGrowthRate: s.annualGrowthRate,
      retentionMonths: s.retentionMonths,
      productAttachRate: s.productAttachRate,
    });
  };

  return (
    <div>
      {/* Scenario buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
        {SCENARIOS.map((s) => {
          const active = matchesScenario(inputs, s);
          return (
            <button
              key={s.key}
              onClick={() => applyScenario(s.key)}
              className={`min-h-[44px] px-3 py-2.5 font-ui text-[0.65rem] md:text-[0.7rem] uppercase tracking-[0.04em] transition-colors duration-200 rounded-sm ${
                active
                  ? "bg-tmrw-black text-tmrw-white"
                  : "border border-tmrw-grey-200 text-tmrw-grey-700 hover:bg-tmrw-grey-50 active:bg-tmrw-grey-100"
              }`}
            >
              {s.label}
            </button>
          );
        })}
      </div>

      {/* Sliders */}
      <div className="mt-12 space-y-10">
        <Slider
          label="Activations in Year 1"
          min={10}
          max={100}
          step={5}
          value={inputs.activationsY1}
          onChange={(v) => setInputs({ ...inputs, activationsY1: v })}
          format={(v) => `${v} members`}
        />
        <Slider
          label="Online activation mix"
          min={40}
          max={90}
          step={5}
          value={Math.round(inputs.onlineMix * 100)}
          onChange={(v) => setInputs({ ...inputs, onlineMix: v / 100 })}
          format={(v) => `${v}% online`}
        />
        <Slider
          label="Annual growth in new joiners"
          min={0}
          max={50}
          step={5}
          value={Math.round(inputs.annualGrowthRate * 100)}
          onChange={(v) => setInputs({ ...inputs, annualGrowthRate: v / 100 })}
          format={(v) => `${v}% / yr`}
        />
        <Slider
          label="Average retention"
          min={6}
          max={48}
          step={1}
          value={inputs.retentionMonths}
          onChange={(v) => setInputs({ ...inputs, retentionMonths: v })}
          format={(v) => `${v} months`}
        />
        <Slider
          label="Product-line attach rate"
          min={5}
          max={50}
          step={1}
          value={Math.round(inputs.productAttachRate * 100)}
          onChange={(v) => setInputs({ ...inputs, productAttachRate: v / 100 })}
          format={(v) => `${v}%`}
        />
      </div>
    </div>
  );
}

interface SliderProps {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (v: number) => void;
  format: (v: number) => string;
}

function Slider({ label, min, max, step, value, onChange, format }: SliderProps) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between mb-3">
        <label className="font-ui text-[0.7rem] uppercase tracking-[0.04em] text-tmrw-grey-700">
          {label}
        </label>
        <span className="font-body text-[0.95rem] text-tmrw-black tracking-[-0.01em]">
          {format(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="tmrw-slider w-full"
        style={{
          background: `linear-gradient(to right, #000 0%, #000 ${pct}%, #E4E4E4 ${pct}%, #E4E4E4 100%)`,
        }}
      />
      <div className="flex justify-between mt-2">
        <span className="font-ui text-[0.6rem] uppercase tracking-[0.04em] text-tmrw-grey-700">
          {format(min)}
        </span>
        <span className="font-ui text-[0.6rem] uppercase tracking-[0.04em] text-tmrw-grey-700">
          {format(max)}
        </span>
      </div>
    </div>
  );
}
