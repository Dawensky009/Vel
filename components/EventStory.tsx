import Image from "next/image";
import Link from "next/link";

export default function EventStory() {
  return (
    <section className="section container" id="evenement" aria-labelledby="ev-title">
      <div className="s-head reveal">
        <p className="s-lead">Le projet</p>
        <h2 className="s-title" id="ev-title">
          L&apos;initiative.
        </h2>
      </div>
      <div className="ev2">
        <div className="prose reveal">
          <p className="prose__lead">
            <em>Vacances en livres</em> n&apos;est pas un salon de plus. C&apos;est une
            initiative durable pour rapprocher le public haïtien du livre, édition après
            édition. La coalition qui la porte rassemble libraires, éditeurs,
            bibliothèques associatives et enseignants autour d&apos;une conviction simple :
            la lecture n&apos;est pas un luxe.
          </p>
          <p>
            La première édition ouvre le 15 août 2026, au Palais Municipal de Delmas :
            trente auteurs signent, discutent, écoutent ; les enfants ont leur espace, les
            familles repartent avec des livres qu&apos;elles n&apos;auraient pas achetés
            seules. Ce n&apos;est qu&apos;un début : d&apos;autres rendez-vous suivront.
          </p>
          <p className="ev2__more">
            <Link href="/editions">Voir toutes les éditions →</Link>
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
