import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";
import Link from "next/link";
import { projects } from "../data";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="px-6 md:px-12 lg:px-24 py-8 md:py-12 lg:py-20"
    >
      <div className="max-w-5xl mx-auto space-y-6 md:space-y-12">
        <h2 className="text-base md:text-lg lg:text-xl font-semibold uppercase tracking-widest text-primary flex items-center gap-4">
          <span className="h-px w-8 bg-primary" />
          Projects
        </h2>
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

function ProjectCard({
  title,
  description,
  technologies,
  liveUrl,
}: (typeof projects)[0]) {
  return (
    <Link
      href={liveUrl}
      aria-label={`View ${title} live`}
      target="_blank"
      className="group p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>

          <span className="text-muted-foreground group-hover:text-primary transition-colors">
            <Eye className="w-5 h-5" />
          </span>
        </div>
        <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-sm font-medium"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}
