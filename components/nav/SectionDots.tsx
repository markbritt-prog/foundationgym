"use client";
import { useEffect } from "react";
import { SECTIONS } from "@/lib/sections";
import { useScrollSpy } from "./useScrollSpy";

export function SectionDots() {
  const activeId = useScrollSpy(56);
  const activeIndex = SECTIONS.findIndex((s) => s.id === activeId);

  const scrollToIndex = (idx: number) => {
    const clamped = Math.max(0, Math.min(SECTIONS.length - 1, idx));
    const el = document.getElementById(SECTIONS[clamped].id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLElement) {
        const tag = e.target.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      }
      if (e.key === "j" || e.key === "ArrowDown") {
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        e.preventDefault();
        scrollToIndex(activeIndex + 1);
      }
      if (e.key === "k" || e.key === "ArrowUp") {
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        e.preventDefault();
        scrollToIndex(activeIndex - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex]);

  return (
    <nav
      className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-3"
      aria-label="Quick section navigation"
    >
      {SECTIONS.map(({ id, ordinal, shortLabel }) => {
        const isActive = activeId === id;
        return (
          <button
            key={id}
            onClick={() => {
              const el = document.getElementById(id);
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="group relative flex items-center gap-3 py-1 min-h-[24px]"
            aria-label={`${ordinal} \u2014 ${shortLabel}`}
            aria-current={isActive ? "true" : undefined}
          >
            <span
              className={`font-ui text-[0.6rem] uppercase tracking-[0.04em] transition-opacity duration-200 ${
                isActive
                  ? "opacity-100 text-tmrw-black"
                  : "opacity-0 group-hover:opacity-100 text-tmrw-grey-700"
              }`}
            >
              {shortLabel}
            </span>
            <span
              className={`block rounded-full transition-all duration-200 ${
                isActive
                  ? "w-2 h-2 bg-tmrw-syringe"
                  : "w-1.5 h-1.5 bg-tmrw-grey-300 group-hover:bg-tmrw-grey-700"
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
}
