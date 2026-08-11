import type { MetadataRoute } from "next";
import { SITE_URL, enMaintenance } from "@/lib/site";

// Le fichier est recalculé à chaque requête : sans cela, un build fait pendant
// la maintenance figerait le « Disallow: / » jusqu'au déploiement suivant.
export const dynamic = "force-dynamic";

/**
 * Tant que la porte de maintenance est fermée, toutes les URL renvoient la page
 * d'attente : les laisser indexer ferait entrer le site dans les moteurs avec
 * « en préparation » pour seul contenu. On interdit donc tout, et l'ouverture
 * du site (MAINTENANCE_MODE ≠ "on") rétablit l'indexation et le plan du site.
 */
export default function robots(): MetadataRoute.Robots {
  if (enMaintenance()) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Page d'attente et sonde de monitoring : sans intérêt pour un moteur.
      disallow: ["/maintenance", "/api/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
