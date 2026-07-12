import Image from "next/image";

const SHOTS = [
  { cls: "g1", src: "/images/book-blanket.jpg", alt: "Des mains tenant un livre ouvert sur un plaid chaud." },
  { cls: "g2", src: "/images/boy-reading.jpg", alt: "Un enfant suit du doigt les lignes d'un livre." },
  { cls: "g3", src: "/images/pages-cream.jpg", alt: "Les pages d'un livre ouvert en éventail, tons crème." },
  { cls: "g4", src: "/images/hand-book.jpg", alt: "Une main tenant un livre ouvert en plein air." },
  { cls: "g5", src: "/images/pages-bokeh.jpg", alt: "Gros plan sur les pages d'un livre, lumières en arrière-plan." },
  { cls: "g6", src: "/images/poetry.jpg", alt: "Un recueil de poésie ouvert entre les mains d'un lecteur." },
];

export default function Gallery() {
  return (
    <section className="section container" aria-labelledby="amb-title">
      <div className="s-head reveal">
        <p className="s-lead">Ce que sera la journée</p>
        <h2 className="s-title" id="amb-title">
          En <em>images</em>.
        </h2>
      </div>
      <div className="gallery stagger reveal">
        {SHOTS.map((s, i) => (
          <figure key={s.cls} className={`${s.cls} zoom`} style={{ ["--i"]: i } as React.CSSProperties}>
            <Image
              src={s.src}
              alt={s.alt}
              fill
              sizes="(min-width: 720px) 45vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </figure>
        ))}
      </div>
      <p className="gallery__cap">
        Images d&apos;ambiance — les vraies photos de l&apos;édition 2026 les
        remplaceront.
      </p>
    </section>
  );
}
