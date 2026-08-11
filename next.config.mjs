/**
 * En-têtes de sécurité.
 *
 * Pas de `Content-Security-Policy` complète ici : Next injecte des scripts en
 * ligne pour l'hydratation, une politique `script-src` stricte les bloquerait
 * et casserait le site. Les directives retenues ci-dessous n'ont pas cet effet
 * de bord — une CSP complète demanderait un nonce par requête, donc un
 * middleware qui rend chaque page dynamique : à faire séparément, en connaissance
 * de cause.
 */
const securityHeaders = [
  // HTTPS obligatoire pendant deux ans, sous-domaines compris.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Interdit au navigateur de « deviner » un type MIME (image piégée en script).
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Personne n'encadre le site dans une iframe : anti-clickjacking.
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Content-Security-Policy", value: "frame-ancestors 'self'" },
  // Le referrer complet ne sort pas du site.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Aucune de ces capacités n'est utilisée : on les ferme.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
