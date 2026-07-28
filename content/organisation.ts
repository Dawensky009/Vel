import type { Organisation } from "@/lib/types";

// L'organisation et le staff. Remplacez les membres « À confirmer » par les vrais
// noms et portraits dès que la coalition les valide.
export const organisation: Organisation = {
  nom: "Organisation Vacances en Livres",
  mission: "Démocratiser l'accès à la lecture en Haïti.",
  // Texte de présentation retiré à la demande du client (garde mission + valeurs).
  paragraphs: [],
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
