import Link from "next/link";
import HeroCarousel, { type Slide } from "./HeroCarousel";

// Real photos from the launch press conference (team photos will be added later).
const HERO_SLIDES: Slide[] = [
  { src: "/images/evenement/cp-03-livres.jpg", alt: "" },
  { src: "/images/evenement/cp-05-panel-large.jpg", alt: "" },
  { src: "/images/evenement/cp-08-intervention.jpg", alt: "" },
  { src: "/images/evenement/cp-04-equipe.jpg", alt: "" },
  { src: "/images/evenement/cp-09-prise-parole.jpg", alt: "" },
  { src: "/images/evenement/cp-06-panel.jpg", alt: "" },
];

const TIMELINE: [string, string][] = [
  ["8h00", "Montée du drapeau"],
  ["9h00", "Ouverture au public"],
  ["12h30", "Invités d'honneur & plaques"],
  ["17h – 20h", "Performances artistiques"],
];

export default function Hero() {
  return (
    <section className="hero-im" aria-labelledby="hero-title">
      <div className="hero-im__media">
        <HeroCarousel slides={HERO_SLIDES} />
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
            Vacances en livres{" "}
            <em>
              Le <span className="nowrap">rendez-vous</span> du livre
            </em>
          </h1>
          <p
            className="hero-im__deck hero-rise"
            style={{ ["--i"]: 2 } as React.CSSProperties}
          >
            La première édition ouvre le 15 août 2026 : 30 auteurs et plus, un palais qui
            s&apos;ouvre au public, une journée entière à passer avec les livres
          </p>
          <p
            className="hero-im__facts hero-rise"
            style={{ ["--i"]: 3 } as React.CSSProperties}
          >
            <b>Sam. 15 août 2026</b> · Palais Municipal, Delmas · 9h00 – 21h00
          </p>
          <div
            className="hero-im__cta hero-rise"
            style={{ ["--i"]: 4 } as React.CSSProperties}
          >
            <Link className="btn btn--cta" href="/agenda">
              Voir le programme{" "}
              <span className="arw" aria-hidden="true">
                →
              </span>
            </Link>
            <span className="hero-im__free">
              <b>500 HTG</b> · gratuit pour les enfants jusqu&apos;à 14 ans
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
