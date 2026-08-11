import Image from "next/image";
import Link from "next/link";
import { artisteInvite } from "@/content/animations";

/**
 * Tête d'affiche : le portrait de l'artiste et sa place dans la journée.
 *
 * Le portrait remplace l'ancienne affiche d'annonce, qui imprimait sur la page
 * des tarifs et un numéro absents de la billetterie et de la page contact.
 */
export default function ArtisteInvite() {
  const a = artisteInvite;

  return (
    <section className="section container" id="tete-affiche" aria-labelledby="ai-title">
      {/* Le titre vit dans la colonne de droite : au-dessus de la grille, il
          laissait le flanc de l'affiche vide sur toute sa hauteur. */}
      <div className="ai">
        <figure className="ai__poster reveal reveal-img">
          <Image
            src={a.photo}
            alt={a.photoAlt}
            fill
            sizes="(min-width: 900px) 420px, 92vw"
            style={{ objectFit: "cover", objectPosition: "50% 15%" }}
          />
        </figure>

        <div className="ai__side reveal">
          <p className="s-lead">Artiste invité</p>
          <h2 className="s-title" id="ai-title">
            {a.nom} <em>sur scène</em>
          </h2>
          <p className="ai__lead">{a.accroche}</p>
          <p className="ai__more">
            <Link href="/editions/2026#programme">
              Voir le programme de la journée{" "}
              <span className="arw" aria-hidden="true">
                →
              </span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
