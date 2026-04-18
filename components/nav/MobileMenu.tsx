"use client";
import { useEffect } from "react";
import { SECTIONS } from "@/lib/sections";
import { DownloadMenu } from "./DownloadMenu";

interface Props {
  open: boolean;
  onClose: () => void;
  activeId: string;
  onSelect: (id: string) => void;
}

export function MobileMenu({ open, onClose, activeId, onSelect }: Props) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <>
      <div
        className={`fixed inset-0 z-[70] bg-tmrw-black/60 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={`fixed top-0 right-0 bottom-0 w-full max-w-sm z-[71] bg-tmrw-black text-tmrw-white transition-transform duration-300 ease-out lg:hidden flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Section menu"
        aria-modal="true"
      >
        <div className="flex items-center justify-between h-14 px-5 border-b border-tmrw-grey-900 shrink-0">
          <span className="font-ui text-[0.65rem] uppercase tracking-[0.04em] text-tmrw-grey-300">
            Contents
          </span>
          <button
            onClick={onClose}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center -mr-2"
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M5 5l10 10M15 5L5 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <ul className="py-2">
            {SECTIONS.map(({ id, ordinal, label }) => {
              const isActive = activeId === id;
              return (
                <li key={id}>
                  <button
                    onClick={() => onSelect(id)}
                    className={`w-full flex items-baseline gap-4 px-5 py-4 min-h-[56px] text-left transition-colors duration-150 active:bg-tmrw-grey-900 ${
                      isActive ? "bg-tmrw-grey-900" : ""
                    }`}
                  >
                    <span
                      className={`font-ui text-[0.65rem] uppercase tracking-[0.04em] shrink-0 w-6 ${
                        isActive ? "text-tmrw-syringe" : "text-tmrw-grey-700"
                      }`}
                    >
                      {ordinal}
                    </span>
                    <span
                      className={`font-body text-[1rem] tracking-[-0.01em] ${
                        isActive ? "text-tmrw-white" : "text-tmrw-grey-300"
                      }`}
                    >
                      {label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="p-5 border-t border-tmrw-grey-900 shrink-0">
          <DownloadMenu inverted fullWidth />
        </div>
      </aside>
    </>
  );
}
