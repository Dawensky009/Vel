import Image from "next/image";
import type { Personne } from "@/lib/types";

function initials(nom: string) {
  return nom
    .split(/\s+/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function GuestOfHonour({ guests }: { guests: Personne[] }) {
  if (!guests.length) return null;
  return (
    <section className="section container" aria-labelledby="guest-title">
      <div className="s-head reveal">
        <p className="s-lead">Ils honorent la première édition</p>
        <h2 className="s-title" id="guest-title">
          Invités <em>d&apos;honneur</em>
        </h2>
      </div>
      <ul className="guests stagger reveal">
        {guests.map((g, i) => (
          <li
            key={g.nom}
            className="guest-card"
            style={{ ["--i"]: i } as React.CSSProperties}
          >
            <div className="guest-card__photo">
              {g.photo ? (
                <Image src={g.photo} alt={g.nom} fill sizes="96px" style={{ objectFit: "cover" }} />
              ) : (
                <span className="guest-card__initials" aria-hidden="true">
                  {initials(g.nom)}
                </span>
              )}
            </div>
            <div className="guest-card__body">
              <p className="guest-card__name">{g.nom}</p>
              {g.role ? <p className="guest-card__role">{g.role}</p> : null}
              {g.bio ? <p className="guest-card__bio">{g.bio}</p> : null}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
