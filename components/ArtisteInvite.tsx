import Image from "next/image";
import Link from "next/link";
import { artisteInvite } from "@/content/animations";

/**
 * Tête d'affiche : l'affiche d'annonce officielle, montrée telle quelle.
 *
 * L'affiche est un carré composé (logo, nom, lieu, date, tarifs, contacts) :
 * la recadrer casserait sa mise en page, elle est donc affichée entière. Le
 * texte à côté ne répète pas ce qu'elle dit — il situe l'artiste dans la
 * journée et renvoie au programme.
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
            src={a.affiche}
            alt={a.afficheAlt}
            width={900}
            height={900}
            sizes="(min-width: 900px) 420px, 92vw"
            style={{ width: "100%", height: "auto" }}
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
