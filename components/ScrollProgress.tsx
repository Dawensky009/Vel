"use client";

import { useEffect, useState } from "react";

/**
 * Barre de progression de lecture, fixée en haut de page.
 * scaleX (transform GPU) — aucun reflow. Décorative (aria-hidden).
 */
export default function ScrollProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setP(max > 0 ? Math.min(1, Math.max(0, el.scrollTop / max)) : 0);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="escroll" aria-hidden="true">
      <span className="escroll__bar" style={{ transform: `scaleX(${p})` }} />
    </div>
  );
}
