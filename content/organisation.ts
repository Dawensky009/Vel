import type { Organisation } from "@/lib/types";

// L'organisation et le staff. Remplacez les membres « À confirmer » par les vrais
// noms et portraits dès que la coalition les valide.
export const organisation: Organisation = {
  nom: "Coalition Vacances en livres",
  mission: "Démocratiser l'accès à la lecture en Haïti.",
  paragraphs: [
    "Vacances en livres est portée par une coalition d'organisations culturelles haïtiennes — libraires, éditeurs, bibliothèques associatives et enseignants — réunis autour d'une conviction simple : la lecture n'est pas un luxe.",
    "Chaque été, le temps d'une journée, la coalition transforme un lieu public en bibliothèque de quartier à ciel ouvert : trente auteurs en signature, des tables rondes, des ateliers jeunesse, et des familles qui repartent avec des livres. L'entrée reste accessible — 500 HTG, gratuite pour les enfants de 14 ans et moins.",
    "Au-delà de l'événement, la coalition travaille à rapprocher le public haïtien du livre : accompagner les auteurs, soutenir les libraires et les maisons d'édition, et donner aux enfants le goût de lire.",
  ],
  valeurs: [
    {
      titre: "Accessible",
      texte: "Un tarif juste et l'entrée gratuite pour les enfants : lire ne doit exclure personne.",
    },
    {
      titre: "Collective",
      texte: "Libraires, éditeurs, bibliothèques et enseignants avancent ensemble, sous une même bannière.",
    },
    {
      titre: "Ancrée",
      texte: "Un événement fait en Haïti, pour le public haïtien et sa diaspora.",
    },
  ],
  staff: [
    { nom: "À confirmer", role: "Coordination générale" },
    { nom: "À confirmer", role: "Programmation & auteurs" },
    { nom: "À confirmer", role: "Partenariats & sponsors" },
    { nom: "À confirmer", role: "Communication & médias" },
    { nom: "À confirmer", role: "Logistique & accueil" },
    { nom: "À confirmer", role: "Bénévoles" },
  ],
};
