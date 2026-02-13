// Données des projets
export const projects = [
  {
    id: 1,
    title: "Tech Blog - IA & Capital",
    category: "Web Development",
    description: "Blog professionnel sur l'intelligence artificielle appliquée à la finance. Next.js 14 avec Supabase, système de comments, SEO optimisé et intégration Google AdSense.",
    longDescription: "Plateforme de blogging complète construite avec Next.js 14 et Supabase. Inclut un système d'authentification, gestion des articles, commentaires en temps réel, optimisation SEO avancée et monétisation via Google AdSense. Design moderne et responsive.",
    technologies: ["Next.js", "React", "Supabase", "PostgreSQL", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/banloco/tech_blog",
    live: "https://www.ai-and-capital.tech",
    image: "/startup-business-website-template-dark-mode_294843-24.avif",
    featured: true,
    status: "Déployé",
    year: "2025-2026"
  },
  {
    id: 2,
    title: "Business Intelligence & ML (Olist)",
    category: "Data Engineering & ML",
    description: "Pipeline data complet (Bronze → Silver → Gold) pour transformer les données e-commerce Olist en indicateurs BI et analyses prédictives (RFM + churn).",
    longDescription: "Solution BI complète combinant analyse descriptive et prédictive. Architecture data moderne avec PostgreSQL, dbt pour la transformation, et modèles ML pour la segmentation RFM et prédiction de churn. Dashboard interactif avec Streamlit.",
    technologies: ["Python", "PostgreSQL", "dbt", "Scikit-Learn", "Pandas", "Streamlit", "Docker"],
    github: "https://github.com/banloco/business-inteligence-machine-learning",
    live: null,
    image: "/startup-business-website-template-dark-mode_294843-24.avif",
    featured: true,
    status: "Terminé",
    year: "2025"
  },
  {
    id: 3,
    title: "Real-Time Network Threat Detector",
    category: "Cybersecurity & Data",
    description: "Système de détection d'anomalies réseau en temps réel basé sur l'analyse de flux de paquets avec Kafka, Spark Streaming et Elasticsearch.",
    longDescription: "Solution de cybersécurité détectant les comportements suspects (brute force, scan de ports) en temps réel. Utilise Apache Kafka pour l'ingestion, Spark Structured Streaming pour le traitement avec fenêtres glissantes, et Elasticsearch/Kibana pour la visualisation des alertes.",
    technologies: ["Python", "Apache Kafka", "Spark", "Elasticsearch", "Kibana", "Docker"],
    github: "https://github.com/banloco/Real_Time_Network_Threat_Detector",
    live: null,
    image: "/startup-business-website-template-dark-mode_294843-24.avif",
    featured: true,
    status: "Terminé",
    year: "2025"
  },
  {
    id: 4,
    title: "Crypto Real-Time Analytics Pipeline",
    category: "Data Engineering",
    description: "Pipeline temps réel pour analyser le prix du BTC via Binance, avec Kafka, Spark Streaming et visualisation Grafana/InfluxDB.",
    longDescription: "Pipeline de données distribué pour le streaming de prix de cryptomonnaies en temps réel. Récupère les trades Bitcoin via WebSocket Binance, traite avec Spark (moyennes mobiles, watermarks), stocke dans InfluxDB et visualise avec Grafana. Latence minimale pour signaux de trading.",
    technologies: ["Python", "Apache Kafka", "Spark", "InfluxDB", "Grafana", "WebSocket", "Docker"],
    github: "https://github.com/ton-pseudo/crypto-streaming-pipeline",
    live: null,
    image: "/startup-business-website-template-dark-mode_294843-24.avif",
    featured: true,
    status: "Terminé",
    year: "2025"
  },
  {
    id: 5,
    title: "Blog Symfony",
    category: "Web Development",
    description: "Blog fullstack moderne avec Symfony 7.2, MySQL, système d'authentification et interface d'administration complète.",
    longDescription: "Application web complète construite avec Symfony 7.2. Gestion d'articles avec catégories, système de commentaires, authentification utilisateur, panel d'administration, et optimisations SEO. Architecture MVC respectant les bonnes pratiques Symfony.",
    technologies: ["Symfony", "PHP", "MySQL", "Twig", "Doctrine", "CSS"],
    github: "https://github.com/banloco/IA-Argent",
    live: null,
    image: "/startup-business-website-template-dark-mode_294843-24.avif",
    featured: false,
    status: "Terminé",
    year: "2025"
  },
  {
    id: 6,
    title: "KaziMatch",
    category: "AI & Data",
    description: "Application IA d'orientation professionnelle basée sur l'analyse du marché de l'emploi en Afrique.",
    longDescription: "Plateforme intelligente aidant les jeunes à choisir un métier ou une formation en fonction de leurs compétences, des métiers demandés, des tendances du marché et des salaires. Utilise le scraping d'annonces, analyse de données et recommandations IA.",
    technologies: ["Python", "PostgreSQL", "Machine Learning", "Web Scraping", "NLP"],
    github: "https://github.com/banloco/KaziMatch",
    live: null,
    image: "/startup-business-website-template-dark-mode_294843-24.avif",
    featured: true,
    status: "En développement",
    year: "2025-2026"
  },
  {
    id: 7,
    title: "Personal Finance App",
    category: "Web Development",
    description: "Application moderne de gestion financière personnelle avec suivi des dépenses, budgets et rapports.",
    longDescription: "Application web pour la gestion des finances personnelles. Dashboard interactif, suivi des transactions, catégorisation automatique, visualisations des dépenses et objectifs d'épargne. Interface moderne et intuitive.",
    technologies: ["React", "TypeScript", "Supabase", "Tailwind CSS", "Vite"],
    github: "https://github.com/banloco/Personal-Financial-App",
    live: null,
    image: "/startup-business-website-template-dark-mode_294843-24.avif",
    featured: false,
    status: "Terminé",
    year: "2025"
  }
];

// Catégories de projets
export const categories = [
  "Tous",
  "Web Development",
  "Data Engineering & ML",
  "Cybersecurity & Data",
  "AI & Data"
];

// Informations personnelles
export const personalInfo = {
  name: "Christ BANIDJE",
  title: "Développeur Web & Data / IA",
  location: "Abomey-Calavi, Bénin",
  email: "christ.banidje@epitech.eu",
  phone: "+229 01 69 34 95 02",
  portfolio: "www.christ-banidje.netlify.app",
  github: "https://github.com/banloco",
  linkedin: "https://www.linkedin.com/in/ayéyèmi-banidje-751474334/",
  bio: "Développeur Web & Data / IA passionné par la technologie et orienté solutions, avec une forte spécialisation en analyse de données, machine learning et deep learning. Mon objectif est de mettre l'IA et le développement logiciel au service de l'innovation et du développement numérique en Afrique.",
  cvUrl: "/christ_banidje_developpeur_dataia.pdf"
};

// Compétences
export const skills = {
  web: [
    { name: "Vue.js", level: 85 },
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "React", level: 85 },
    { name: "HTML5/CSS3", level: 95 },
    { name: "Laravel", level: 80 },
    { name: "PHP", level: 80 },
    { name: "Python (Flask/FastAPI)", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "Symfony", level: 75 }
  ],
  data: [
    { name: "Apache Kafka", level: 85 },
    { name: "Spark", level: 80 },
    { name: "TensorFlow/Keras", level: 80 },
    { name: "Scikit-Learn", level: 90 },
    { name: "Pandas", level: 95 },
    { name: "SQL (MySQL, PostgreSQL)", level: 90 },
    { name: "MongoDB", level: 75 },
    { name: "NLP", level: 80 },
    { name: "Computer Vision", level: 75 }
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "Docker", level: 85 },
    { name: "Jupyter", level: 90 },
    { name: "dbt", level: 80 },
    { name: "Elasticsearch", level: 75 }
  ]
};

// Langues
export const languages = [
  { name: "Français", level: "Langue courante" },
  { name: "Anglais", level: "Niveau professionnel" },
  { name: "Espagnol", level: "Langue courante" }
];

// Formation
export const education = [
  {
    degree: "Certification en Développement Data / IA",
    school: "Epitech Bénin",
    year: "2026"
  },
  {
    degree: "Certification : Introduction à l'IA par la Visualisation",
    school: "Columbia+",
    year: "2025"
  },
  {
    degree: "Licence en Droit Public",
    school: "FADESP / Université de Abomey-Calavi",
    year: "2025"
  },
  {
    degree: "Attestation en Développement d'Applications Web et Mobile",
    school: "Centre de Formation Professionnelle Le Savoir-Faire",
    year: "2023"
  }
];
