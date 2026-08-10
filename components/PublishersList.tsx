import Image from "next/image";
import type { MaisonEdition } from "@/lib/types";

// Assez de vignettes en piste pour couvrir les très grands écrans : en dessous,
// la boucle laisserait un trou à droite en fin de course.
const MIN_EN_PISTE = 12;

function Logo({ p, clone }: { p: MaisonEdition; clone: boolean }) {
  return (
    <li className="logos__item" aria-hidden={clone || undefined}>
      {p.logo ? (
        <span className="logos__img">
          <Image
            src={p.logo}
            alt={clone ? "" : p.nom}
            fill
            sizes="200px"
            style={{ objectFit: "contain" }}
          />
        </span>
      ) : (
        <span className="pub__name">{p.nom}</span>
      )}
    </li>
  );
}

/**
 * Bandeau de logos en défilement continu.
 *
 * La piste répète la même série plusieurs fois et se décale d'exactement une
 * série : arrivée au bout, elle est revenue à son point de départ et la boucle
 * ne se voit pas. Les répétitions sont masquées aux lecteurs d'écran — la liste
 * n'est lue qu'une fois. Le défilement s'arrête au survol et au clavier, et
 * cède la place à une grille immobile si l'utilisateur refuse les animations.
 */
export default function PublishersList({ items }: { items: MaisonEdition[] }) {
  if (!items.length) return null;

  const series = Math.max(2, Math.ceil(MIN_EN_PISTE / items.length));

  return (
    <section className="section container" id="editeurs" aria-labelledby="pub-title">
      <div className="s-head reveal">
        <p className="s-lead">Elles font vivre l&apos;événement</p>
        <h2 className="s-title" id="pub-title">
          Maisons <em>d&apos;édition</em>
        </h2>
      </div>

      <div
        className="logos reveal"
        style={
          {
            "--n": items.length,
            "--shift": `-${100 / series}%`,
          } as React.CSSProperties
        }
      >
        <ul className="logos__track">
          {Array.from({ length: series }, (_, s) =>
            items.map((p) => <Logo key={`${s}-${p.slug}`} p={p} clone={s > 0} />)
          )}
        </ul>
      </div>

      <p className="pubs__cap">
        D&apos;autres maisons d&apos;édition seront annoncées prochainement.
      </p>
    </section>
  );
}
