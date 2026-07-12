import Image from "next/image";
import type { Edition } from "@/lib/types";

export default function EditionHeader({ e }: { e: Edition }) {
  const upcoming = e.statut === "a-venir";
  return (
    <header className="ehead container">
      <div className="ehead__grid">
        <div className="ehead__text reveal">
          <p className="ehead__badge-row">
            <span className={`ebadge${upcoming ? " is-upcoming" : ""}`}>
              {upcoming ? "Édition à venir" : "Édition passée"}
            </span>
          </p>
          <h1 className="ehead__title">
            {e.titre} <span className="ehead__year">{e.annee}</span>
          </h1>
          <p className="ehead__tagline">{e.tagline}</p>
          <p className="ehead__meta">
            {e.dateLabel} · {e.lieu}
            {e.ville ? `, ${e.ville}` : ""}
          </p>
          <p className="ehead__resume">{e.resume}</p>
        </div>
        {e.affiche ? (
          <figure className="ehead__poster reveal">
            <Image
              src={e.affiche}
              alt={`Affiche officielle de ${e.titre} ${e.annee}`}
              width={1080}
              height={1080}
              sizes="(min-width: 880px) 34vw, 78vw"
              style={{ width: "100%", height: "auto" }}
            />
            <figcaption>Affiche officielle</figcaption>
          </figure>
        ) : null}
      </div>
    </header>
  );
}
