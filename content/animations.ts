import type { CreneauAnimation } from "@/lib/types";

// L'artiste mis en avant sur l'accueil, avec son affiche d'annonce officielle.
// Pour changer de tête d'affiche : remplacer les champs ci-dessous et déposer
// l'affiche correspondante dans public/images/artistes/.
export const artisteInvite = {
  nom: "BIC",
  affiche: "/images/artistes/affiche-bic.jpg",
  // L'affiche porte déjà le nom, le lieu et la date : décrite en une phrase
  // pour les lecteurs d'écran plutôt que recopiée mot à mot.
  afficheAlt:
    "Affiche d'annonce : BIC, confirmé au Palais Municipal de Delmas le 15 août 2026.",
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
    image: "/images/artistes/scene-musique.jpg",
    legende: "T-Sax au saxophone.",
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
