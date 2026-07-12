// Data-access layer. Today it reads local files in content/. Tomorrow, swap the
// bodies of these functions for calls to your own backend — the pages don't change.
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import { editions } from "@/content/editions";
import { publishers } from "@/content/publishers";
import { organisation } from "@/content/organisation";
import { activites } from "@/content/activites";
import type {
  Edition,
  Communique,
  MaisonEdition,
  Personne,
  Organisation,
  Activite,
} from "./types";

const COMMUNIQUES_DIR = path.join(process.cwd(), "content", "communiques");

/* ---------- Éditions ---------- */

export function getEditions(): Edition[] {
  return [...editions].sort((a, b) => b.annee.localeCompare(a.annee));
}

export function getEdition(annee: string): Edition | undefined {
  return editions.find((e) => e.annee === annee);
}

export function getUpcomingEdition(): Edition {
  return editions.find((e) => e.statut === "a-venir") ?? getEditions()[0];
}

export function getGuestOfHonour(annee?: string): Personne | undefined {
  const ed = annee ? getEdition(annee) : getUpcomingEdition();
  return ed?.guest;
}

/* ---------- Activités (agenda / timeline) ---------- */

export function getActivites(annee?: string): Activite[] {
  const list = annee ? activites.filter((a) => a.edition === annee) : [...activites];
  // chronologique (du plus ancien au plus récent) — la timeline suit l'année
  return list.sort((a, b) => a.date.localeCompare(b.date));
}

export function getActivite(slug: string): Activite | undefined {
  return activites.find((a) => a.slug === slug);
}

/* ---------- Organisation ---------- */

export function getOrganisation(): Organisation {
  return organisation;
}

/* ---------- Maisons d'édition ---------- */

export function getPublishers(slugs?: string[]): MaisonEdition[] {
  if (!slugs) return publishers;
  return slugs
    .map((s) => publishers.find((p) => p.slug === s))
    .filter((p): p is MaisonEdition => Boolean(p));
}

/* ---------- Communiqués ---------- */

export function getCommuniques(): Communique[] {
  if (!fs.existsSync(COMMUNIQUES_DIR)) return [];
  return fs
    .readdirSync(COMMUNIQUES_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => parseCommunique(f))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getCommunique(slug: string): Communique | undefined {
  return getCommuniques().find((c) => c.slug === slug);
}

export function getFeaturedCommunique(): Communique | undefined {
  return getCommuniques()[0];
}

function parseCommunique(filename: string): Communique {
  const slug = filename.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(COMMUNIQUES_DIR, filename), "utf8");
  const { data, content } = matter(raw);
  const corpsHtml = marked.parse(content, { async: false }) as string;
  return {
    slug,
    titre: (data.titre as string) ?? slug,
    date: (data.date as string) ?? "",
    edition: data.edition as string | undefined,
    categorie: data.categorie as string | undefined,
    couverture: data.couverture as string | undefined,
    extrait: (data.extrait as string) ?? "",
    corpsHtml,
  };
}

/* ---------- Helpers ---------- */

export function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso + "T00:00:00");
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
