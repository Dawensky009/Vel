import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import VideoEmbed from "@/components/VideoEmbed";
import { getActivite, getActivites, formatDate } from "@/lib/content";

export function generateStaticParams() {
  return getActivites().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getActivite(slug);
  if (!a) return { title: "Activité — Vacances en livres" };
  return { title: `${a.titre} — Vacances en livres`, description: a.resume };
}

export default async function ActivitePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = getActivite(slug);
  if (!a) notFound();
  const upcoming = a.statut === "a-venir";

  return (
    <article className="section container page-top act">
      <div className="act__text">
        <p className="article__back reveal">
          <Link href="/agenda">
            <span aria-hidden="true">←</span> Retour à l&apos;agenda
          </Link>
        </p>
        <header className="article__head reveal">
          <p className="article__meta">
            <span className="article__cat">{a.type}</span>
            <time dateTime={a.date}>{formatDate(a.date)}</time>
            {a.lieu ? <span>· {a.lieu}</span> : null}
            {upcoming ? <span className="tl-soon">À venir</span> : null}
          </p>
          <h1 className="article__title">{a.titre}</h1>
          <p className="article__lead">{a.resume}</p>
        </header>
        {a.paragraphs?.length ? (
          <div className="rich reveal">
            {a.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        ) : null}
      </div>

      {a.videos?.length ? (
        <section className="act__section" aria-labelledby="act-videos">
          <h2 className="act__h2 reveal" id="act-videos">
            En vidéo
          </h2>
          <div className="videos">
            {a.videos.map((v, i) => (
              <VideoEmbed key={i} video={v} />
            ))}
          </div>
        </section>
      ) : null}

      {a.images?.length ? (
        <section className="act__section" aria-labelledby="act-images">
          <h2 className="act__h2 reveal" id="act-images">
            En images
          </h2>
          <div className="act__media-grid stagger reveal">
            {a.images.map((src, i) => (
              <figure key={i} className="zoom" style={{ ["--i"]: i } as React.CSSProperties}>
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(min-width: 720px) 33vw, 100vw"
                  style={{ objectFit: "cover" }}
                />
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      {a.edition ? (
        <p className="act__cta reveal">
          <Link href={`/editions/${a.edition}`}>
            Voir l&apos;édition {a.edition} <span aria-hidden="true">→</span>
          </Link>
        </p>
      ) : null}
    </article>
  );
}
