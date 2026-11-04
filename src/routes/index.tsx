import { createFileRoute, Link } from "@tanstack/react-router";
import { User } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Karina — Backend Developer Portfolio" },
      { name: "description", content: "Portfolio of Karina, Computer Science student and backend developer." },
      { property: "og:title", content: "Karina — Backend Developer Portfolio" },
      { property: "og:description", content: "Computer Science student and backend developer." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <section className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
      <div>
        <p className="font-mono text-sm text-code-comment">// hello world!! welcome to my portfolio {"<3"}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
          Hi, I'm <span className="text-primary">{profile.name}</span>.
        </h1>
        <p className="mt-3 font-mono text-base text-muted-foreground">{profile.role}</p>
        <p className="mt-6 max-w-xl leading-relaxed">{profile.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild><Link to="/projects">View Projects</Link></Button>
          <Button asChild variant="outline"><Link to="/contact">Contact</Link></Button>
          <Button asChild variant="ghost"><a href={profile.resume} target="_blank" rel="noreferrer">Resume</a></Button>
        </div>
      </div>
      <div className="mx-auto flex h-48 w-48 items-center justify-center overflow-hidden rounded-xl border bg-secondary md:h-60 md:w-60">
        {profile.photo ? (
          <img src={profile.photo} alt={profile.name} className="h-full w-full object-cover" />
        ) : (
          <User size={72} className="text-muted-foreground" aria-label="Profile photo placeholder" />
        )}
      </div>
    </section>
  );
}
