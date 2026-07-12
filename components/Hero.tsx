import Image from "next/image";

const TIMELINE: [string, string][] = [
  ["9h00", "Ouverture officielle"],
  ["10h30", "Tables rondes & signatures"],
  ["14h00", "Rencontres, voix de la diaspora"],
  ["17h30", "Lecture publique & clôture"],
];

export default function Hero() {
  return (
    <section className="hero-im" aria-labelledby="hero-title">
      <div className="hero-im__media">
        <Image
          src="/images/hero-reading.jpg"
          alt="Un livre ouvert, lu dans la lumière chaude de la fin d'après-midi."
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="hero-im__scrim" aria-hidden="true" />

      <div className="hero-im__inner container">
        <div className="hero-im__text reveal">
          <span className="script hero-im__script">Stay Focus</span>
          <h1 id="hero-title">
            Vacances en livres. <em>L&apos;événement de l&apos;été.</em>
          </h1>
          <p className="hero-im__deck">
            Trente auteurs, un palais qui s&apos;ouvre au public, une journée à passer
            avec les livres.
          </p>
          <p className="hero-im__facts">
            <b>Sam. 15 août 2026</b> · Palais Municipal, Delmas · 9h00 – 18h30
          </p>
          <div className="hero-im__cta">
            <a className="btn btn--cta" href="#reserver">
              Réserver ma place · 500 HTG{" "}
              <span className="arw" aria-hidden="true">
                →
              </span>
            </a>
            <span className="hero-im__free">
              <b>Gratuit</b> pour vos enfants jusqu&apos;à 14 ans.
            </span>
          </div>
        </div>

        <aside className="hero-card reveal" aria-label="Le 15 août, en bref">
          <p className="hero-card__date">15 août 2026</p>
          <p className="hero-card__sub">Samedi · Palais Municipal de Delmas</p>
          <ol className="tl">
            {TIMELINE.map(([time, label], i) => (
              <li key={time} style={{ ["--i"]: i } as React.CSSProperties}>
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
