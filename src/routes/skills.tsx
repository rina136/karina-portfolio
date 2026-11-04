import { createFileRoute } from "@tanstack/react-router";
import { skills } from "@/data/portfolio";
import { SectionTitle, Tag } from "@/components/IdeShell";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Karina" },
      { name: "description", content: "Languages, backend, frontend, databases and tools Karina works with." },
      { property: "og:title", content: "Skills — Karina" },
      { property: "og:description", content: "Karina's technical skills." },
    ],
  }),
  component: Skills,
});

function Skills() {
  return (
    <section>
      <SectionTitle comment="skills.ts" title="Skills" />
      <div className="rounded-lg border bg-card p-6 font-mono text-sm">
        <p><span className="text-code-keyword">export const</span> skills = {"{"}</p>
        <div className="space-y-4 py-3 pl-6">
          {Object.entries(skills).map(([k, list]) => (
            <div key={k} className="flex flex-col gap-2 sm:flex-row sm:items-start">
              <span className="w-28 shrink-0 text-primary">{k}:</span>
              <div className="flex flex-wrap gap-2">{list.map((s) => <Tag key={s}>{s}</Tag>)}</div>
            </div>
          ))}
        </div>
        <p>{"}"};</p>
      </div>
    </section>
  );
}
