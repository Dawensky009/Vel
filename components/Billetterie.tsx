// Deux formules, sept points de vente. Les données vivent ici pour que le
// compteur « N points de vente » ne puisse pas dériver de la liste.
const FORMULES = [
  { nom: "Individuel adulte", prix: "500 HTG" },
  {
    nom: "Enfants de 14 ans et moins",
    prix: "Gratuit",
    libre: true,
    condition: "Accompagnés d'un adulte muni d'un billet. Sans limite par famille.",
  },
];

const POINTS_DE_VENTE = [
  { nom: "Kinam Hôtel", adresse: "À proximité du Commissariat de Pétion-Ville" },
  { nom: "Entre-Nous Restaurant", adresse: "1, Delmas 79" },
  { nom: "Espas CorrectPro", adresse: "7, Catalpa 1, Delmas 75" },
  { nom: "La Lorraine", adresse: "Café 36" },
  { nom: "Télévision Nationale d'Haïti" },
  { nom: "El Rancho" },
  { nom: "Palais Municipal de Delmas" },
];

export default function Billetterie() {
  return (
    <section className="section container" id="tarifs" aria-labelledby="bill-title">
      <div className="s-head reveal">
        <p className="s-lead">Un tarif juste, pensé pour les familles</p>
        <h2 className="s-title" id="bill-title">
          Tarifs
        </h2>
      </div>

      {/* Liste de définitions : le nom de la formule reste annoncé avant son
          tarif à la lecture vocale ; seule la présentation remonte le prix. */}
      <dl className="fares stagger reveal">
        {FORMULES.map((f, i) => (
          <div className="fare" key={f.nom} style={{ ["--i"]: i } as React.CSSProperties}>
            <dt className="fare__name">{f.nom}</dt>
            <dd className={`fare__price${f.libre ? " fare__price--libre" : ""}`}>{f.prix}</dd>
            {f.condition ? <dd className="fare__cond">{f.condition}</dd> : null}
          </div>
        ))}
      </dl>

      <p className="fares__validity reveal">
        Entrée valable toute la journée du 15 août, matinée et après-midi.
      </p>

      <div className="pdv">
        <div className="pdv__head reveal">
          <h3 className="pdv__title">Où acheter vos billets</h3>
          <p className="pdv__count">{POINTS_DE_VENTE.length} points de vente</p>
        </div>
        <ul className="pdv__list stagger reveal">
          {POINTS_DE_VENTE.map((p, i) => (
            <li key={p.nom} style={{ ["--i"]: i } as React.CSSProperties}>
              <span className="pdv__nom">{p.nom}</span>
              {p.adresse ? <span className="pdv__adresse">{p.adresse}</span> : null}
            </li>
          ))}
        </ul>
        <p className="pdv__note reveal">
          Une question ? Écrivez-nous à{" "}
          <a href="mailto:contact@vacancesenlivres.org">contact@vacancesenlivres.org</a> ou sur
          WhatsApp au{" "}
          <a href="https://wa.me/50947504572" target="_blank" rel="noopener noreferrer">
            +509 4750-4572
          </a>
          .
        </p>
      </div>
    </section>
  );
}
