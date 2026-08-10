"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import BookCard from "./BookCard";
import type { Livre } from "@/lib/types";

/**
 * Rail horizontal de cartes livres (motif « carousel cards ») : défilement
 * natif avec accroche, flèches qui avancent d'une page pleine, et une barre
 * de position qui reflète la portion visible.
 *
 * Le défilement natif est la base : au doigt, au trackpad et au clavier le
 * rail fonctionne sans JS. Les flèches et la barre sont un enrichissement.
 */
export default function BooksCarousel({
  livres,
  label,
  resetKey,
}: {
  livres: Livre[];
  label: string;
  /** Change de valeur => le rail revient au début (ex. changement de filtre). */
  resetKey?: string;
}) {
  const viewRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(true);
  const [thumb, setThumb] = useState({ left: 0, scale: 1 });
  const [pos, setPos] = useState({ page: 1, pages: 1 });

  const sync = useCallback(() => {
    const el = viewRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft >= max - 1);
    setThumb({
      left: (el.scrollLeft / el.scrollWidth) * 100,
      scale: Math.min(1, el.clientWidth / el.scrollWidth),
    });
    // Repère « écran n sur N » : les flèches avancent d'une largeur de rail,
    // le compteur compte donc en écrans, pas en cartes.
    const pages = Math.max(1, Math.ceil(el.scrollWidth / el.clientWidth));
    setPos({
      pages,
      page: Math.min(pages, Math.round(el.scrollLeft / el.clientWidth) + 1),
    });
  }, []);

  useEffect(() => {
    const el = viewRef.current;
    if (!el) return;
    sync();
    el.addEventListener("scroll", sync, { passive: true });
    // Les cartes se redimensionnent (police fluide, rotation mobile) : on
    // recalcule plutôt que de figer les bornes au montage.
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", sync);
      ro.disconnect();
    };
  }, [sync]);

  useEffect(() => {
    const el = viewRef.current;
    if (!el) return;
    // « instant » et non « auto » : `auto` délègue au scroll-behavior CSS
    // (smooth ici), et un changement de filtre doit repartir de zéro
    // immédiatement, pas en défilant à travers l'ancienne liste.
    el.scrollTo({ left: 0, behavior: "instant" });
    sync();
  }, [resetKey, sync]);

  const page = (dir: number) => {
    const el = viewRef.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>(".bcar__item");
    // Pas exact = largeur de carte + gouttière, mesuré plutôt que codé en dur.
    const step =
      items.length > 1
        ? items[1].offsetLeft - items[0].offsetLeft
        : (items[0]?.offsetWidth ?? el.clientWidth);
    const perPage = Math.max(1, Math.floor(el.clientWidth / step));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * step * perPage, behavior: reduce ? "auto" : "smooth" });
  };

  if (!livres.length) return null;

  return (
    <div className="bcar">
      {/* Commandes groupées en pastille, alignées à droite. Masquées quand tout
          tient à l'écran (filtre à 2 ou 3 titres) : deux flèches inertes et une
          barre pleine ne disent rien. */}
      <div className="bcar__bar" hidden={atStart && atEnd}>
        <div className="bcar__nav">
          <button
            type="button"
            className="bcar__btn"
            onClick={() => page(-1)}
            disabled={atStart}
            aria-label="Titres précédents"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <p className="bcar__counter" aria-hidden="true">
            <span>{pos.page}</span> / {pos.pages}
          </p>
          <button
            type="button"
            className="bcar__btn"
            onClick={() => page(1)}
            disabled={atEnd}
            aria-label="Titres suivants"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`bcar__viewport${atStart ? " is-start" : ""}${atEnd ? " is-end" : ""}`}
        ref={viewRef}
        tabIndex={0}
        role="group"
        aria-roledescription="carrousel"
        aria-label={label}
      >
        <ul className="bcar__track">
          {livres.map((l, i) => (
            <li className="bcar__item" style={{ ["--i"]: i } as React.CSSProperties} key={l.titre}>
              <BookCard livre={l} />
            </li>
          ))}
        </ul>
      </div>

      {/* Règle de position sous le rail : elle en reprend toute la largeur,
          donc la portion parcourue se lit d'un coup d'œil. */}
      <div className="bcar__progress" aria-hidden="true" hidden={atStart && atEnd}>
        <span style={{ transform: `translateX(${thumb.left}%) scaleX(${thumb.scale})` }} />
      </div>
    </div>
  );
}
