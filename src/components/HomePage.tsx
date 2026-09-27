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
import Spotlight from "@/components/motion/Spotlight";
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

/** Technologies qui tournent autour de la photo. */
const orbit = ["Python", "React", "TensorFlow", "Laravel", "Kafka", "Next.js"];

const marquee = [
  "Python", "React", "Next.js", "TypeScript", "Laravel", "FastAPI", "Scikit-Learn", "TensorFlow",
  "Kafka", "Spark", "PostgreSQL", "Docker", "dbt", "Ollama", "MediaPipe", "Tailwind CSS",
];

function Section({ id, index, label, title, intro, children }: {
  id: string;
  index: string;
  label: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <div data-reveal className="mb-14 max-w-3xl">
        <p className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-muted">
          <span className="text-gradient font-semibold">{index}</span>
          <span className="h-px w-10 bg-line-strong" />
          {label}
        </p>
        <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
        {intro && <p className="mt-5 text-lg leading-relaxed text-muted">{intro}</p>}
      </div>
      {children}
    </section>
  );
}

function Hero({ t }: { t: Dictionary["hero"] }) {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="aurora pointer-events-none absolute inset-0" aria-hidden>
        <span className="-left-[10%] -top-[20%] h-[60vh] w-[60vh] bg-cyan" />
        <span className="right-[-10%] top-[5%] h-[55vh] w-[55vh] bg-violet" style={{ animationDelay: "-6s" }} />
        <span className="bottom-[-20%] left-[30%] h-[45vh] w-[45vh] bg-blue" style={{ animationDelay: "-12s" }} />
      </div>
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" aria-hidden />

      <div className="relative mx-auto grid min-h-[100svh] max-w-6xl items-center gap-20 px-5 pb-16 pt-32 sm:px-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16 lg:pt-28">
        <div>
          <p data-reveal className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-ink/50 px-3.5 py-1.5 text-xs text-fg/80 backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            {t.badge}
          </p>
          <p data-reveal style={delay(80)} className="mt-8 text-lg text-muted">
            {t.greeting} <span className="font-medium text-fg">Christ Banidje</span> 👋
          </p>
          <h1
            data-reveal
            style={delay(160)}
            className="mt-3 font-display text-[2.4rem] font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-[3.6rem]"
          >
            {t.titleStart}
            <br />
            <RotatingWords words={t.rotating} />
            <br />
            <span className="text-fg/60">{t.titleEnd}</span>
          </h1>
          <p data-reveal style={delay(240)} className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
            {t.intro}
          </p>
          <div data-reveal style={delay(320)} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="bg-gradient-brand group inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-medium text-ink shadow-[0_10px_40px_-10px_rgb(34_211_238/0.6)] transition-transform hover:-translate-y-0.5"
            >
              {t.ctaProjects}
              <ArrowRightIcon width={18} height={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={site.cv}
              download
              className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-ink/40 px-6 py-3.5 font-medium backdrop-blur transition-colors hover:border-cyan hover:text-cyan"
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
                  className="grid size-11 place-items-center rounded-full text-muted transition-colors hover:bg-white/5 hover:text-fg"
                >
                  <Icon width={20} height={20} />
                </a>
              ))}
            </span>
          </div>
        </div>

        <div data-reveal style={delay(200)} className="relative mx-auto w-full max-w-[340px]">
          {/* Cercle pointillé derrière la photo */}
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 -ml-[240px] -mt-[240px] hidden size-[480px] rounded-full border border-dashed border-line-strong sm:block"
          />
          {/* Photo dans un anneau dégradé qui tourne */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.2rem] p-[2px] shadow-[0_30px_100px_-20px_rgb(34_211_238/0.35)]">
            <div
              aria-hidden
              className="absolute -inset-1/2 animate-spin-slow bg-[conic-gradient(from_0deg,#22d3ee,#60a5fa,#a78bfa,transparent_60%,#22d3ee)]"
            />
            <div className="relative size-full overflow-hidden rounded-[calc(2.2rem-2px)] bg-panel">
              <Image
                src={site.photo}
                alt={t.photoAlt}
                width={960}
                height={1280}
                priority
                sizes="(min-width: 1024px) 340px, 90vw"
                className="size-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/90 to-transparent" aria-hidden />
              <p className="absolute inset-x-4 bottom-4 flex items-center gap-2 rounded-2xl border border-line-strong bg-ink/70 px-4 py-3 text-sm backdrop-blur-md">
                <PinIcon width={16} height={16} className="shrink-0 text-cyan" />
                {t.location}
              </p>
            </div>
          </div>
          {/* Badges de technologies en orbite, devant la photo (rayon 240 px) */}
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 -ml-[240px] -mt-[240px] pointer-events-none z-10 hidden size-[480px] animate-orbit sm:block"
          >
            {orbit.map((tech, i) => {
              const angle = (i / orbit.length) * 360;
              return (
                <span
                  key={tech}
                  className="absolute left-1/2 top-1/2"
                  style={{ transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-240px) rotate(-${angle}deg)` }}
                >
                  <span className="block animate-orbit-reverse whitespace-nowrap rounded-full border border-line-strong bg-ink/85 px-3 py-1 font-mono text-[11px] text-fg/80 backdrop-blur">
                    {tech}
                  </span>
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-12 sm:px-8">
        <dl className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {t.stats.map((stat, i) => (
            <div key={stat.label} data-reveal style={delay(i * 90)} className="border-gradient rounded-2xl bg-panel/70 p-5 backdrop-blur sm:p-6">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <CountUp value={stat.value} className="text-gradient font-display text-3xl font-semibold sm:text-4xl" />
              </dd>
              <dd className="mt-2 text-sm leading-snug text-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <div
      aria-hidden
      className="relative overflow-hidden border-y border-line py-6 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]"
    >
      <div className="flex w-max animate-marquee gap-10">
        {[...marquee, ...marquee].map((tech, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-2xl font-semibold text-fg/25 sm:text-3xl">
            {tech}
            <span className="text-gradient text-lg">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function About({ t }: { t: Dictionary["about"] }) {
  return (
    <Section id="about" index="01" label={t.label} title={t.title}>
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6 text-lg leading-relaxed text-muted">
          {t.paragraphs.map((p, i) => (
            <p key={p.slice(0, 24)} data-reveal style={delay(i * 80)} className={i === 0 ? "text-xl text-fg/90" : ""}>
              {p}
            </p>
          ))}
        </div>
        <dl data-reveal style={delay(160)} className="border-gradient h-fit divide-y divide-line rounded-3xl bg-panel/70">
          {t.facts.map((fact) => (
            <div key={fact.label} className="px-6 py-5">
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan">{fact.label}</dt>
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
      <Spotlight className="grid gap-4 sm:grid-cols-2">
        {t.items.map((item, i) => {
          const Icon = expertiseIcons[item.icon as keyof typeof expertiseIcons];
          return (
            <article
              key={item.title}
              data-reveal
              style={delay(i * 90)}
              className="spotlight group overflow-hidden rounded-3xl border border-line bg-panel/70 p-8 transition-colors hover:border-line-strong"
            >
              <div className="flex items-start justify-between">
                <span className="grid size-14 place-items-center rounded-2xl border border-line bg-panel-2 text-cyan transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:text-violet">
                  <Icon width={26} height={26} />
                </span>
                <span className="font-mono text-xs text-muted/60">0{i + 1}</span>
              </div>
              <h3 className="mt-8 font-display text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{item.text}</p>
            </article>
          );
        })}
      </Spotlight>
    </Section>
  );
}

function Experience({ t }: { t: Dictionary["experience"] }) {
  return (
    <Section id="experience" index="04" label={t.label} title={t.title}>
      <TimelineRail>
        <ol className="space-y-8">
          {t.items.map((item) => (
            <li key={item.role} data-reveal className="relative">
              <span
                aria-hidden
                className="bg-gradient-brand absolute -left-8 top-8 size-[15px] rounded-full ring-[5px] ring-ink sm:-left-12 sm:size-[23px]"
              />
              <article className="rounded-3xl border border-line bg-panel/70 p-6 transition-colors hover:border-line-strong sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold sm:text-2xl">{item.role}</h3>
                  <p className="font-mono text-xs uppercase tracking-wider text-cyan">{item.period}</p>
                </div>
                <p className="mt-1 text-muted">{item.org}</p>
                <ul className="mt-5 space-y-3">
                  {item.points.map((point) => (
                    <li key={point.slice(0, 24)} className="flex gap-3 leading-relaxed text-fg/80">
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
      </TimelineRail>

      <h3 data-reveal className="mb-6 mt-24 font-display text-2xl font-semibold">
        {t.education}
      </h3>
      <ul className="grid gap-4 sm:grid-cols-2">
        {t.degrees.map((degree, i) => (
          <li
            key={degree.title}
            data-reveal
            style={delay(i * 70)}
            className="flex gap-5 rounded-3xl border border-line bg-panel/70 p-6 transition-colors hover:border-line-strong"
          >
            <span className="text-gradient font-display text-lg font-semibold">{degree.year}</span>
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
      <Spotlight className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {t.groups.map((group, i) => (
          <div
            key={group.title}
            data-reveal
            style={delay((i % 3) * 90)}
            className="spotlight rounded-3xl border border-line bg-panel/70 p-6 transition-colors hover:border-line-strong"
          >
            <h3 className="font-display text-lg font-semibold">{group.title}</h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-lg border border-line bg-panel-2 px-3 py-1.5 text-sm text-fg/85 transition-colors hover:border-cyan/50 hover:text-cyan"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Spotlight>
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
    <section id="contact" className="relative overflow-hidden">
      <div className="aurora pointer-events-none absolute inset-0 opacity-60" aria-hidden>
        <span className="bottom-[-30%] left-[-10%] h-[50vh] w-[50vh] bg-violet" />
        <span className="bottom-[-20%] right-[-10%] h-[50vh] w-[50vh] bg-cyan" style={{ animationDelay: "-8s" }} />
      </div>
      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div data-reveal className="mb-14 max-w-3xl">
          <p className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-muted">
            <span className="text-gradient font-semibold">06</span>
            <span className="h-px w-10 bg-line-strong" />
            {t.label}
          </p>
          <h2 className="font-display text-5xl font-semibold tracking-tight sm:text-7xl">
            <span className="text-gradient">{t.title}</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">{t.intro}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div data-reveal className="space-y-3">
            {channels.map(({ href, label, value, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-line bg-panel/70 p-4 backdrop-blur transition-all hover:translate-x-1 hover:border-line-strong"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-panel-2 text-cyan">
                  <Icon width={20} height={20} />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[11px] uppercase tracking-wider text-muted">{label}</span>
                  <span className="block truncate">{value}</span>
                </span>
                <ArrowRightIcon
                  width={18}
                  height={18}
                  className="ml-auto shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-fg"
                />
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
