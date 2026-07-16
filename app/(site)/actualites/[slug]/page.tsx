import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import MarkdownBody from "@/components/MarkdownBody";
import { getCommunique, getCommuniques, formatDate } from "@/lib/content";

export function generateStaticParams() {
  return getCommuniques().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCommunique(slug);
  if (!c) return { title: "Communiqué · Vacances en livres" };
  return { title: `${c.titre} · Vacances en livres`, description: c.extrait };
}

export default async function CommuniquePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCommunique(slug);
  if (!c) notFound();

  return (
    <article className="section container article page-top">
      <p className="article__back reveal">
        <Link href="/actualites">
          <span aria-hidden="true">←</span> Toutes les actualités
        </Link>
      </p>
      <header className="article__head reveal">
        <p className="article__meta">
          {c.categorie ? <span className="article__cat">{c.categorie}</span> : null}
          <time dateTime={c.date}>{formatDate(c.date)}</time>
        </p>
        <h1 className="article__title">{c.titre}</h1>
        {c.extrait ? <p className="article__lead">{c.extrait}</p> : null}
      </header>
      <MarkdownBody html={c.corpsHtml} />
    </article>
  );
}
