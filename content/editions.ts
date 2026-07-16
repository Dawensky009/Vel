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
    horaires: "9h00 – 18h30",
    lieu: "Palais Municipal de Delmas",
    ville: "Delmas, Ouest, Haïti",
    affiche: "/Annonces.jpeg",
    resume:
      "Trente auteurs en signature, un palais ouvert au public, une journée entière à passer avec les livres. 500 HTG l'adulte, gratuit pour les enfants de 14 ans et moins.",
    // Invité d'honneur : renseigner { nom, role, bio, photo } pour afficher la
    // section sur la home. Laissé vide tant que le nom n'est pas confirmé.
    guest: undefined,
    // Maisons d'édition : ajouter ici les slugs confirmés (voir content/publishers.ts).
    // Vide = la section « Maisons d'édition » reste masquée (pas de « à confirmer »).
    maisonsEdition: [],
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
        url: "https://www.youtube.com/embed/muuWRKYi09s",
        categorie: "Reportage",
        titre: "Vidéo d'illustration sur l'importance de la lecture, à remplacer par le reportage officiel.",
      },
      {
        url: "https://www.youtube.com/embed/D9Ihs241zeg",
        categorie: "Interview",
        titre: "Exemple d'intervention (à remplacer par les vraies interviews d'auteurs de l'événement).",
      },
    ],
  },
];
