import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Rhapsody Media Website",
    description:
      "A website for our company Rhapsody Media, built from the scratch, using Next.js, TypeScript, Tailwind CSS and Strapi headless CMS.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Strapi CMS"],
    liveUrl: "https://www.rhapsodymedia.com/",
  },
  {
    title: "Ceros Website",
    description:
      "Redesign and development of the Ceros website, focusing on modern design principles and seamless user experience.",
    technologies: ["Next.js", "TypeScript", "SASS", "GraphQL", "Contember CMS"],
    liveUrl: "https://www.ceros.com/",
  },
  {
    title: "Retoucher ROI Calculator",
    description:
      "Small application that calculates the return on investment (ROI) for photo retouching services based on various input parameters. Results are displayed using interactive charts and can be exported as a PDF report.",
    technologies: ["React", "Tailwind CSS", "Chart.js", "React-PDF", "Vite"],
    liveUrl: "https://www.rhapsodymedia.com/yourroi",
  },
  {
    title: "John Deere Puzzle Game",
    description:
      "A memory puzzle game designed for John Deere, made to help children improve their cognitive skills while having fun. The game features colorful graphics, engaging sound effects, and multiple difficulty levels to cater to different age groups.",
    technologies: ["React", "CSS"],
    liveUrl: "https://jd-puzzle.netlify.app/",
  },
  {
    title: "Coloring Game for John Deere",
    description:
      "An interactive dragon coloring game developed for John Deere, allowing children to unleash their creativity by coloring various dragon illustrations using a palette of vibrant colors and tools with ability to save their artwork.",
    technologies: ["React", "CSS"],
    liveUrl: " https://dragon-colouring.netlify.app/",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="px-6 md:px-12 lg:px-24 py-8 md:py-12 lg:py-20"
    >
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
}: (typeof projects)[0]) {
  return (
    <Link
      href={liveUrl}
      aria-label={`View ${title} live`}
      target="_blank"
      className="group p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>

          <span className="text-muted-foreground group-hover:text-primary transition-colors">
            <ArrowUpRight className="w-5 h-5" />
          </span>
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
    </Link>
  );
}
