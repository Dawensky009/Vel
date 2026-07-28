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
            <tr>
              <td className="tk-offer">
                Groupes scolaires, dès 10 enfants
                <small>Visite guidée organisée avec l&apos;organisation.</small>
              </td>
              <td className="tk-price">Sur demande</td>
            </tr>
          </tbody>
        </table>
        <div className="pay reveal">
          <h3>Billets en vente sur place</h3>
          <p>
            Les billets s&apos;achètent <strong>directement sur place</strong>, le jour de
            l&apos;événement. Les points de vente seront communiqués prochainement.
          </p>
          <p className="pay__soon">
            Une question sur les tarifs ou les groupes scolaires ? Écrivez-nous à{" "}
            <a href="mailto:contact@vacancesenlivres.org">contact@vacancesenlivres.org</a> ou
            appelez le +509 5817-8138.
          </p>
        </div>
      </div>
    </section>
  );
}
