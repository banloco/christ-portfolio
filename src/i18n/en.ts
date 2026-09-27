import type { Dictionary } from "./fr";

const en: Dictionary = {
  meta: {
    title: "Christ Banidje — Full-Stack & Data / AI Developer",
    description:
      "Full-stack and data / AI developer based in Abomey-Calavi, Benin: web applications, machine learning, automation and cybersecurity. Available for freelance work and new opportunities.",
  },
  nav: {
    about: "About",
    expertise: "Expertise",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
    menu: "Menu",
    close: "Close",
    switchLang: "Français",
    switchLangLabel: "Lire en français",
  },
  hero: {
    badge: "Available for freelance work and new opportunities",
    kicker: "Full-Stack Developer · Data / AI · Cybersecurity",
    titleStart: "I build",
    rotating: ["web applications", "AI models", "data pipelines", "security tools", "automations"],
    titleEnd: "that save people time.",
    greeting: "Hi, I'm",
    intro:
      "Based in Abomey-Calavi, trained at Epitech and with a background in law, I bring code, data and business needs together to deliver solutions with measurable impact.",
    ctaProjects: "See my projects",
    ctaContact: "Get in touch",
    cv: "Download my CV",
    photoAlt: "Portrait of Christ Banidje",
    location: "Abomey-Calavi, Benin",
    stats: [
      { value: "~90%", label: "less time to detect network intrusions" },
      { value: "+40%", label: "more qualified leads for a client" },
      { value: "2", label: "e-commerce sites shipped to production" },
      { value: "2×", label: "faster than initial estimates" },
    ],
  },
  about: {
    label: "About",
    title: "A hybrid profile, focused on results",
    paragraphs: [
      "I'm a full-stack and data / AI developer and the co-founder of the digital agency Danxo Labs. Day to day, I build complete web applications, train machine-learning models and automate the repetitive tasks that slow teams down.",
      "My path hasn't been a straight line: I hold a bachelor's degree in public law, then moved into software development and later data and AI at Epitech Benin. That dual perspective helps me understand business, regulatory and data-protection concerns before writing the first line of code.",
      "I work with an AI-first workflow (Claude Code, Cursor, Codex, Replit) to iterate fast without cutting corners. My goal: contribute to web, mobile, CRM and AI projects with real-world impact and international reach.",
    ],
    facts: [
      { label: "Based in", value: "Abomey-Calavi, Benin" },
      { label: "Languages", value: "French · English (C1) · Spanish" },
      { label: "Company", value: "Co-founder of Danxo Labs" },
      { label: "Education", value: "Epitech Benin · Bachelor's in public law" },
      { label: "Strengths", value: "Analytical mind, autonomy, adaptability, teamwork" },
    ],
  },
  expertise: {
    label: "Expertise",
    title: "More than a full-stack developer",
    intro: "Four hats, one goal: useful solutions, delivered fast.",
    items: [
      {
        icon: "code",
        title: "Full-stack development",
        text: "End-to-end websites, platforms and APIs: React, Next.js, Vue.js, Laravel, Flask, FastAPI, SQL and NoSQL databases, VPS deployment.",
      },
      {
        icon: "brain",
        title: "Data & artificial intelligence",
        text: "Machine learning, deep learning, NLP and computer vision with Scikit-Learn, TensorFlow and Keras; real-time pipelines with Kafka and Spark.",
      },
      {
        icon: "shield",
        title: "Cybersecurity",
        text: "Machine-learning intrusion detection, network-flow and anomaly analysis, real-time alert dashboards.",
      },
      {
        icon: "bolt",
        title: "Automation & chatbots",
        text: "AI-powered WhatsApp chatbots, OpenAI API integrations and process automation that removes manual work.",
      },
    ],
  },
  experience: {
    label: "Experience",
    title: "Professional experience",
    items: [
      {
        period: "2026 — present",
        role: "Co-founder",
        org: "Danxo Labs — digital agency, Benin",
        points: [
          "Co-founded a digital agency building websites, online stores, applications and custom AI solutions.",
          "Designed and built the agency's website (danxolabs.com): Next.js, French and English versions, an AI assistant for visitors, a blog and a free assessment.",
        ],
        tags: ["Entrepreneurship", "Next.js", "TypeScript", "AI"],
      },
      {
        period: "2026",
        role: "AI & Cybersecurity Developer — internship",
        org: "CNSS — National Social Security Fund, headquarters",
        points: [
          "Automated perimeter monitoring of the internal network with a Random Forest model analysing packet flows in real time, cutting intrusion detection time by about 90%.",
          "Built an instant-alert dashboard for suspicious behaviour covering 100% of perimeter traffic, deployed within the headquarters infrastructure.",
          "Eliminated daily manual log reviews by automatically ingesting and classifying network data (outlier detection).",
        ],
        tags: ["Python", "Scikit-Learn", "Random Forest", "Anomaly detection"],
      },
      {
        period: "2025 — present",
        role: "Web & AI Developer — freelance",
        org: "Private clients, Benin",
        points: [
          "Built an AI WhatsApp chatbot that holds the conversation and filters inbound contacts: +40% validated leads per month for the client.",
          "Delivered a complete e-commerce site for an event shop in six weeks, live from day one with its first orders.",
          "Halved development time with an AI-first workflow (Claude Code, Cursor, Codex).",
        ],
        tags: ["Python", "Flask", "OpenAI", "React", "Laravel", "VPS"],
      },
    ],
    education: "Education",
    degrees: [
      { year: "2026", title: "Certificate in Data / AI Development", school: "Epitech Benin" },
      { year: "2025", title: "Certificate: Introduction to AI through Visualization", school: "Columbia+" },
      { year: "2025", title: "Bachelor's degree in Public Law", school: "FADESP — University of Abomey-Calavi" },
      {
        year: "2023",
        title: "Certificate in Web and Mobile Application Development",
        school: "Le Savoir-Faire Vocational Training Centre",
      },
    ],
  },
  projects: {
    label: "Projects",
    title: "Selected projects",
    intro: "A short selection with concrete results: live products, client work and open-source projects.",
    code: "View code",
    live: "Visit site",
    private: "Private code",
    other: "More projects",
    illustration: "Illustration",
    more: "All my repositories on GitHub",
  },
  skills: {
    label: "Skills",
    title: "My toolbox",
    groups: [
      { title: "Frontend", items: ["React", "Next.js", "Vue.js", "TypeScript", "JavaScript ES6+", "Tailwind CSS", "HTML5 / CSS3"] },
      { title: "Backend", items: ["Python", "Flask", "FastAPI", "Laravel", "Symfony", "PHP", "REST APIs"] },
      { title: "Machine learning & AI", items: ["Scikit-Learn", "TensorFlow", "Keras", "NLP", "Computer Vision", "OpenAI API"] },
      { title: "Data engineering", items: ["Apache Kafka", "Spark", "Pandas", "dbt", "Elasticsearch", "Jupyter", "Anaconda"] },
      { title: "Databases", items: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Supabase"] },
      { title: "Tools & DevOps", items: ["Git", "Docker", "VPS", "PyInstaller", "Figma", "Claude Code", "Cursor", "Codex", "Replit"] },
    ],
  },
  contact: {
    label: "Contact",
    title: "Let's work together",
    intro: "A web project, an automation idea, a data or AI need? Write to me, I reply quickly.",
    name: "Your name",
    email: "Your email",
    message: "Your message",
    messagePlaceholder: "Tell me about your project…",
    send: "Send message",
    note: "The button opens your email app with the message pre-filled.",
    subject: "Contact from your portfolio",
    whatsapp: "Message me on WhatsApp",
    whatsappMessage: "Hi Christ, I saw your portfolio and would like to talk about a project.",
    channels: { email: "Email", phone: "Phone", github: "GitHub", linkedin: "LinkedIn" },
  },
  footer: {
    rights: "All rights reserved.",
    top: "Back to top",
  },
  notFound: {
    title: "Page not found",
    text: "This page doesn't exist or has been moved.",
    back: "Back to home",
  },
};

export default en;
