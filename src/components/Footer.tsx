import type { Dictionary } from "@/i18n/fr";
import { site } from "@/lib/site";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";

export default function Footer({ t }: { t: Dictionary["footer"] }) {
  const links = [
    { href: `mailto:${site.email}`, label: "Email", Icon: MailIcon },
    { href: site.github, label: "GitHub", Icon: GithubIcon },
    { href: site.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  ];

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {site.name}. {t.rights}
        </p>
        <div className="flex items-center gap-2">
          {links.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="grid size-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-cyan hover:text-cyan"
            >
              <Icon width={18} height={18} />
            </a>
          ))}
          <a href="#top" className="ml-2 text-sm text-muted transition-colors hover:text-fg">
            {t.top} ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
