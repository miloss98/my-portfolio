import Link from "next/link";
import { certificates } from "../data";
import { ExternalLink } from "lucide-react";

export function Certificates() {
  return (
    <section id="certificates" className="px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-5xl mx-auto space-y-8">
        <h2 className="text-base md:text-lg lg:text-xl font-semibold uppercase tracking-widest text-primary flex items-center gap-4">
          <span className="h-px w-8 bg-primary" />
          Certificates
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.toReversed().map((cert) => (
            <Link
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-2">
                  <h3 className="font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
                    {cert.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{cert.issuer}</span>
                    <span className="text-border">|</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
