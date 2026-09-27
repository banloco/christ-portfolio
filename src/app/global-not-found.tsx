import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { fontClasses } from "@/components/RootShell";
import fr from "@/i18n/fr";
import en from "@/i18n/en";

export const metadata: Metadata = {
  title: "404 — Christ Banidje",
  robots: { index: false },
};

// Page 404 unique (le site a deux mises en page racines, une par langue) : affichée en FR et EN.
export default function GlobalNotFound() {
  return (
    <html lang="fr" className={`${fontClasses} antialiased`}>
      <body className="grid min-h-screen place-items-center bg-page px-5 font-sans text-fg">
        <main className="max-w-md text-center">
          <p className="font-display text-7xl font-extrabold text-accent">404</p>
          <h1 className="mt-6 font-display text-2xl font-semibold">{fr.notFound.title}</h1>
          <p className="mt-2 text-muted">{fr.notFound.text}</p>
          <p lang="en" className="mt-1 text-sm text-muted">{en.notFound.text}</p>
          <div className="mt-8 flex justify-center gap-3">
            <Link href="/" className="rounded-lg bg-night px-5 py-2.5 font-semibold text-white">{fr.notFound.back}</Link>
            <Link href="/en/" lang="en" className="rounded-lg border border-line-strong bg-surface px-5 py-2.5 font-semibold">{en.notFound.back}</Link>
          </div>
        </main>
      </body>
    </html>
  );
}
