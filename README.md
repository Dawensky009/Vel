# Vacances en livres — site officiel

Site événementiel de **Vacances en livres**, *L'événement de l'été* : trente auteurs en
signature au **Palais Municipal de Delmas** (Haïti), le **samedi 15 août 2026**.
500 HTG par adulte, gratuit pour les enfants de 14 ans et moins.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript** — React côté rendu, Node.js
  côté runtime (routes API + build).
- **CSS design system** maison (`app/globals.css`) — palette et typographie verrouillées,
  aucune dépendance UI. Polices **Alegreya / Manrope / Caveat** auto-hébergées via
  `next/font`.
- Prêt pour un déploiement **Vercel** (statique + fonctions serverless) sans configuration.

## Développer

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build & production

```bash
npm run build
npm run start
```

## Structure

```
app/
  layout.tsx          Métadonnées, OG/Twitter, polices, favicon
  page.tsx            Composition de la page unique
  globals.css         Tokens + styles composants (système de design)
  icon.svg            Favicon (livre + soleil)
  api/health/route.ts Endpoint Node.js (monitoring / futur point d'intégration)
components/
  Nav.tsx             Nav collante (menu mobile, élévation au scroll, section active)
  Hero.tsx            Hero typographique + infographie « la journée »
  EventStory.tsx      L'événement (manifeste, lettrine)
  Programme.tsx       Déroulé I. Matinée / II. Après-midi
  Sponsors.tsx        Tiers en press-mention
  Billetterie.tsx     Tableau des tarifs + paiement (MonCash / sur place)
  Infos.tsx           Lieu / date / contact / accès + carte OpenStreetMap
  Faq.tsx             Questions fréquentes (<details> natifs)
  PrendrePart.tsx     Double appel : réserver / devenir partenaire
  Footer.tsx          Pied de page
  RevealController.tsx  Reveal au scroll (enrichit un défaut déjà visible)
public/
  Annonces.jpeg       Affiche officielle (image de partage OG/Twitter)
  Logo_vel.jpeg       Logo (source basse déf — SVG HD attendu du staff)
```

## Réservation & paiement

La réservation se fait via **WhatsApp** (`+509 5579-2024`) avec message pré-rempli, et le
paiement via **MonCash** ou sur place. La route `app/api/health` est le point d'accroche
prévu pour brancher plus tard un formulaire → e-mail / Airtable.

## À confirmer avec le staff

Liste des 30 auteurs · sponsors et logos HD · repère exact de la carte · date d'ouverture
des réservations en ligne · numéro MonCash officiel · logo SVG haute définition · liens
réseaux sociaux · domaine.

---

Contexte stratégique et système visuel : voir [`PRODUCT.md`](./PRODUCT.md) et
[`DESIGN.md`](./DESIGN.md). Le prototype statique d'origine reste dans [`brand/`](./brand).
