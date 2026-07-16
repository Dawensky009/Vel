import Link from "next/link";
import PhotoGallery, { type Photo } from "./PhotoGallery";

// Four real photos from the launch press conference, as a tidy cluster.
const SHOTS: Photo[] = [
  { src: "/images/evenement/cp-05-panel-large.jpg", alt: "La coalition présente l'édition 2026 devant la presse." },
  { src: "/images/evenement/cp-04-coalition.jpg", alt: "Les membres de la coalition Vacances en livres réunis." },
  { src: "/images/evenement/cp-09-prise-parole.jpg", alt: "Un intervenant au micro devant les journalistes." },
  { src: "/images/evenement/cp-12-presse.jpg", alt: "Journalistes et caméras couvrant l'annonce." },
];

export default function HomeReel() {
  return (
    <section className="section container" aria-labelledby="reel-title">
      <div className="pressconf">
        <div className="pressconf__text reveal">
          <p className="s-lead">Déjà une réalité</p>
          <h2 className="s-title" id="reel-title">
            La conférence de <em>presse</em>.
          </h2>
          <p className="prose">
            L&apos;édition 2026 a été officiellement présentée à la presse au Palais
            Municipal de Delmas : date, lieu, tarifs et premières annonces, devant les
            journalistes et les partenaires de la coalition.
          </p>
          <p className="pressconf__link">
            <Link href="/agenda">Voir l&apos;agenda et toutes les photos →</Link>
          </p>
        </div>
        <div className="pressconf__media reveal">
          <PhotoGallery photos={SHOTS} layout="grid" />
        </div>
      </div>
    </section>
  );
}
