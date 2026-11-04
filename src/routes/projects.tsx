import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionTitle, Tag } from "@/components/IdeShell";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Karina" },
      { name: "description", content: "Backend and full-stack projects built by Karina." },
      { property: "og:title", content: "Projects — Karina" },
      { property: "og:description", content: "Backend and full-stack projects built by Karina." },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <section>
      <SectionTitle comment="projects.json" title="Projects" />
      <div className="grid gap-5">
        {projects.map((p) => (
          <article key={p.name} className="rounded-lg border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md">
            <p className="font-mono text-xs text-muted-foreground">{p.file}</p>
            <h2 className="mt-1 text-xl font-semibold">{p.name}</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>
            <div className="mt-5 flex gap-5 text-sm">
              <a href={p.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-primary hover:underline"><Github size={16} /> GitHub</a>
               //<a href={p.demo} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-primary hover:underline"><ExternalLink size={16} /> Live Demo</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
