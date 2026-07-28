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
];
