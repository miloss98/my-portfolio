import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const experiences = [
  {
    period: "2022 — Present",
    title: "Frontend Developer",
    company: "Rhapsody Media",
    url: "https://www.rhapsodymedia.com/",
    description:
      "Build and maintain critical components used to construct the company's frontend, across the whole product. Work closely with cross-functional teams to implement new features and improve user experience.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS  "],
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="px-6 md:px-12 lg:px-24 py-8 md:py-12 lg:py-20"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        <h2 className="text-base md:text-lg lg:text-xl font-semibold uppercase tracking-widest text-primary flex items-center gap-4">
          <span className="h-px w-8 bg-primary" />
          Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

function ExperienceCard({
  period,
  title,
  company,
  url,
  description,
  technologies,
}: (typeof experiences)[0]) {
  return (
    <div className="group grid sm:grid-cols-[140px_1fr] gap-4">
      <p className="text-xs md:text-xs font-medium text-muted-foreground uppercase tracking-wide pt-1">
        {period}
      </p>
      <div className="space-y-3">
        <Link
          href={url}
          className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors text-sm md:text-base lg:text-lg"
          target="_blank"
        >
          {title} · {company}
          <ArrowUpRight className="w-4 h-4" />
        </Link>
        <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs md:text-sm font-medium"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
