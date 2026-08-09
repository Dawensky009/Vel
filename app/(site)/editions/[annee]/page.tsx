import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EditionHeader from "@/components/EditionHeader";
import Gallery from "@/components/Gallery";
import EditionMedia from "@/components/EditionMedia";
import Programme from "@/components/Programme";
import FeatureBand from "@/components/FeatureBand";
import Billetterie from "@/components/Billetterie";
import Infos from "@/components/Infos";
import Faq from "@/components/Faq";
import PrendrePart from "@/components/PrendrePart";
import BookCard from "@/components/BookCard";
import ScrollProgress from "@/components/ScrollProgress";
import EditionDots from "@/components/EditionDots";
import { getEdition, getEditions, getLivres } from "@/lib/content";

export function generateStaticParams() {
  return getEditions().map((e) => ({ annee: e.annee }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ annee: string }>;
}): Promise<Metadata> {
  const { annee } = await params;
  const e = getEdition(annee);
  if (!e) return { title: "Édition · Vacances en livres" };
  return {
    title: `${e.titre} ${e.annee} · ${e.tagline}`,
    description: e.resume,
  };
}

const CHAPTERS = [
  { id: "programme", label: "Programme" },
  { id: "auteurs", label: "Auteurs" },
  { id: "galerie", label: "Images" },
  { id: "video", label: "Vidéo" },
  { id: "tarifs", label: "Tarifs" },
  { id: "infos", label: "Infos" },
  { id: "faq", label: "FAQ" },
  { id: "participer", label: "Participer" },
];

export default async function EditionPage({
  params,
}: {
  params: Promise<{ annee: string }>;
}) {
  const { annee } = await params;
  const e = getEdition(annee);
  if (!e) notFound();

  return (
    <>
      <EditionHeader e={e} />
      {annee === "2026" ? (
        <>
          <ScrollProgress />
          <EditionDots items={CHAPTERS} />

          <Programme />

          <section
            className="section container"
            id="auteurs"
            aria-labelledby="ed-auteurs-title"
          >
            <div className="s-head reveal">
              <p className="s-lead">À découvrir sur place le 15 août</p>
              <h2 className="s-title" id="ed-auteurs-title">
                Les auteurs &amp; <em>leurs livres</em>
              </h2>
            </div>
            <div className="books-grid stagger reveal">
              {getLivres().map((l, i) => (
                <BookCard key={l.titre} livre={l} index={i} />
              ))}
            </div>
          </section>

          <div id="galerie" className="ed-anchor">
            <Gallery />
          </div>

          <div id="video" className="ed-anchor">
            <EditionMedia videos={e.videos} upcoming={e.statut === "a-venir"} />
          </div>

          <Billetterie />

          <FeatureBand />

          <Infos />

          <div id="faq" className="ed-anchor">
            <Faq />
          </div>

          <div id="participer" className="ed-anchor">
            <PrendrePart />
          </div>
        </>
      ) : (
        <section className="section container">
          <p className="prose reveal">{e.resume}</p>
        </section>
      )}
    </>
  );
}
