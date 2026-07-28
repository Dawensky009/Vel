const EMAIL = "mailto:contact@vacancesenlivres.org";

export default function Faq() {
  return (
    <section className="section container" aria-labelledby="faq-title">
      <div className="s-head reveal">
        <p className="s-lead">Ce qu&apos;on nous demande</p>
        <h2 className="s-title" id="faq-title">
          Questions <em>fréquentes</em>
        </h2>
      </div>
      <div className="faq reveal">
        <details>
          <summary>Les enfants payent-ils l&apos;entrée ?</summary>
          <div className="faq__a">
            <p>
              Non. L&apos;entrée est gratuite pour les enfants de 14 ans et moins,
              accompagnés d&apos;un adulte muni d&apos;un billet. Il n&apos;y a pas de
              limite de nombre par famille.
            </p>
          </div>
        </details>
        <details>
          <summary>Comment acheter mon billet ?</summary>
          <div className="faq__a">
            <p>
              Les billets s&apos;achètent sur place, le jour de l&apos;événement, en
              gourdes ou en dollars (500 HTG par adulte). Les points de vente seront
              communiqués prochainement.
            </p>
          </div>
        </details>
        <details>
          <summary>Je viens avec un groupe scolaire, comment procéder ?</summary>
          <div className="faq__a">
            <p>
              À partir de 10 enfants, écrivez-nous à{" "}
              <a href={EMAIL}>contact@vacancesenlivres.org</a>. Nous organisons une visite
              guidée et un accueil adapté.
            </p>
          </div>
        </details>
        <details>
          <summary>Je suis journaliste ou blogueur, y a-t-il un accès presse ?</summary>
          <div className="faq__a">
            <p>
              Oui. Écrivez-nous à <a href={EMAIL}>contact@vacancesenlivres.org</a> pour
              recevoir votre accréditation presse avant l&apos;événement.
            </p>
          </div>
        </details>
        <details>
          <summary>Le lieu est-il accessible aux personnes à mobilité réduite ?</summary>
          <div className="faq__a">
            <p>
              Le Palais Municipal de Delmas est de plain-pied et accessible. Un membre
              de l&apos;équipe peut vous accompagner : signalez-le-nous à l&apos;avance.
            </p>
          </div>
        </details>
        <details>
          <summary>Il pleut le 15 août, que se passe-t-il ?</summary>
          <div className="faq__a">
            <p>
              L&apos;événement se tient à l&apos;intérieur du Palais Municipal. Il est
              maintenu par tous les temps.
            </p>
          </div>
        </details>
      </div>
    </section>
  );
}
