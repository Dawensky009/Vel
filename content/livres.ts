import type { Livre } from "@/lib/types";

// Auteurs & livres de l'édition 2026 — une entrée = une carte.
// Couvertures optimisées dans /images/livres/. Ajoutez `photo` (portrait de
// l'auteur) et `description` quand ils sont fournis.
export const livres: Livre[] = [
  {
    titre: "17 jours dans la fosse aux lions",
    auteur: "Nenel Cassy",
    genre: "Récit politique",
    prix: "1 000 HTG",
    couverture: "/images/livres/17-jours-fosse-aux-lions.jpg",
  },
  {
    titre: "Fais-moi jouir",
    auteur: "Viannye Ménard",
    genre: "Roman",
    prix: "1 300 HTG",
    couverture: "/images/livres/fais-moi-jouir.jpg",
  },
  {
    titre: "Choisir ses études en Haïti",
    auteur: "Stanley Joseph & Djeff Prophil",
    genre: "Essai",
    prix: "1 000 HTG",
    couverture: "/images/livres/choisir-ses-etudes-en-haiti.jpg",
    note: "Préface de Placide Jobby",
  },
  {
    titre: "J'ai combattu le bon combat",
    auteur: "Abraham Edmond",
    genre: "Spiritualité",
    prix: "1 700 HTG",
    couverture: "/images/livres/jai-combattu-le-bon-combat.jpg",
  },
  {
    titre: "La peur des femmes",
    auteur: "Jackson Chéry",
    genre: "Roman",
    prix: "1 200 HTG",
    couverture: "/images/livres/la-peur-des-femmes.jpg",
  },
  {
    titre: "Lanmou Anba Fenèt ak Klere Chimen",
    auteur: "Joseph Jackson",
    genre: "Poésie",
    prix: "1 000 HTG",
    couverture: "/images/livres/lanmou-anba-fenet.jpg",
  },
  {
    titre: "Lascahobas 2054",
    auteur: "Willène Polynice (Madame Popo)",
    genre: "Essai",
    prix: "1 200 HTG",
    couverture: "/images/livres/lascahobas-2054.jpg",
  },
];
