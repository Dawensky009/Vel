import type { Metadata } from "next";
import Timeline from "@/components/Timeline";
import { getActivites } from "@/lib/content";

export const metadata: Metadata = {
  title: "Agenda — Vacances en livres",
  description:
    "L'agenda de Vacances en livres : conférences de presse, ateliers, lancements et l'événement — les temps forts de l'année, en images et en vidéos.",
};

export default function AgendaPage() {
  const items = getActivites();

  return (
    <section className="section container page-top">
      <div className="s-head reveal">
        <p className="s-lead">Les temps forts de l&apos;année</p>
        <h1 className="s-title">Agenda.</h1>
      </div>
      {items.length ? (
        <Timeline items={items} />
      ) : (
        <p className="prose reveal">Aucune activité pour le moment.</p>
      )}
    </section>
  );
}
