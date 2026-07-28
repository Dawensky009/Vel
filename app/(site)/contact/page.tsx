import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact · Vacances en livres",
  description:
    "Contactez l'Organisation Vacances en Livres : partenariat, presse ou bénévolat. Nous répondons par e-mail.",
};

export default function ContactPage() {
  return (
    <section className="section container page-top" aria-labelledby="contact-title">
      <div className="s-head reveal">
        <p className="s-lead">Une question, un partenariat ?</p>
        <h1 className="s-title" id="contact-title">
          Contact
        </h1>
      </div>

      <div className="contact">
        <ContactForm />

        <aside className="contact__info reveal" aria-label="Nous joindre directement">
          <h2>Nous joindre</h2>
          <ul>
            <li>
              <span>Téléphone</span>
              <a href="tel:+50958178138">+509 5817-8138</a>
            </li>
            <li>
              <span>E-mail</span>
              <a href="mailto:contact@vacancesenlivres.org">contact@vacancesenlivres.org</a>
            </li>
          </ul>
          <p>Palais Municipal de Delmas, 69 rue Charbonnière, Delmas 33.</p>
          <p>
            Suivez-nous :{" "}
            <a href="https://www.facebook.com/profile.php?id=61592470383766" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>{" "}
            ·{" "}
            <a href="https://www.instagram.com/vacancesenlivres/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>{" "}
            ·{" "}
            <a href="https://www.tiktok.com/@vacancesenlivres" target="_blank" rel="noopener noreferrer">
              TikTok
            </a>
            .
          </p>
        </aside>
      </div>
    </section>
  );
}
