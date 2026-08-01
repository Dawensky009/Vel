const ITEMS = [
  "Auteurs en séance de signature",
  "Livres en vente",
  "Maisons d'édition",
  "Invités d'honneur",
  "Artistes confirmés",
  "DJ",
  "Partenaires",
  "Sponsors",
];

export default function HomeHighlights() {
  return (
    <section className="section container" aria-labelledby="hl-title">
      <div className="s-head reveal">
        <p className="s-lead">Le 15 août, au Palais Municipal de Delmas</p>
        <h2 className="s-title" id="hl-title">
          Au <em>rendez-vous</em>
        </h2>
      </div>
      <ul className="highlights stagger reveal">
        {ITEMS.map((it, i) => (
          <li key={it} className="highlight" style={{ ["--i"]: i } as React.CSSProperties}>
            {it}
          </li>
        ))}
      </ul>
    </section>
  );
}
