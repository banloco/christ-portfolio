import Image from "next/image";
import type { CSSProperties } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/fr";
import type { LocalizedProject } from "@/lib/projects";
import ProjectCoverArt from "@/components/ProjectCovers";
import Tilt from "@/components/motion/Tilt";
import CountUp from "@/components/motion/CountUp";
import Spotlight from "@/components/motion/Spotlight";
import { ArrowUpRightIcon, GithubIcon, LockIcon } from "@/components/icons";

type T = Dictionary["projects"];

const hostOf = (url?: string) => (url ? new URL(url).host.replace(/^www\./, "") : undefined);

/** Capture dans un cadre de navigateur, ou illustration animée. */
function Visual({ project, lang, t, sizes }: { project: LocalizedProject; lang: Locale; t: T; sizes: string }) {
  const [main, second] = project.images ?? [];
  const address =
    hostOf(project.live) ?? (project.github ? `github.com${new URL(project.github).pathname}` : t.private);

  return (
    <div className="relative">
      {second && (
        <div className="absolute -right-4 -top-6 hidden w-[70%] rotate-3 overflow-hidden rounded-xl border border-line-strong opacity-70 shadow-2xl sm:block">
          <Image src={second.src} alt="" width={second.width} height={second.height} sizes="400px" className="w-full" />
        </div>
      )}
      <div className="relative overflow-hidden rounded-2xl border border-line-strong bg-panel shadow-[0_30px_80px_-20px_rgb(0_0_0/0.8)]">
        <div className="flex items-center gap-3 border-b border-line bg-panel-2/80 px-4 py-2.5">
          <span className="flex gap-1.5" aria-hidden>
            <span className="size-2.5 rounded-full bg-[#ff5f57]/80" />
            <span className="size-2.5 rounded-full bg-[#febc2e]/80" />
            <span className="size-2.5 rounded-full bg-[#28c840]/80" />
          </span>
          <span className="mx-auto max-w-[60%] truncate rounded-md bg-ink/60 px-3 py-0.5 font-mono text-[11px] text-muted">
            {address}
          </span>
          {project.cover && <span className="font-mono text-[10px] uppercase tracking-wider text-muted/70">{t.illustration}</span>}
        </div>
        <div className="aspect-[16/10]">
          {main ? (
            <Image
              src={main.src}
              alt={project.title}
              width={main.width}
              height={main.height}
              sizes={sizes}
              className="size-full object-cover object-top"
            />
          ) : (
            project.cover && <ProjectCoverArt cover={project.cover} lang={lang} />
          )}
        </div>
      </div>
    </div>
  );
}

function Links({ project, t }: { project: LocalizedProject; t: T }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
        >
          {t.live}
          <ArrowUpRightIcon width={16} height={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      )}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-sm transition-colors hover:border-cyan hover:text-cyan"
        >
          <GithubIcon width={16} height={16} />
          {t.code}
        </a>
      )}
      {project.private && (
        <span className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm text-muted">
          <LockIcon width={15} height={15} />
          {t.private}
        </span>
      )}
    </div>
  );
}

function Stack({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((tech) => (
        <li key={tech} className="rounded-md border border-line bg-panel/60 px-2 py-1 font-mono text-[11px] text-muted">
          {tech}
        </li>
      ))}
    </ul>
  );
}

function Featured({ project, index, lang, t }: { project: LocalizedProject; index: number; lang: Locale; t: T }) {
  const reversed = index % 2 === 1;
  return (
    <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div data-reveal className={reversed ? "lg:order-2" : ""}>
        <div className="relative">
          <div
            aria-hidden
            className="absolute -inset-6 rounded-[3rem] opacity-30 blur-3xl"
            style={{ background: `radial-gradient(circle at 50% 50%, ${project.accent}, transparent 70%)` }}
          />
          <Tilt>
            <Visual project={project} lang={lang} t={t} sizes="(min-width: 1024px) 560px, 92vw" />
          </Tilt>
        </div>
      </div>

      <div data-reveal style={{ "--reveal-delay": "120ms" } as CSSProperties} className={reversed ? "lg:order-1" : ""}>
        <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted">
          <span className="text-gradient font-semibold">{String(index + 1).padStart(2, "0")}</span>
          <span className="h-px w-8 bg-line-strong" />
          {project.context} · {project.year}
        </p>
        <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{project.title}</h3>
        <p className="mt-4 text-lg text-fg/90">{project.summary}</p>
        <p className="mt-3 leading-relaxed text-muted">{project.description}</p>

        {project.metric && (
          <p className="mt-6 flex items-baseline gap-3">
            <CountUp value={project.metric} className="text-gradient font-display text-4xl font-semibold" />
            <span className="text-sm text-muted">{project.metricLabel}</span>
          </p>
        )}

        {project.highlights && (
          <ul className="mt-6 space-y-2.5">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-[15px] text-fg/85">
                <span className="mt-2 size-1.5 shrink-0 rounded-full" style={{ background: project.accent }} aria-hidden />
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6">
          <Stack items={project.stack} />
        </div>
        <div className="mt-8">
          <Links project={project} t={t} />
        </div>
      </div>
    </article>
  );
}

function Card({ project, lang, t, index }: { project: LocalizedProject; lang: Locale; t: T; index: number }) {
  return (
    <article
      data-reveal
      style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
      className="spotlight flex flex-col rounded-3xl border border-line bg-panel/70 p-4 transition-colors hover:border-line-strong"
    >
      <Visual project={project} lang={lang} t={t} sizes="(min-width: 1024px) 380px, 92vw" />
      <div className="flex flex-1 flex-col px-2 pb-2 pt-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          {project.context} · {project.year}
        </p>
        <h3 className="mt-3 font-display text-xl font-semibold">{project.title}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-muted">{project.summary} {project.description}</p>
        {project.metric && (
          <p className="mt-4 flex items-baseline gap-2">
            <CountUp value={project.metric} className="text-gradient font-display text-2xl font-semibold" />
            <span className="text-sm text-muted">{project.metricLabel}</span>
          </p>
        )}
        <div className="mt-5">
          <Stack items={project.stack} />
        </div>
        <div className="mt-auto pt-6">
          <Links project={project} t={t} />
        </div>
      </div>
    </article>
  );
}

export default function ProjectShowcase({ projects, lang, t, githubUrl }: {
  projects: LocalizedProject[];
  lang: Locale;
  t: T;
  githubUrl: string;
}) {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <>
      <div className="space-y-28 sm:space-y-36">
        {featured.map((project, i) => (
          <Featured key={project.id} project={project} index={i} lang={lang} t={t} />
        ))}
      </div>

      {others.length > 0 && (
        <>
          <h3 data-reveal className="mb-8 mt-32 font-display text-2xl font-semibold">
            {t.other}
          </h3>
          <Spotlight className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {others.map((project, i) => (
              <Card key={project.id} project={project} lang={lang} t={t} index={i} />
            ))}
          </Spotlight>
        </>
      )}

      <a
        data-reveal
        href={githubUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-12 inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-sm transition-colors hover:border-cyan hover:text-cyan"
      >
        <GithubIcon width={16} height={16} />
        {t.more}
        <ArrowUpRightIcon width={16} height={16} />
      </a>
    </>
  );
}
