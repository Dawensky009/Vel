import Link from "next/link";
import CoverflowCarousel from "./CoverflowCarousel";
import type { Livre } from "@/lib/types";

const SEE_ALL = "/editions/2026#en-vente";

/**
 * Vitrine coverflow de l'accueil. Elle met en avant les livres en vente :
 * c'est ce que le visiteur peut repartir avec le 15 août. Le catalogue des
 * auteurs en signature reste entier sur la page édition (#auteurs).
 */
export default function BooksShowcase({ livres }: { livres: Livre[] }) {
  if (!livres.length) return null;

  return (
    <section className="section container" aria-labelledby="books-title">
      <div className="s-head reveal">
        <p className="s-lead">Sur les stands le 15 août 2026</p>
        <h2 className="s-title" id="books-title">
          Livres <em>en vente</em>
        </h2>
      </div>

      <div className="reveal">
        <CoverflowCarousel livres={livres} label="Livres en vente sur les stands" />
      </div>

      <p className="books__all reveal">
        <Link className="btn btn--cta" href={SEE_ALL}>
          Voir tous les titres{" "}
          <span className="arw" aria-hidden="true">
            →
          </span>
        </Link>
      </p>
    </section>
  );
}
