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
          src="/images/evenement/cp-03-livres.jpg"
          alt="Une sélection de livres présentée au lancement de l'édition 2026."
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="hero-im__scrim" aria-hidden="true" />

      <div className="hero-im__inner container">
        <div className="hero-im__text">
          <span
            className="script hero-im__script hero-rise"
            style={{ ["--i"]: 0 } as React.CSSProperties}
          >
            L&apos;été, en famille
          </span>
          <h1
            id="hero-title"
            className="hero-rise"
            style={{ ["--i"]: 1 } as React.CSSProperties}
          >
            Vacances en livres. <em>Le rendez-vous du livre.</em>
          </h1>
          <p
            className="hero-im__deck hero-rise"
            style={{ ["--i"]: 2 } as React.CSSProperties}
          >
            La première édition ouvre le 15 août 2026 : trente auteurs, un palais qui
            s&apos;ouvre au public, une journée entière à passer avec les livres.
          </p>
          <p
            className="hero-im__facts hero-rise"
            style={{ ["--i"]: 3 } as React.CSSProperties}
          >
            <b>Sam. 15 août 2026</b> · Palais Municipal, Delmas · 9h00 – 18h30
          </p>
          <div
            className="hero-im__cta hero-rise"
            style={{ ["--i"]: 4 } as React.CSSProperties}
          >
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

        <aside
          className="hero-card hero-rise"
          style={{ ["--i"]: 1 } as React.CSSProperties}
          aria-label="Le 15 août, en bref"
        >
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
