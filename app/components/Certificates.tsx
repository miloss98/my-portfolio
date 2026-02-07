import Link from "next/link";
import { certificates } from "../data";
import { ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Certificates() {
  const reversedCerts = [...certificates].reverse();

  return (
    <section
      id="certificates"
      className="px-6 md:px-12 lg:px-24 py-8 md:py-12 lg:py-20 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto space-y-6 md:space-y-12">
        <h2 className="text-base md:text-lg lg:text-xl font-semibold uppercase tracking-widest text-primary flex items-center gap-4">
          <span className="h-px w-8 bg-primary" />
          Certificates
        </h2>

        <div className="block sm:hidden relative">
          <Carousel opts={{ align: "center", loop: true }} className="w-full">
            <div className="relative">
              {/* Subtle Edge Shadows */}
              <div className="absolute left-0 top-0 bottom-0 z-10 w-4 bg-linear-to-r from-background to-transparent pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 z-10 w-4 bg-linear-to-l from-background to-transparent pointer-events-none" />

              <CarouselContent className="-ml-2">
                {reversedCerts.map((cert) => (
                  <CarouselItem key={cert.id} className="pl-2 basis-[85%]">
                    <div className="py-1 h-full">
                      <CertificateCard cert={cert} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>

            {/* Carousel controls */}
            <div className="flex justify-end gap-3 mt-6">
              <CarouselPrevious className="static translate-y-0 h-9 w-9 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors" />
              <CarouselNext className="static translate-y-0 h-9 w-9 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors" />
            </div>
          </Carousel>
        </div>

        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reversedCerts.map((cert) => (
            <CertificateCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CertificateCard({ cert }: { cert: (typeof certificates)[0] }) {
  return (
    <Link
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-5 min-h-32 h-full rounded-lg border border-border bg-card transition-all duration-300 relative hover:z-10 hover:border-primary/60 hover:shadow-[0_0_15px_-5px_rgba(0,116,98,0.3)]"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-2">
          <h3 className="font-medium text-lg text-foreground group-hover:text-primary transition-colors leading-snug">
            {cert.name}
          </h3>
          <div className="flex items-center gap-5 text-base text-muted-foreground">
            <div className="flex gap-2 items-center">
              <span>{cert.issuer}</span>
              <span className="opacity-40">|</span>
              <span>{cert.date}</span>
            </div>
            <cert.issuerIcon className="w-5 h-5" color={cert.issuerIconColor} />
          </div>
        </div>
        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
      </div>
    </Link>
  );
}
