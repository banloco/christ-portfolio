import type { Locale } from "@/i18n/config";

/** Illustrations animées pour les projets sans capture montrable (code confidentiel, application de bureau). */
export type ProjectCover = "reactor" | "radar" | "chat" | "alerts";

type ProjectText = {
  title: string;
  context: string;
  /** Une phrase d'accroche. */
  summary: string;
  description: string;
  metricLabel?: string;
  /** Points forts affichés sur les projets mis en avant. */
  highlights?: string[];
};

type Project = {
  id: string;
  year: string;
  stack: string[];
  metric?: string;
  github?: string;
  live?: string;
  /** Projet client ou interne : pas de code public. */
  private?: boolean;
  /** Grande présentation en tête de section. */
  featured?: boolean;
  /** Capture principale (et éventuellement une seconde, affichée en retrait). */
  images?: { src: string; width: number; height: number }[];
  cover?: ProjectCover;
  text: Record<Locale, ProjectText>;
};

/** Ordre d'affichage = ordre du tableau. */
const projects: Project[] = [
  {
    id: "jarvis",
    year: "2026",
    stack: ["Python", "Ollama · Qwen 2.5", "MediaPipe", "openWakeWord", "Vosk", "Scikit-Learn"],
    metric: "23",
    github: "https://github.com/banloco/jarvis",
    featured: true,
    cover: "reactor",
    text: {
      fr: {
        title: "J.A.R.V.I.S",
        context: "Projet open source",
        summary: "Un assistant vocal façon Iron Man, 100 % local, qui tourne sur un simple PC.",
        description:
          "Réveil « Hey Jarvis », modèle de langage local qui appelle des outils, mémoire à long terme par embeddings, gestes de la main à la webcam et affichage holographique. Aucune API payante, aucune carte graphique nécessaire.",
        metricLabel: "outils pilotables à la voix",
        highlights: [
          "LLM local (Qwen 2.5 via Ollama) avec appels d'outils",
          "Reconnaissance des gestes : MediaPipe + réseau de neurones entraîné",
          "Mémoire sémantique par embeddings multilingues",
        ],
      },
      en: {
        title: "J.A.R.V.I.S",
        context: "Open-source project",
        summary: "An Iron Man-style voice assistant, fully local, running on a regular PC.",
        description:
          "\"Hey Jarvis\" wake word, a local language model calling tools, long-term memory with embeddings, webcam hand gestures and a holographic display. No paid API, no graphics card required.",
        metricLabel: "voice-controlled tools",
        highlights: [
          "Local LLM (Qwen 2.5 on Ollama) with tool calling",
          "Gesture recognition: MediaPipe + a trained neural network",
          "Semantic memory with multilingual embeddings",
        ],
      },
    },
  },
  {
    id: "eolekare",
    year: "2026",
    stack: ["React", "Vite", "Laravel API", "Tailwind CSS", "Stripe", "Mobile Money"],
    github: "https://github.com/banloco/eolekare",
    live: "https://www.eolekare.com",
    featured: true,
    images: [
      { src: "/projects/eolekare-shop.webp", width: 1440, height: 900 },
      { src: "/projects/eolekare-home.webp", width: 1440, height: 900 },
    ],
    text: {
      fr: {
        title: "Eolekare",
        context: "Projet client · e-commerce",
        summary: "La boutique en ligne d'une marque de soins naturels « made in Bénin », en production.",
        description:
          "Deux vitrines (Bénin en FCFA, Europe en EUR), paiement Mobile Money et Stripe, livraison en point relais, version française et anglaise, et un back-office complet pour gérer produits, commandes et chiffre d'affaires.",
        highlights: [
          "Front React + API Laravel, déployés en continu",
          "Paiements Mobile Money (Bénin) et Stripe (Europe)",
          "Tableau de bord admin : commandes, CA, exports",
        ],
      },
      en: {
        title: "Eolekare",
        context: "Client project · e-commerce",
        summary: "The live online store of a natural skincare brand made in Benin.",
        description:
          "Two storefronts (Benin in FCFA, Europe in EUR), Mobile Money and Stripe payments, parcel-locker delivery, French and English versions, and a full back office for products, orders and revenue.",
        highlights: [
          "React front end + Laravel API, continuously deployed",
          "Mobile Money (Benin) and Stripe (Europe) payments",
          "Admin dashboard: orders, revenue, exports",
        ],
      },
    },
  },
  {
    id: "cnss-ids",
    year: "2026",
    stack: ["Python", "Scikit-Learn", "Random Forest", "Détection d'anomalies"],
    metric: "~90 %",
    private: true,
    featured: true,
    cover: "radar",
    text: {
      fr: {
        title: "Détection d'intrusions par IA",
        context: "Stage · CNSS, siège social",
        summary: "Un modèle de machine learning qui surveille le réseau d'une institution nationale en temps réel.",
        description:
          "Modèle Random Forest qui analyse les flux de paquets du périmètre réseau, classe automatiquement le trafic et alimente un tableau de bord d'alertes instantanées, déployé dans l'infrastructure du siège.",
        metricLabel: "de temps de détection en moins",
        highlights: [
          "100 % du trafic périmétrique couvert",
          "Fin des revues manuelles quotidiennes de logs",
          "Tableau de bord d'alertes pour l'équipe sécurité",
        ],
      },
      en: {
        title: "AI intrusion detection",
        context: "Internship · CNSS headquarters",
        summary: "A machine-learning model watching a national institution's network in real time.",
        description:
          "A Random Forest model analysing perimeter packet flows, classifying traffic automatically and feeding an instant-alert dashboard deployed within the headquarters infrastructure.",
        metricLabel: "less time to detect intrusions",
        highlights: [
          "100% of perimeter traffic covered",
          "No more daily manual log reviews",
          "Alert dashboard for the security team",
        ],
      },
    },
  },
  {
    id: "danxolabs",
    year: "2026",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Assistant IA", "FR / EN"],
    live: "https://www.danxolabs.com",
    featured: true,
    images: [{ src: "/projects/danxolabs.webp", width: 1440, height: 900 }],
    text: {
      fr: {
        title: "Danxo Labs",
        context: "Co-fondateur · agence digitale",
        summary: "Le site de l'agence digitale que j'ai co-fondée, conçu et développé de A à Z.",
        description:
          "Présentation des offres, pages services, blog, diagnostic gratuit et assistant IA qui répond aux visiteurs, en français et en anglais, avec un soin particulier pour le référencement et les animations.",
        highlights: [
          "Next.js, version française et anglaise",
          "Assistant IA intégré pour les visiteurs",
          "SEO : données structurées, sitemap, pages services",
        ],
      },
      en: {
        title: "Danxo Labs",
        context: "Co-founder · digital agency",
        summary: "The website of the digital agency I co-founded, designed and built end to end.",
        description:
          "Services and pricing, service pages, a blog, a free assessment and an AI assistant answering visitors, in French and English, with close attention to SEO and motion design.",
        highlights: [
          "Next.js, French and English versions",
          "Built-in AI assistant for visitors",
          "SEO: structured data, sitemap, service pages",
        ],
      },
    },
  },
  {
    id: "whatsapp-bot",
    year: "2025",
    stack: ["Python", "Flask", "OpenAI API", "WhatsApp"],
    metric: "+40 %",
    private: true,
    cover: "chat",
    text: {
      fr: {
        title: "Chatbot WhatsApp de qualification",
        context: "Mission freelance",
        summary: "Un assistant qui trie les prospects d'un client directement sur WhatsApp.",
        description:
          "Il dialogue avec les contacts entrants, pose les bonnes questions et ne transmet à l'équipe commerciale que les prospects sérieux.",
        metricLabel: "de leads validés par mois",
      },
      en: {
        title: "WhatsApp qualification chatbot",
        context: "Freelance project",
        summary: "An assistant sorting a client's leads directly on WhatsApp.",
        description:
          "It talks with inbound contacts, asks the right questions and only hands serious leads over to the sales team.",
        metricLabel: "more validated leads per month",
      },
    },
  },
  {
    id: "olist-bi",
    year: "2025",
    stack: ["Python", "PostgreSQL", "dbt", "Scikit-Learn", "Metabase", "Docker"],
    github: "https://github.com/banloco/business-inteligence-machine-learning",
    images: [{ src: "/projects/olist-dashboard.webp", width: 1440, height: 722 }],
    text: {
      fr: {
        title: "Business Intelligence & ML",
        context: "Projet data · e-commerce Olist",
        summary: "De 100 000 commandes brutes à des segments clients exploitables.",
        description:
          "Pipeline Bronze → Silver → Gold avec dbt sur PostgreSQL, segmentation RFM, modèle de churn et tableaux de bord Metabase pour les équipes marketing.",
      },
      en: {
        title: "Business Intelligence & ML",
        context: "Data project · Olist e-commerce",
        summary: "From 100,000 raw orders to actionable customer segments.",
        description:
          "A Bronze → Silver → Gold pipeline with dbt on PostgreSQL, RFM segmentation, a churn model and Metabase dashboards for marketing teams.",
      },
    },
  },
  {
    id: "threat-detector",
    year: "2025",
    stack: ["Kafka", "Spark Streaming", "Elasticsearch", "Kibana", "Docker"],
    github: "https://github.com/banloco/Real_Time_Network_Threat_Detector",
    cover: "alerts",
    text: {
      fr: {
        title: "Real-Time Threat Detector",
        context: "Projet cybersécurité",
        summary: "Détection des attaques par force brute en temps réel.",
        description:
          "Ingestion des logs avec Kafka, fenêtres glissantes Spark Structured Streaming, niveau de menace calculé par IP et alertes visualisées dans Kibana.",
      },
      en: {
        title: "Real-Time Threat Detector",
        context: "Cybersecurity project",
        summary: "Real-time brute-force attack detection.",
        description:
          "Log ingestion with Kafka, Spark Structured Streaming sliding windows, per-IP threat levels and alerts visualised in Kibana.",
      },
    },
  },
];

export type LocalizedProject = Omit<Project, "text"> & ProjectText;

export function getProjects(lang: Locale): LocalizedProject[] {
  return projects.map(({ text, ...project }) => {
    const localized = { ...project, ...text[lang] };
    // « 90 % » en français, « 90% » en anglais.
    if (lang === "en" && localized.metric) localized.metric = localized.metric.replace(" %", "%");
    if (lang === "en") localized.stack = localized.stack.map((s) => (s === "Détection d'anomalies" ? "Anomaly detection" : s === "Assistant IA" ? "AI assistant" : s));
    return localized;
  });
}
