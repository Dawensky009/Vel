import Link from "next/link";
import type { Communique } from "@/lib/types";
import { formatDate } from "@/lib/content";

export default function CommuniqueCard({ c, i = 0 }: { c: Communique; i?: number }) {
  return (
    <Link
      href={`/actualites/${c.slug}`}
      className="ccard"
      style={{ ["--i"]: i } as React.CSSProperties}
    >
      <p className="ccard__meta">
        {c.categorie ? <span className="ccard__cat">{c.categorie}</span> : null}
        <time dateTime={c.date}>{formatDate(c.date)}</time>
      </p>
      <h3 className="ccard__title">{c.titre}</h3>
      <p className="ccard__excerpt">{c.extrait}</p>
      <span className="ccard__more">
        Lire le communiqué{" "}
        <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
