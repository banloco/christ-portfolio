import Image from "next/image";
import type { CSSProperties } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/fr";
import type { LocalizedProject } from "@/lib/projects";
import ProjectCoverArt from "@/components/ProjectCovers";
import CountUp from "@/components/motion/CountUp";
import { ArrowUpRightIcon, GithubIcon, LockIcon } from "@/components/icons";

type T = Dictionary["projects"];

const hostOf = (url?: string) => (url ? new URL(url).host.replace(/^www\./, "") : undefined);

/** Capture (ou illustration) dans une fenêtre de navigateur minimaliste. */
function Screen({ project, lang, t, dark, sizes }: { project: LocalizedProject; lang: Locale; t: T; dark: boolean; sizes: string }) {
  const [main] = project.images ?? [];
  const address =
    hostOf(project.live) ?? (project.github ? `github.com${new URL(project.github).pathname}` : t.private);

  return (
    <div className={`overflow-hidden rounded-tl-2xl border-l border-t ${dark ? "border-white/10 bg-night-2" : "border-line bg-page"}`}>
      <div className={`flex items-center gap-2 px-4 py-2.5 ${dark ? "bg-night-2" : "bg-page"}`}>
        <span className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </span>
        <span className={`ml-3 truncate font-mono text-[11px] ${dark ? "text-white/45" : "text-muted"}`}>{address}</span>
        {project.cover && (
          <span className={`ml-auto shrink-0 font-mono text-[10px] ${dark ? "text-white/35" : "text-muted/70"}`}>{t.illustration.toLowerCase()}</span>
        )}
      </div>
      <div className="aspect-[16/10]">
        {main ? (
          <Image src={main.src} alt={project.title} width={main.width} height={main.height} sizes={sizes} className="size-full object-cover object-top" />
        ) : (
          project.cover && <ProjectCoverArt cover={project.cover} lang={lang} />
        )}
      </div>
    </div>
  );
}

function Links({ project, t, dark }: { project: LocalizedProject; t: T; dark: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
            dark ? "bg-lime text-fg hover:bg-white" : "bg-night text-white hover:bg-lime hover:text-fg"
          }`}
        >
          {t.live}
          <ArrowUpRightIcon width={15} height={15} />
        </a>
      )}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
            dark ? "bg-white/10 text-white hover:bg-white hover:text-fg" : "bg-page text-fg hover:bg-night hover:text-white"
          }`}
        >
          <GithubIcon width={15} height={15} />
          {t.code}
        </a>
      )}
      {project.private && (
        <span className={`inline-flex items-center gap-1.5 px-1 py-2.5 font-mono text-xs ${dark ? "text-white/45" : "text-muted"}`}>
          <LockIcon width={14} height={14} />
          {t.private.toLowerCase()}
        </span>
      )}
    </div>
  );
}

function Stack({ items, dark }: { items: string[]; dark: boolean }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((tech) => (
        <li key={tech} className={`rounded-lg px-2.5 py-1 font-mono text-[11px] ${dark ? "bg-white/10 text-white/70" : "bg-page text-muted"}`}>
          {tech}
        </li>
      ))}
    </ul>
  );
}

function Metric({ project }: { project: LocalizedProject }) {
  if (!project.metric) return null;
  return (
    <p className="inline-flex items-baseline gap-2 rounded-xl bg-lime px-3 py-2 text-fg">
      <CountUp value={project.metric} className="font-display text-2xl font-extrabold" />
      <span className="text-sm text-fg/70">{project.metricLabel}</span>
    </p>
  );
}

