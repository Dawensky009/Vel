export default function Footer() {
  return (
    <footer className="foot">
      <div className="container">
        <div className="foot__grid">
          <div className="foot__brand">
            <p className="fname">Vacances en livres</p>
            <p className="ftag script">Restez connectés</p>
            <p>Samedi 15 août 2026 · Palais Municipal de Delmas.</p>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="https://wa.me/50955792024" target="_blank" rel="noopener noreferrer">
                  WhatsApp · +509 5579-2024
                </a>
              </li>
              <li>
                <a href="tel:+50931215441">Téléphone · +509 3121-5441</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Réseaux</h4>
            <p className="foot__colophon">Bientôt sur Facebook et Instagram.</p>
          </div>
          <div>
            <h4>Colophon</h4>
            <p className="foot__colophon">© 2026 Coalition Vacances en livres.</p>
          </div>
        </div>
        <p className="foot__bar">Une nouvelle aventure culturelle commence bientôt.</p>
      </div>
    </footer>
  );
}
