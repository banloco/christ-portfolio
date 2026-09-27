import type { MetadataRoute } from "next";
import { homePath } from "@/i18n/config";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => new URL(path, site.url).href;
  const languages = { fr: url(homePath.fr), en: url(homePath.en) };
  const lastModified = new Date();
  // Images associées à chaque page (portrait, aperçu de partage, captures de projets).
  const images = (lang: "fr" | "en") => [
    url(site.photo),
    url(`/og-${lang}.jpg`),
    url("/projects/eolekare-shop.webp"),
    url("/projects/danxolabs.webp"),
    url("/projects/olist-dashboard.webp"),
  ];
  return (["fr", "en"] as const).map((lang) => ({
    url: languages[lang],
    lastModified,
    changeFrequency: "monthly",
    priority: lang === "fr" ? 1 : 0.9,
    alternates: { languages },
    images: images(lang),
  }));
}
