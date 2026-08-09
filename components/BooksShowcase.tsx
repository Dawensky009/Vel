"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import BookCard from "./BookCard";
import type { Livre } from "@/lib/types";

const SEE_ALL = "/editions/2026#auteurs";
const AUTO_MS = 3500; // cadence du défilement automatique

export default function BooksShowcase({ livres }: { livres: Livre[] }) {
  const track = useRef<HTMLDivElement>(null);
  const [scrollable, setScrollable] = useState(false);
  const pausedRef = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const t = track.current;
    if (!t) return;
    const check = () => setScrollable(t.scrollWidth > t.clientWidth + 4);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [livres.length]);

  // Défilement automatique — en pause au survol / focus / interaction,
  // désactivé si l'utilisateur préfère un mouvement réduit.
  useEffect(() => {
    const t = track.current;
    if (!t || !scrollable) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    const step = () => {
      if (pausedRef.current || document.hidden) return;
      const slide = t.querySelector<HTMLElement>(".books__slide");
      const gap = parseFloat(getComputedStyle(t).columnGap || "0") || 0;
      const dist = slide ? slide.getBoundingClientRect().width + gap : t.clientWidth * 0.85;
      if (t.scrollLeft + t.clientWidth >= t.scrollWidth - 4) {
        t.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        t.scrollBy({ left: dist, behavior: "smooth" });
      }
    };

    const id = window.setInterval(step, AUTO_MS);
    return () => window.clearInterval(id);
  }, [scrollable]);

  useEffect(() => {
    return () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, []);

  if (!livres.length) return null;

  const pause = () => {
    pausedRef.current = true;
  };
  const resume = () => {
    pausedRef.current = false;
  };
  // Après une action manuelle (flèche, swipe), on laisse la main à
  // l'utilisateur quelques secondes avant de relancer l'automatique.
  const pauseThenResume = () => {
    pausedRef.current = true;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      pausedRef.current = false;
    }, 6000);
  };

  const nudge = (dir: number) => {
    const t = track.current;
    if (t) t.scrollBy({ left: dir * t.clientWidth * 0.85, behavior: "smooth" });
    pauseThenResume();
  };

  return (
    <section className="section container" aria-labelledby="books-title">
      <div className="s-head reveal">
        <p className="s-lead">Les auteurs de l&apos;édition 2026</p>
        <h2 className="s-title" id="books-title">
          Auteurs &amp; livres <em>en signatures</em>
        </h2>
      </div>

      <div
        className="books__track"
        ref={track}
        onMouseEnter={pause}
        onMouseLeave={resume}
        onFocus={pause}
        onBlur={resume}
        onPointerDown={pauseThenResume}
      >
        {livres.map((l) => (
          <div className="books__slide" key={l.titre}>
            <BookCard livre={l} />
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
