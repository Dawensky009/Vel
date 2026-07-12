import Link from "next/link";
import type { Communique } from "@/lib/types";
import { formatDate } from "@/lib/content";

export default function CommuniqueFeature({ c }: { c: Communique }) {
  return (
    <section className="section container" aria-labelledby="comm-title">
      <div className="s-head reveal">
        <p className="s-lead">À la une</p>
        <h2 className="s-title" id="comm-title">
          Communiqué <em>officiel</em>.
        </h2>
      </div>
      <Link href={`/actualites/${c.slug}`} className="feature reveal">
        <p className="feature__meta">
          {c.categorie ? <span className="feature__cat">{c.categorie}</span> : null}
          <time dateTime={c.date}>{formatDate(c.date)}</time>
        </p>
        <h3 className="feature__title">{c.titre}</h3>
        <p className="feature__excerpt">{c.extrait}</p>
        <span className="feature__more">
          Lire le communiqué <span aria-hidden="true">→</span>
        </span>
      </Link>
    </section>
  );
}
