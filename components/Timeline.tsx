import Link from "next/link";
import Image from "next/image";
import type { Activite } from "@/lib/types";
import { formatDate } from "@/lib/content";

export default function Timeline({ items }: { items: Activite[] }) {
  return (
    <ol className="timeline">
      {items.map((a) => {
        const upcoming = a.statut === "a-venir";
        const thumb = a.couverture || a.images?.[0];
        return (
          <li key={a.slug} className={`tl-item reveal${upcoming ? " is-upcoming" : ""}`}>
            <span className="tl-item__marker" aria-hidden="true" />
            <p className="tl-item__date">
              <time dateTime={a.date}>{formatDate(a.date)}</time>
            </p>
            <Link href={`/agenda/${a.slug}`} className={`tl-card${thumb ? " has-media" : ""}`}>
              {thumb ? (
                <span className="tl-card__media">
                  <Image
                    src={thumb}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 32vw, 100vw"
                    style={{ objectFit: "cover" }}
                  />
                </span>
              ) : null}
              <span className="tl-card__body">
                <span className="tl-card__type">
                  <span className="tl-badge">{a.type}</span>
                  {upcoming ? <span className="tl-soon">À venir</span> : null}
                </span>
                <span className="tl-card__title">{a.titre}</span>
                <span className="tl-card__resume">{a.resume}</span>
                <span className="tl-card__more">
                  Voir <span aria-hidden="true">→</span>
                </span>
              </span>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
