import Link from "next/link";
import { experiences } from "../data";
import { ExternalLink } from "lucide-react";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="px-6 md:px-12 lg:px-24 py-8 md:py-12 lg:py-20"
    >
      <div className="max-w-5xl mx-auto space-y-6 md:space-y-12">
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
}: (typeof experiences)[0]) {
  return (
    <div className="group grid sm:grid-cols-[140px_1fr] gap-4">
      <p className="text-xs md:text-xs font-medium text-muted-foreground uppercase tracking-wide pt-1">
        {period}
      </p>
      <div className="space-y-3">
        <Link
          href={url}
          target="_blank"
          className="group/link inline-flex items-center gap-4 text-foreground font-medium hover:text-primary transition-colors text-base lg:text-lg"
        >
          {title} · {company}
          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover/link:text-primary transition-colors" />
        </Link>

        <p className="text-muted-foreground leading-relaxed text-base pr-2 md:pr-0 lg:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
