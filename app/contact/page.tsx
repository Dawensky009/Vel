import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact · Vacances en livres",
  description:
    "Contactez la coalition Vacances en livres : réservation, partenariat, presse ou bénévolat. Réponse rapide par WhatsApp.",
};

export default function ContactPage() {
  return (
    <section className="section container page-top" aria-labelledby="contact-title">
      <div className="s-head reveal">
        <p className="s-lead">Une question, un partenariat ?</p>
        <h1 className="s-title" id="contact-title">
          Contact.
        </h1>
      </div>

      <div className="contact">
        <ContactForm />

        <aside className="contact__info reveal" aria-label="Nous joindre directement">
          <h2>Nous joindre</h2>
          <ul>
            <li>
              <span>WhatsApp</span>
              <a href="https://wa.me/50955792024">+509 5579-2024</a>
            </li>
            <li>
              <span>Téléphone</span>
              <a href="tel:+50931215441">+509 3121-5441</a>
            </li>
          </ul>
          <p>Palais Municipal de Delmas, Delmas, Ouest, Haïti.</p>
          <p>
            Suivez-nous :{" "}
            <a href="#" rel="noopener">
              Facebook
            </a>{" "}
            ·{" "}
            <a href="#" rel="noopener">
              Instagram
            </a>
            .
          </p>
        </aside>
      </div>
    </section>
  );
}
