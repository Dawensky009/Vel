"use client";

import { useEffect, useRef } from "react";

/**
 * Lean, dependency-free parallax. Sets a `--py` CSS variable on the wrapped
 * element based on its position in the viewport (rAF-throttled scroll).
 * The child uses `.parallax { transform: translate3d(0, var(--py), 0) }`.
 * Fully disabled under prefers-reduced-motion.
 */
export default function Parallax({
  speed = 24,
  className,
  children,
}: {
  speed?: number; // max px of travel each direction
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const center = rect.top + rect.height / 2;
      // progress: -1 (element below viewport) → 1 (above), 0 at center
      const progress = (center - vh / 2) / (vh / 2 + rect.height / 2);
      const clamped = Math.max(-1, Math.min(1, progress));
      el.style.setProperty("--py", (-clamped * speed).toFixed(1) + "px");
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
  }, [speed]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ "--py": "0px" } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
