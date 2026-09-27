import Image from "next/image";
import type { CSSProperties } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/fr";
import type { LocalizedProject } from "@/lib/projects";
import ProjectCoverArt from "@/components/ProjectCovers";
import Tilt from "@/components/motion/Tilt";
import CountUp from "@/components/motion/CountUp";
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
        <div className="absolute -right-3 -top-5 hidden w-[68%] rotate-2 overflow-hidden rounded-lg border border-line opacity-80 shadow-xl sm:block">
          <Image src={second.src} alt="" width={second.width} height={second.height} sizes="400px" className="w-full" />
        </div>
      )}
      <div className="relative overflow-hidden rounded-xl border border-line bg-surface shadow-[0_24px_60px_-28px_rgb(15_23_42/0.45)]">
        <div className="flex items-center gap-3 border-b border-line bg-surface-2 px-4 py-2.5">
          <span className="flex gap-1.5" aria-hidden>
            <span className="size-2.5 rounded-full bg-[#ff5f57]/80" />
            <span className="size-2.5 rounded-full bg-[#febc2e]/80" />
            <span className="size-2.5 rounded-full bg-[#28c840]/80" />
          </span>
          <span className="mx-auto max-w-[60%] truncate rounded-md bg-surface px-3 py-0.5 font-mono text-[11px] text-muted">
            {address}
          </span>
          {project.cover && <span className="text-[10px] font-semibold uppercase tracking-wider text-muted">{t.illustration}</span>}
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
          className="group inline-flex items-center gap-2 rounded-lg bg-night px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent"
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
          className="inline-flex items-center gap-2 rounded-lg border border-line-strong bg-surface px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
        >
          <GithubIcon width={16} height={16} />
          {t.code}
        </a>
      )}
      {project.private && (
        <span className="inline-flex items-center gap-2 px-1 py-2.5 text-sm text-muted">
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
        <li key={tech} className="rounded-md bg-surface-2 px-2.5 py-1 text-xs font-medium text-muted">
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
        <div className="rounded-2xl p-6 sm:p-10" style={{ background: `${project.accent}1f` }}>
          <Tilt max={4}>
            <Visual project={project} lang={lang} t={t} sizes="(min-width: 1024px) 560px, 92vw" />
          </Tilt>
        </div>
      </div>

      <div data-reveal style={{ "--reveal-delay": "120ms" } as CSSProperties} className={reversed ? "lg:order-1" : ""}>
        <p className="flex items-center gap-3 text-sm font-medium text-muted">
          <span className="font-mono font-semibold text-accent">{String(index + 1).padStart(2, "0")}</span>
          <span className="h-px w-8 bg-line-strong" />
          {project.context} · {project.year}
        </p>
        <h3 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">{project.title}</h3>
        <p className="mt-4 text-lg font-medium text-fg">{project.summary}</p>
        <p className="mt-3 leading-relaxed text-muted">{project.description}</p>

        {project.metric && (
          <p className="mt-6 flex items-baseline gap-3">
            <CountUp value={project.metric} className="font-display text-4xl font-extrabold text-accent" />
            <span className="text-sm text-muted">{project.metricLabel}</span>
          </p>
        )}

        {project.highlights && (
          <ul className="mt-6 space-y-2.5">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-[15px] text-fg/80">
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
      className="flex flex-col rounded-xl border border-line bg-surface p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgb(15_23_42/0.4)]"
    >
      <Visual project={project} lang={lang} t={t} sizes="(min-width: 1024px) 380px, 92vw" />
      <div className="flex flex-1 flex-col px-2 pb-2 pt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
          {project.context} · {project.year}
        </p>
        <h3 className="mt-2 font-display text-xl font-bold">{project.title}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-muted">{project.summary} {project.description}</p>
        {project.metric && (
          <p className="mt-4 flex items-baseline gap-2">
            <CountUp value={project.metric} className="font-display text-2xl font-extrabold text-accent" />
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
          <h3 data-reveal className="mb-8 mt-28 border-t border-line pt-16 font-display text-2xl font-bold">
            {t.other}
          </h3>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {others.map((project, i) => (
              <Card key={project.id} project={project} lang={lang} t={t} index={i} />
            ))}
          </div>
        </>
      )}

      <a
        data-reveal
        href={githubUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-12 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
      >
        <GithubIcon width={16} height={16} />
        {t.more}
        <ArrowUpRightIcon width={16} height={16} />
      </a>
    </>
  );
}
