import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with cart functionality, payment processing, and inventory management. Built with a focus on performance and user experience.",
    technologies: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team workspaces.",
    technologies: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "A beautiful weather application that displays current conditions and forecasts with interactive charts and location-based data.",
    technologies: ["Vue.js", "OpenWeather API", "Chart.js", "Vite"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Generator",
    description:
      "A tool that helps developers create stunning portfolio websites with customizable templates and easy deployment options.",
    technologies: ["Node.js", "Express", "MongoDB", "React"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-5xl mx-auto space-y-12">
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
  githubUrl,
}: (typeof projects)[0]) {
  return (
    <div className="group p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-3">
            <Link
              href={githubUrl}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={`View ${title} on GitHub`}
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href={liveUrl}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={`View ${title} live`}
            >
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs font-medium"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
