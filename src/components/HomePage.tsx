import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import type { Dictionary } from "@/i18n/fr";
import { getProjects } from "@/lib/projects";
import { site, whatsappLink } from "@/lib/site";
import ProjectGrid from "@/components/ProjectGrid";
import ContactForm from "@/components/ContactForm";
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

function Section({ id, index, label, title, intro, children }: {
  id: string;
  index: string;
  label: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
      <div data-reveal className="mb-12 max-w-2xl">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-cyan">
          {index} — {label}
        </p>
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        {intro && <p className="mt-4 text-lg text-muted">{intro}</p>}
      </div>
      {children}
    </section>
  );
}

function Hero({ t }: { t: Dictionary["hero"] }) {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-cyan/10 blur-[120px]"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:pt-24">
        <div data-reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/60 px-3.5 py-1.5 text-xs text-muted">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            {t.badge}
          </p>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.18em] text-muted">{t.kicker}</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            {t.title} <span className="text-gradient">{t.titleAccent}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{t.intro}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="bg-gradient-brand group inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              {t.ctaProjects}
              <ArrowRightIcon width={18} height={18} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 font-medium transition-colors hover:border-cyan hover:text-cyan"
            >
              {t.ctaContact}
            </a>
            <a
              href={site.cv}
              download
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 font-medium text-muted transition-colors hover:text-fg"
            >
              <DownloadIcon width={18} height={18} />
              {t.cv}
            </a>
          </div>
        </div>

        <div data-reveal style={delay(120)} className="relative mx-auto w-full max-w-sm">
          <div className="bg-gradient-brand absolute -inset-px rounded-[2rem] opacity-70 blur-2xl" aria-hidden />
          <div className="bg-gradient-brand relative rounded-[2rem] p-px">
            <div className="relative overflow-hidden rounded-[calc(2rem-1px)] bg-panel">
              <Image
                src={site.photo}
                alt={t.photoAlt}
                width={960}
                height={1280}
                priority
                sizes="(min-width: 1024px) 384px, 90vw"
                className="aspect-[4/5] w-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/90 to-transparent" aria-hidden />
              <div className="absolute inset-x-4 bottom-4 flex items-center gap-2 rounded-2xl border border-line-strong bg-ink/70 px-4 py-3 text-sm backdrop-blur-md">
                <PinIcon width={16} height={16} className="shrink-0 text-cyan" />
                {t.location}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-8 sm:px-8">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
          {t.stats.map((stat, i) => (
            <div
              key={stat.label}
              data-reveal
              style={delay(i * 80)}
              className="bg-panel p-5 sm:p-6"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-3xl font-semibold text-gradient sm:text-4xl">{stat.value}</dd>
              <dd className="mt-1.5 text-sm leading-snug text-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function About({ t }: { t: Dictionary["about"] }) {
  return (
    <Section id="about" index="01" label={t.label} title={t.title}>
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div data-reveal className="space-y-5 text-lg leading-relaxed text-muted">
          {t.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <dl data-reveal className="h-fit divide-y divide-line rounded-2xl border border-line bg-panel">
          {t.facts.map((fact) => (
            <div key={fact.label} className="px-6 py-5">
              <dt className="font-mono text-xs uppercase tracking-wider text-cyan">{fact.label}</dt>
              <dd className="mt-1.5">{fact.value}</dd>
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
      <div className="grid gap-4 sm:grid-cols-2">
        {t.items.map((item, i) => {
          const Icon = expertiseIcons[item.icon as keyof typeof expertiseIcons];
          return (
            <article
              key={item.title}
              data-reveal
              style={delay(i * 80)}
              className="group rounded-2xl border border-line bg-panel p-7 transition-colors hover:border-line-strong"
            >
              <span className="grid size-12 place-items-center rounded-xl border border-line bg-panel-2 text-cyan transition-colors group-hover:text-violet">
                <Icon width={22} height={22} />
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold">{item.title}</h3>
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
    <Section id="experience" index="03" label={t.label} title={t.title}>
      <ol className="relative space-y-6 border-l border-line pl-6 sm:pl-10">
        {t.items.map((item) => (
          <li key={item.role} data-reveal className="relative">
            <span className="bg-gradient-brand absolute -left-[31px] top-7 size-3 rounded-full ring-4 ring-ink sm:-left-[47px]" aria-hidden />
            <article className="rounded-2xl border border-line bg-panel p-6 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-wider text-cyan">{item.period}</p>
              <h3 className="mt-2 font-display text-xl font-semibold sm:text-2xl">{item.role}</h3>
              <p className="mt-1 text-muted">{item.org}</p>
              <ul className="mt-5 space-y-3">
                {item.points.map((point) => (
                  <li key={point.slice(0, 24)} className="flex gap-3 leading-relaxed text-muted">
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-violet" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
              <ul className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <li key={tag} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>

      <h3 data-reveal className="mb-6 mt-20 font-display text-2xl font-semibold">
        {t.education}
      </h3>
      <ul className="grid gap-4 sm:grid-cols-2">
        {t.degrees.map((degree, i) => (
          <li
            key={degree.title}
            data-reveal
            style={delay(i * 60)}
            className="flex gap-5 rounded-2xl border border-line bg-panel p-6"
          >
            <span className="font-display text-lg font-semibold text-gradient">{degree.year}</span>
            <div>
              <p className="font-medium leading-snug">{degree.title}</p>
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
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {t.groups.map((group, i) => (
          <div
            key={group.title}
            data-reveal
            style={delay((i % 3) * 80)}
            className="rounded-2xl border border-line bg-panel p-6"
          >
            <h3 className="font-display text-lg font-semibold">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li key={skill} className="rounded-lg bg-panel-2 px-3 py-1.5 text-sm text-fg/90">
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
    <Section id="contact" index="06" label={t.label} title={t.title} intro={t.intro}>
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div data-reveal className="space-y-3">
          {channels.map(({ href, label, value, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-line bg-panel p-4 transition-colors hover:border-line-strong"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-panel-2 text-cyan">
                <Icon width={20} height={20} />
              </span>
              <span className="min-w-0">
                <span className="block font-mono text-xs uppercase tracking-wider text-muted">{label}</span>
                <span className="block truncate">{value}</span>
              </span>
            </a>
          ))}
          <a
            href={whatsappLink(t.whatsappMessage)}
            target="_blank"
            rel="noreferrer"
            className="mt-3 flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-5 py-4 font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            <WhatsappIcon width={20} height={20} />
            {t.whatsapp}
          </a>
        </div>
        <div data-reveal style={delay(120)}>
          <ContactForm t={t} />
        </div>
      </div>
    </Section>
  );
}

export default function HomePage({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);
  return (
    <>
      <Hero t={t.hero} />
      <About t={t.about} />
      <Expertise t={t.expertise} />
      <Experience t={t.experience} />
      <Section id="projects" index="04" label={t.projects.label} title={t.projects.title} intro={t.projects.intro}>
        <ProjectGrid projects={getProjects(lang)} t={t.projects} githubUrl={site.github} />
      </Section>
      <Skills t={t.skills} />
      <Contact t={t.contact} />
    </>
  );
}
