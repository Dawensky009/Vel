"use client";

import { useMemo, useState } from "react";
import BooksCarousel from "./BooksCarousel";
import type { Livre } from "@/lib/types";

/**
 * Catalogue des auteurs de l'édition : compteur, filtres par genre
 * (chips accessibles, aria-pressed) et rail horizontal de cartes.
 * Sans JS : tous les titres restent visibles (le filtre est un enrichissement).
 */
export default function AuthorsCatalog({ livres }: { livres: Livre[] }) {
  const genres = useMemo(() => {
    const counts = new Map<string, number>();
    livres.forEach((l) => {
      if (l.genre) counts.set(l.genre, (counts.get(l.genre) ?? 0) + 1);
    });
    return Array.from(counts.entries()).sort(
      (a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "fr")
    );
  }, [livres]);

  const [active, setActive] = useState<string>("Tous");
  const shown = active === "Tous" ? livres : livres.filter((l) => l.genre === active);

  return (
    <section className="section container" id="auteurs" aria-labelledby="ed-auteurs-title">
      <div className="s-head reveal">
        <p className="s-lead">À découvrir sur place le 15 août</p>
        <h2 className="s-title" id="ed-auteurs-title">
          Auteurs &amp; livres <em>en signatures</em>
        </h2>
        <p className="cat-count">
          {livres.length} titres · {genres.length} genres à feuilleter sur les stands
        </p>
      </div>

      <div className="cat-filter reveal" role="group" aria-label="Filtrer par genre">
        <button
          type="button"
          className="cat-chip"
          aria-pressed={active === "Tous"}
          onClick={() => setActive("Tous")}
        >
          Tous <span className="cat-chip__n">{livres.length}</span>
        </button>
        {genres.map(([g, n]) => (
          <button
            key={g}
            type="button"
            className="cat-chip"
            aria-pressed={active === g}
            onClick={() => setActive(g)}
          >
            {g} <span className="cat-chip__n">{n}</span>
          </button>
        ))}
      </div>

      <BooksCarousel
        livres={shown}
        resetKey={active}
        label={`Auteurs et livres en signatures — ${active === "Tous" ? "tous les genres" : active}`}
      />
    </section>
  );
}
