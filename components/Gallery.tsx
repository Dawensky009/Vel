import PhotoGallery, { type Photo } from "./PhotoGallery";

// Vraies photos de la conférence de presse de lancement (en attendant celles du
// 15 août). D'autres seront ajoutées au fil de l'édition.
const SHOTS: Photo[] = [
  { cls: "g1", src: "/images/evenement/cp-05-panel-large.jpg", alt: "L'organisation présente l'édition 2026 devant la presse." },
  { cls: "g2", src: "/images/evenement/cp-07-panel-micros.jpg", alt: "Le panel de la conférence de presse, micros en avant." },
  { cls: "g3", src: "/images/evenement/cp-10-tribune.jpg", alt: "Prise de parole à la tribune." },
  { cls: "g4", src: "/images/evenement/cp-02-stand-livres.jpg", alt: "Le stand et les ouvrages présentés." },
  { cls: "g5", src: "/images/evenement/cp-11-presentation.jpg", alt: "Présentation de l'édition 2026." },
  { cls: "g6", src: "/images/evenement/cp-03-livres.jpg", alt: "Une sélection de livres présentée au lancement." },
];

export default function Gallery() {
  return (
    <section className="section container" aria-labelledby="amb-title">
      <div className="s-head reveal">
        <p className="s-lead">La conférence de presse de lancement</p>
        <h2 className="s-title" id="amb-title">
          En <em>images</em>
        </h2>
      </div>
      <PhotoGallery photos={SHOTS} layout="mosaic" />
      <p className="gallery__cap">
        Les photos du 15 août viendront enrichir cette galerie. Cliquez pour agrandir.
      </p>
    </section>
  );
}
