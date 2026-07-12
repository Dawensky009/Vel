import Link from "next/link";
import Image from "next/image";
import type { Edition } from "@/lib/types";

export default function EditionCard({ e, i = 0 }: { e: Edition; i?: number }) {
  const upcoming = e.statut === "a-venir";
  return (
    <Link
      href={`/editions/${e.annee}`}
      className="ecard"
      style={{ ["--i"]: i } as React.CSSProperties}
    >
      <div className="ecard__media">
        {e.affiche ? (
          <Image
            src={e.affiche}
            alt={`Affiche de ${e.titre} ${e.annee}`}
            fill
            sizes="(min-width: 720px) 33vw, 100vw"
            style={{ objectFit: "cover" }}
          />
        ) : null}
        <span className={`ecard__badge${upcoming ? " is-upcoming" : ""}`}>
          {upcoming ? "À venir" : "Édition passée"}
        </span>
      </div>
      <div className="ecard__body">
        <p className="ecard__year">{e.annee}</p>
        <h3 className="ecard__title">{e.titre}</h3>
        <p className="ecard__date">
          {e.dateLabel} · {e.lieu}
        </p>
        <p className="ecard__resume">{e.resume}</p>
        <span className="ecard__more">
          Voir l&apos;édition <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}
