import type { CreneauAnimation } from "@/lib/types";

// L'artiste mis en avant sur l'accueil. Pour changer de tête d'affiche :
// remplacer les champs ci-dessous et déposer le portrait correspondant dans
// public/images/artistes/.
export const artisteInvite = {
  nom: "BIC",
  photo: "/images/artistes/bic.jpg",
  photoAlt: "Portrait de BIC.",
  accroche:
    "Sa venue est confirmée : BIC monte sur scène le 15 août, parmi les performances artistiques de la soirée.",
} as const;

// La scène du 15 août : ce qui se joue, quand, et par qui.
//
// Portraits : découpés dans les visuels d'annonce fournis (Ressources/Artiste),
// hors du bandeau tarifs et du pied de page — seul le portrait est publié, les
// prix affichés sur ces visuels ne sont pas repris ici. Les DJ viennent de
// Ressources/Animation/DJ, la photo d'ambiance de Ressources/Animation.
//
// Movado est présent dans les deux dossiers source (« Movado » côté artistes,
// « DJ Movado » côté DJ) : il est listé une seule fois, avec les DJ.
export const animations: CreneauAnimation[] = [
  {
    heure: "9h00 – 17h00",
    titre: "Animation musicale",
    detail:
      "T-Sax et les DJ se relaient sur scène, en alternance, pendant toute la journée de ventes et de dédicaces.",
    // Pas de photo d'ambiance ici : la seule disponible est celle de T-Sax au
    // saxophone, dont son portrait est déjà tiré — le même homme, la même
    // chemise et le même mur apparaissaient deux fois dans le même créneau.
    artistes: [
      { nom: "T-Sax", role: "Saxophone", photo: "/images/artistes/t-sax.jpg" },
      { nom: "DJ Mayz", role: "DJ", photo: "/images/artistes/dj-mayz.jpg" },
      { nom: "DJ Movado", role: "DJ", photo: "/images/artistes/dj-movado.jpg" },
      { nom: "DJ RUD", role: "DJ", photo: "/images/artistes/dj-rud.jpg" },
    ],
  },
  {
    heure: "À partir de 17h00",
    titre: "Slam",
    detail: "Samuel ouvre la soirée artistique.",
    artistes: [{ nom: "Samuel", role: "Slam", photo: "/images/artistes/samuel.jpg" }],
  },
  {
    heure: "À la suite",
    titre: "Performances artistiques",
    detail: "La scène se poursuit avec les artistes confirmés de l'édition.",
    artistes: [
      { nom: "BIC", photo: "/images/artistes/bic.jpg" },
      { nom: "Ricot", photo: "/images/artistes/ricot.jpg" },
      { nom: "Titi Congo", photo: "/images/artistes/titi-congo.jpg" },
    ],
  },
];
