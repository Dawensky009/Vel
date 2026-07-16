import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EditionHeader from "@/components/EditionHeader";
import Gallery from "@/components/Gallery";
import EditionMedia from "@/components/EditionMedia";
import Programme from "@/components/Programme";
import Sponsors from "@/components/Sponsors";
import FeatureBand from "@/components/FeatureBand";
import Billetterie from "@/components/Billetterie";
import Infos from "@/components/Infos";
import Faq from "@/components/Faq";
import PrendrePart from "@/components/PrendrePart";
import { getEdition, getEditions } from "@/lib/content";

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
          <Gallery />
          <EditionMedia videos={e.videos} upcoming={e.statut === "a-venir"} />
          <Programme />
          <Sponsors />
          <FeatureBand />
          <Billetterie />
          <Infos />
          <Faq />
          <PrendrePart />
        </>
      ) : (
        <section className="section container">
          <p className="prose reveal">{e.resume}</p>
        </section>
      )}
    </>
  );
}
