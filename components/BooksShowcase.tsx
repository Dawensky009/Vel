"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import BookCard from "./BookCard";
import type { Livre } from "@/lib/types";

const SEE_ALL = "/editions/2026#auteurs";

export default function BooksShowcase({ livres }: { livres: Livre[] }) {
  const track = useRef<HTMLDivElement>(null);
  const [scrollable, setScrollable] = useState(false);

  useEffect(() => {
    const t = track.current;
    if (!t) return;
    const check = () => setScrollable(t.scrollWidth > t.clientWidth + 4);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [livres.length]);

  if (!livres.length) return null;

  const nudge = (dir: number) => {
    const t = track.current;
    if (t) t.scrollBy({ left: dir * t.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <section className="section container" aria-labelledby="books-title">
      <div className="s-head reveal">
        <p className="s-lead">Les auteurs de l&apos;édition 2026</p>
        <h2 className="s-title" id="books-title">
          Auteurs &amp; <em>livres</em>
        </h2>
      </div>

      <div className="books__track" ref={track}>
        {livres.map((l) => (
          <div className="books__slide" key={l.titre}>
            <BookCard livre={l} ctaHref={SEE_ALL} />
          </div>
        ))}
      </div>

      {scrollable ? (
        <div className="books__controls">
          <button type="button" className="books__nav" onClick={() => nudge(-1)} aria-label="Livres précédents">
            ‹
          </button>
          <button type="button" className="books__nav" onClick={() => nudge(1)} aria-label="Livres suivants">
            ›
          </button>
        </div>
      ) : null}

      <p className="books__all reveal">
        <Link className="btn btn--cta" href={SEE_ALL}>
          Voir tous les auteurs{" "}
          <span className="arw" aria-hidden="true">
            →
          </span>
        </Link>
      </p>
    </section>
  );
}
