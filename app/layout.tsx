import type { Metadata, Viewport } from "next";
import { Alegreya, Manrope, Caveat } from "next/font/google";
import "./globals.css";

const alegreya = Alegreya({
  subsets: ["latin"],
  weight: ["400", "800"],
  style: ["normal", "italic"],
  variable: "--font-alegreya",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-caveat",
  display: "swap",
});

const SITE_URL = "https://vacancesenlivres.ht";
const DESCRIPTION =
  "Vacances en livres : trente auteurs en signature au Palais Municipal de Delmas, le samedi 15 août 2026. 500 HTG par adulte, gratuit pour les enfants de 14 ans et moins.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Vacances en livres — L'événement de l'été · 15 août 2026, Delmas",
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Vacances en livres",
    title: "Vacances en livres — L'événement de l'été",
    description:
      "Trente auteurs en signature au Palais Municipal de Delmas, le 15 août 2026. 500 HTG · gratuit pour les enfants de 14 ans et moins.",
    images: [
      {
        url: "/Annonces.jpeg",
        width: 1080,
        height: 1080,
        alt: "Affiche officielle de Vacances en livres 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vacances en livres — L'événement de l'été",
    description:
      "Trente auteurs en signature au Palais Municipal de Delmas, le 15 août 2026.",
    images: ["/Annonces.jpeg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#F4EDE0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`no-js ${alegreya.variable} ${manrope.variable} ${caveat.variable}`}
      suppressHydrationWarning
    >
      <body id="top">
        {/* Flip no-js → has-js before paint so content is fully visible without JS,
            and the scroll-reveal only enriches an already-visible default. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.className=document.documentElement.className.replace('no-js','has-js')",
          }}
        />
        {children}
      </body>
    </html>
  );
}
