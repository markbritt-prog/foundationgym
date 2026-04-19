import { FadeIn } from "@/components/ui/FadeIn";
import { DEAL_PANELS, DEAL_ECONOMICS } from "@/lib/constants";

export function DealOnOneScreen() {
  return (
    <section id="deal" className="bg-tmrw-grey-50 py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <FadeIn>
          <span className="font-ui text-[0.65rem] md:text-[0.7rem] uppercase tracking-[0.04em] text-tmrw-grey-700 mb-5 block">
            03 &mdash; HOW THIS WORKS
          </span>
        </FadeIn>

        <FadeIn>
          <h2 className="font-display text-[1.875rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[4rem] uppercase leading-[0.95] tracking-[-0.01em] text-tmrw-black">
            FOUNDATION INTRODUCES.<br />TMRW OPERATES.
          </h2>
        </FadeIn>

        <FadeIn>
          <p className="font-body text-[0.9rem] sm:text-[0.95rem] md:text-[1.05rem] leading-[1.55] tracking-[-0.01em] text-tmrw-grey-700 max-w-2xl mt-5">
            The whole deal, on one screen.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mt-14">
          {DEAL_PANELS.map((panel, i) => (
            <FadeIn key={panel.ordinal} delay={0.08 * (i + 1)}>
              <DealPanel panel={panel} />
            </FadeIn>
          ))}
          <FadeIn delay={0.32}>
            <EconomicsPanel />
          </FadeIn>
        </div>

        <FadeIn delay={0.4}>
          <p className="font-body text-[0.85rem] md:text-[0.9rem] italic text-tmrw-grey-700 mt-8 text-center tracking-[-0.01em]">
            Modest on paper. The real return is what this does to your retention &mdash; next section.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function DealPanel({ panel }: { panel: typeof DEAL_PANELS[number] }) {
  return (
    <div className="border border-tmrw-grey-200 bg-tmrw-white p-6 sm:p-7 md:p-8 flex flex-col h-full min-h-[300px] sm:min-h-[340px] md:min-h-[420px] rounded-sm">
      <span className="font-ui text-[0.65rem] uppercase tracking-[0.04em] text-tmrw-grey-700">
        {panel.ordinal}
      </span>
      <h3 className="font-body text-[1.25rem] tracking-[-0.01em] text-tmrw-black mt-3 mb-6">
        {panel.title}
      </h3>
      <div className="flex-1">
        {panel.lines.map((line, i) => (
          <div
            key={line}
            className={`py-1.5 ${i > 0 ? "border-t border-tmrw-grey-100" : ""}`}
          >
            <p className="font-body text-[0.875rem] text-tmrw-grey-700 leading-[1.55] tracking-[-0.01em] flex gap-2">
              <span aria-hidden="true" className="shrink-0">&mdash;</span>
              <span className="flex-1">{line}</span>
            </p>
          </div>
        ))}
      </div>
      <p className="font-body text-[0.75rem] italic text-tmrw-grey-700 mt-auto pt-5 leading-[1.5] tracking-[-0.01em]">
        {panel.footnote}
      </p>
    </div>
  );
}

function EconomicsPanel() {
  return (
    <div className="border border-tmrw-black bg-tmrw-white p-6 sm:p-7 md:p-8 flex flex-col h-full min-h-[300px] sm:min-h-[340px] md:min-h-[420px] rounded-sm">
      <span className="font-ui text-[0.65rem] uppercase tracking-[0.04em] text-tmrw-grey-700">
        {DEAL_ECONOMICS.ordinal}
      </span>
      <h3 className="font-body text-[1.25rem] tracking-[-0.01em] text-tmrw-black mt-3 mb-6">
        {DEAL_ECONOMICS.title}
      </h3>
      <div className="flex-1 space-y-5">
        {DEAL_ECONOMICS.rows.map((r) => (
          <div key={r.label}>
            <div className="flex items-baseline gap-3">
              <span className="font-body text-[1.5rem] sm:text-[1.625rem] md:text-[1.75rem] leading-none text-tmrw-black tracking-[-0.01em]">
                {r.value}
              </span>
              <span className="font-ui text-[0.65rem] uppercase tracking-[0.04em] text-tmrw-grey-700 leading-[1.2]">
                {r.label}
              </span>
            </div>
            <p className="font-body text-[0.75rem] italic text-tmrw-grey-700 mt-1 tracking-[-0.01em]">
              {r.note}
            </p>
          </div>
        ))}
      </div>
      <p className="font-body text-[0.75rem] italic text-tmrw-grey-700 mt-auto pt-5 tracking-[-0.01em]">
        {DEAL_ECONOMICS.footnote}
      </p>
    </div>
  );
}
