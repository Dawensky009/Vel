import type { Metadata } from "next";
import Image from "next/image";
import { getOrganisation } from "@/lib/content";

export const metadata: Metadata = {
  title: "À propos · Vacances en livres",
  description:
    "L'Organisation Vacances en Livres œuvre à démocratiser l'accès à la lecture en Haïti. Découvrez l'organisation, ses valeurs et son équipe.",
};

export default function AProposPage() {
  const org = getOrganisation();
  // Masqué tant que l'équipe n'est pas confirmée ; réapparaît dès qu'un membre
  // a un vrai nom ou une photo.
  const staffReady = org.staff.some(
    (m) => Boolean(m.photo) || (m.nom.trim() !== "" && m.nom.trim() !== "À confirmer")
  );

  return (
    <>
      <section className="section container page-top" aria-labelledby="about-title">
        <div className="s-head reveal">
          <p className="s-lead">L&apos;organisation</p>
          <h1 className="s-title" id="about-title">
            À <em>propos</em>
          </h1>
        </div>
        <div className="about reveal">
          <p className="about__mission">{org.mission}</p>
          {org.paragraphs.length ? (
            <div className="prose">
              {org.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? "prose__lead" : undefined}>
                  {p}
                </p>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="section container" aria-labelledby="valeurs-title">
        <div className="s-head reveal">
          <p className="s-lead">Ce qui nous guide</p>
          <h2 className="s-title" id="valeurs-title">
            Nos <em>valeurs</em>
          </h2>
        </div>
        <ul className="valeurs stagger reveal">
          {org.valeurs.map((v, i) => (
            <li key={v.titre} className="valeur" style={{ ["--i"]: i } as React.CSSProperties}>
              <h3>{v.titre}</h3>
              <p>{v.texte}</p>
            </li>
          ))}
        </ul>
      </section>

      {staffReady ? (
        <section className="section container" aria-labelledby="staff-title">
          <div className="s-head reveal">
            <p className="s-lead">Celles et ceux qui la portent</p>
            <h2 className="s-title" id="staff-title">
              Le <em>staff</em>
            </h2>
          </div>
          <ul className="staff stagger reveal">
            {org.staff.map((m, i) => (
              <li
                key={m.role}
                className="staff__member"
                style={{ ["--i"]: i } as React.CSSProperties}
              >
                <div className="staff__avatar" role="img" aria-label={`${m.nom}, ${m.role}`}>
                  {m.photo ? (
                    <Image src={m.photo} alt="" fill sizes="140px" style={{ objectFit: "cover" }} />
                  ) : (
                    <span aria-hidden="true">photo à venir</span>
                  )}
                </div>
                <p className="staff__name">{m.nom}</p>
                <p className="staff__role">{m.role}</p>
              </li>
            ))}
          </ul>
          <p className="staff__cap">
            Les noms et portraits de l&apos;équipe seront ajoutés à mesure des
            confirmations.
          </p>
        </section>
      ) : null}

      <section className="section container">
        <p className="about__cta reveal">
          Une question, un partenariat ?{" "}
          <a href="mailto:contact@vacancesenlivres.org">
            Écrivez-nous à contact@vacancesenlivres.org
          </a>
          .
        </p>
      </section>
    </>
  );
}
