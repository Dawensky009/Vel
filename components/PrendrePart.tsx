export default function PrendrePart() {
  return (
    <section className="section container" aria-labelledby="cta-title">
      <div className="s-head reveal">
        <p className="s-lead">Faire vivre l&apos;édition 2026</p>
        <h2 className="s-title" id="cta-title">
          Prendre part
        </h2>
      </div>
      <div className="callto__panel reveal">
        <div className="callto__grid">
          <div className="callto__col">
            <h3>Vous venez</h3>
            <p>
              Rendez-vous le samedi 15 août 2026 au Palais Municipal de Delmas. Entrée
              500 HTG, gratuit pour les enfants de 14 ans et moins ; billets en vente sur
              place.
            </p>
            <a className="btn btn--cta" href="#programme">
              Voir le programme{" "}
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
            <a className="btn btn--ghost-invert" href="mailto:contact@vacancesenlivres.org">
              Devenir partenaire{" "}
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
