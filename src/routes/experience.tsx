import { createFileRoute } from "@tanstack/react-router";
import { experience } from "@/data/portfolio";
import { SectionTitle } from "@/components/IdeShell";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Karina" },
      { name: "description", content: "Karina's service-learning and volunteer teaching experience." },
      { property: "og:title", content: "Experience — Karina" },
      { property: "og:description", content: "Service-learning and volunteer teaching experience." },
    ],
  }),
  component: Experience,
});

function Experience() {
  return (
    <section>
      <SectionTitle comment="experience.md" title="Experience" />
      <ol className="space-y-8 border-l-2 pl-6">
        {experience.map((e) => (
          <li key={e.org} className="relative">
            <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" />
            <h2 className="text-lg font-semibold">{e.org}</h2>
            <p className="font-mono text-sm text-muted-foreground">
              {e.role}{e.period && ` · ${e.period}`}
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 leading-relaxed">
              {e.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
