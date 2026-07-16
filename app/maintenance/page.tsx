import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Site en préparation · Vacances en livres",
  description:
    "Le site de Vacances en livres est en préparation. Il sera de nouveau en ligne très bientôt.",
  robots: { index: false, follow: false },
};

export default function MaintenancePage() {
  return (
    <section className="maint" aria-labelledby="maint-title">
      <div className="maint__inner">
        <span className="maint__logo">
          <img
            className="maint__logo-img"
            src="/Logo_vel.jpeg"
            alt="Vacances en livres"
            width={1080}
            height={1044}
            decoding="async"
          />
        </span>

        <p className="s-lead maint__lead">Vacances en livres</p>
        <h1 className="s-title maint__title" id="maint-title">
          Le site revient <em>très bientôt</em>.
        </h1>
        <p className="prose maint__text">
          Nous préparons l’édition du 15 août 2026. Le site sera de nouveau en
          ligne sous peu. Merci de votre patience.
        </p>

        <p className="maint__meta">15 août 2026 · Palais Municipal de Delmas</p>

        <a
          className="btn btn--cta maint__cta"
          href="https://wa.me/50955792024"
          rel="noopener"
        >
          Nous écrire sur WhatsApp{" "}
          <span className="arw" aria-hidden="true">
            →
          </span>
        </a>
      </div>
    </section>
  );
}