/** Grand bloc : texte en haut, capture qui déborde en bas à droite. */
function Featured({ project, index, lang, t }: { project: LocalizedProject; index: number; lang: Locale; t: T }) {
  // Damier : noir, clair, clair, noir…
  const dark = index % 4 === 0 || index % 4 === 3;
  return (
    <article
      data-reveal
      style={{ "--reveal-delay": `${(index % 2) * 100}ms` } as CSSProperties}
      className={`group flex flex-col overflow-hidden rounded-3xl ${dark ? "bg-night text-white" : "bg-surface text-fg"}`}
    >
      <div className="p-7 sm:p-9">
        <p className={`font-mono text-xs ${dark ? "text-white/50" : "text-muted"}`}>
          {String(index + 1).padStart(2, "0")} · {project.context.toLowerCase()} · {project.year}
        </p>
        <h3 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">{project.title}</h3>
        <p className={`mt-3 text-[17px] leading-relaxed ${dark ? "text-white/70" : "text-fg/70"}`}>{project.summary}</p>

        {project.highlights && (
          <ul className="mt-5 space-y-2">
            {project.highlights.map((h) => (
              <li key={h} className={`flex gap-2.5 text-[15px] ${dark ? "text-white/80" : "text-fg/80"}`}>
                <span className={`mt-[7px] size-1.5 shrink-0 rounded-full ${dark ? "bg-lime" : "bg-night"}`} aria-hidden />
                {h}
              </li>
            ))}
          </ul>
        )}

        {project.metric && (
          <div className="mt-5">
            <Metric project={project} />
          </div>
        )}
        <div className="mt-5">
          <Stack items={project.stack} dark={dark} />
        </div>
        <div className="mt-6">
          <Links project={project} t={t} dark={dark} />
        </div>
      </div>
      <div className="mt-auto pl-7 sm:pl-9">
        <div className="translate-y-3 transition-transform duration-500 group-hover:translate-y-0">
          <Screen project={project} lang={lang} t={t} dark={dark} sizes="(min-width: 768px) 520px, 90vw" />
        </div>
      </div>
    </article>
  );
}

function Card({ project, lang, t, index }: { project: LocalizedProject; lang: Locale; t: T; index: number }) {
  const dark = index === 1;
  return (
    <article
      data-reveal
      style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
      className={`group flex flex-col overflow-hidden rounded-3xl ${dark ? "bg-night text-white" : "bg-surface text-fg"}`}
    >
      <div className="flex flex-1 flex-col p-6">
        <p className={`font-mono text-xs ${dark ? "text-white/50" : "text-muted"}`}>
          {project.context.toLowerCase()} · {project.year}
        </p>
        <h3 className="mt-3 font-display text-xl font-extrabold">{project.title}</h3>
        <p className={`mt-2 text-[15px] leading-relaxed ${dark ? "text-white/65" : "text-fg/65"}`}>
          {project.summary} {project.description}
        </p>
        {project.metric && (
          <div className="mt-4">
            <Metric project={project} />
          </div>
        )}
        <div className="mt-4">
          <Stack items={project.stack} dark={dark} />
        </div>
        <div className="mt-auto pt-5">
          <Links project={project} t={t} dark={dark} />
        </div>
      </div>
      <div className="pl-6">
        <div className="translate-y-3 transition-transform duration-500 group-hover:translate-y-0">
          <Screen project={project} lang={lang} t={t} dark={dark} sizes="(min-width: 1024px) 360px, 90vw" />
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
      <div className="grid gap-4 md:grid-cols-2">
        {featured.map((project, i) => (
          <Featured key={project.id} project={project} index={i} lang={lang} t={t} />
        ))}
      </div>

      {others.length > 0 && (
        <>
          <p data-reveal className="mb-4 mt-12 font-mono text-xs text-muted">
            {t.other.toLowerCase()}
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
        className="mt-4 flex items-center justify-between rounded-3xl bg-lime px-7 py-6 font-display text-lg font-bold transition-colors hover:bg-night hover:text-lime"
      >
        <span className="flex items-center gap-3">
          <GithubIcon width={22} height={22} />
          {t.more}
        </span>
        <ArrowUpRightIcon width={22} height={22} />
      </a>
    </>
  );
}
