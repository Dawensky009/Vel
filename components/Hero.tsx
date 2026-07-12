const TIMELINE: [string, string][] = [
  ["9h00", "Ouverture officielle"],
  ["10h30", "Tables rondes & signatures"],
  ["14h00", "Rencontres, voix de la diaspora"],
  ["17h30", "Lecture publique & clôture"],
];

export default function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero__grid">
        <div className="hero__text reveal">
          <span className="script hero__script">Stay Focus</span>
          <h1 id="hero-title">
            Vacances en livres. <em>L&apos;événement de l&apos;été.</em>
          </h1>
          <p className="hero__deck">
            Trente auteurs, un palais qui s&apos;ouvre au public,{" "}
            <em>une journée à passer avec les livres.</em>
          </p>
          <div className="hero__cta">
            <a className="btn btn--cta" href="#reserver">
              Réserver ma place · 500 HTG{" "}
              <span className="arw" aria-hidden="true">
                →
              </span>
            </a>
            <p className="hero__free">
              <b>Gratuit</b> pour vos enfants jusqu&apos;à 14 ans.
            </p>
          </div>
        </div>
        <aside className="hero__info reveal" aria-label="Le 15 août, en bref">
          <p className="hero__info-date">15 août 2026</p>
          <p className="hero__info-sub">
            Samedi · 9h00 – 18h30
            <br />
            Palais Municipal, Delmas
          </p>
          <p className="hero__tl-title">La journée</p>
          <ol className="hero__tl">
            {TIMELINE.map(([time, label]) => (
              <li key={time}>
                <time>{time}</time>
                <span>{label}</span>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </section>
  );
}
