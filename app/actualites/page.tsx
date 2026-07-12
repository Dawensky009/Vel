import type { Metadata } from "next";
import CommuniqueCard from "@/components/CommuniqueCard";
import { getCommuniques } from "@/lib/content";

export const metadata: Metadata = {
  title: "Actualités — Vacances en livres",
  description:
    "Les communiqués officiels et actualités de Vacances en livres : date, lieu, invités, partenaires et réservations.",
};

export default function ActualitesPage() {
  const items = getCommuniques();

  return (
    <section className="section container page-top">
      <div className="s-head reveal">
        <p className="s-lead">Communications officielles</p>
        <h1 className="s-title">Actualités.</h1>
      </div>
      {items.length ? (
        <div className="news-grid stagger reveal">
          {items.map((c, i) => (
            <CommuniqueCard key={c.slug} c={c} i={i} />
          ))}
        </div>
      ) : (
        <p className="prose reveal">Aucun communiqué pour le moment.</p>
      )}
    </section>
  );
}
