"use client";
import { useScrollSpy } from "./useScrollSpy";

interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const TABS: Tab[] = [
  {
    id: "__top__",
    label: "Top",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path
          d="M10 16V5M5 9l5-5 5 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "why-now",
    label: "Why",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="6.5" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M10 7v3l2 1.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "deal",
    label: "Deal",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="3.5" y="3.5" width="5" height="5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="11.5" y="3.5" width="5" height="5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="3.5" y="11.5" width="5" height="5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="11.5" y="11.5" width="5" height="5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "financial",
    label: "Model",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path
          d="M3 17V4M3 17h14M6 13v-3M9 13V8M12 13v-5M15 13v-7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "next-steps",
    label: "Next",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path
          d="M4 10h12M11 5l5 5-5 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function MobileAppBar() {
  const activeId = useScrollSpy(56);

  const onTap = (id: string) => {
    if (id === "__top__") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-[55] bg-tmrw-white/95 backdrop-blur-xl border-t border-tmrw-grey-200 pb-[env(safe-area-inset-bottom)]"
      aria-label="Quick jump"
    >
      <div className="grid grid-cols-5">
        {TABS.map((tab) => {
          const isActive = activeId === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTap(tab.id)}
              className={`flex flex-col items-center justify-center gap-1 py-2.5 px-1 min-h-[56px] transition-colors duration-150 active:bg-tmrw-grey-50 ${
                isActive ? "text-tmrw-syringe" : "text-tmrw-grey-700"
              }`}
              aria-current={isActive ? "true" : undefined}
            >
              {tab.icon}
              <span className="font-ui text-[0.55rem] uppercase tracking-[0.04em]">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
