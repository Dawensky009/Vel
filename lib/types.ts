// Content model for the VEL platform. These shapes are the contract between the
// data layer (lib/content.ts) and the UI. A future custom backend must return
// the same shapes — then only lib/content.ts changes, never the pages.

export type Statut = "a-venir" | "passe";

export interface TimelineItem {
  heure: string;
  label: string;
}

export interface Personne {
  nom: string;
  role?: string;
  bio?: string;
  photo?: string; // path under /public
}

export interface MaisonEdition {
  slug: string;
  nom: string;
  logo?: string;
  description?: string;
  site?: string;
}

export interface Edition {
  annee: string; // slug, e.g. "2026"
  titre: string; // "Vacances en livres"
  tagline: string; // "L'événement de l'été"
  statut: Statut;
  dateLabel: string; // "Samedi 15 août 2026"
  dateISO?: string; // "2026-08-15"
  horaires?: string; // "9h00 – 18h30"
  lieu: string; // "Palais Municipal de Delmas"
  ville?: string; // "Delmas, Ouest, Haïti"
  affiche?: string; // poster path
  resume: string; // short description (archive card / home)
  guest?: Personne; // invité d'honneur
  maisonsEdition?: string[]; // publisher slugs
  timeline?: TimelineItem[];
}

export interface Communique {
  slug: string;
  titre: string;
  date: string; // ISO
  edition?: string; // edition annee ref
  categorie?: string;
  couverture?: string; // path under /public
  extrait: string;
  corpsHtml: string; // rendered HTML from the markdown body
}

export interface Membre {
  nom: string;
  role: string;
  photo?: string; // path under /public
  bio?: string;
}

export interface Valeur {
  titre: string;
  texte: string;
}

export interface Organisation {
  nom: string;
  mission: string;
  paragraphs: string[];
  valeurs: Valeur[];
  staff: Membre[];
}
