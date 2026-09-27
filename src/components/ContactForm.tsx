"use client";

import type { FormEvent } from "react";
import type { Dictionary } from "@/i18n/fr";
import { site } from "@/lib/site";

const field =
  "mt-2 w-full rounded-xl border border-transparent bg-surface px-4 py-3 text-fg placeholder:text-muted/60 outline-none transition-colors focus:border-night focus:bg-page";

/**
 * Le site est un export statique (sans serveur) :
 * le formulaire ouvre la messagerie du visiteur avec le message prérempli.
 */
export default function ContactForm({ t }: { t: Dictionary["contact"] }) {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(t.subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl bg-page p-6 text-fg sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-fg">
          {t.name}
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block text-sm font-medium text-fg">
          {t.email}
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
      </div>
      <label className="mt-5 block text-sm text-muted">
        {t.message}
        <textarea name="message" required rows={6} placeholder={t.messagePlaceholder} className={`${field} resize-y`} />
      </label>
      <button
        type="submit"
        className="mt-6 w-full rounded-xl bg-lime px-6 py-3.5 font-semibold text-fg transition-colors hover:bg-night hover:text-lime"
      >
        {t.send}
      </button>
      <p className="mt-3 text-center text-xs text-muted">{t.note}</p>
    </form>
  );
}
