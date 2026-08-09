import BooksCarousel from "./BooksCarousel";
import type { Livre } from "@/lib/types";

/**
 * « Livres en vente » : le second catalogue, sans séance de signature.
 * Tant que le client n'a pas fourni la liste, `livres` est vide et la section
 * ne rend rien — pas de section fantôme en ligne. Remplir `livresEnVente`
 * dans content/livres.ts suffit à la faire apparaître.
 */
export default function LivresEnVente({ livres }: { livres: Livre[] }) {
  if (!livres.length) return null;

  const genres = new Set(livres.map((l) => l.genre).filter(Boolean));

  return (
    <section className="section container" id="en-vente" aria-labelledby="ed-vente-title">
      <div className="s-head reveal">
        <p className="s-lead">Sur les stands, tout au long de la journée</p>
        <h2 className="s-title" id="ed-vente-title">
          Livres <em>en vente</em>
        </h2>
        <p className="cat-count">
          {livres.length} {livres.length > 1 ? "titres" : "titre"}
          {genres.size ? ` · ${genres.size} ${genres.size > 1 ? "genres" : "genre"}` : ""} à
          emporter
        </p>
      </div>

      <div className="reveal">
        <BooksCarousel livres={livres} label="Livres en vente sur les stands" />
      </div>
    </section>
  );
}
