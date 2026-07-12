import Image from "next/image";
import Parallax from "./Parallax";

export default function FeatureBand() {
  return (
    <section className="band" aria-label="Gratuit pour les enfants de 14 ans et moins">
      <Parallax className="band__media parallax" speed={30}>
        <Image
          src="/images/child-dusk.jpg"
          alt="Un enfant lit un livre, en silhouette, dans la lumière dorée du soir."
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </Parallax>
      <div className="band__scrim" aria-hidden="true" />
      <div className="band__inner container reveal">
        <p className="band__lead">L&apos;été, en famille</p>
        <p className="band__q">
          Les enfants de 14 ans et moins entrent <em>gratuitement</em>.
        </p>
        <p className="band__sub">
          Une journée pensée pour les familles : venez avec vos enfants, repartez avec
          des livres.
        </p>
      </div>
    </section>
  );
}
