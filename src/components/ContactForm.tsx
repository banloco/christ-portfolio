"use client";

import type { FormEvent } from "react";
import type { Dictionary } from "@/i18n/fr";
import { site } from "@/lib/site";

const field =
  "mt-2 w-full rounded-xl border border-line-strong bg-panel-2 px-4 py-3 text-fg placeholder:text-muted/60 outline-none transition-colors focus:border-cyan";

/**
 * Le site est un export statique (Firebase Hosting, sans serveur) :
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
    <form onSubmit={onSubmit} className="border-gradient rounded-3xl bg-panel/80 p-6 backdrop-blur sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm text-muted">
          {t.name}
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block text-sm text-muted">
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
        className="bg-gradient-brand mt-6 w-full rounded-full px-6 py-3.5 font-medium text-ink transition-transform hover:-translate-y-0.5"
      >
        {t.send}
      </button>
      <p className="mt-3 text-center text-xs text-muted">{t.note}</p>
    </form>
  );
}
