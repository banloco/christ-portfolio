"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n/fr";
import type { LocalizedProject, ProjectCategory } from "@/lib/projects";
import { ArrowUpRightIcon, GithubIcon, LockIcon } from "@/components/icons";

type Filter = "all" | ProjectCategory;
const filters: Filter[] = ["all", "web", "data", "security"];

export default function ProjectGrid({ projects, t, githubUrl }: {
  projects: LocalizedProject[];
  t: Dictionary["projects"];
  githubUrl: string;
}) {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = filter === "all" ? projects : projects.filter((p) => p.categories.includes(filter));

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label={t.label}>
        {filters.map((f) => {
          const count = f === "all" ? projects.length : projects.filter((p) => p.categories.includes(f)).length;
          const active = f === filter;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                active ? "border-transparent bg-fg text-ink" : "border-line-strong text-muted hover:text-fg"
              }`}
            >
              {t.filters[f]} <span className="ml-1 font-mono text-xs opacity-60">{count}</span>
            </button>
          );
        })}
      </div>

      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <li
            key={project.id}
            className="flex flex-col rounded-2xl border border-line bg-panel p-6 transition-colors hover:border-line-strong"
          >
            <div className="flex items-center justify-between gap-3 font-mono text-xs text-muted">
              <span className="truncate">{project.context}</span>
              <span className="shrink-0">{project.year}</span>
            </div>
            <h3 className="mt-4 font-display text-xl font-semibold leading-snug">
              {project.title}
              {project.inProgress && (
                <span className="ml-2 inline-block rounded-full border border-violet/40 px-2 py-0.5 align-middle font-mono text-[11px] font-normal text-violet">
                  {t.inProgress}
                </span>
              )}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">{project.description}</p>

            {project.metric && (
              <p className="mt-5 flex items-baseline gap-2 rounded-xl bg-panel-2 px-4 py-3">
                <span className="font-display text-2xl font-semibold text-gradient">{project.metric}</span>
                <span className="text-sm text-muted">{project.metricLabel}</span>
              </p>
            )}

            <ul className="mt-5 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <li key={tech} className="rounded-md border border-line px-2 py-1 font-mono text-[11px] text-muted">
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap items-center gap-4 pt-6 text-sm">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-cyan">
                  <GithubIcon width={16} height={16} />
                  {t.code}
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-cyan">
                  <ArrowUpRightIcon width={16} height={16} />
                  {t.live}
                </a>
              )}
              {project.private && (
                <span className="inline-flex items-center gap-1.5 text-muted">
                  <LockIcon width={15} height={15} />
                  {t.private}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>

      <a
        href={githubUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-10 inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-sm transition-colors hover:border-cyan hover:text-cyan"
      >
        <GithubIcon width={16} height={16} />
        {t.more}
        <ArrowUpRightIcon width={16} height={16} />
      </a>
    </>
  );
}
