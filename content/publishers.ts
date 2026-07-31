import type { MaisonEdition } from "@/lib/types";

// Maisons d'édition présentes. Ajoutez le logo (fond transparent) dès réception :
// logo: "/images/editeurs/<slug>.png".
export const publishers: MaisonEdition[] = [
  {
    slug: "correctpro",
    nom: "CorrectPro",
    logo: "/images/editeurs/correctpro.jpg",
    site: "https://www.correctproht.com",
    description: "Maison d'édition partenaire de l'édition 2026.",
  },
  {
    slug: "edisyon-freda",
    nom: "Edisyon Freda",
    logo: "/images/editeurs/freda.jpg",
    description: "Maison d'édition partenaire de l'édition 2026.",
  },
  {
    slug: "couleur-dencre",
    nom: "Éditions couleur d'encre",
    logo: "/images/editeurs/couleur-dencre.jpg",
    description: "Maison d'édition partenaire de l'édition 2026.",
  },
];
