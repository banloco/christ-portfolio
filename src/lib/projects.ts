import type { Locale } from "@/i18n/config";

export type ProjectCategory = "web" | "data" | "security";

type ProjectText = {
  title: string;
  context: string;
  description: string;
  metricLabel?: string;
  /** Remplace le chiffre commun quand il doit être traduit. */
  metric?: string;
};

type Project = {
  id: string;
  categories: ProjectCategory[];
  year: string;
  stack: string[];
  /** Chiffre mis en avant sur la carte (optionnel). */
  metric?: string;
  github?: string;
  live?: string;
  /** Projet client ou interne : pas de code public. */
  private?: boolean;
  inProgress?: boolean;
  text: Record<Locale, ProjectText>;
};

/** Ordre d'affichage = ordre du tableau. */
const projects: Project[] = [
  {
    id: "cnss-ids",
    categories: ["data", "security"],
    year: "2026",
    stack: ["Python", "Scikit-Learn", "Random Forest", "Dashboard"],
    metric: "~90 %",
    private: true,
    text: {
      fr: {
        title: "Détection d'intrusions réseau par IA",
        context: "Stage · CNSS, siège social",
        description:
          "Modèle Random Forest qui analyse les flux de paquets en temps réel pour repérer les tentatives d'intrusion sur le périmètre du réseau interne, avec un tableau de bord d'alertes instantanées déployé au siège.",
        metricLabel: "de temps de détection en moins",
      },
      en: {
        title: "AI-powered network intrusion detection",
        context: "Internship · CNSS headquarters",
        description:
          "A Random Forest model analysing packet flows in real time to flag intrusion attempts on the internal network perimeter, with an instant-alert dashboard deployed at headquarters.",
        metricLabel: "less time to detect intrusions",
      },
    },
  },
  {
    id: "whatsapp-bot",
    categories: ["data", "web"],
    year: "2025",
    stack: ["Python", "Flask", "OpenAI API", "WhatsApp"],
    metric: "+40 %",
    private: true,
    text: {
      fr: {
        title: "Chatbot WhatsApp de qualification de prospects",
        context: "Mission freelance",
        description:
          "Assistant conversationnel qui dialogue avec les contacts entrants sur WhatsApp, pose les bonnes questions et filtre automatiquement les prospects sérieux pour l'équipe commerciale.",
        metricLabel: "de leads validés par mois",
      },
      en: {
        title: "WhatsApp lead-qualification chatbot",
        context: "Freelance project",
        description:
          "A conversational assistant that talks with inbound contacts on WhatsApp, asks the right questions and automatically filters serious leads for the sales team.",
        metricLabel: "more qualified leads per month",
      },
    },
  },
  {
    id: "tech-blog",
    categories: ["web"],
    year: "2025 – 2026",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/banloco/tech_blog",
    live: "https://tech-blog-puce.vercel.app",
    text: {
      fr: {
        title: "IA & Capital — blog tech",
        context: "Projet personnel",
        description:
          "Blog sur l'intelligence artificielle appliquée à la finance : authentification, gestion des articles, commentaires en temps réel, SEO avancé et monétisation Google AdSense.",
      },
      en: {
        title: "AI & Capital — tech blog",
        context: "Personal project",
        description:
          "A blog about AI applied to finance: authentication, article management, real-time comments, advanced SEO and Google AdSense monetisation.",
      },
    },
  },
  {
    id: "ecommerce",
    categories: ["web"],
    year: "2025",
    stack: ["React", "Laravel", "REST API", "VPS Hostinger"],
    private: true,
    text: {
      fr: {
        title: "Boutique e-commerce événementielle",
        context: "Mission freelance",
        description:
          "Site e-commerce complet (catalogue, panier, commandes) livré en six semaines et opérationnel dès le premier jour, avec les premières commandes enregistrées à la mise en ligne.",
        metric: "6 sem.",
        metricLabel: "de la conception à la mise en ligne",
      },
      en: {
        title: "Event-shop e-commerce site",
        context: "Freelance project",
        description:
          "A complete online store (catalogue, cart, orders) delivered in six weeks and live from day one, with the first orders placed at launch.",
        metric: "6 wks",
        metricLabel: "from design to launch",
      },
    },
  },
  {
    id: "olist-bi",
    categories: ["data"],
    year: "2025",
    stack: ["Python", "PostgreSQL", "dbt", "Scikit-Learn", "Streamlit", "Docker"],
    github: "https://github.com/banloco/business-inteligence-machine-learning",
    text: {
      fr: {
        title: "Business Intelligence & ML (Olist)",
        context: "Projet data",
        description:
          "Pipeline Bronze → Silver → Gold qui transforme les données e-commerce Olist en indicateurs BI, avec segmentation RFM, prédiction du churn et tableau de bord Streamlit.",
      },
      en: {
        title: "Business Intelligence & ML (Olist)",
        context: "Data project",
        description:
          "A Bronze → Silver → Gold pipeline turning Olist e-commerce data into BI metrics, with RFM segmentation, churn prediction and a Streamlit dashboard.",
      },
    },
  },
  {
    id: "threat-detector",
    categories: ["security", "data"],
    year: "2025",
    stack: ["Kafka", "Spark Streaming", "Elasticsearch", "Kibana", "Docker"],
    github: "https://github.com/banloco/Real_Time_Network_Threat_Detector",
    text: {
      fr: {
        title: "Real-Time Network Threat Detector",
        context: "Projet cybersécurité",
        description:
          "Détection en temps réel de comportements suspects (brute force, scans de ports) : ingestion Kafka, fenêtres glissantes Spark Structured Streaming et alertes visualisées dans Kibana.",
      },
      en: {
        title: "Real-Time Network Threat Detector",
        context: "Cybersecurity project",
        description:
          "Real-time detection of suspicious behaviour (brute force, port scans): Kafka ingestion, Spark Structured Streaming sliding windows and alerts visualised in Kibana.",
      },
    },
  },
  {
    id: "kazimatch",
    categories: ["data", "web"],
    year: "2025 – 2026",
    stack: ["Python", "PostgreSQL", "Machine Learning", "NLP", "Web scraping"],
    github: "https://github.com/banloco/KaziMatch",
    inProgress: true,
    text: {
      fr: {
        title: "KaziMatch",
        context: "Projet personnel",
        description:
          "Application d'orientation professionnelle pour les jeunes en Afrique : analyse des offres d'emploi, des métiers qui recrutent et des salaires pour recommander un métier ou une formation.",
      },
      en: {
        title: "KaziMatch",
        context: "Personal project",
        description:
          "A career-guidance app for young people in Africa: it analyses job listings, in-demand roles and salaries to recommend a career or a training path.",
      },
    },
  },
  {
    id: "reddit-sentiment",
    categories: ["data"],
    year: "2025",
    stack: ["Kafka", "Python", "TF-IDF", "Scikit-Learn"],
    metric: "85 %",
    text: {
      fr: {
        title: "Analyse de sentiment sur Reddit",
        context: "Epitech Bénin",
        description:
          "Pipeline NLP qui ingère plus de 10 000 commentaires Reddit en temps réel avec Kafka, les vectorise (TF-IDF) et les classe par sentiment avec un modèle multiclasse.",
        metricLabel: "de précision sur les données de test",
      },
      en: {
        title: "Reddit sentiment analysis",
        context: "Epitech Benin",
        description:
          "An NLP pipeline ingesting 10,000+ Reddit comments in real time with Kafka, vectorising them (TF-IDF) and classifying their sentiment with a multiclass model.",
        metricLabel: "accuracy on test data",
      },
    },
  },
  {
    id: "crypto-pipeline",
    categories: ["data"],
    year: "2025",
    stack: ["Kafka", "Spark", "InfluxDB", "Grafana", "WebSocket", "Docker"],
    github: "https://github.com/banloco/mon_projet_streaming",
    text: {
      fr: {
        title: "Crypto Real-Time Analytics Pipeline",
        context: "Projet data engineering",
        description:
          "Pipeline temps réel qui capte le prix du Bitcoin via le WebSocket Binance, calcule des moyennes mobiles avec Spark Structured Streaming et affiche les tendances dans Grafana.",
      },
      en: {
        title: "Crypto Real-Time Analytics Pipeline",
        context: "Data engineering project",
        description:
          "A real-time pipeline capturing Bitcoin prices from the Binance WebSocket, computing moving averages with Spark Structured Streaming and charting trends in Grafana.",
      },
    },
  },
  {
    id: "fashion-mnist",
    categories: ["data"],
    year: "2025",
    stack: ["TensorFlow", "Keras", "CNN", "Grid search"],
    metric: "92 %",
    text: {
      fr: {
        title: "Classification d'images FashionMNIST",
        context: "Epitech Bénin",
        description:
          "Réseau de neurones convolutif entraîné à reconnaître des catégories de vêtements sur 70 000 images, optimisé par recherche d'hyperparamètres.",
        metricLabel: "de précision",
      },
      en: {
        title: "FashionMNIST image classification",
        context: "Epitech Benin",
        description:
          "A convolutional neural network trained to recognise clothing categories across 70,000 images, tuned with a hyperparameter grid search.",
        metricLabel: "accuracy",
      },
    },
  },
  {
    id: "yowl",
    categories: ["web"],
    year: "2025",
    stack: ["Laravel", "PHP", "Vue.js", "REST API"],
    text: {
      fr: {
        title: "YOWL — plateforme sociale d'avis",
        context: "Epitech Bénin",
        description:
          "Réseau social d'avis en ligne avec authentification, publication de contenu et modération, bâti sur une API REST Laravel et une interface Vue.js.",
      },
      en: {
        title: "YOWL — social review platform",
        context: "Epitech Benin",
        description:
          "An online review social network with authentication, content publishing and moderation, built on a Laravel REST API and a Vue.js front end.",
      },
    },
  },
  {
    id: "finance-app",
    categories: ["web"],
    year: "2025",
    stack: ["React", "TypeScript", "Supabase", "Tailwind CSS", "Vite"],
    github: "https://github.com/banloco/Personal-Financial-App",
    text: {
      fr: {
        title: "Personal Finance App",
        context: "Projet personnel",
        description:
          "Application de gestion des finances personnelles : suivi des transactions, catégorisation, budgets, visualisation des dépenses et objectifs d'épargne.",
      },
      en: {
        title: "Personal Finance App",
        context: "Personal project",
        description:
          "A personal finance app: transaction tracking, categorisation, budgets, spending charts and savings goals.",
      },
    },
  },
  {
    id: "symfony-blog",
    categories: ["web"],
    year: "2025",
    stack: ["Symfony", "PHP", "MySQL", "Twig", "Doctrine"],
    text: {
      fr: {
        title: "Blog Symfony",
        context: "Projet personnel",
        description:
          "Blog fullstack sous Symfony 7.2 : articles et catégories, commentaires, authentification et interface d'administration complète.",
      },
      en: {
        title: "Symfony blog",
        context: "Personal project",
        description:
          "A full-stack Symfony 7.2 blog: articles and categories, comments, authentication and a complete admin panel.",
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
    return localized;
  });
}
