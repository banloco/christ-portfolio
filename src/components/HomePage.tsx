import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import type { Dictionary } from "@/i18n/fr";
import { getProjects } from "@/lib/projects";
import { site, whatsappLink } from "@/lib/site";
import ProjectShowcase from "@/components/ProjectShowcase";
import ContactForm from "@/components/ContactForm";
import RotatingWords from "@/components/motion/RotatingWords";
import CountUp from "@/components/motion/CountUp";
import TimelineRail from "@/components/motion/TimelineRail";
import {
  ArrowRightIcon,
  BoltIcon,
  BrainIcon,
  CodeIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  ShieldIcon,
  WhatsappIcon,
} from "@/components/icons";

/** Décale l'animation d'apparition des éléments d'une même rangée. */
const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

const expertiseIcons = { code: CodeIcon, brain: BrainIcon, shield: ShieldIcon, bolt: BoltIcon };

const marquee = [
  "Python", "React", "Next.js", "TypeScript", "Laravel", "FastAPI", "Scikit-Learn", "TensorFlow",
  "Kafka", "Spark", "PostgreSQL", "Docker", "dbt", "Ollama", "MediaPipe", "Tailwind CSS",
];

/** En-tête de section : numéro, libellé et titre. */
function SectionHeading({ index, label, title, intro }: { index: string; label: string; title: string; intro?: string }) {
  return (
    <div data-reveal>
      <p className="flex items-center gap-3 text-sm font-semibold text-accent">
        <span className="font-mono">{index}</span>
        <span className="h-px w-8 bg-accent/40" />
        {label}
      </p>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}

/** Mise en page éditoriale : titre dans une colonne fixe à gauche, contenu à droite. */
function Section({ id, index, label, title, intro, children, className = "" }: {
  id: string;
  index: string;
  label: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`border-t border-line ${className}`}>
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[300px_1fr] lg:gap-16 lg:py-32">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading index={index} label={label} title={title} intro={intro} />
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

function Hero({ t, status }: { t: Dictionary["hero"]; status: string }) {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-32 sm:px-8 lg:min-h-[92svh] lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-20 lg:pt-28">
        <div>
          <p data-reveal className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            <span className="h-px w-8 bg-accent" />
            {t.kicker}
          </p>
          <h1 data-reveal style={delay(80)} className="mt-6 font-display text-5xl font-extrabold tracking-tight sm:text-7xl">
            Christ Banidje
          </h1>
          <p
            data-reveal
            style={delay(160)}
            className="mt-6 max-w-2xl font-display text-2xl font-semibold leading-snug text-fg/80 sm:text-[2rem]"
          >
            {t.titleStart} <RotatingWords words={t.rotating} /> {t.titleEnd}
          </p>
          <p data-reveal style={delay(240)} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {t.intro}
          </p>
          <div data-reveal style={delay(320)} className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-night px-6 py-3.5 font-semibold text-white transition-colors hover:bg-accent"
            >
              {t.ctaProjects}
              <ArrowRightIcon width={18} height={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={site.cv}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-line-strong bg-surface px-6 py-3.5 font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              <DownloadIcon width={18} height={18} />
              {t.cv}
            </a>
            <span className="flex items-center gap-1 pl-1">
              {[
                { href: site.github, label: "GitHub", Icon: GithubIcon },
                { href: site.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid size-11 place-items-center rounded-lg text-muted transition-colors hover:bg-surface-2 hover:text-fg"
                >
                  <Icon width={20} height={20} />
                </a>
              ))}
            </span>
          </div>
        </div>

        <div data-reveal style={delay(200)} className="relative mx-auto w-full max-w-[360px]">
          <div className="absolute -right-4 -top-4 h-full w-full rounded-2xl border border-line-strong" aria-hidden />
          <div className="relative overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_30px_60px_-30px_rgb(15_23_42/0.35)]">
            <Image
              src={site.photo}
              alt={t.photoAlt}
              width={960}
              height={1280}
              priority
              sizes="(min-width: 1024px) 360px, 90vw"
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-6 left-4 max-w-[250px] rounded-xl border border-line bg-surface p-4 shadow-xl shadow-slate-900/10 sm:-left-10">
            <p className="flex items-center gap-2 text-sm font-semibold">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-50" />
                <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
              </span>
              {status}
            </p>
            <p className="mt-1.5 flex items-center gap-1.5 text-xs text-muted">
              <PinIcon width={13} height={13} />
              {t.location}
            </p>
          </div>
        </div>
      </div>

      <div className="relative border-y border-line bg-surface">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 px-5 sm:px-8 lg:grid-cols-4">
          {t.stats.map((stat, i) => (
            <div
              key={stat.label}
              data-reveal
              style={delay(i * 90)}
              className={`py-8 pr-4 ${i % 2 === 1 ? "pl-6" : ""} ${i > 0 ? "lg:border-l lg:border-line lg:pl-8" : ""} ${i === 1 ? "border-l border-line" : ""} ${i === 3 ? "border-l border-line" : ""} ${i > 1 ? "border-t border-line lg:border-t-0" : ""}`}
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <CountUp value={stat.value} className="font-display text-4xl font-extrabold tracking-tight text-accent" />
              </dd>
              <dd className="mt-2 text-sm leading-snug text-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Marquee({ label }: { label: string }) {
  return (
    <div className="mx-auto flex max-w-6xl items-center gap-8 px-5 py-8 sm:px-8">
      <p className="hidden shrink-0 text-sm font-semibold text-muted sm:block">{label}</p>
      <div aria-hidden className="relative flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee gap-12">
          {[...marquee, ...marquee].map((tech, i) => (
            <span key={i} className="font-display text-lg font-semibold text-fg/35">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function About({ t }: { t: Dictionary["about"] }) {
  return (
    <Section id="about" index="01" label={t.label} title={t.title}>
      <div className="space-y-6 text-lg leading-relaxed text-muted">
        {t.paragraphs.map((p, i) => (
          <p key={p.slice(0, 24)} data-reveal style={delay(i * 80)} className={i === 0 ? "text-xl leading-relaxed text-fg" : ""}>
            {p}
          </p>
        ))}
      </div>
      <dl data-reveal className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
        {t.facts.map((fact, i) => (
          <div
            key={fact.label}
            className={`bg-surface p-6 ${i === t.facts.length - 1 && t.facts.length % 2 === 1 ? "sm:col-span-2" : ""}`}
          >
            <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">{fact.label}</dt>
            <dd className="mt-2 font-medium">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

function Expertise({ t }: { t: Dictionary["expertise"] }) {
  return (
    <Section id="expertise" index="02" label={t.label} title={t.title} intro={t.intro}>
      <div className="grid gap-4 sm:grid-cols-2">
        {t.items.map((item, i) => {
          const Icon = expertiseIcons[item.icon as keyof typeof expertiseIcons];
          return (
            <article
              key={item.title}
              data-reveal
              style={delay(i * 90)}
              className="group rounded-xl border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_20px_40px_-24px_rgb(29_78_216/0.35)]"
            >
              <span className="grid size-12 place-items-center rounded-lg bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                <Icon width={22} height={22} />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{item.text}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

function Experience({ t }: { t: Dictionary["experience"] }) {
  return (
    <Section id="experience" index="04" label={t.label} title={t.title}>
      <TimelineRail>
        <ol className="space-y-12">
          {t.items.map((item) => (
            <li key={item.role} data-reveal className="relative">
              <span
                aria-hidden
                className="absolute -left-8 top-1.5 size-[15px] rounded-full border-[3px] border-accent bg-page sm:-left-12 sm:size-[23px] sm:border-4"
              />
              <p className="text-sm font-semibold text-accent">{item.period}</p>
              <h3 className="mt-2 font-display text-2xl font-bold">{item.role}</h3>
              <p className="mt-1 font-medium text-muted">{item.org}</p>
              <ul className="mt-5 space-y-3">
                {item.points.map((point) => (
                  <li key={point.slice(0, 24)} className="flex gap-3 leading-relaxed text-fg/80">
                    <span className="mt-2.5 h-px w-3 shrink-0 bg-fg/40" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <li key={tag} className="rounded-md bg-surface-2 px-2.5 py-1 text-xs font-medium text-muted">
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </TimelineRail>

      <h3 data-reveal className="mb-6 mt-20 font-display text-xl font-bold">
        {t.education}
      </h3>
      <ul className="overflow-hidden rounded-xl border border-line bg-surface">
        {t.degrees.map((degree, i) => (
          <li
            key={degree.title}
            data-reveal
            style={delay(i * 70)}
            className="grid gap-1 border-line p-5 sm:grid-cols-[80px_1fr] sm:gap-6 [&:not(:first-child)]:border-t"
          >
            <span className="font-display font-bold text-accent">{degree.year}</span>
            <div>
              <p className="font-semibold leading-snug">{degree.title}</p>
              <p className="mt-1 text-sm text-muted">{degree.school}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Skills({ t }: { t: Dictionary["skills"] }) {
  return (
    <Section id="skills" index="05" label={t.label} title={t.title}>
      <div className="overflow-hidden rounded-xl border border-line bg-surface">
        {t.groups.map((group, i) => (
          <div
            key={group.title}
            data-reveal
            style={delay(i * 60)}
            className="grid gap-4 p-6 sm:grid-cols-[180px_1fr] sm:gap-8 [&:not(:first-child)]:border-t [&:not(:first-child)]:border-line"
          >
            <h3 className="font-display font-bold">{group.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-line px-2.5 py-1 text-sm text-fg/80 transition-colors hover:border-accent hover:bg-accent-soft hover:text-accent"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact({ t }: { t: Dictionary["contact"] }) {
  const channels = [
    { href: `mailto:${site.email}`, label: t.channels.email, value: site.email, Icon: MailIcon },
    { href: `tel:${site.phone.replace(/\s/g, "")}`, label: t.channels.phone, value: site.phone, Icon: PhoneIcon },
    { href: site.github, label: t.channels.github, value: "github.com/banloco", Icon: GithubIcon },
    { href: site.linkedin, label: t.channels.linkedin, value: "Christ Banidje", Icon: LinkedinIcon },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-night text-white">
      <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:py-32">
        <div data-reveal>
          <p className="flex items-center gap-3 text-sm font-semibold text-blue-300">
            <span className="font-mono">06</span>
            <span className="h-px w-8 bg-blue-300/40" />
            {t.label}
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">{t.title}</h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-slate-300">{t.intro}</p>

          <ul className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {channels.map(({ href, label, value, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center gap-4 py-4 transition-colors hover:text-blue-300"
                >
                  <Icon width={20} height={20} className="shrink-0 text-slate-400 group-hover:text-blue-300" />
                  <span className="w-24 shrink-0 text-sm text-slate-400">{label}</span>
                  <span className="min-w-0 truncate font-medium">{value}</span>
                  <ArrowRightIcon width={16} height={16} className="ml-auto shrink-0 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink(t.whatsappMessage)}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 font-semibold text-night transition-transform hover:-translate-y-0.5"
          >
            <WhatsappIcon width={20} height={20} />
            {t.whatsapp}
          </a>
        </div>
        <div data-reveal style={delay(120)}>
          <ContactForm t={t} />
        </div>
      </div>
    </section>
  );
}

export default function HomePage({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);
  return (
    <>
      <Hero t={t.hero} status={t.hero.badge} />
      <Marquee label={t.skills.stackLabel} />
      <About t={t.about} />
      <Expertise t={t.expertise} />
      <section id="projects" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
          <div className="mb-16 max-w-2xl">
            <SectionHeading index="03" label={t.projects.label} title={t.projects.title} intro={t.projects.intro} />
          </div>
          <ProjectShowcase projects={getProjects(lang)} lang={lang} t={t.projects} githubUrl={site.github} />
        </div>
      </section>
      <Experience t={t.experience} />
      <Skills t={t.skills} />
      <Contact t={t.contact} />
    </>
  );
}
