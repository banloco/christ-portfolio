const fr = {
  meta: {
    title: "Christ Banidje — Développeur Fullstack & Data / IA",
    description:
      "Développeur fullstack et data / IA basé à Abomey-Calavi (Bénin) : applications web, machine learning, automatisation et cybersécurité. Disponible pour missions freelance et opportunités.",
  },
  nav: {
    about: "À propos",
    expertise: "Expertise",
    experience: "Parcours",
    projects: "Projets",
    skills: "Compétences",
    contact: "Contact",
    menu: "Menu",
    close: "Fermer",
    switchLang: "English",
    switchLangLabel: "Read in English",
  },
  hero: {
    badge: "Disponible pour missions freelance et opportunités",
    kicker: "Développeur Fullstack · Data / IA · Cybersécurité",
    titleStart: "Je conçois des",
    rotating: ["applications web", "modèles d'IA", "pipelines data", "outils de sécurité", "automatisations"],
    titleEnd: "qui font gagner du temps.",
    greeting: "Salut, moi c'est",
    intro:
      "Basé à Abomey-Calavi, formé à Epitech et juriste de formation, je relie le code, la donnée et les enjeux métier pour livrer des solutions à l'impact mesurable.",
    ctaProjects: "Voir mes projets",
    ctaContact: "Me contacter",
    cv: "Télécharger mon CV",
    photoAlt: "Portrait de Christ Banidje",
    location: "Abomey-Calavi, Bénin",
    stats: [
      { value: "~90 %", label: "de temps de détection d'intrusion en moins" },
      { value: "+40 %", label: "de prospects qualifiés pour un client" },
      { value: "2", label: "sites e-commerce livrés en production" },
      { value: "2×", label: "plus rapide que les délais estimés" },
    ],
  },
  about: {
    label: "À propos",
    title: "Un profil hybride, tourné vers les résultats",
    paragraphs: [
      "Je suis développeur fullstack et data / IA, et co-fondateur de l'agence digitale Danxo Labs. Au quotidien, je construis des applications web complètes, j'entraîne des modèles de machine learning et j'automatise les tâches répétitives qui ralentissent les équipes.",
      "Mon parcours n'est pas linéaire : titulaire d'une licence en droit public, je me suis tourné vers le développement puis vers la data et l'IA à Epitech Bénin. Ce double regard m'aide à cerner les enjeux métier, réglementaires et de protection des données avant d'écrire la première ligne de code.",
      "Je travaille avec un workflow IA-first (Claude Code, Cursor, Codex, Replit) pour itérer vite sans sacrifier la qualité. Mon objectif : contribuer à des projets web, mobile, CRM et IA à impact réel, avec une exposition internationale.",
    ],
    facts: [
      { label: "Basé à", value: "Abomey-Calavi, Bénin" },
      { label: "Langues", value: "Français · Anglais (C1) · Espagnol" },
      { label: "Entreprise", value: "Co-fondateur de Danxo Labs" },
      { label: "Formation", value: "Epitech Bénin · Licence en droit public" },
      { label: "Qualités", value: "Esprit d'analyse, autonomie, adaptabilité, travail d'équipe" },
    ],
  },
  expertise: {
    label: "Expertise",
    title: "Plus qu'un développeur fullstack",
    intro: "Quatre casquettes, un même objectif : des solutions utiles, livrées vite.",
    items: [
      {
        icon: "code",
        title: "Développement fullstack",
        text: "Sites, plateformes et API de bout en bout : React, Next.js, Vue.js, Laravel, Flask, FastAPI, bases SQL et NoSQL, déploiement sur VPS.",
      },
      {
        icon: "brain",
        title: "Data & intelligence artificielle",
        text: "Machine learning, deep learning, NLP et vision par ordinateur avec Scikit-Learn, TensorFlow et Keras ; pipelines temps réel avec Kafka et Spark.",
      },
      {
        icon: "shield",
        title: "Cybersécurité",
        text: "Détection d'intrusions par apprentissage automatique, analyse de flux réseau et d'anomalies, tableaux de bord d'alertes en temps réel.",
      },
      {
        icon: "bolt",
        title: "Automatisation & chatbots",
        text: "Chatbots WhatsApp dopés à l'IA, intégrations de l'API OpenAI et automatisation de processus pour supprimer les tâches manuelles.",
      },
    ],
  },
  experience: {
    label: "Parcours",
    title: "Expérience professionnelle",
    items: [
      {
        period: "2026 — aujourd'hui",
        role: "Co-fondateur",
        org: "Danxo Labs — agence digitale, Bénin",
        points: [
          "Co-fondé une agence digitale qui conçoit des sites vitrines, des boutiques en ligne, des applications et des solutions IA sur mesure.",
          "Conçu et développé le site de l'agence (danxolabs.com) : Next.js, version française et anglaise, assistant IA pour les visiteurs, blog et diagnostic gratuit.",
        ],
        tags: ["Entrepreneuriat", "Next.js", "TypeScript", "IA"],
      },
      {
        period: "2026",
        role: "Développeur IA & Cybersécurité — stage",
        org: "CNSS — Caisse Nationale de Sécurité Sociale, siège social",
        points: [
          "Automatisé la surveillance périmétrique du réseau interne avec un modèle Random Forest qui analyse les flux de paquets en temps réel : environ 90 % de temps de détection des intrusions en moins.",
          "Intégré un tableau de bord d'alertes instantanées sur les comportements suspects, couvrant 100 % du trafic périmétrique, déployé dans l'infrastructure du siège.",
          "Supprimé les revues manuelles quotidiennes de logs grâce à l'ingestion et la classification automatiques des données réseau (détection d'outliers).",
        ],
        tags: ["Python", "Scikit-Learn", "Random Forest", "Détection d'anomalies"],
      },
      {
        period: "2025 — aujourd'hui",
        role: "Développeur Web & IA — freelance",
        org: "Clients privés, Bénin",
        points: [
          "Construit un chatbot WhatsApp IA qui mène la conversation et filtre les contacts entrants : +40 % de leads validés par mois pour le client.",
          "Livré en six semaines un site e-commerce complet pour une boutique événementielle, opérationnel dès le premier jour avec les premières commandes.",
          "Divisé par deux les délais de développement grâce à un workflow IA-first (Claude Code, Cursor, Codex).",
        ],
        tags: ["Python", "Flask", "OpenAI", "React", "Laravel", "VPS"],
      },
    ],
    education: "Formation",
    degrees: [
      { year: "2026", title: "Certification en développement Data / IA", school: "Epitech Bénin" },
      { year: "2025", title: "Certification : Introduction à l'IA par la visualisation", school: "Columbia+" },
      { year: "2025", title: "Licence en droit public", school: "FADESP — Université d'Abomey-Calavi" },
      {
        year: "2023",
        title: "Attestation en développement d'applications web et mobile",
        school: "Centre de Formation Professionnelle Le Savoir-Faire",
      },
    ],
  },
  projects: {
    label: "Projets",
    title: "Projets sélectionnés",
    intro: "Une sélection courte, avec des résultats concrets : produits en ligne, missions clients et projets open source.",
    code: "Voir le code",
    live: "Voir le site",
    private: "Code confidentiel",
    other: "Autres projets",
    illustration: "Illustration",
    more: "Tous mes dépôts sur GitHub",
  },
  skills: {
    label: "Compétences",
    title: "Ma boîte à outils",
    groups: [
      { title: "Frontend", items: ["React", "Next.js", "Vue.js", "TypeScript", "JavaScript ES6+", "Tailwind CSS", "HTML5 / CSS3"] },
      { title: "Backend", items: ["Python", "Flask", "FastAPI", "Laravel", "Symfony", "PHP", "API REST"] },
      { title: "Machine learning & IA", items: ["Scikit-Learn", "TensorFlow", "Keras", "NLP", "Computer Vision", "API OpenAI"] },
      { title: "Data engineering", items: ["Apache Kafka", "Spark", "Pandas", "dbt", "Elasticsearch", "Jupyter", "Anaconda"] },
      { title: "Bases de données", items: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Supabase"] },
      { title: "Outils & DevOps", items: ["Git", "Docker", "VPS", "PyInstaller", "Figma", "Claude Code", "Cursor", "Codex", "Replit"] },
    ],
  },
  contact: {
    label: "Contact",
    title: "Travaillons ensemble",
    intro:
      "Un projet web, une idée d'automatisation, un besoin en data ou en IA ? Écrivez-moi, je réponds rapidement.",
    name: "Votre nom",
    email: "Votre email",
    message: "Votre message",
    messagePlaceholder: "Parlez-moi de votre projet…",
    send: "Envoyer le message",
    note: "Le bouton ouvre votre messagerie avec le message prérempli.",
    subject: "Prise de contact depuis le portfolio",
    whatsapp: "Écrire sur WhatsApp",
    whatsappMessage: "Bonjour Christ, j'ai vu votre portfolio et j'aimerais échanger à propos d'un projet.",
    channels: { email: "Email", phone: "Téléphone", github: "GitHub", linkedin: "LinkedIn" },
  },
  footer: {
    rights: "Tous droits réservés.",
    top: "Retour en haut",
  },
  notFound: {
    title: "Page introuvable",
    text: "Cette page n'existe pas ou a été déplacée.",
    back: "Retour à l'accueil",
  },
};

export default fr;
export type Dictionary = typeof fr;
