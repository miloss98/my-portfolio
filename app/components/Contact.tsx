import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const Contact = () => {
  return (
    <section id="contact" className="px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-primary flex items-center gap-4">
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
            <Link href="mailto:hello@example.com">
              Get in touch
              <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </Button>
          <div className="pt-8 space-y-4">
            <ContactLink
              label="Email"
              value="hello@example.com"
              href="mailto:hello@example.com"
            />
            <ContactLink
              label="LinkedIn"
              value="linkedin.com/in/yourname"
              href="#"
            />
            <ContactLink label="GitHub" value="github.com/yourname" href="#" />
            <ContactLink label="Twitter" value="@yourhandle" href="#" />
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
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-border">
      <span className="text-sm text-muted-foreground">{label}</span>
      <Link
        href={href}
        className="text-sm text-foreground hover:text-primary transition-colors"
      >
        {value}
      </Link>
    </div>
  );
}
