import type { Metadata } from "next";
import EditionCard from "@/components/EditionCard";
import { getEditions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Éditions · Vacances en livres",
  description:
    "Toutes les éditions de Vacances en livres : l'édition à venir et les archives des éditions passées.",
};

export default function EditionsPage() {
  const items = getEditions();
  const hasPast = items.some((e) => e.statut === "passe");

  return (
    <section className="section container page-top">
      <div className="s-head reveal">
        <p className="s-lead">Toutes les éditions</p>
        <h1 className="s-title">Éditions.</h1>
      </div>
      <div className="editions-grid stagger reveal">
        {items.map((e, i) => (
          <EditionCard key={e.annee} e={e} i={i} />
        ))}
      </div>
      {!hasPast ? (
        <p className="editions-note reveal">
          Les éditions passées apparaîtront ici au fil des années.
        </p>
      ) : null}
    </section>
  );
}
