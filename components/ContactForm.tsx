"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "50955792024";

const SUJETS = [
  "Renseignement général",
  "Réservation / billetterie",
  "Devenir partenaire / sponsor",
  "Maison d'édition",
  "Presse / média",
  "Bénévolat",
];

export default function ContactForm() {
  const [nom, setNom] = useState("");
  const [sujet, setSujet] = useState(SUJETS[0]);
  const [message, setMessage] = useState("");
  const [touched, setTouched] = useState(false);

  const nomOk = nom.trim().length > 1;
  const msgOk = message.trim().length > 2;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched(true);
    if (!nomOk || !msgOk) return;
    const text = `Bonjour, je suis ${nom.trim()}.\nSujet : ${sujet}\n\n${message.trim()}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="cform reveal" onSubmit={handleSubmit} noValidate>
      <div className="cform__row">
        <label htmlFor="cf-nom">Votre nom</label>
        <input
          id="cf-nom"
          name="nom"
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          autoComplete="name"
          aria-invalid={touched && !nomOk}
          required
        />
        {touched && !nomOk ? (
          <p className="cform__err" role="alert">
            Merci d&apos;indiquer votre nom.
          </p>
        ) : null}
      </div>

      <div className="cform__row">
        <label htmlFor="cf-sujet">Sujet</label>
        <select id="cf-sujet" name="sujet" value={sujet} onChange={(e) => setSujet(e.target.value)}>
          {SUJETS.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="cform__row">
        <label htmlFor="cf-msg">Message</label>
        <textarea
          id="cf-msg"
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-invalid={touched && !msgOk}
          required
        />
        {touched && !msgOk ? (
          <p className="cform__err" role="alert">
            Merci d&apos;écrire votre message.
          </p>
        ) : null}
      </div>

      <button type="submit" className="btn btn--cta">
        Envoyer sur WhatsApp{" "}
        <span className="arw" aria-hidden="true">
          →
        </span>
      </button>
      <p className="cform__note">
        Le formulaire ouvre WhatsApp avec votre message pré-rempli — le canal le plus
        rapide pour nous joindre. Vous pouvez aussi nous contacter directement ci-contre.
      </p>
    </form>
  );
}
