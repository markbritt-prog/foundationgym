"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SECTIONS } from "@/lib/sections";
import { useScrollSpy } from "./useScrollSpy";
import { MobileMenu } from "./MobileMenu";
import { DownloadMenu } from "./DownloadMenu";

const WORDMARK_WHITE =
  "https://res.cloudinary.com/dkbhatjde/image/upload/v1774156339/TMRW_Wordmark_White_feybxl.svg";
const WORDMARK_BLACK =
  "https://res.cloudinary.com/dkbhatjde/image/upload/v1774156339/TMRW_Wordmark_Black_fo2tpb.svg";

export function TopNav() {
  const activeId = useScrollSpy(56);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeSection = SECTIONS.find((s) => s.id === activeId);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-[2px] left-0 right-0 h-14 z-50 flex items-center justify-between px-5 md:px-8 transition-all duration-300 ${
          scrolled
            ? "bg-tmrw-white/95 backdrop-blur-xl border-b border-tmrw-grey-200"
            : "bg-transparent"
        }`}
        aria-label="Primary"
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="shrink-0 min-h-[44px] min-w-[44px] flex items-center"
          aria-label="Scroll to top"
        >
          <Image
            src={scrolled ? WORDMARK_BLACK : WORDMARK_WHITE}
            alt="TMRW"
            width={100}
            height={28}
            priority
            className="h-5 w-auto"
          />
        </button>

        <div className="hidden xl:flex items-center gap-5">
          {SECTIONS.map(({ id, shortLabel }) => {
            const isActive = activeId === id;
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`relative font-ui text-[0.6rem] uppercase tracking-[0.04em] transition-colors duration-200 min-h-[44px] px-1 ${
                  scrolled
                    ? isActive
                      ? "text-tmrw-black"
                      : "text-tmrw-grey-700 hover:text-tmrw-black"
                    : isActive
                    ? "text-tmrw-white"
                    : "text-tmrw-grey-300 hover:text-tmrw-white"
                }`}
              >
                {shortLabel}
                <span
                  className={`absolute -bottom-1 left-0 right-0 mx-auto h-px bg-tmrw-syringe transition-all duration-200 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {activeSection && (
          <div className="xl:hidden flex-1 flex items-center justify-center px-4">
            <span
              className={`font-ui text-[0.65rem] uppercase tracking-[0.04em] truncate transition-colors duration-200 ${
                scrolled ? "text-tmrw-grey-700" : "text-tmrw-grey-300"
              }`}
            >
              {activeSection.ordinal} &mdash; {activeSection.shortLabel}
            </span>
          </div>
        )}

        <div className="flex items-center gap-2 shrink-0">
          <div className="hidden xl:block">
            <DownloadMenu inverted={!scrolled} />
          </div>
          <button
            onClick={() => setMobileOpen(true)}
            className="xl:hidden min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className={scrolled ? "text-tmrw-black" : "text-tmrw-white"}
            >
              <path
                d="M3 5h14M3 10h14M3 15h14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </nav>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        activeId={activeId}
        onSelect={scrollTo}
      />
    </>
  );
}
