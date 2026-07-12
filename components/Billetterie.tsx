const WA_RESERVE =
  "https://wa.me/50955792024?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20pour%20Vacances%20en%20livres%202026.";

export default function Billetterie() {
  return (
    <section className="section container" id="reserver" aria-labelledby="bill-title">
      <div className="s-head reveal">
        <p className="s-lead">Un tarif juste, pensé pour les familles</p>
        <h2 className="s-title" id="bill-title">
          Billetterie.
        </h2>
      </div>
      <div className="bill__grid">
        <table className="tickets reveal">
          <caption>
            Entrée valable toute la journée du 15 août, matinée et après-midi.
          </caption>
          <thead>
            <tr>
              <th scope="col">Formule</th>
              <th scope="col">Tarif</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tk-offer">
                Individuel adulte
                <small>Accès à toute la journée, matinée et après-midi.</small>
              </td>
              <td className="tk-price">500 HTG</td>
            </tr>
            <tr>
              <td className="tk-offer">
                Enfants de 14 ans et moins
                <small>
                  Accompagnés d&apos;un adulte muni d&apos;un billet. Sans limite par
                  famille.
                </small>
              </td>
              <td className="tk-price">
                <span className="badge-free">Gratuit</span>
              </td>
            </tr>
            <tr>
              <td className="tk-offer">
                Groupes scolaires, dès 10 enfants
                <small>Visite guidée organisée avec la coalition.</small>
              </td>
              <td className="tk-price">Sur demande</td>
            </tr>
          </tbody>
        </table>
        <div className="pay reveal">
          <h3>Modes de paiement</h3>
          <p>
            Deux options : <strong>MonCash</strong> vers le numéro Digicel de la
            coalition (+509 5579-2024), puis envoi de la capture sur WhatsApp pour
            valider la réservation. Ou <strong>paiement sur place</strong> le jour J, en
            gourdes ou en dollars.
          </p>
          <p className="pay__soon">
            La réservation en ligne ouvre le 20 juillet. Chaque inscription est
            confirmée sous 24 heures.
          </p>
          <a className="btn btn--cta btn--block" href={WA_RESERVE}>
            Réserver ma place{" "}
            <span className="arw" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
