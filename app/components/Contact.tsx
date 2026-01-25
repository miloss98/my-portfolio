import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const Contact = () => {
  return (
    <section id="contact" className="px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-5xl mx-auto space-y-8">
        <h2 className="text-base md:text-lg lg:text-xl font-semibold uppercase tracking-widest text-primary flex items-center gap-4">
          <span className="h-px w-8 bg-primary" />
          Contact
        </h2>
        <div className="space-y-6">
          <p className="text-2xl md:text-3xl font-medium text-foreground text-balance leading-snug">
            {
              "If you'd like to discuss a project or just say hi, I'm always down to chat."
            }
          </p>
          <Button asChild size="lg" className="group">
            <Link href="mailto:stojanovic98m@gmail.com">
              Get in touch
              <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </Button>
          <div className="pt-8 space-y-4">
            <div className="">
              <ContactLink
                label="Email"
                value="stojanovic98m@gmail.com"
                href="mailto:stojanovic98m@gmail.com"
                target="_self"
              />
            </div>
            <ContactLink
              label="LinkedIn"
              value="linkedin.com/in/miloss98/"
              href="https://www.linkedin.com/in/miloss98/"
              target="_blank"
            />
            <ContactLink
              label="GitHub"
              value="github.com/miloss98"
              href="https://github.com/miloss98"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

function ContactLink({
  label,
  value,
  href,
  target,
}: {
  label: string;
  value: string;
  href: string;
  target: string;
}) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-border">
      <span className="text-sm text-muted-foreground">{label}</span>
      <Link
        href={href}
        className="text-sm text-foreground hover:text-primary transition-colors flex"
        target={target}
      >
        {value}
        <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </Link>
    </div>
  );
}
