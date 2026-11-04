import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import { SectionTitle } from "@/components/IdeShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Karina" },
      { name: "description", content: "Get in touch with Karina via email, GitHub or LinkedIn." },
      { property: "og:title", content: "Contact — Karina" },
      { property: "og:description", content: "Get in touch with Karina." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const links = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Github, label: "GitHub", value: profile.github.replace("https://", ""), href: profile.github },
    { icon: Linkedin, label: "LinkedIn", value: profile.linkedin.replace("https://www.", ""), href: profile.linkedin },
  ];
  return (
    <section>
      <SectionTitle comment="contact.css" title="Get in touch" />
      <p className="mb-8 max-w-xl leading-relaxed text-muted-foreground">
        I'm open to internships, collaborations and conversations about backend development.
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        {links.map(({ icon: Icon, label, value, href }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer"
            className="rounded-lg border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md">
            <Icon size={20} className="text-primary" />
            <p className="mt-3 font-semibold">{label}</p>
            <p className="mt-1 break-all font-mono text-xs text-muted-foreground">{value}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
