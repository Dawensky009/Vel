import Image from "next/image";
import type { CreneauAnimation } from "@/lib/types";

/**
 * La scène du 15 août en frise verticale : un rail marqué d'un point par
 * créneau, l'horaire en manchette, et les artistes en portraits.
 *
 * Le rail et les points sont décoratifs (aria-hidden) : la structure lue par
 * les lecteurs d'écran reste une liste ordonnée de créneaux.
 */
export default function AnimationsTimeline({
  creneaux,
}: {
  creneaux: CreneauAnimation[];
}) {
  if (!creneaux.length) return null;

  return (
    <ol className="anim">
      {creneaux.map((c, i) => (
        <li className="anim__row reveal" key={c.titre} style={{ ["--i"]: i } as React.CSSProperties}>
          <span className="anim__marker" aria-hidden="true" />

          <div className="anim__head">
            <p className="anim__time">{c.heure}</p>
            <h4 className="anim__title">{c.titre}</h4>
            <p className="anim__detail">{c.detail}</p>
          </div>

          {c.image ? (
            <figure className="anim__scene">
              <Image
                src={c.image}
                alt={c.legende ?? ""}
                fill
                sizes="(min-width: 900px) 40vw, 92vw"
                style={{ objectFit: "cover" }}
              />
              {c.legende ? <figcaption>{c.legende}</figcaption> : null}
            </figure>
          ) : null}

          <ul className="anim__cast">
            {c.artistes.map((a) => (
              <li className="anim__artist" key={a.nom}>
                <span className="anim__photo">
                  <Image
                    src={a.photo}
                    alt={`Portrait de ${a.nom}`}
                    fill
                    sizes="150px"
                    style={{ objectFit: "cover", objectPosition: "50% 14%" }}
                  />
                </span>
                <span className="anim__name">{a.nom}</span>
                {a.role ? <span className="anim__role">{a.role}</span> : null}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
