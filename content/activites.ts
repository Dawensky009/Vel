import type { Activite } from "@/lib/types";

// Les activités de l'année (conférences de presse, ateliers, lancements, l'événement).
// Chaque activité peut porter des images et des vidéos (URL d'intégration YouTube /
// Facebook / Vimeo). Remplacez les médias d'illustration par les vrais.
export const activites: Activite[] = [
  {
    slug: "conference-de-presse-lancement",
    titre: "Conférence de presse de lancement",
    type: "Conférence de presse",
    date: "2026-07-01",
    edition: "2026",
    lieu: "Palais Municipal de Delmas",
    statut: "passe",
    resume:
      "La coalition dévoile la date, le lieu et les grandes lignes de l'édition 2026 devant la presse.",
    couverture: "/images/library-corner.jpg",
    paragraphs: [
      "La coalition Vacances en livres a présenté officiellement son édition 2026 lors d'une conférence de presse : date, lieu, tarifs et premières annonces sur la programmation.",
      "Journalistes, partenaires et membres de la coalition étaient réunis pour lancer la campagne de l'été et rappeler l'ambition du projet : rapprocher le public haïtien du livre.",
    ],
    images: ["/images/library-corner.jpg", "/images/hand-book.jpg", "/images/poetry.jpg"],
    videos: [
      {
        url: "https://www.youtube.com/embed/yp8T5AX0ng0",
        titre: "Vidéo d'illustration — à remplacer par la captation officielle.",
      },
    ],
  },
  {
    slug: "rencontre-maisons-edition",
    titre: "Rencontre avec les maisons d'édition",
    type: "Rencontre professionnelle",
    date: "2026-07-05",
    edition: "2026",
    lieu: "Delmas",
    statut: "passe",
    resume:
      "Éditeurs et libraires échangent avec la coalition sur leur participation à l'édition 2026.",
    couverture: "/images/book-blanket.jpg",
    paragraphs: [
      "Une rencontre de travail a réuni maisons d'édition et libraires autour de leur présence à l'événement : espaces, catalogues et accompagnement des auteurs en signature.",
    ],
    images: ["/images/book-blanket.jpg", "/images/pages-cream.jpg"],
  },
  {
    slug: "ouverture-billetterie",
    titre: "Ouverture de la billetterie",
    type: "Annonce",
    date: "2026-07-08",
    edition: "2026",
    statut: "passe",
    resume:
      "Les réservations sont ouvertes : 500 HTG l'adulte, gratuit pour les enfants de 14 ans et moins.",
    couverture: "/images/pages-bokeh.jpg",
    paragraphs: [
      "La billetterie de l'édition 2026 est ouverte. La réservation se fait par WhatsApp ; le paiement par MonCash ou sur place, en gourdes comme en dollars.",
    ],
    images: ["/images/pages-bokeh.jpg"],
  },
  {
    slug: "ateliers-jeunesse-preparation",
    titre: "Préparation des ateliers jeunesse",
    type: "Atelier",
    date: "2026-07-28",
    edition: "2026",
    lieu: "Delmas",
    statut: "a-venir",
    resume:
      "Les animateurs préparent les ateliers « dessine ton propre livre » et les espaces enfants du 15 août.",
    couverture: "/images/boy-reading.jpg",
    paragraphs: [
      "En amont de l'événement, l'équipe met au point les ateliers jeunesse et l'espace dédié aux enfants — au cœur d'une journée pensée pour les familles.",
    ],
    images: ["/images/boy-reading.jpg", "/images/child-dusk.jpg"],
  },
  {
    slug: "vacances-en-livres-2026",
    titre: "Vacances en livres — la journée",
    type: "Événement",
    date: "2026-08-15",
    edition: "2026",
    lieu: "Palais Municipal de Delmas",
    statut: "a-venir",
    resume:
      "Le grand jour : trente auteurs en signature, tables rondes, ateliers jeunesse et lecture publique en clôture.",
    couverture: "/images/hero-reading.jpg",
    paragraphs: [
      "Le 15 août, le Palais Municipal de Delmas devient une bibliothèque de quartier à ciel ouvert, de 9h00 à 18h30.",
      "Retrouvez tout le détail — programme, tarifs, infos pratiques — sur la page de l'édition 2026.",
    ],
    images: ["/images/hero-reading.jpg", "/images/pages-cream.jpg", "/images/hand-book.jpg"],
  },
];
