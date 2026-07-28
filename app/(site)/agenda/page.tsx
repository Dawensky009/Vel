import type { Metadata } from "next";
import Programme from "@/components/Programme";
import Timeline from "@/components/Timeline";
import { getActivites } from "@/lib/content";

export const metadata: Metadata = {
  title: "Agenda · Vacances en livres",
  description:
    "Le déroulé de la journée du 15 août 2026 : programme heure par heure (auteurs, découvertes, animations culturelles et artistiques), et les temps forts en amont de l'événement.",
};

export default function AgendaPage() {
  const items = getActivites();

  return (
    <>
      <section className="section container page-top">
        <div className="s-head reveal">
          <p className="s-lead">Le 15 août, heure par heure</p>
          <h1 className="s-title">Agenda</h1>
        </div>
      </section>

      <Programme />

      {items.length ? (
        <section className="section container" aria-labelledby="amont-title">
          <div className="s-head reveal">
            <p className="s-lead">En amont de l&apos;événement</p>
            <h2 className="s-title" id="amont-title">
              Les temps forts
            </h2>
          </div>
          <Timeline items={items} />
        </section>
      ) : null}
    </>
  );
}
