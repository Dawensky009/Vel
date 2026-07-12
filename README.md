# Vacances en livres — plateforme officielle

Site officiel de **Vacances en livres**, *L'événement de l'été* — événement de promotion
du livre organisé par une coalition d'organisations culturelles en Haïti.
Prochaine édition : **samedi 15 août 2026**, Palais Municipal de Delmas.

Au-delà de la page événement, c'est une **plateforme** : communiqués officiels, archive
des éditions, et (à venir) annuaires auteurs / éditeurs / livres et billetterie.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**.
- **CSS design system** maison (`app/globals.css`) — palette et typographie verrouillées.
  Polices **Alegreya / Manrope / Caveat** auto-hébergées (`next/font`).
- Imagerie via **`next/image`** ; motion léger maison (parallaxe rAF, reveals
  IntersectionObserver), `prefers-reduced-motion`-safe, **sans librairie d'animation**.
- Contenu via une **couche de données échangeable** (voir plus bas).
- Prêt pour **Vercel** (statique + SSG + fonctions serverless).

## Développer / build

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
```

## Routes

| Route | Contenu |
|---|---|
| `/` | Home hub : hero du prochain événement, communiqué à la une, invité d'honneur, maisons d'édition, dernières actualités, billetterie, infos |
| `/actualites` · `/actualites/[slug]` | Communiqués officiels (liste + article) |
| `/editions` · `/editions/[annee]` | Archive des éditions + détail complet d'une édition |
| `/a-propos` | L'organisation (mission, valeurs) et le staff |
| `/api/health` | Endpoint Node.js (monitoring) |

## Publier du contenu

Le contenu passe par **`lib/content.ts`** (la couche de données). Aujourd'hui elle lit des
fichiers locaux ; **plus tard, on remplace l'intérieur de ces fonctions par des appels à
votre backend — les pages ne changent pas.**

- **Ajouter un communiqué :** créer un fichier `content/communiques/mon-communique.md`
  (frontmatter `titre`, `date`, `categorie`, `extrait` + corps Markdown). Il apparaît
  automatiquement dans `/actualites` et sur la home.
- **Ajouter / modifier une édition :** éditer `content/editions.ts` (une édition à venir,
  des éditions passées avec `statut: "passe"` remplissent l'archive).
- **Maisons d'édition :** `content/publishers.ts` (remplacer les emplacements « à
  confirmer » par les vrais éditeurs + logos).
- **Invité d'honneur :** champ `guest` sur l'édition dans `content/editions.ts`.
- **Organisation & staff (page À propos) :** éditer `content/organisation.ts` (mission, valeurs, membres du staff avec rôles et portraits).

Les types du modèle de contenu sont dans **`lib/types.ts`** — c'est le contrat que le futur
backend devra respecter.

## Structure

```
app/            layout partagé (nav/footer), globals.css, pages (home, actualites, editions), api/health
components/     Nav, Hero, sections (EventStory, Gallery, Programme, Sponsors, FeatureBand,
               Billetterie, Infos, Faq, PrendrePart, Footer), Parallax, RevealController,
               + hub (CommuniqueFeature, CommuniqueCard, GuestOfHonour, PublishersList,
               EditionCard, EditionHeader, MarkdownBody)
lib/           types.ts (modèle), content.ts (couche de données — le point d'accroche backend)
content/       editions.ts, publishers.ts, communiques/*.md
public/        images/ (photos), Annonces.jpeg (affiche/OG), Logo_vel.jpeg
```

## À venir (lots suivants)

Annuaires **auteurs / livres / maisons d'édition** (fiches complètes) ; **réservation /
achat de billets en ligne** (WhatsApp + MonCash en intérim) ; **backend maison** (la couche
`lib/` est prête à l'accueillir).

## À confirmer avec le staff

Liste des 30 auteurs · invité d'honneur · vraies maisons d'édition + logos · sponsors ·
repère exact de la carte · numéro MonCash · logo SVG HD · réseaux sociaux · domaine.

---

Contexte stratégique et système visuel : [`PRODUCT.md`](./PRODUCT.md) et
[`DESIGN.md`](./DESIGN.md). Le prototype statique d'origine reste dans [`brand/`](./brand).
