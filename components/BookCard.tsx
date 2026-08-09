import Image from "next/image";
import Link from "next/link";
import type { Livre } from "@/lib/types";

export default function BookCard({
  livre,
  ctaHref,
  index,
}: {
  livre: Livre;
  ctaHref?: string;
  index?: number;
}) {
  return (
    <article
      className="book-card"
      style={index != null ? ({ ["--i"]: index } as React.CSSProperties) : undefined}
    >
      <div className="book-card__cover">
        <Image
          src={livre.couverture}
          alt={`Couverture du livre « ${livre.titre} »`}
          fill
          sizes="(min-width: 720px) 300px, 72vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="book-card__body">
        {livre.genre ? <p className="book-card__genre">{livre.genre}</p> : null}
        <h3 className="book-card__title" title={livre.titre}>
          {livre.titre}
        </h3>
        <p className="book-card__author">{livre.auteur}</p>
        {livre.note ? <p className="book-card__note">{livre.note}</p> : null}
        {livre.description ? <p className="book-card__desc">{livre.description}</p> : null}
        <div className="book-card__foot">
          <p className="book-card__price">{livre.prix}</p>
          {ctaHref ? (
            <Link className="btn btn--ghost book-card__cta" href={ctaHref}>
              Voir plus
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
