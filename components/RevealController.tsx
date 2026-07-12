"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Scroll-reveal that only enriches content already visible without JS.
 * Re-scans on route change (shared in the layout across all pages).
 * A failsafe timeout guarantees nothing stays hidden if the observer never fires.
 */
export default function RevealController() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const showAll = () => els.forEach((el) => el.classList.add("is-in"));

    if (!("IntersectionObserver" in window)) {
      showAll();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
    );

    els.forEach((el) => io.observe(el));
    const t = window.setTimeout(showAll, 2500);

    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, [pathname]);

  return null;
}
