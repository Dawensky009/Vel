"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export type Slide = { src: string; alt: string };

// Defiling background gallery for the hero: crossfades through real event photos.
// Auto-advance is disabled under prefers-reduced-motion (first image stays).
export default function HeroCarousel({ slides }: { slides: Slide[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(
      () => setActive((n) => (n + 1) % slides.length),
      5000
    );
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className="hero-carousel" aria-hidden="true">
      {slides.map((s, n) => (
        <div
          key={s.src}
          className={`hero-carousel__slide${n === active ? " is-active" : ""}`}
        >
          <Image
            src={s.src}
            alt=""
            fill
            priority={n === 0}
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}
    </div>
  );
}
