import { createFileRoute } from "@tanstack/react-router";
import { about } from "@/data/portfolio";
import { SectionTitle, Tag } from "@/components/IdeShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Karina" },
      { name: "description", content: "About Karina: Computer Science background, interests and hobbies." },
      { property: "og:title", content: "About — Karina" },
      { property: "og:description", content: "Computer Science background, interests and hobbies." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <section>
      <SectionTitle comment="about.md" title="About me" />
      <div className="space-y-4 leading-relaxed">
        {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
      </div>
      <h2 className="mt-10 font-mono text-sm font-semibold text-primary">## Interests</h2>
      <div className="mt-3 flex flex-wrap gap-2">{about.interests.map((i) => <Tag key={i}>{i}</Tag>)}</div>
      <h2 className="mt-8 font-mono text-sm font-semibold text-primary">## Hobbies</h2>
      <div className="mt-3 flex flex-wrap gap-2">{about.hobbies.map((h) => <Tag key={h}>{h}</Tag>)}</div>
    </section>
  );
}
