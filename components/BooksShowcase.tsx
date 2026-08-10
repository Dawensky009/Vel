import Link from "next/link";
import CoverflowCarousel from "./CoverflowCarousel";
import type { Livre } from "@/lib/types";

const SEE_ALL = "/editions/2026#auteurs";

/**
 * Vitrine coverflow de l'accueil. Elle met en avant les auteurs en signature :
 * c'est eux qu'on vient rencontrer le 15 août. Les livres vendus sans séance
 * de signature ont leur propre section sur la page édition (#en-vente).
 */
export default function BooksShowcase({ livres }: { livres: Livre[] }) {
  if (!livres.length) return null;

  return (
    <section className="section container" aria-labelledby="books-title">
      <div className="s-head reveal">
        <p className="s-lead">Les auteurs de l&apos;édition 2026</p>
        <h2 className="s-title" id="books-title">
          Auteurs &amp; livres <em>en signatures</em>
        </h2>
      </div>

      <div className="reveal">
        <CoverflowCarousel livres={livres} label="Auteurs et livres en signatures" />
      </div>

      <p className="books__all reveal">
        <Link className="btn btn--cta" href={SEE_ALL}>
          Voir tous les auteurs{" "}
          <span className="arw" aria-hidden="true">
            →
          </span>
        </Link>
      </p>
    </section>
  );
}
