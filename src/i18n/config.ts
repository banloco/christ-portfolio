export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];

/** Adresse de la page d'accueil de chaque langue. */
export const homePath: Record<Locale, string> = { fr: "/", en: "/en/" };

export const ogLocale: Record<Locale, string> = { fr: "fr_FR", en: "en_US" };
