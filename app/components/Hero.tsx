import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-6xl mx-auto w-full flex  flex-col lg:flex-row gap-12 lg:gap-60 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-6">
            <div className="relative w-24 h-24 md:w-48 md:h-48 rounded-full overflow-hidden ring-2 ring-primary/20 ring-offset-2 ring-offset-background">
              <Image
                src="/profile.webp"
                alt="Profile photo"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-balance">
                Miloš Stojanović
              </h1>
              <p className="text-lg md:text-2xl text-primary font-medium mt-1">
                Frontend Developer
              </p>
            </div>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
            I build accessible, pixel-perfect digital experiences for the web.
            Passionate about creating interfaces that blend thoughtful design
            with robust engineering.
          </p>
          <div className="flex items-center gap-4 pt-4">
            <Link
              href="https://github.com/miloss98"
              className="p-2 rounded-lg text-primary hover:bg-secondary transition-colors"
              aria-label="GitHub"
              target="_blank"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/miloss98/"
              className="p-2 rounded-lg text-primary hover:bg-secondary transition-colors"
              aria-label="LinkedIn"
              target="_blank"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:stojanovic98m@gmail.com"
              className="p-2 rounded-lg text-primary hover:bg-secondary transition-colors"
              aria-label="Email"
              target="_self"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <nav className="hidden lg:flex flex-col items-start gap-4">
          <NavLink href="#about" label="About" />
          <NavLink href="#experience" label="Experience" />
          <NavLink href="#skills" label="Skills" />
          <NavLink href="#projects" label="Projects" />
          <NavLink href="#contact" label="Contact" />
        </nav>
      </div>
    </section>
  );
};

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors"
    >
      <span className="h-px w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-primary  transition-all" />
      <span className="text-xs md:text-base font-semibold uppercase tracking-widest">
        {label}
      </span>
    </Link>
  );
}
