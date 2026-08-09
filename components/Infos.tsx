type IconName = "pin" | "calendar" | "contact";

function Icon({ name }: { name: IconName }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (name === "pin") {
    return (
      <svg {...common}>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    );
  }
  if (name === "calendar") {
    return (
      <svg {...common}>
        <rect x="3" y="4.5" width="18" height="17" rx="2" />
        <path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
        <path d="M12 13v3.2l2 1.3" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M22 16.9v2.9a2 2 0 0 1-2.2 2 19.7 19.7 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.7 19.7 0 0 1 2.1 4.1 2 2 0 0 1 4.1 2h2.9a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

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
          <span className="info-card__ic">
            <Icon name="pin" />
          </span>
          <h3>Lieu</h3>
          <p>
            Palais Municipal de Delmas
            <br />
            69, rue Charbonnière, Delmas 33
          </p>
        </div>
        <div className="info-card">
          <span className="info-card__ic">
            <Icon name="calendar" />
          </span>
          <h3>Date et horaires</h3>
          <p>
            Samedi 15 août 2026
            <br />
            de 9h00 à 21h00
          </p>
        </div>
        <div className="info-card">
          <span className="info-card__ic">
            <Icon name="contact" />
          </span>
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
