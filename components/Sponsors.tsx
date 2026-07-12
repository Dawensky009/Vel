const WHATSAPP = "https://wa.me/50955792024";

export default function Sponsors() {
  return (
    <section className="section container" id="sponsors" aria-labelledby="sp-title">
      <div className="s-head reveal">
        <p className="s-lead">Ils rendent 2026 possible</p>
        <h2 className="s-title" id="sp-title">
          Sponsors.
        </h2>
      </div>
      <p className="sponsors__intro reveal">
        Vacances en livres est rendu possible par le soutien d&apos;entreprises et
        d&apos;institutions qui croient à la démocratisation de la lecture en Haïti. La
        coalition les remercie.
      </p>
      <div className="tiers reveal">
        <div className="tier">
          <p className="tier__label">Partenaire principal</p>
          <p className="tier__names">Coalition Vacances en livres</p>
        </div>
        <div className="tier tier--sub">
          <p className="tier__label">Partenaires officiels</p>
          <p className="tier__names">À confirmer · À confirmer · À confirmer</p>
        </div>
        <div className="tier tier--soft">
          <p className="tier__label">Soutiens</p>
          <p className="tier__names">
            À confirmer · À confirmer · À confirmer · À confirmer · À confirmer · À
            confirmer
          </p>
        </div>
      </div>
      <p className="sponsors__cta reveal">
        Vous souhaitez rejoindre les sponsors 2026 ?{" "}
        <a href={WHATSAPP}>Écrivez-nous sur WhatsApp</a> pour recevoir le dossier
        partenaires.
      </p>
    </section>
  );
}
