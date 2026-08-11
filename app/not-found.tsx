import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page introuvable · Vacances en livres",
  description:
    "Cette page n'existe pas ou a été déplacée. Retrouvez l'édition 2026, les actualités et le contact de Vacances en livres.",
  robots: { index: false, follow: true },
};

/**
 * 404 avec la navigation du site.
 *
 * Cette page vit à la racine et non dans le groupe (site) : les URL sans route
 * correspondante n'entrent dans aucun groupe, seul le not-found racine les
 * attrape. Elle remonte donc elle-même l'en-tête et le pied de page, pour
 * qu'une adresse fautive laisse un chemin de sortie plutôt qu'un cul-de-sac.
 *
 * `follow` sans `index` : la page n'entre pas dans l'index, mais les liens
 * ci-dessous restent suivis.
 */
export default function NotFound() {
  return (
    <>
      <a className="skip" href="#main">
        Aller au contenu
      </a>
      <Nav />
      <main id="main">
        <section className="section container nf" aria-labelledby="nf-title">
          <p className="s-lead">Erreur 404</p>
          <h1 className="s-title nf__title" id="nf-title">
            Cette page <em>n&apos;existe pas</em>
          </h1>
          <p className="nf__text">
            L&apos;adresse est peut-être incomplète, ou la page a été déplacée
            depuis votre dernière visite.
          </p>

          <ul className="nf__links">
            <li>
              <Link href="/">Accueil</Link>
              <span>Le rendez-vous du 15 août 2026</span>
            </li>
            <li>
              <Link href="/editions/2026">Édition 2026</Link>
              <span>Programme, auteurs, tarifs</span>
            </li>
            <li>
              <Link href="/actualites">Actualités</Link>
              <span>Les dernières annonces</span>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
              <span>Nous écrire</span>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
