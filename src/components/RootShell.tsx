import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
import { getProjects } from "@/lib/projects";

const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"], weight: ["500", "600", "700", "800"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"], weight: ["400", "500"] });

export const fontClasses = `${jakarta.variable} ${inter.variable} ${jetbrains.variable}`;

export const viewport: Viewport = { themeColor: "#ffffff" };

export function buildMetadata(lang: Locale): Metadata {
  const t = getDictionary(lang).meta;
  const ogImage = { url: `/og-${lang}.jpg`, width: 1200, height: 630, alt: t.imageAlt };
  const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
  return {
    metadataBase: new URL(site.url),
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    applicationName: site.name,
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    category: "technology",
    alternates: {
      canonical: homePath[lang],
      languages: { fr: homePath.fr, en: homePath.en, "x-default": homePath.fr },
    },
    openGraph: {
      type: "profile",
      firstName: "Christ",
      lastName: "Banidje",
      locale: ogLocale[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => ogLocale[l]),
      title: t.title,
      description: t.description,
      url: homePath[lang],
      siteName: site.name,
      images: [ogImage],
    },
    twitter: { card: "summary_large_image", title: t.title, description: t.description, images: [ogImage] },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    },
    ...(googleVerification && { verification: { google: googleVerification } }),
  };
}

/**
 * Données structurées (schema.org) lues par Google : le site, la page de profil,
 * la personne (métier, compétences, formation, entreprise, réseaux) et ses projets.
 */
function structuredData(lang: Locale) {
  const t = getDictionary(lang);
  const abs = (path: string) => new URL(path, site.url).href;
  const personId = abs("/#christ-banidje");
  const pageUrl = abs(homePath[lang]);
  const skills = t.skills.groups.flatMap((g) => g.items);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": abs("/#website"),
        url: abs("/"),
        name: site.name,
        inLanguage: ["fr", "en"],
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${pageUrl}#page`,
        url: pageUrl,
        name: t.meta.title,
        description: t.meta.description,
        inLanguage: lang,
        isPartOf: { "@id": abs("/#website") },
        primaryImageOfPage: abs(`/og-${lang}.jpg`),
        mainEntity: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: site.name,
        givenName: "Christ",
        familyName: "Banidje",
        url: pageUrl,
        image: abs(site.photo),
        jobTitle: t.meta.jobTitle,
        description: t.meta.description,
        email: `mailto:${site.email}`,
        telephone: site.phone,
        address: { "@type": "PostalAddress", addressLocality: "Abomey-Calavi", addressCountry: "BJ" },
        knowsLanguage: ["fr", "en", "es"],
        knowsAbout: skills,
        alumniOf: [
          { "@type": "CollegeOrUniversity", name: "Epitech Bénin" },
          { "@type": "CollegeOrUniversity", name: "Université d'Abomey-Calavi" },
        ],
        worksFor: { "@type": "Organization", name: "Danxo Labs", url: "https://www.danxolabs.com" },
        sameAs: [site.github, site.linkedin],
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#projects`,
        name: t.meta.projectsList,
        itemListElement: getProjects(lang).map((project, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": project.github && !project.live ? "SoftwareSourceCode" : "CreativeWork",
            name: project.title,
            description: project.summary,
            ...(project.live || project.github ? { url: project.live ?? project.github } : {}),
            ...(project.github && { codeRepository: project.github }),
            creator: { "@id": personId },
            keywords: project.stack.join(", "),
          },
        })),
      },
    ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData(lang)) }}
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
