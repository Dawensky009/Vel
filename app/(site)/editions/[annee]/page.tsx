import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EditionHeader from "@/components/EditionHeader";
import Gallery from "@/components/Gallery";
import EditionMedia from "@/components/EditionMedia";
import Programme from "@/components/Programme";
import FeatureBand from "@/components/FeatureBand";
import Billetterie from "@/components/Billetterie";
import Faq from "@/components/Faq";
import PrendrePart from "@/components/PrendrePart";
import AuthorsCatalog from "@/components/AuthorsCatalog";
import LivresEnVente from "@/components/LivresEnVente";
import ScrollProgress from "@/components/ScrollProgress";
import EditionDots from "@/components/EditionDots";
import { getEdition, getEditions, getLivres, getLivresEnVente } from "@/lib/content";

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

// « En vente » n'entre dans le sommaire que si la section existe : une puce
// pointant vers une ancre absente serait un lien mort.
const CHAPTERS = [
  { id: "programme", label: "Programme" },
  { id: "auteurs", label: "Auteurs" },
  ...(getLivresEnVente().length ? [{ id: "en-vente", label: "En vente" }] : []),
  { id: "galerie", label: "Images" },
  { id: "video", label: "Vidéo" },
  { id: "tarifs", label: "Tarifs" },
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

          <AuthorsCatalog livres={getLivres()} />

          <LivresEnVente livres={getLivresEnVente()} />

          <div id="galerie" className="ed-anchor">
            <Gallery />
          </div>

          <div id="video" className="ed-anchor">
            <EditionMedia videos={e.videos} upcoming={e.statut === "a-venir"} />
          </div>

          <Billetterie />

          <FeatureBand />

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
