import Link from "next/link";
import PhotoGallery, { type Photo } from "./PhotoGallery";

// Six real photos from the launch press conference, in the editorial mosaic.
const SHOTS: Photo[] = [
  { cls: "g1", src: "/images/evenement/cp-05-panel-large.jpg", alt: "La coalition présente l'édition 2026 devant la presse." },
  { cls: "g2", src: "/images/evenement/cp-04-coalition.jpg", alt: "Les membres de la coalition Vacances en livres réunis." },
  { cls: "g3", src: "/images/evenement/cp-08-intervention.jpg", alt: "Une intervention pendant la conférence de presse." },
  { cls: "g4", src: "/images/evenement/cp-01-banniere.jpg", alt: "La bannière officielle : trente auteurs en signature le 15 août." },
  { cls: "g5", src: "/images/evenement/cp-09-prise-parole.jpg", alt: "Un intervenant au micro devant les journalistes." },
  { cls: "g6", src: "/images/evenement/cp-12-presse.jpg", alt: "Journalistes et caméras couvrant l'annonce." },
];

export default function HomeReel() {
  return (
    <section className="section container" aria-labelledby="reel-title">
      <div className="s-head reveal">
        <p className="s-lead">Déjà une réalité</p>
        <h2 className="s-title" id="reel-title">
          La conférence de <em>presse</em>.
        </h2>
      </div>
      <PhotoGallery photos={SHOTS} layout="mosaic" />
      <p className="gallery__cap reveal">
        L&apos;édition 2026 a été présentée à la presse au Palais Municipal de Delmas.{" "}
        <Link href="/agenda">Voir l&apos;agenda →</Link>
      </p>
    </section>
  );
}
