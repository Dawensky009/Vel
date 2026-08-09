import type { Edition } from "@/lib/types";

// Éditions de Vacances en livres. Ajoutez ici les futures éditions et les
// éditions passées (statut "passe") : l'archive et les pages se remplissent seules.
export const editions: Edition[] = [
  {
    annee: "2026",
    titre: "Vacances en livres",
    tagline: "L'événement de l'été",
    statut: "a-venir",
    dateLabel: "Samedi 15 août 2026",
    dateISO: "2026-08-15",
    horaires: "9h00 – 21h00",
    lieu: "Palais Municipal de Delmas",
    ville: "69, rue Charbonnière, Delmas 33",
    cover: "/images/evenement/cp-05-panel-large.jpg",
    resume:
      "30 auteurs et plus en signature, un palais ouvert au public, une journée entière à passer avec les livres. 500 HTG l'adulte, gratuit pour les enfants de 14 ans et moins.",
    // Invités d'honneur (portraits à ajouter dès réception : champ `photo`).
    guests: [
      {
        nom: "Emmanuel Ménard",
        role: "Ministre de la Culture et de la Communication",
        photo: "/images/invites/emmanuel-menard.jpg",
        bio: [
          "Le Dr Emmanuel Ménard marque son passage au Ministère de la Culture et de la Communication par une orientation tournée vers la modernisation des institutions culturelles, la valorisation du patrimoine national et le renforcement de la gouvernance des organismes sous tutelle du ministère. Lors de sa première réunion du Conseil d'Orientation Stratégique, il a réuni les directions des institutions culturelles placées sous la tutelle du MCC, dans une dynamique de coordination et de rationalisation de l'action publique culturelle.",
          "Son action s'est aussi inscrite dans une démarche de proximité avec les lieux de mémoire et les institutions culturelles. En mars 2026, il a effectué une tournée officielle dans plusieurs espaces culturels et patrimoniaux, incluant la Direction Nationale du Livre, où il a échangé sur les projets en cours, notamment autour du centenaire de naissance de l'écrivain René Depestre.",
          "Sa présence honore cette première édition en l'inscrivant dans une mémoire nationale du livre, du patrimoine et de la transmission culturelle.",
        ],
      },
      {
        nom: "Wilson Jeudy",
        role: "Maire de Delmas",
        photo: "/images/invites/wilson-jeudy.jpg",
        bio: [
          "Wilson Jeudy est reconnu comme une figure importante de la gouvernance municipale à Delmas. Son administration est régulièrement associée à la modernisation de la commune, au renforcement de la capacité financière municipale et à la réalisation d'infrastructures locales. Lors du lancement de l'exercice fiscal 2025-2026, il a présenté une vision placée sous le signe de l'ambition et de la modernisation, tout en rappelant que les infrastructures réalisées reposent sur une gestion rigoureuse de la commune.",
          "Les médias ont également souligné son rôle dans les travaux de voirie et d'amélioration urbaine à Delmas, notamment la construction et la réhabilitation des routes pour maintenir la circulation dans la commune, ainsi que des travaux récents d'asphaltage comme celui de la rue Tucan à Delmas 33.",
          "Sa présence donne à cette première édition un ancrage territorial fort, en reliant le livre, la jeunesse et la culture à l'histoire vivante de la commune de Delmas.",
        ],
      },
    ],
    // Maisons d'édition confirmées (voir content/publishers.ts).
    maisonsEdition: ["correctpro", "edisyon-freda", "couleur-dencre"],
    timeline: [
      { heure: "9h00", label: "Ouverture officielle" },
      { heure: "10h30", label: "Tables rondes & signatures" },
      { heure: "14h00", label: "Rencontres, voix de la diaspora" },
      { heure: "17h30", label: "Lecture publique & clôture" },
    ],
    // Vidéos & interviews de l'événement. Illustrations à remplacer par les vraies
    // captations (reportage, interviews d'auteurs) après l'événement.
    videos: [
      {
        url: "/videos/vel-spot-2026.mp4",
        poster: "/videos/vel-spot-2026.jpg",
        categorie: "Spot",
        titre: "Spot officiel de Vacances en Livres 2026",
      },
    ],
  },
];
