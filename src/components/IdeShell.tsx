import { Link, useRouterState } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ChevronDown, Files, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { profile } from "@/data/portfolio";

export const sections = [
  { to: "/", file: "home.tsx", label: "Home" },
  { to: "/about", file: "about.md", label: "About" },
  { to: "/projects", file: "projects.json", label: "Projects" },
  { to: "/skills", file: "skills.ts", label: "Skills" },
  { to: "/experience", file: "experience.md", label: "Experience" },
  { to: "/contact", file: "contact.css", label: "Contact" },
] as const;

const ext = (f: string) => f.split(".").pop() ?? "";

function FileIcon({ file }: { file: string }) {
  return <span className={`file-badge file-${ext(file)}`}>{ext(file)}</span>;
}

export function IdeShell({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const current = sections.find((s) => s.to === path) ?? sections[0];

  return (
    <div className="flex h-screen flex-col bg-background text-foreground">
      <header className="flex h-9 shrink-0 items-center justify-between border-b bg-chrome px-3 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <button className="md:hidden" aria-label="Toggle explorer" onClick={() => setOpen(!open)}>
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
          <span className="font-mono">karina-portfolio</span>
        </div>
        <span className="hidden font-mono sm:inline">{current.file} — Karina</span>
        <span />
      </header>

      <div className="relative flex min-h-0 flex-1">
        <nav className="hidden w-12 shrink-0 flex-col items-center gap-4 border-r bg-activity py-3 text-muted-foreground md:flex">
          <Files size={20} className="text-primary" />
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-primary"><Github size={20} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-primary"><Linkedin size={20} /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-primary"><Mail size={20} /></a>
        </nav>

        <aside
          className={`${open ? "flex" : "hidden"} absolute inset-y-0 left-0 z-20 w-60 flex-col border-r bg-sidebar shadow-lg md:static md:flex md:shadow-none`}
        >
          <div className="px-4 py-2 text-[11px] font-semibold tracking-widest text-muted-foreground">EXPLORER</div>
          <div className="flex items-center gap-1 px-2 py-1 font-mono text-xs font-semibold">
            <ChevronDown size={14} /> PORTFOLIO
          </div>
          <ul className="font-mono text-sm">
            {sections.map((s) => (
              <li key={s.to}>
                <Link
                  to={s.to}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-2 py-1 pl-7 pr-3 transition-colors hover:bg-sidebar-accent ${
                    path === s.to ? "bg-sidebar-accent text-primary" : ""
                  }`}
                >
                  <FileIcon file={s.file} /> {s.file}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        <main className="flex min-w-0 flex-1 flex-col">
          <div className="flex shrink-0 overflow-x-auto border-b bg-chrome">
            {sections.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className={`flex shrink-0 items-center gap-2 border-r px-4 py-2 font-mono text-xs transition-colors ${
                  path === s.to
                    ? "border-t-2 border-t-primary bg-background text-foreground"
                    : "text-muted-foreground hover:bg-background/60"
                }`}
              >
                <FileIcon file={s.file} /> {s.file}
              </Link>
            ))}
          </div>
          <div className="shrink-0 border-b px-6 py-1 font-mono text-xs text-muted-foreground">
            portfolio › <span className="text-foreground">{current.file}</span>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto scroll-smooth">
            <div className="mx-auto max-w-4xl px-6 py-10 md:px-10 md:py-14">{children}</div>
          </div>
        </main>
      </div>

      <footer className="flex h-6 shrink-0 items-center justify-between bg-primary px-3 font-mono text-[11px] text-primary-foreground">
        <span>main</span>
        <span>{current.label} · UTF-8 · TypeScript</span>
      </footer>
    </div>
  );
}

export function SectionTitle({ comment, title }: { comment: string; title: string }) {
  return (
    <div className="mb-8">
      <p className="font-mono text-sm text-code-comment">// {comment}</p>
      <h1 className="mt-1 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h1>
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return <span className="rounded border bg-secondary px-2 py-0.5 font-mono text-xs text-secondary-foreground">{children}</span>;
}
