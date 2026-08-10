import type { Livre } from "@/lib/types";

// ── Deux catalogues distincts ────────────────────────────────────────────
// `livres`        → « Auteurs & livres en signatures » : l'auteur est présent
//                   sur place le 15 août pour dédicacer.
// `livresEnVente` → « Livres en vente » : titres vendus sur les stands sans
//                   séance de signature.
// Les deux tableaux ont exactement la même forme (type `Livre`) et alimentent
// le même rail de cartes ; vider le second fait disparaître la section.

// Auteurs & livres de l'édition 2026 — une entrée = une carte.
// Couvertures optimisées dans /images/livres/. Ajoutez `photo` (portrait de
// l'auteur) et `description` quand ils sont fournis.
// L'ordre du tableau = l'ordre d'affichage (carrousel accueil + grille édition).
export const livres: Livre[] = [
  {
    titre: "Choisir ses études en Haïti",
    auteur: "Stanley Joseph & Djeff Prophil",
    genre: "Essai",
    prix: "1 000 HTG",
    couverture: "/images/livres/choisir-ses-etudes-en-haiti.jpg",
    note: "Préface de Placide Jobby",
  },
  {
    titre: "Fais-moi jouir",
    auteur: "Viannye Ménard",
    genre: "Roman",
    prix: "1 300 HTG",
    couverture: "/images/livres/fais-moi-jouir.jpg",
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
  {
    titre: "Le code de la prospérité",
    auteur: "Rev. Clausel Cadet",
    genre: "Développement personnel",
    prix: "2 000 HTG",
    couverture: "/images/livres/le-code-de-la-prosperite.jpg",
  },
  {
    titre: "Le début d'une scène",
    auteur: "Ginifred V. Marcelin",
    genre: "Roman",
    prix: "1 500 HTG",
    couverture: "/images/livres/le-debut-dune-scene.jpg",
  },
  {
    titre: "Les hésitations de la passion",
    auteur: "Dimitri Norris",
    genre: "Roman",
    prix: "2 000 HTG",
    couverture: "/images/livres/les-hesitations-de-la-passion.jpg",
  },
  {
    titre: "Les liens du destin",
    auteur: "Wendy Clara Jn Baptiste",
    genre: "Roman",
    prix: "1 000 HTG",
    couverture: "/images/livres/les-liens-du-destin.jpg",
  },
  {
    titre: "Mirak resèt ak te lakay",
    auteur: "Jean Hector Anacacis",
    genre: "Santé & bien-être",
    prix: "4 000 HTG",
    couverture: "/images/livres/mirak-reset-ak-te-lakay.jpg",
  },
  {
    titre: "Collection de réflexions certaines pour construire une vie chrétienne triomphante",
    auteur: "Kelly Baldé, D.D. & Ph.D.",
    genre: "Spiritualité",
    prix: "2 500 HTG",
    couverture: "/images/livres/reflexions-vie-chretienne.jpg",
    note: "Réflexions de 2016 à 2024",
  },
  {
    titre: "Soulèvement général des poussières",
    auteur: "Jean Lesly Cérome",
    genre: "Poésie",
    prix: "1 000 HTG",
    couverture: "/images/livres/soulevement-general-des-poussieres.jpg",
  },
  {
    titre: "Tralala",
    auteur: "Joseph Jackson",
    genre: "Poésie",
    prix: "1 000 HTG",
    couverture: "/images/livres/tralala.jpg",
    note: "Limyè anviwònman latè tenyen",
  },
  {
    titre: "17 jours dans la fosse aux lions",
    auteur: "Nenel Cassy",
    genre: "Récit politique",
    prix: "1 000 HTG",
    couverture: "/images/livres/17-jours-fosse-aux-lions.jpg",
  },
  {
    titre: "Tourner la page",
    auteur: "Nenel Cassy",
    genre: "Essai",
    prix: "1 500 HTG",
    couverture: "/images/livres/tourner-la-page.jpg",
    note: "Haïti au carrefour du développement",
  },
];

// Livres en vente sur les stands (sans séance de signature).
// Couvertures optimisées dans /images/livres-en-vente/. Ordre alphabétique par
// titre. Les `genre` manquent encore : le client n'a fourni que titre, auteur
// et prix ; les `note` reprennent le sous-titre imprimé sur la couverture.
export const livresEnVente: Livre[] = [
  {
    titre: "Cazale",
    auteur: "Joël Lorquet, PhD",
    prix: "1 300 HTG",
    couverture: "/images/livres-en-vente/cazale.jpg",
    note: "Un joyau à valoriser et une histoire à vendre",
  },
  {
    titre: "Cet homme, mon père",
    auteur: "Rachel Price Vorbe",
    prix: "3 250 HTG",
    couverture: "/images/livres-en-vente/cet-homme-mon-pere.jpg",
  },
  {
    titre: "Choc du populisme et de la gauche en Haïti",
    auteur: "Jean Hector Anacacis",
    prix: "3 000 HTG",
    couverture: "/images/livres-en-vente/choc-du-populisme-et-de-la-gauche.jpg",
    note: "L'envers et le revers du mouvement lavalas",
  },
  {
    titre: "Danse des bulles au soleil",
    auteur: "Alex Duquella",
    prix: "1 000 HTG",
    couverture: "/images/livres-en-vente/danse-des-bulles-au-soleil.jpg",
  },
  {
    titre: "Défense pénale au cours du jugement",
    auteur: "R. Loridson Glaude",
    prix: "1 000 HTG",
    couverture: "/images/livres-en-vente/defense-penale-au-cours-du-jugement.jpg",
  },
  {
    titre: "Diagnostic du pouvoir de Jovenel Moïse : son passé",
    auteur: "Hector Anacacis",
    prix: "4 500 HTG",
    couverture: "/images/livres-en-vente/diagnostic-du-pouvoir-de-jovenel-moise.jpg",
  },
  {
    titre: "Élections en Haïti",
    auteur: "Jean Hector Anacacis",
    prix: "3 500 HTG",
    couverture: "/images/livres-en-vente/elections-en-haiti.jpg",
    note: "Manœuvre de reprise de pouvoir et de pérennité",
  },
  {
    titre:
      "Études sur les conditions de travail des migrants haïtiens dans le secteur BTP en République Dominicaine",
    auteur: "GARR",
    prix: "1 500 HTG",
    couverture: "/images/livres-en-vente/migrants-haitiens-btp.jpg",
    note: "Les dessous du quotidien de ces travailleurs (2024-2025)",
  },
  {
    titre: "Guide de développement local intégré",
    auteur: "Jean Hector Anacacis",
    prix: "1 500 HTG",
    couverture: "/images/livres-en-vente/guide-de-developpement-local-integre.jpg",
    note: "Décentralisation et actions des collectivités territoriales",
  },
  {
    titre: "Histoires insolites au temps du coronavirus en Haïti",
    auteur: "Joël Lorquet, PhD Cand",
    prix: "1 300 HTG",
    couverture: "/images/livres-en-vente/histoires-insolites-coronavirus.jpg",
    note: "Suivies de commentaires de plusieurs intellectuels et professionnels haïtiens",
  },
  {
    titre: "J'ai vécu deux vies",
    auteur: "Rachel Price Vorbe",
    prix: "2 900 HTG",
    couverture: "/images/livres-en-vente/jai-vecu-deux-vies.jpg",
  },
  {
    titre: "Je veux votre mari",
    auteur: "Yenniva Ménard",
    prix: "1 000 HTG",
    couverture: "/images/livres-en-vente/je-veux-votre-mari.jpg",
  },
  {
    titre: "Koko ta dwe pale",
    auteur: "Kervens Roméus",
    prix: "500 HTG",
    couverture: "/images/livres-en-vente/koko-ta-dwe-pale.jpg",
  },
  {
    titre: "Le Canal de la rivière Massacre",
    auteur: "Joël Lorquet, PhD",
    prix: "1 300 HTG",
    couverture: "/images/livres-en-vente/le-canal-de-la-riviere-massacre.jpg",
    note: "Une opportunité pour renforcer la production nationale et entamer le développement endogène",
  },
  {
    titre: "Le comportement du couple dans l'amour après le mariage",
    auteur: "Derice Lucien",
    prix: "2 000 HTG",
    couverture: "/images/livres-en-vente/le-comportement-du-couple.jpg",
  },
  {
    titre: "Médias de proximité et développement social",
    auteur: "Joël Lorquet, PhD",
    prix: "1 300 HTG",
    couverture: "/images/livres-en-vente/medias-de-proximite.jpg",
    note: "Impact sur la conscience civique de la population haïtienne",
  },
  {
    titre: "Nazaréen de Tabarre : une Église, une histoire",
    auteur: "Joël Lorquet, PhD",
    prix: "1 300 HTG",
    couverture: "/images/livres-en-vente/nazareen-de-tabarre.jpg",
  },
  {
    titre: "Romanez, l'enfant du pays",
    auteur: "Rachel Price Vorbe",
    prix: "2 900 HTG",
    couverture: "/images/livres-en-vente/romanez-lenfant-du-pays.jpg",
  },
  {
    titre: "Tourisme local & développement en Haïti",
    auteur: "Joël Lorquet, PhD",
    prix: "1 300 HTG",
    couverture: "/images/livres-en-vente/tourisme-local-et-developpement.jpg",
    note: "Vallue, un modèle de développement touristique et économique pour Haïti",
  },
];
