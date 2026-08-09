"use client";

import { useEffect, useRef, useState } from "react";

type Item = { id: string; label: string };

/**
 * Navigation par points (scroll-spy) affichée sur grand écran.
 * La section active = celle qui croise la ligne médiane du viewport
 * (rootMargin -50%/-50%). Clic → défilement doux (respecte reduced-motion).
 */
export default function EditionDots({ items }: { items: Item[] }) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");
  const visible = useRef<Record<string, boolean>>({});

  useEffect(() => {
    const els = items
      .map((it) => document.getElementById(it.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          visible.current[en.target.id] = en.isIntersecting;
        });
        const current = items.find((it) => visible.current[it.id]);
        if (current) setActive(current.id);
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  const go = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return (
    <nav className="edots" aria-label="Sections de l'édition">
      <ul>
        {items.map((it) => (
          <li key={it.id}>
            <a
              href={`#${it.id}`}
              onClick={(e) => go(e, it.id)}
              className={active === it.id ? "is-active" : undefined}
              aria-current={active === it.id ? "true" : undefined}
            >
              <span className="edots__label">{it.label}</span>
              <span className="edots__dot" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
