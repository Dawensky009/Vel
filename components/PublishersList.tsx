import Image from "next/image";
import type { MaisonEdition } from "@/lib/types";

export default function PublishersList({ items }: { items: MaisonEdition[] }) {
  if (!items.length) return null;
  return (
    <section className="section container" id="editeurs" aria-labelledby="pub-title">
      <div className="s-head reveal">
        <p className="s-lead">Elles font vivre l&apos;événement</p>
        <h2 className="s-title" id="pub-title">
          Maisons <em>d&apos;édition</em>.
        </h2>
      </div>
      <ul className="pubs stagger reveal">
        {items.map((p, i) => (
          <li key={p.slug} className="pub" style={{ ["--i"]: i } as React.CSSProperties}>
            {p.logo ? (
              <span className="pub__logo">
                <Image src={p.logo} alt={p.nom} fill sizes="180px" style={{ objectFit: "contain" }} />
              </span>
            ) : (
              <span className="pub__name">{p.nom}</span>
            )}
          </li>
        ))}
      </ul>
      <p className="pubs__cap">Liste en cours de confirmation avec la coalition.</p>
    </section>
  );
}
