type Slot = [time: string, detail: string];

const MATINEE: Slot[] = [
  ["9h00 – 10h00", "Ouverture officielle et mot de la coalition."],
  ["10h00 – 12h00", "Séances de signatures, première vague d'auteurs."],
  ["10h30 – 11h30", "Table ronde : lire en créole aujourd'hui."],
  ["11h00 – 12h30", "Atelier jeunesse : dessine ton propre livre."],
];

const APRES_MIDI: Slot[] = [
  ["14h00 – 15h30", "Rencontre : trois voix de la diaspora."],
  ["15h00 – 17h00", "Séances de signatures, seconde vague."],
  ["16h00 – 17h30", "Table ronde : l'édition indépendante en Haïti."],
  ["17h30 – 18h30", "Lecture publique et clôture en musique."],
];

function Part({ num, title, slots }: { num: string; title: string; slots: Slot[] }) {
  return (
    <div className="prog__part reveal">
      <h3>
        <span className="prog__num">{num}</span> {title}
      </h3>
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
        <p className="s-lead">Le déroulé de la journée</p>
        <h2 className="s-title" id="prog-title">
          Programme.
        </h2>
      </div>
      <div className="prog">
        <Part num="I." title="Matinée" slots={MATINEE} />
        <Part num="II." title="Après-midi" slots={APRES_MIDI} />
      </div>
      <p className="prog__note reveal">
        Le programme sera précisé au fil des confirmations d&apos;auteurs.
      </p>
    </section>
  );
}
