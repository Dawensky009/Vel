import AnimationsTimeline from "./AnimationsTimeline";
import { getAnimations } from "@/lib/content";

type Slot = [time: string, detail: string];

// Volet « Auteurs et découvertes »
const AUTEURS: Slot[] = [
  ["8h00", "Montée du drapeau"],
  ["9h00", "Ouverture au public et début des ventes de livres"],
  ["10h00 – 10h30", "Accueil des invités d'honneur"],
  ["12h30 – 13h30", "Remise des plaques d'honneur et prises de parole des invités d'honneur"],
  ["13h30 – 14h00", "Prises de parole des institutions partenaires"],
  ["Toute la journée", "Visite des stands, découverte des ouvrages, rencontres avec les auteurs et séances de dédicace"],
  ["16h00", "Clôture des ventes de livres"],
];

// Le volet « Animations culturelles et artistiques » est passé en frise
// illustrée (AnimationsTimeline) : horaires et distribution vivent désormais
// dans content/animations.ts.

function Part({ title, slots }: { title: string; slots: Slot[] }) {
  return (
    <div className="prog__part reveal">
      <h3>{title}</h3>
      <dl>
        {slots.map(([time, detail]) => (
          <div className="slot" key={time}>
            <dt>{time}</dt>
            <dd>{detail}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function Programme() {
  return (
    <section className="section container" id="programme" aria-labelledby="prog-title">
      <div className="s-head reveal">
        <p className="s-lead">Le déroulé de la journée du 15 août</p>
        <h2 className="s-title" id="prog-title">
          Programme
        </h2>
      </div>
      <div className="prog prog--solo">
        <Part title="Auteurs et découvertes" slots={AUTEURS} />
      </div>

      <div className="prog__part prog__part--scene reveal">
        <h3>Animations culturelles et artistiques</h3>
        <AnimationsTimeline creneaux={getAnimations()} />
      </div>

      <p className="prog__note reveal">
        Une journée de découvertes littéraires, de rencontres, de musique et de
        prestations artistiques vous attend au Palais municipal de Delmas.
      </p>
    </section>
  );
}
