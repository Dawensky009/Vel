const WA_RESERVE =
  "https://wa.me/50955792024?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20pour%20Vacances%20en%20livres%202026.";
const WA_DOSSIER =
  "https://wa.me/50955792024?text=Bonjour%2C%20nous%20souhaitons%20recevoir%20le%20dossier%20partenaires%20de%20Vacances%20en%20livres%202026.";

export default function PrendrePart() {
  return (
    <section className="section container" aria-labelledby="cta-title">
      <div className="s-head reveal">
        <p className="s-lead">Faire vivre l&apos;édition 2026</p>
        <h2 className="s-title" id="cta-title">
          Prendre part.
        </h2>
      </div>
      <div className="callto__panel reveal">
        <div className="callto__grid">
          <div className="callto__col">
            <h3>Vous venez</h3>
            <p>
              Réservez votre place : 500 HTG l&apos;adulte, gratuit pour les enfants de
              14 ans et moins.
            </p>
            <a className="btn btn--cta" href={WA_RESERVE}>
              Réserver ma place{" "}
              <span className="arw" aria-hidden="true">
                →
              </span>
            </a>
          </div>
          <div className="callto__col">
            <h3>Vous soutenez</h3>
            <p>
              Associez votre nom à l&apos;événement de l&apos;été et à la démocratisation
              de la lecture en Haïti.
            </p>
            <a className="btn btn--ghost-invert" href={WA_DOSSIER}>
              Recevoir le dossier{" "}
              <span className="arw" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
