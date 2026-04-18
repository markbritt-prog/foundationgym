"use client";
import { useEffect, useState } from "react";
import { SECTIONS } from "@/lib/sections";

/**
 * Returns the id of the section currently closest to the top of the viewport,
 * accounting for nav height.
 */
export function useScrollSpy(navHeightPx: number = 56): string {
  const [activeId, setActiveId] = useState<string>(SECTIONS[0].id);

  useEffect(() => {
    const rootMargin = `-${navHeightPx}px 0px -60% 0px`;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );

        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin, threshold: 0 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [navHeightPx]);

  return activeId;
}
