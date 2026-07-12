const WHATSAPP = "https://wa.me/50955792024";

export default function Faq() {
  return (
    <section className="section container" aria-labelledby="faq-title">
      <div className="s-head reveal">
        <p className="s-lead">Ce qu&apos;on nous demande</p>
        <h2 className="s-title" id="faq-title">
          Questions <em>fréquentes</em>.
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
          <summary>Comment payer avec MonCash ?</summary>
          <div className="faq__a">
            <p>
              Envoyez 500 HTG par adulte au numéro Digicel de la coalition, +509
              5579-2024, puis transmettez la capture de confirmation sur WhatsApp. Nous
              validons la réservation sous 24 heures.
            </p>
          </div>
        </details>
        <details>
          <summary>Puis-je payer sur place le jour J ?</summary>
          <div className="faq__a">
            <p>
              Oui. Le paiement à l&apos;entrée est possible le 15 août, en gourdes ou en
              dollars. Réserver en ligne à l&apos;avance reste conseillé pour éviter
              l&apos;attente.
            </p>
          </div>
        </details>
        <details>
          <summary>Je viens avec un groupe scolaire, comment procéder ?</summary>
          <div className="faq__a">
            <p>
              À partir de 10 enfants, écrivez-nous sur{" "}
              <a href={WHATSAPP}>WhatsApp</a>. Nous organisons une visite guidée et un
              accueil adapté.
            </p>
          </div>
        </details>
        <details>
          <summary>Je suis journaliste ou blogueur, y a-t-il un accès presse ?</summary>
          <div className="faq__a">
            <p>
              Oui. Contactez la coalition sur <a href={WHATSAPP}>WhatsApp</a> pour
              recevoir votre accréditation presse avant l&apos;événement.
            </p>
          </div>
        </details>
        <details>
          <summary>Le site est-il accessible aux personnes à mobilité réduite ?</summary>
          <div className="faq__a">
            <p>
              Le Palais Municipal de Delmas est de plain-pied et accessible. Un membre
              de l&apos;équipe peut vous accompagner : signalez-le-nous à l&apos;avance.
            </p>
          </div>
        </details>
        <details>
          <summary>Puis-je transférer mon billet ?</summary>
          <div className="faq__a">
            <p>
              Votre réservation est nominative mais transférable à un proche. Prévenez-
              nous sur WhatsApp pour mettre à jour le nom.
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
