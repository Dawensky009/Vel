/**
 * Adresse canonique du site. Une seule définition, partagée par les
 * métadonnées, le plan du site et le robots.txt — trois copies finiraient par
 * diverger le jour d'un changement de domaine.
 */
export const SITE_URL = "https://vacancesenlivres.org";

/** Le site est-il derrière la page « en préparation » ? */
export const enMaintenance = () => process.env.MAINTENANCE_MODE === "on";
