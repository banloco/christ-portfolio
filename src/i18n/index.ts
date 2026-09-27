import type { Locale } from "./config";
import fr from "./fr";
import en from "./en";

export const dictionaries = { fr, en } satisfies Record<Locale, unknown>;

export const getDictionary = (lang: Locale) => dictionaries[lang];
