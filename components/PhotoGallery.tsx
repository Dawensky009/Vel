"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

export interface Photo {
  src: string;
  alt?: string;
  cls?: string; // grid class for the mosaic layout (g1…g6)
}

export default function PhotoGallery({
  photos,
  layout = "grid",
}: {
  photos: Photo[];
  layout?: "grid" | "mosaic";
}) {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i + photos.length - 1) % photos.length)),
    [photos.length]
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % photos.length)),
    [photos.length]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, prev, next]);

  const gridClass = layout === "mosaic" ? "gallery" : "act__media-grid";

  return (
    <>
      <div className={`${gridClass} stagger reveal`}>
        {photos.map((p, i) => (
          <button
            key={i}
            type="button"
            className={`photo-btn${p.cls ? " " + p.cls : ""}`}
            style={{ ["--i"]: i } as React.CSSProperties}
            onClick={() => setIndex(i)}
            aria-label={p.alt ? `Agrandir : ${p.alt}` : "Agrandir l'image"}
          >
            <Image
              src={p.src}
              alt={p.alt || ""}
              fill
              sizes="(min-width: 720px) 33vw, 100vw"
              style={{ objectFit: "cover" }}
            />
          </button>
        ))}
      </div>

      {open && index !== null ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image en grand"
          onClick={close}
        >
          <button className="lightbox__close" type="button" onClick={close} aria-label="Fermer">
            ×
          </button>
          {photos.length > 1 ? (
            <button
              className="lightbox__nav lightbox__prev"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Image précédente"
            >
              ‹
            </button>
          ) : null}
          <figure className="lightbox__fig" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photos[index].src}
              alt={photos[index].alt || ""}
              className="lightbox__img"
            />
            {photos[index].alt ? (
              <figcaption className="lightbox__cap">{photos[index].alt}</figcaption>
            ) : null}
          </figure>
          {photos.length > 1 ? (
            <button
              className="lightbox__nav lightbox__next"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Image suivante"
            >
              ›
            </button>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
