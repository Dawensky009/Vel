const OSM_SRC =
  "https://www.openstreetmap.org/export/embed.html?bbox=-72.3150%2C18.5350%2C-72.2900%2C18.5560&layer=mapnik&marker=18.5455%2C-72.3025";

export default function Infos() {
  return (
    <section className="section container" id="infos" aria-labelledby="inf-title">
      <div className="s-head reveal">
        <p className="s-lead">Où et comment nous rejoindre</p>
        <h2 className="s-title" id="inf-title">
          Infos <em>pratiques</em>.
        </h2>
      </div>
      <div className="infos__grid reveal">
        <div className="info-card">
          <h3>Lieu</h3>
          <p>
            Palais Municipal de Delmas
            <br />
            Delmas, Ouest, Haïti
          </p>
        </div>
        <div className="info-card">
          <h3>Date et horaires</h3>
          <p>
            Samedi 15 août 2026
            <br />
            de 9h00 à 18h30
          </p>
        </div>
        <div className="info-card">
          <h3>Contact</h3>
          <p>
            <a href="https://wa.me/50955792024">+509 5579-2024 (WhatsApp)</a>
            <br />
            <a href="tel:+50931215441">+509 3121-5441</a>
          </p>
        </div>
        <div className="info-card">
          <h3>Accès</h3>
          <p>À 15 minutes de Pétion-Ville en tap-tap. Parking gratuit sur place.</p>
        </div>
      </div>
      <figure className="map reveal">
        <iframe
          title="Carte : Palais Municipal de Delmas, Haïti"
          loading="lazy"
          src={OSM_SRC}
        />
        <figcaption className="map__note">
          Emplacement approximatif du Palais Municipal de Delmas. Repère exact à
          confirmer.
        </figcaption>
      </figure>
    </section>
  );
}
