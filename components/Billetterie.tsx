export default function Billetterie() {
  return (
    <section className="section container" id="tarifs" aria-labelledby="bill-title">
      <div className="s-head reveal">
        <p className="s-lead">Un tarif juste, pensé pour les familles</p>
        <h2 className="s-title" id="bill-title">
          Tarifs
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
          </tbody>
        </table>
        <div className="pay reveal">
          <h3>Nos 7 points de vente</h3>
          <p>Procurez-vous vos billets dans l&apos;un de nos points de vente :</p>
          <ol className="pdv">
            <li>
              Kinam Hôtel <small>À proximité du Commissariat de Pétion-Ville</small>
            </li>
            <li>
              Entre-Nous Restaurant <small>1, Delmas 79</small>
            </li>
            <li>
              Espas CorrectPro <small>7, Catalpa 1, Delmas 75</small>
            </li>
            <li>
              La Lorraine <small>Café 36</small>
            </li>
            <li>Télévision Nationale d&apos;Haïti</li>
            <li>El Rancho</li>
            <li>Palais Municipal de Delmas</li>
          </ol>
          <p className="pay__soon">
            Une question ? Écrivez-nous à{" "}
            <a href="mailto:contact@vacancesenlivres.org">contact@vacancesenlivres.org</a> ou
            sur WhatsApp au +509 4750-4572.
          </p>
        </div>
      </div>
    </section>
  );
}
