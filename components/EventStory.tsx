import Image from "next/image";

export default function EventStory() {
  return (
    <section className="section container" id="evenement" aria-labelledby="ev-title">
      <div className="s-head reveal">
        <p className="s-lead">La coalition</p>
        <h2 className="s-title" id="ev-title">
          L&apos;événement.
        </h2>
      </div>
      <div className="ev2">
        <div className="prose reveal">
          <p className="prose__lead">
            <em>Vacances en livres</em> n&apos;est pas un salon de plus. C&apos;est une
            invitation à ouvrir un livre en public, à s&apos;asseoir près d&apos;un
            inconnu, à demander à un enfant ce qu&apos;il lit. La coalition qui porte le
            projet rassemble libraires, éditeurs, bibliothèques associatives et
            enseignants qui partagent une même conviction : la lecture n&apos;est pas un
            luxe.
          </p>
          <p>
            Le 15 août, le Palais Municipal de Delmas devient une bibliothèque de
            quartier à ciel ouvert. Trente auteurs signent, discutent, écoutent. Les
            enfants ont leur espace, les familles rentrent avec des livres qu&apos;elles
            n&apos;auraient pas achetés seules, les libraires trouvent leur public.
          </p>
          <p className="attrib">La coalition organisatrice</p>
        </div>
        <figure className="figbox figbox--tall zoom reveal reveal-img">
          <Image
            src="/images/library-corner.jpg"
            alt="Un coin de bibliothèque baigné de lumière naturelle : étagères de livres, fenêtre et plantes."
            fill
            sizes="(min-width: 880px) 42vw, 92vw"
            style={{ objectFit: "cover" }}
          />
          <figcaption>Une bibliothèque de quartier, lumière de fin d&apos;après-midi.</figcaption>
        </figure>
      </div>
    </section>
  );
}
