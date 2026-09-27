import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import MotionProvider from "@/components/motion/MotionProvider";
import ScrollProgress from "@/components/motion/ScrollProgress";
import { homePath, locales, ogLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { site } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"], weight: ["500", "600", "700", "800"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"], weight: ["400", "500"] });

export const fontClasses = `${jakarta.variable} ${inter.variable} ${jetbrains.variable}`;

export function buildMetadata(lang: Locale): Metadata {
  const t = getDictionary(lang).meta;
  return {
    metadataBase: new URL(site.url),
    title: t.title,
    description: t.description,
    authors: [{ name: site.name }],
    alternates: {
      canonical: homePath[lang],
      languages: { fr: homePath.fr, en: homePath.en, "x-default": homePath.fr },
    },
    openGraph: {
      type: "profile",
      locale: ogLocale[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => ogLocale[l]),
      title: t.title,
      description: t.description,
      url: homePath[lang],
      siteName: site.name,
      images: [{ url: site.photo, width: 960, height: 1280, alt: site.name }],
    },
    twitter: { card: "summary", title: t.title, description: t.description, images: [site.photo] },
  };
}

// Fiche « Person » lue par les moteurs de recherche.
function personJsonLd(lang: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: new URL(homePath[lang], site.url).href,
    image: new URL(site.photo, site.url).href,
    jobTitle: lang === "fr" ? "Développeur Fullstack & Data / IA" : "Full-Stack & Data / AI Developer",
    email: `mailto:${site.email}`,
    telephone: site.phone,
    address: { "@type": "PostalAddress", addressLocality: "Abomey-Calavi", addressCountry: "BJ" },
    alumniOf: [{ "@type": "EducationalOrganization", name: "Epitech Bénin" }],
    knowsLanguage: ["fr", "en", "es"],
    worksFor: { "@type": "Organization", name: "Danxo Labs", url: "https://www.danxolabs.com" },
    sameAs: [site.github, site.linkedin],
  };
}

const revealBootstrap =
  "var d=document.documentElement;d.classList.add('js');setTimeout(function(){if(!('revealReady' in d.dataset))d.classList.remove('js')},2500)";

export default function RootShell({ lang, children }: { lang: Locale; children: ReactNode }) {
  const t = getDictionary(lang);
  return (
    <html lang={lang} className={`${fontClasses} antialiased`} suppressHydrationWarning>
      {/* Règle écrite pour pages/ (next/head) : sans objet dans app/. */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        {/* Site clair uniquement : empêche le mode sombre forcé du navigateur de l'assombrir. */}
        <meta name="color-scheme" content="only light" />
        {/* Active les animations d'apparition si le JS tourne ; si le script d'animation n'a pas démarré après 2,5 s, tout le contenu est affiché. */}
        <script dangerouslySetInnerHTML={{ __html: revealBootstrap }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd(lang)) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-page font-sans text-fg">
        <MotionProvider>
          <ScrollProgress />
          <Header lang={lang} t={t.nav} />
          <main>{children}</main>
          <Footer t={t.footer} />
        </MotionProvider>
        <RevealObserver />
      </body>
    </html>
  );
}
