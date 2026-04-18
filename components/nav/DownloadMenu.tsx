"use client";
import { useState, useRef, useEffect } from "react";
import { DownloadMarkdown } from "@/components/DownloadMarkdown";
import { DownloadSource } from "@/components/DownloadSource";

interface Props {
  inverted?: boolean;
  fullWidth?: boolean;
}

export function DownloadMenu({ inverted, fullWidth }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const triggerClass = `inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] border rounded-sm font-ui text-[0.6rem] uppercase tracking-[0.04em] transition-colors duration-200 ${
    fullWidth ? "w-full justify-center" : ""
  } ${
    inverted
      ? "border-tmrw-grey-800 text-tmrw-grey-300 hover:border-tmrw-syringe hover:text-tmrw-white"
      : "border-tmrw-grey-300 text-tmrw-grey-700 hover:border-tmrw-black hover:text-tmrw-black"
  }`;

  return (
    <div ref={ref} className={`relative ${fullWidth ? "w-full" : ""}`}>
      <button
        onClick={() => setOpen((o) => !o)}
        className={triggerClass}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        Download
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          aria-hidden="true"
        >
          <path
            d={open ? "M2 6l3-3 3 3" : "M2 4l3 3 3-3"}
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </svg>
      </button>
      {open && (
        <div
          className={`absolute right-0 mt-2 py-2 min-w-[220px] border rounded-sm shadow-lg z-[80] ${
            inverted
              ? "bg-tmrw-black border-tmrw-grey-800"
              : "bg-tmrw-white border-tmrw-grey-200"
          } ${fullWidth ? "w-full" : ""}`}
          role="menu"
        >
          <DownloadMarkdown inlineInDropdown inverted={inverted} />
          <DownloadSource inlineInDropdown inverted={inverted} />
        </div>
      )}
    </div>
  );
}
