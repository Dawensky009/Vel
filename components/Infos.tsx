export default function Infos() {
  return (
    <section className="section container" id="infos" aria-labelledby="inf-title">
      <div className="s-head reveal">
        <p className="s-lead">Où et comment nous rejoindre</p>
        <h2 className="s-title" id="inf-title">
          Infos <em>pratiques</em>
        </h2>
      </div>
      <div className="infos__grid reveal">
        <div className="info-card">
          <h3>Lieu</h3>
          <p>
            Palais Municipal de Delmas
            <br />
            69, rue Charbonnière, Delmas 33
          </p>
        </div>
        <div className="info-card">
          <h3>Date et horaires</h3>
          <p>
            Samedi 15 août 2026
            <br />
            de 9h00 à 21h00
          </p>
        </div>
        <div className="info-card">
          <h3>Contact</h3>
          <p>
            <a href="https://wa.me/50947504572" target="_blank" rel="noopener noreferrer">
              WhatsApp · +509 4750-4572
            </a>
            <br />
            <a href="tel:+50958178138">+509 5817-8138</a>
            <br />
            <a href="mailto:contact@vacancesenlivres.org">contact@vacancesenlivres.org</a>
          </p>
        </div>
      </div>
    </section>
  );
}
