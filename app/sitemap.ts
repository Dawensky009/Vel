import type { MetadataRoute } from "next";
import { getEditions, getCommuniques } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

/**
 * Plan du site, construit à partir du contenu réel : ajouter une édition ou un
 * communiqué le fait entrer ici sans retoucher ce fichier.
 *
 * Volontairement absents : /maintenance (page d'attente, jamais un résultat de
 * recherche) et /api/health (sonde de monitoring).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${SITE_URL}${path}`;
  const communiques = getCommuniques();
  const editions = getEditions();

  // Le dernier communiqué date la page d'accueil et la liste d'actualités.
  const dernierCommunique = communiques
    .map((c) => new Date(c.date))
    .sort((a, b) => b.getTime() - a.getTime())[0];

  return [
    { url: url("/"), lastModified: dernierCommunique, changeFrequency: "weekly", priority: 1 },
    { url: url("/editions"), changeFrequency: "monthly", priority: 0.8 },
    ...editions.map((e) => ({
      url: url(`/editions/${e.annee}`),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    { url: url("/actualites"), lastModified: dernierCommunique, changeFrequency: "weekly", priority: 0.7 },
    ...communiques.map((c) => ({
      url: url(`/actualites/${c.slug}`),
      lastModified: new Date(c.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    { url: url("/a-propos"), changeFrequency: "yearly", priority: 0.5 },
    { url: url("/contact"), changeFrequency: "yearly", priority: 0.5 },
  ];
}
