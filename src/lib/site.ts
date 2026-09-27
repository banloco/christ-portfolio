/** Coordonnées et liens communs aux deux langues. */
export const site = {
  name: "Christ Banidje",
  // Adresse publique : NEXT_PUBLIC_SITE_URL si elle est définie, sinon l'adresse Vercel du projet.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "https://christbanidje.me"),
  email: "christ.banidje@epitech.eu",
  phone: "+229 01 69 34 95 02",
  whatsapp: "2290169349502",
  github: "https://github.com/banloco",
  linkedin: "https://www.linkedin.com/in/ay%C3%A9y%C3%A8mi-banidje-751474334/",
  photo: "/christ-banidje.jpg",
  cv: "/christ_banidje_developpeur_dataia.pdf",
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
