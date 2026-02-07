import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "../data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="px-6 md:px-12 lg:px-24 py-8 md:py-12 lg:py-20 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto space-y-6 md:space-y-12 relative">
        <h2 className="text-base md:text-lg lg:text-xl font-semibold uppercase tracking-widest text-primary flex items-center gap-4">
          <span className="h-px w-8 bg-primary" />
          Projects
        </h2>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 z-10 w-4 md:w-8 bg-linear-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 z-10 w-4 md:w-8 bg-linear-to-l from-background to-transparent pointer-events-none" />

          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {projects.map((project, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-[95%] md:basis-[90%] lg:basis-[85%]"
                >
                  <div className="h-full py-2">
                    <ProjectCard {...project} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-end mr-3 md:mr-5 gap-3 mt-8">
              <CarouselPrevious className="static translate-y-0 h-10 w-10 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors" />
              <CarouselNext className="static translate-y-0 h-10 w-10 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

function ProjectCard({
  title,
  image,
  description,
  technologies,
  liveUrl,
}: (typeof projects)[0]) {
  return (
    <Link
      href={liveUrl}
      target="_blank"
      className="group block h-full rounded-lg bg-card border border-border transition-all duration-300 overflow-hidden relative 
                 hover:border-primary/60 hover:shadow-[0_0_20px_-5px_rgba(0,116,98,0.4)] hover:z-20"
    >
      <div className="flex flex-col sm:grid sm:grid-cols-2 xl:grid-cols-2 h-full">
        <div className="relative w-full bg-muted overflow-hidden aspect-video sm:aspect-auto sm:h-full xl:h-full shrink-0">
          <Image
            src={image as string}
            alt={title}
            fill
            className="object-cover object-top transition-opacity duration-300 group-hover:opacity-75"
            priority
          />
        </div>

        {/* CONTENT CONTAINER */}
        <div className="p-6 md:p-8 flex flex-col justify-center h-full transition-colors duration-300 group-hover:bg-primary/2">
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg md:text-xl xl:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                {title}
              </h3>
              <span className="text-muted-foreground group-hover:text-primary transition-colors shrink-0">
                <Eye className="w-5 h-5 mt-1" />
              </span>
            </div>

            <p className="text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed line-clamp-4 xl:line-clamp-none">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-6">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs md:text-sm font-medium whitespace-nowrap"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
