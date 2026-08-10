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
// L'ordre du tableau = l'ordre d'affichage (grille édition) : alphabétique.
// `genre` n'est renseigné que sur les titres pour lesquels le client l'a
// confirmé ; les autres n'apparaissent sous aucune puce du filtre par genre.
export const livres: Livre[] = [
  {
    titre: "17 jours dans la fosse aux lions",
    auteur: "Nenel Cassy",
    genre: "Récit politique",
    prix: "1 000 HTG",
    couverture: "/images/livres/17-jours-fosse-aux-lions.jpg",
  },
  {
    titre: "40 ans au-delà des limites",
    auteur: "Djina Guillet Delatour",
    prix: "2 000 HTG",
    couverture: "/images/livres/40-ans-au-dela-des-limites.jpg",
    note: "Pour une cause",
  },
  {
    titre: "À défaut d'orgasme",
    auteur: "Darline Honoré (DaHo)",
    prix: "1 000 HTG",
    couverture: "/images/livres/a-defaut-dorgasme.jpg",
  },
  {
    titre: "À toi qui as tout donné",
    auteur: "Anny-Lee Shaïma Labranche",
    prix: "1 000 HTG",
    couverture: "/images/livres/a-toi-qui-as-tout-donne.jpg",
    note: "Recueil de poèmes",
  },
  {
    titre: "Ayiti solid",
    auteur: "Jinèl Ulysse",
    prix: "1 000 HTG",
    couverture: "/images/livres/ayiti-solid.jpg",
    note: "Angajman pou yon Ayiti solid",
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
    titre: "Collection de réflexions certaines pour construire une vie chrétienne triomphante",
    auteur: "Kelly Baldé, D.D. & Ph.D.",
    genre: "Spiritualité",
    prix: "2 500 HTG",
    couverture: "/images/livres/reflexions-vie-chretienne.jpg",
    note: "Réflexions de 2016 à 2024",
  },
  {
    titre: "Coquillole",
    auteur: "Mischneider N. Cazimir",
    prix: "750 HTG",
    couverture: "/images/livres/coquillole.jpg",
  },
  {
    titre: "De la gestion de vos finances personnelles vers l'entrepreneuriat",
    auteur: "Léonard Aldophe",
    prix: "2 500 HTG",
    couverture: "/images/livres/gestion-finances-entrepreneuriat.jpg",
    note: "Préface d'Enomy Germain",
  },
  {
    titre: "De la serpillère à manageur",
    auteur: "Richard'son Jean-Baptiste",
    prix: "2 250 HTG",
    couverture: "/images/livres/de-la-serpillere-a-manageur.jpg",
    note: "L'héritage d'un combat : se construire, s'élever, transmettre",
  },
  {
    titre: "Différentes manifestations du Saint-Esprit dans la vie chrétienne",
    auteur: "Corlby Michel",
    prix: "1 500 HTG",
    couverture: "/images/livres/differentes-manifestations-saint-esprit.jpg",
  },
  {
    titre: "Doctrine chrétienne face aux obstacles à l'évangélisation",
    auteur: "Kelly Baldé, D.D. & Ph.D.",
    prix: "2 500 HTG",
    couverture: "/images/livres/doctrine-chretienne.jpg",
    note: "Protestant avant le protestantisme",
  },
  {
    titre: "Entre 2 mondes",
    auteur: "David Pierre Erick Etienne",
    prix: "750 HTG",
    couverture: "/images/livres/entre-2-mondes.jpg",
    note: "Épisode 1 — pou timoun",
  },
  {
    titre: "Fais-moi jouir",
    auteur: "Viannye Ménard",
    genre: "Roman",
    prix: "1 300 HTG",
    couverture: "/images/livres/fais-moi-jouir.jpg",
  },
  {
    titre: "Gangs et écoles en Haïti",
    auteur: "Claude Édouard",
    prix: "1 500 HTG",
    couverture: "/images/livres/gangs-et-ecoles-en-haiti.jpg",
    note: "Enjeux et perspectives",
  },
  {
    titre: "Haïti : environnement corruptible",
    auteur: "Inel Torchon",
    prix: "1 000 HTG",
    couverture: "/images/livres/haiti-environnement-corruptible.jpg",
    note: "Enjeux et perspectives",
  },
  {
    titre: "Haïti : la bête noire ?",
    auteur: "Dre. Claudia Charlot",
    prix: "1 500 HTG",
    couverture: "/images/livres/haiti-la-bete-noire.jpg",
    note: "Pourquoi l'aide étrangère a échoué en Haïti et ce qu'il faut faire pour y remédier",
  },
  {
    titre: "J'ai combattu le bon combat",
    auteur: "Abraham Edmond",
    genre: "Spiritualité",
    prix: "1 700 HTG",
    couverture: "/images/livres/jai-combattu-le-bon-combat.jpg",
  },
  {
    titre: "L'héritage de Marie-Thérèse",
    auteur: "D'jimy Malval",
    prix: "2 500 HTG",
    couverture: "/images/livres/lheritage-de-marie-therese.jpg",
  },
  {
    titre: "L'Œuvre du Saint-Esprit",
    auteur: "Kelly Baldé, D.D. & Ph.D.",
    prix: "1 750 HTG",
    couverture: "/images/livres/loeuvre-du-saint-esprit.jpg",
    note: "Dans / par et pour l'homme — 2e édition",
  },
  {
    titre: "La chair des sentiments",
    auteur: "Léonard Herby",
    prix: "1 000 HTG",
    couverture: "/images/livres/la-chair-des-sentiments.jpg",
  },
  {
    titre: "La musique : au singulier pluriel",
    auteur: "Kesnel Vertil",
    prix: "10 500 HTG",
    couverture: "/images/livres/la-musique-au-singulier-pluriel.jpg",
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
    titre: "Le pouvoir du sport",
    auteur: "Ronald Antoine Auguste",
    prix: "2 500 HTG",
    couverture: "/images/livres/le-pouvoir-du-sport.jpg",
  },
  {
    titre: "Le sang de Jésus, l'incrédulité et le salut par la foi",
    auteur: "Dr. Jean-Robert Maître",
    prix: "2 500 HTG",
    couverture: "/images/livres/le-sang-de-jesus.jpg",
    note: "Une réflexion sur l'accomplissement de Jésus à la croix",
  },
  {
    titre: "Les chroniques de Bilolo Kongo",
    auteur: "Jean Hearby Roc",
    prix: "7 500 HTG",
    couverture: "/images/livres/les-chroniques-de-bilolo-kongo.jpg",
    note: "Tome 1",
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
    titre: "Nou tout ka rive !!!",
    auteur: "Valéry Numa",
    prix: "3 000 HTG",
    couverture: "/images/livres/nou-tout-ka-rive.jpg",
  },
  {
    titre: "Nouvelle naissance, nouvelle vie",
    auteur: "Kelly Baldé, D.D. & Ph.D.",
    prix: "1 500 HTG",
    couverture: "/images/livres/nouvelle-naissance-nouvelle-vie.jpg",
    note: "Une vie de service — Tome I, 3e édition",
  },
  {
    titre: "Parce que demain Saïrah",
    auteur: "Daryl Lorenzo Moïse",
    prix: "1 000 HTG",
    couverture: "/images/livres/parce-que-demain-sairah.jpg",
  },
  {
    titre: "Sauver par la foi et vivre par la foi",
    auteur: "Kelly Baldé, D.D. & Ph.D.",
    prix: "2 500 HTG",
    couverture: "/images/livres/sauver-par-la-foi.jpg",
  },
  {
    titre: "Soulèvement général des poussières",
    auteur: "Jean Lesly Cérome",
    genre: "Poésie",
    prix: "1 000 HTG",
    couverture: "/images/livres/soulevement-general-des-poussieres.jpg",
  },
  {
    titre: "Tourner la page",
    auteur: "Nenel Cassy",
    genre: "Essai",
    prix: "1 500 HTG",
    couverture: "/images/livres/tourner-la-page.jpg",
    note: "Haïti au carrefour du développement",
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
    titre: "Un 20e siècle riche en événements et en inventions : le cas d'Haïti",
    auteur: "Yves Roblin",
    prix: "2 000 HTG",
    couverture: "/images/livres/un-20e-siecle.jpg",
    note: "Sciences de l'éducation : option histoire contemporaine",
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
