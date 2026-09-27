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
  ArrowUpRightIcon,
  BoltIcon,
  BrainIcon,
  CodeIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
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

/** Styles des blocs : gris clair, noir ou citron. */
const tile = {
  light: "bg-surface text-fg",
  dark: "bg-night text-white",
  lime: "bg-lime text-fg",
};

/** Libellé façon terminal : « 01 · projets ». */
function Label({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return <p className={`font-mono text-xs ${dark ? "text-white/50" : "text-muted"}`}>{children}</p>;
}

function Section({ id, index, label, title, intro, children }: {
  id: string;
  index: string;
  label: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-14 sm:px-8 sm:py-20">
      <div data-reveal className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <Label>
            {index} · {label.toLowerCase()}
          </Label>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h2>
        </div>
        {intro && <p className="max-w-sm text-muted">{intro}</p>}
      </div>
      {children}
    </section>
  );
}

function Hero({ t }: { t: Dictionary["hero"] }) {
  return (
    <section id="top" className="mx-auto max-w-6xl px-4 pt-24 sm:px-8 sm:pt-28">
      <div className="grid gap-4 lg:grid-cols-12">
        {/* Présentation */}
        <div data-reveal className={`${tile.light} relative overflow-hidden rounded-3xl p-7 sm:p-10 lg:col-span-8`}>
          <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
          <div className="relative">
            <p className="font-mono text-xs text-muted">
              ~/christ-banidje <span className="text-fg">$</span> whoami
            </p>
            <p className="mt-2 font-mono text-sm font-medium">
              Christ Banidje <span className="text-muted">· {t.location}</span>
            </p>
            <h1 className="mt-6 font-display text-[2.5rem] font-extrabold leading-[1.02] tracking-tight sm:text-6xl">
              {t.headline}
            </h1>
            <p className="mt-6 text-xl font-medium leading-relaxed sm:text-2xl">
              {t.titleStart} <RotatingWords words={t.rotating} />
              <br className="hidden sm:block" /> {t.titleEnd}
            </p>
            <p className="mt-5 max-w-xl leading-relaxed text-muted">{t.intro}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-night px-6 py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                {t.ctaProjects}
                <ArrowRightIcon width={18} height={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={site.cv}
                download
                className="inline-flex items-center gap-2 rounded-xl border border-line-strong bg-page px-6 py-3.5 font-semibold transition-colors hover:bg-lime"
              >
                <DownloadIcon width={18} height={18} />
                {t.cv}
              </a>
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
                  className="grid size-12 place-items-center rounded-xl border border-line-strong bg-page transition-colors hover:bg-night hover:text-lime"
                >
                  <Icon width={20} height={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Photo */}
        <div
          data-reveal
          style={delay(120)}
          className={`${tile.dark} relative flex min-h-[420px] items-end justify-center overflow-hidden rounded-3xl lg:col-span-4 lg:row-span-2`}
        >
          <div className="absolute left-1/2 top-[28%] size-[340px] -translate-x-1/2 rounded-full bg-lime/15 blur-3xl" aria-hidden />
          <Image
            src="/christ-banidje-cutout.webp"
            alt={t.photoAlt}
            width={960}
            height={1280}
            priority
            sizes="(min-width: 1024px) 380px, 90vw"
            className="relative w-[118%] max-w-none translate-y-2"
          />
          <p className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-lime px-3 py-1.5 text-xs font-semibold text-fg">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-fg opacity-40" />
              <span className="relative inline-flex size-2 rounded-full bg-fg" />
            </span>
            {t.status}
          </p>
        </div>

        {/* Chiffres clés */}
        <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:col-span-8">
          {t.stats.map((stat, i) => {
            const style = [tile.dark, tile.light, tile.lime, tile.light][i % 4];
            return (
              <div key={stat.label} data-reveal style={delay(200 + i * 80)} className={`${style} rounded-3xl p-5 sm:p-6`}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <CountUp
                    value={stat.value}
                    className={`font-display text-4xl font-extrabold tracking-tight ${i === 0 ? "text-lime" : ""}`}
                  />
                </dd>
                <dd className={`mt-2 text-sm leading-snug ${i === 0 ? "text-white/60" : "text-fg/65"}`}>{stat.label}</dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <div aria-hidden className="mx-auto mt-4 max-w-6xl px-4 sm:px-8">
      <div className="overflow-hidden rounded-3xl bg-night py-5">
        <div className="flex w-max animate-marquee items-center gap-8">
          {[...marquee, ...marquee].map((tech, i) => (
            <span key={i} className="flex items-center gap-8 font-display text-xl font-bold text-white">
              {tech}
              <span className="text-lime">✱</span>
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
      <div className="grid gap-4 lg:grid-cols-12">
        <div data-reveal className={`${tile.light} rounded-3xl p-7 sm:p-10 lg:col-span-7`}>
          <div className="space-y-5 leading-relaxed text-fg/70">
            {t.paragraphs.map((p, i) => (
              <p key={p.slice(0, 24)} className={i === 0 ? "text-xl font-medium leading-relaxed text-fg" : ""}>
                {p}
              </p>
            ))}
          </div>
        </div>
        <dl data-reveal style={delay(120)} className={`${tile.dark} rounded-3xl p-7 sm:p-8 lg:col-span-5`}>
          {t.facts.map((fact, i) => (
            <div key={fact.label} className={i > 0 ? "mt-5 border-t border-white/10 pt-5" : ""}>
              <dt className="font-mono text-xs text-lime">{fact.label.toLowerCase()}</dt>
              <dd className="mt-1.5 text-white/90">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}

function Expertise({ t }: { t: Dictionary["expertise"] }) {
  return (
    <Section id="expertise" index="02" label={t.label} title={t.title} intro={t.intro}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {t.items.map((item, i) => {
          const Icon = expertiseIcons[item.icon as keyof typeof expertiseIcons];
          return (
            <article
              key={item.title}
              data-reveal
              style={delay(i * 80)}
              className="group flex flex-col rounded-3xl bg-surface p-6 transition-colors duration-300 hover:bg-night hover:text-white"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-12 place-items-center rounded-2xl bg-night text-lime transition-colors duration-300 group-hover:bg-lime group-hover:text-fg">
                  <Icon width={22} height={22} />
                </span>
                <span className="font-mono text-xs text-muted group-hover:text-white/50">0{i + 1}</span>
              </div>
              <h3 className="mt-10 font-display text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted transition-colors group-hover:text-white/65">{item.text}</p>
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
      <div className="grid gap-4 lg:grid-cols-12">
        <div className={`${tile.light} rounded-3xl p-7 sm:p-10 lg:col-span-8`}>
          <TimelineRail>
            <ol className="space-y-10">
              {t.items.map((item) => (
                <li key={item.role} data-reveal className="relative">
                  <span
                    aria-hidden
                    className="absolute -left-8 top-1 size-[15px] rounded-full border-[3px] border-night bg-lime sm:-left-12 sm:size-[23px] sm:border-4"
                  />
                  <p className="font-mono text-xs text-muted">{item.period}</p>
                  <h3 className="mt-2 font-display text-xl font-bold sm:text-2xl">{item.role}</h3>
                  <p className="mt-1 text-sm font-medium text-muted">{item.org}</p>
                  <ul className="mt-4 space-y-2.5">
                    {item.points.map((point) => (
                      <li key={point.slice(0, 24)} className="flex gap-3 text-[15px] leading-relaxed text-fg/75">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-night" aria-hidden />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <li key={tag} className="rounded-lg bg-page px-2.5 py-1 font-mono text-[11px] text-muted">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </TimelineRail>
        </div>

        <div data-reveal style={delay(120)} className={`${tile.dark} h-fit rounded-3xl p-7 sm:p-8 lg:sticky lg:top-24 lg:col-span-4`}>
          <Label dark>{t.education.toLowerCase()}</Label>
          <ul className="mt-5 space-y-5">
            {t.degrees.map((degree) => (
              <li key={degree.title} className="border-t border-white/10 pt-5 first:border-0 first:pt-0">
                <span className="inline-block rounded-md bg-lime px-2 py-0.5 font-mono text-xs font-medium text-fg">{degree.year}</span>
                <p className="mt-2 font-semibold leading-snug">{degree.title}</p>
                <p className="mt-1 text-sm text-white/55">{degree.school}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function Skills({ t }: { t: Dictionary["skills"] }) {
  return (
    <Section id="skills" index="05" label={t.label} title={t.title}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {t.groups.map((group, i) => (
          <div
            key={group.title}
            data-reveal
            style={delay((i % 3) * 80)}
            className={`${i === 2 ? tile.lime : tile.light} rounded-3xl p-6`}
          >
            <h3 className="font-display text-lg font-bold">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-lg bg-page px-2.5 py-1.5 text-sm font-medium transition-colors hover:bg-night hover:text-lime"
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
    <section id="contact" className="mx-auto max-w-6xl px-4 py-14 sm:px-8 sm:py-20">
      <div className={`${tile.dark} relative overflow-hidden rounded-[2rem] p-7 sm:p-12`}>
        <div className="bg-grid-dark pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_65%)]" aria-hidden />
        <div className="relative grid gap-12 lg:grid-cols-2">
          <div data-reveal>
            <Label dark>06 · {t.label.toLowerCase()}</Label>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-6xl">
              {t.title.split(" ").slice(0, -1).join(" ")} <span className="rounded-xl bg-lime px-2 text-fg">{t.title.split(" ").slice(-1)}</span>
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/65">{t.intro}</p>

            <ul className="mt-8 space-y-2">
              {channels.map(({ href, label, value, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-2xl bg-night-2 px-4 py-3.5 transition-colors hover:bg-lime hover:text-fg"
                  >
                    <Icon width={18} height={18} className="shrink-0 text-lime group-hover:text-fg" />
                    <span className="w-20 shrink-0 font-mono text-xs text-white/45 group-hover:text-fg/60">{label.toLowerCase()}</span>
                    <span className="min-w-0 truncate font-medium">{value}</span>
                    <ArrowUpRightIcon width={16} height={16} className="ml-auto shrink-0 opacity-40 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={whatsappLink(t.whatsappMessage)}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 font-semibold text-fg transition-transform hover:-translate-y-0.5"
            >
              <WhatsappIcon width={20} height={20} />
              {t.whatsapp}
            </a>
          </div>
          <div data-reveal style={delay(120)}>
            <ContactForm t={t} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);
  return (
    <>
      <Hero t={t.hero} />
      <Marquee />
      <About t={t.about} />
      <Expertise t={t.expertise} />
      <Section id="projects" index="03" label={t.projects.label} title={t.projects.title} intro={t.projects.intro}>
        <ProjectShowcase projects={getProjects(lang)} lang={lang} t={t.projects} githubUrl={site.github} />
      </Section>
      <Experience t={t.experience} />
      <Skills t={t.skills} />
      <Contact t={t.contact} />
    </>
  );
}
