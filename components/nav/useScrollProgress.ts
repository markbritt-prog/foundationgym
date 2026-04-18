"use client";
import { useEffect, useState } from "react";

/**
 * Returns a 0..1 float representing how far the page is scrolled.
 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const viewHeight = window.innerHeight;
      const scrollable = Math.max(1, docHeight - viewHeight);
      setProgress(Math.min(1, Math.max(0, scrollTop / scrollable)));
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return progress;
}
