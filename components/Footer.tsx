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
                <a href="tel:+50958178138">Téléphone · +509 5817-8138</a>
              </li>
              <li>
                <a href="mailto:contact@vacancesenlivres.org">contact@vacancesenlivres.org</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Réseaux</h4>
            <ul>
              <li>
                <a href="https://www.facebook.com/profile.php?id=61592470383766" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/vacancesenlivres/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@vacancesenlivres" target="_blank" rel="noopener noreferrer">
                  TikTok
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Colophon</h4>
            <p className="foot__colophon">© 2026 Organisation Vacances en Livres.</p>
          </div>
        </div>
        <p className="foot__bar">Une nouvelle aventure culturelle commence bientôt.</p>
      </div>
    </footer>
  );
}
