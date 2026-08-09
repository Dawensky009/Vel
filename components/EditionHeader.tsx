import Image from "next/image";
import Link from "next/link";
import Parallax from "./Parallax";
import type { Edition } from "@/lib/types";

export default function EditionHeader({ e }: { e: Edition }) {
  const upcoming = e.statut === "a-venir";
  const bg = e.cover || e.affiche;

  return (
    <>
      <header className="ehero" aria-labelledby="ehero-title">
        {bg ? (
          <Parallax className="ehero__media parallax" speed={26}>
            <Image
              src={bg}
              alt=""
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </Parallax>
        ) : null}
        <div className="ehero__scrim" aria-hidden="true" />
        <div className="ehero__inner container">
          <p className="ehero__badge-row hero-rise" style={{ ["--i" as string]: 0 }}>
            <span className={`ebadge${upcoming ? " is-upcoming" : ""}`}>
              {upcoming ? "Édition à venir" : "Édition passée"}
            </span>
          </p>
          <h1 className="ehero__title hero-rise" id="ehero-title" style={{ ["--i" as string]: 1 }}>
            {e.titre} <span className="ehero__year">{e.annee}</span>
          </h1>
          <p className="ehero__tagline hero-rise" style={{ ["--i" as string]: 2 }}>
            {e.tagline}
          </p>
          <p className="ehero__meta hero-rise" style={{ ["--i" as string]: 3 }}>
            {e.dateLabel} · {e.lieu}
            {e.ville ? `, ${e.ville}` : ""}
          </p>
          <p className="ehero__resume hero-rise" style={{ ["--i" as string]: 4 }}>
            {e.resume}
          </p>
          <div className="ehero__cta hero-rise" style={{ ["--i" as string]: 5 }}>
            <Link className="btn btn--cta" href="#programme">
              Voir le programme{" "}
              <span className="arw" aria-hidden="true">
                →
              </span>
            </Link>
            <Link className="btn btn--ghost-invert" href="#tarifs">
              Tarifs &amp; billets
            </Link>
          </div>
        </div>
      </header>

      <div className="efacts">
        <ul className="efacts__list container">
          <li>
            <span className="efacts__k">Date</span>
            <span className="efacts__v">{e.dateLabel}</span>
          </li>
          <li>
            <span className="efacts__k">Entrée</span>
            <span className="efacts__v">500 HTG</span>
          </li>
          <li>
            <span className="efacts__k">14 ans et moins</span>
            <span className="efacts__v">Gratuit</span>
          </li>
          <li>
            <span className="efacts__k">Billets</span>
            <span className="efacts__v">7 points de vente</span>
          </li>
        </ul>
      </div>
    </>
  );
}
