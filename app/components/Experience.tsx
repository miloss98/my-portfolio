import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const experiences = [
  {
    period: "2023 — Present",
    title: "Senior Frontend Developer",
    company: "Tech Company",
    url: "#",
    description:
      "Build and maintain critical components used to construct the company's frontend, across the whole product. Work closely with cross-functional teams to implement new features and improve user experience.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    period: "2021 — 2023",
    title: "Full Stack Developer",
    company: "Digital Agency",
    url: "#",
    description:
      "Developed and shipped highly interactive web applications for diverse clients. Collaborated with designers to translate designs into clean, efficient code.",
    technologies: ["Vue.js", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    period: "2019 — 2021",
    title: "Junior Web Developer",
    company: "Startup Inc",
    url: "#",
    description:
      "Built responsive websites and web applications. Worked alongside senior developers to maintain and improve existing codebases.",
    technologies: ["JavaScript", "HTML", "CSS", "PHP"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-3xl mx-auto space-y-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-primary flex items-center gap-4">
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
      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide pt-1">
        {period}
      </p>
      <div className="space-y-3">
        <Link
          href={url}
          className="inline-flex items-center gap-1 text-foreground font-medium hover:text-primary transition-colors"
        >
          {title} · {company}
          <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
        </Link>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
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
