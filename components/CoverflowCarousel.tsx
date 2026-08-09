"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Livre } from "@/lib/types";

const AUTO_MS = 4200;
const SWIPE_STEP = 90; // px de glissement par cran

/**
 * Carrousel « coverflow » : la couverture centrale fait face au lecteur,
 * les voisines ouvrent leur bord extérieur vers l'avant (rack qui s'ouvre).
 * Rendu en CSS 3D (aucune dépendance). Clavier, glisser, lecture auto
 * (en pause au survol / interaction) ; désactivé si prefers-reduced-motion.
 */
export default function CoverflowCarousel({ livres }: { livres: Livre[] }) {
  const n = livres.length;
  const [active, setActive] = useState(0);
  const pausedRef = useRef(false);
  const drag = useRef<{ x: number; base: number } | null>(null);

  const to = useCallback(
    (i: number) => setActive(((i % n) + n) % n),
    [n]
  );
  const go = useCallback((dir: number) => setActive((a) => (a + dir + n) % n), [n]);

  useEffect(() => {
    if (n < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      if (!pausedRef.current && !document.hidden) go(1);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [n, go]);

  if (!n) return null;

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(-1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      go(1);
    }
  };

  const onDown = (e: React.PointerEvent) => {
    drag.current = { x: e.clientX, base: active };
    pausedRef.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
  };
  const onUp = (e: React.PointerEvent) => {
    if (drag.current) {
      const dx = e.clientX - drag.current.x;
      const steps = Math.round(-dx / SWIPE_STEP);
      if (steps) to(drag.current.base + steps);
    }
    drag.current = null;
    window.setTimeout(() => (pausedRef.current = false), 5000);
  };

  const cur = livres[active];

  return (
    <div
      className="cflow"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <div
        className="cflow__stage"
        role="group"
        aria-roledescription="carrousel"
        aria-label="Auteurs et livres en signatures"
        tabIndex={0}
        onKeyDown={onKey}
        onPointerDown={onDown}
        onPointerUp={onUp}
        onPointerCancel={onUp}
      >
        <div className="cflow__floor" aria-hidden="true" />
        {livres.map((l, i) => {
          let o = i - active;
          if (o > n / 2) o -= n;
          else if (o < -n / 2) o += n;
          const abs = Math.abs(o);
          const visible = abs <= 3;
          return (
            <button
              type="button"
              key={l.titre}
              className={`cflow__item${o === 0 ? " is-active" : ""}${visible ? "" : " is-far"}`}
              style={
                {
                  "--o": o,
                  "--abs": abs,
                  "--sign": o === 0 ? 0 : o < 0 ? 1 : -1,
                  zIndex: 100 - abs,
                } as React.CSSProperties
              }
              aria-hidden={!visible || o === 0}
              tabIndex={-1}
              onClick={() => (o === 0 ? undefined : to(i))}
            >
              <span className="cflow__cover">
                <Image
                  src={l.couverture}
                  alt={o === 0 ? `Couverture de « ${l.titre} »` : ""}
                  fill
                  sizes="(min-width: 900px) 300px, 60vw"
                  style={{ objectFit: "cover" }}
                  draggable={false}
                />
              </span>
            </button>
          );
        })}
      </div>

      <div className="cflow__caption" aria-live="polite">
        {cur.genre ? <span className="cflow__genre">{cur.genre}</span> : null}
        <h3 className="cflow__title">{cur.titre}</h3>
        <p className="cflow__author">{cur.auteur}</p>
        {cur.note ? <p className="cflow__note">{cur.note}</p> : null}
        <p className="cflow__price">{cur.prix}</p>
      </div>

      <div className="cflow__nav">
        <button
          type="button"
          className="cflow__btn"
          onClick={() => go(-1)}
          aria-label="Livre précédent"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <p className="cflow__counter" aria-hidden="true">
          <span>{active + 1}</span> / {n}
        </p>
        <button
          type="button"
          className="cflow__btn"
          onClick={() => go(1)}
          aria-label="Livre suivant"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
