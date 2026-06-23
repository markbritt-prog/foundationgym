"use client";
import { useState } from "react";

interface DownloadSourceProps {
  inlineInDropdown?: boolean;
  inverted?: boolean;
}

export function DownloadSource({
  inlineInDropdown,
  inverted,
}: DownloadSourceProps = {}) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/source");
      if (!res.ok) throw new Error("Source download failed");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "TMRW-Foundation-proposal-source.zip";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const icon = (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-60 shrink-0"
    >
      <path
        d="M2 3h4l1 1h5v7H2V3z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );

  if (inlineInDropdown) {
    return (
      <button
        onClick={handleDownload}
        disabled={loading}
        className={`w-full flex items-center gap-3 px-4 py-3 min-h-[44px] font-ui text-[0.65rem] uppercase tracking-[0.04em] text-left transition-colors duration-150 disabled:opacity-50 ${
          inverted
            ? "text-tmrw-grey-300 hover:bg-tmrw-grey-900 hover:text-tmrw-white"
            : "text-tmrw-grey-700 hover:bg-tmrw-grey-50 hover:text-tmrw-black"
        }`}
      >
        {icon}
        {loading ? "Preparing\u2026" : "Source (.zip)"}
      </button>
    );
  }

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] border border-tmrw-grey-800 rounded-sm font-ui text-[0.6rem] uppercase tracking-[0.04em] text-tmrw-grey-300 transition-all duration-300 hover:border-tmrw-white hover:text-tmrw-white hover:bg-tmrw-grey-900 disabled:opacity-50"
    >
      {icon}
      {loading ? "PREPARING\u2026" : "DOWNLOAD SOURCE"}
    </button>
  );
}
