import Image from "next/image";
import type { MaisonEdition } from "@/lib/types";

/**
 * Les maisons d'édition présentes, en rangée fixe.
 *
 * Pas de bandeau défilant : à trois partenaires, la boucle répétait la même
 * série quatre fois et le mouvement désignait le vide au lieu de le combler.
 * Une rangée immobile assume le nombre, et la mention de fin explique la suite.
 *
 * Les logos sont détourés sur fond transparent et calibrés à surface optique
 * égale (voir public/images/editeurs) : ils se posent directement sur le crème,
 * sans cartouche blanc, et pèsent le même poids visuel quelle que soit leur
 * forme. Le nom sous le logo porte l'information — l'image reste décorative.
 */
function Maison({ p }: { p: MaisonEdition }) {
  const inner = (
    <>
      <span className="pub__logo">
        {p.logo ? (
          <Image src={p.logo} alt="" fill sizes="(min-width: 640px) 260px, 45vw" style={{ objectFit: "contain" }} />
        ) : null}
      </span>
      <span className="pub__name">{p.nom}</span>
    </>
  );

  return p.site ? (
    <a className="pub__link" href={p.site} target="_blank" rel="noopener noreferrer">
      {inner}
      <span className="pub__go">
        Site
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17 17 7M9 7h8v8" />
        </svg>
      </span>
    </a>
  ) : (
    <span className="pub__link pub__link--static">{inner}</span>
  );
}

export default function PublishersList({ items }: { items: MaisonEdition[] }) {
  if (!items.length) return null;

  return (
    <section className="section container" id="editeurs" aria-labelledby="pub-title">
      <div className="s-head reveal">
        <p className="s-lead">Elles font vivre l&apos;événement</p>
        <h2 className="s-title" id="pub-title">
          Maisons <em>d&apos;édition</em>
        </h2>
      </div>

      <ul className="pubs stagger reveal">
        {items.map((p, i) => (
          <li className="pub" key={p.slug} style={{ ["--i"]: i } as React.CSSProperties}>
            <Maison p={p} />
          </li>
        ))}
      </ul>

      <p className="pubs__cap reveal">
        D&apos;autres maisons d&apos;édition seront annoncées prochainement.
      </p>
    </section>
  );
}
