import type { MetadataRoute } from "next";
import { homePath } from "@/i18n/config";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { fr: `${site.url}${homePath.fr}`, en: `${site.url}${homePath.en}` };
  return (["fr", "en"] as const).map((lang) => ({
    url: languages[lang],
    changeFrequency: "monthly",
    priority: lang === "fr" ? 1 : 0.9,
    alternates: { languages },
  }));
}
