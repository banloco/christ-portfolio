# Portfolio — Christ Banidje

Portfolio bilingue (français / anglais) de Christ Banidje, développeur Fullstack & Data / IA.

- **Stack** : Next.js 16 (App Router, export statique), TypeScript, Tailwind CSS 4
- **Hébergement** : Firebase Hosting, déployé automatiquement par GitHub Actions à chaque push sur `main` (aperçu sur chaque pull request)

## Démarrer

```bash
npm install
npm run dev     # http://localhost:3000 (FR) et http://localhost:3000/en/ (EN)
npm run build   # génère le site statique dans out/
```

## Modifier le contenu

| Quoi | Où |
| --- | --- |
| Textes du site (FR / EN) | `src/i18n/fr.ts` et `src/i18n/en.ts` — toute nouvelle clé doit exister dans les deux |
| Projets | `src/lib/projects.ts` (ordre du tableau = ordre d'affichage) |
| Email, téléphone, liens, CV | `src/lib/site.ts` |
| Photo, CV (PDF) | `public/` |
| Couleurs et polices | `src/app/globals.css` (`@theme`) et `src/components/RootShell.tsx` |

L'adresse publique du site (balises SEO, sitemap) vient de `NEXT_PUBLIC_SITE_URL`, par défaut `https://mon-portfolio-b839d.web.app`.

## Structure

- `src/app/(fr)` — page d'accueil française (`/`)
- `src/app/(en)/en` — page d'accueil anglaise (`/en/`)
- `src/app/global-not-found.tsx` — page 404 commune aux deux langues
- `src/components/HomePage.tsx` — toutes les sections de la page
