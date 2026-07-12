import type { Edition } from "@/lib/types";

// Éditions de Vacances en livres. Ajoutez ici les futures éditions et les
// éditions passées (statut "passe") — l'archive et les pages se remplissent seules.
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
    guest: {
      nom: "Invité d'honneur à annoncer",
      role: "En signature le 15 août",
      bio: "Le nom de l'invité d'honneur de l'édition 2026 sera dévoilé dans un prochain communiqué officiel.",
    },
    maisonsEdition: [
      "a-confirmer-1",
      "a-confirmer-2",
      "a-confirmer-3",
      "a-confirmer-4",
      "a-confirmer-5",
      "a-confirmer-6",
    ],
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
        url: "https://www.youtube.com/embed/yp8T5AX0ng0",
        categorie: "Reportage",
        titre: "Reportage sur la culture du livre en Haïti — vidéo d'illustration, à remplacer.",
      },
      {
        url: "https://www.youtube.com/embed/yp8T5AX0ng0",
        categorie: "Interview",
        titre: "Interview d'un auteur invité — exemple à remplacer par la vraie captation.",
      },
    ],
  },
];
