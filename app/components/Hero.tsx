import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
                Your Name
              </h1>
              <p className="text-lg md:text-xl text-primary font-medium mt-1">
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
              href="#"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <nav className="hidden lg:flex flex-col items-start gap-4">
          <NavLink href="#about" label="About" />
          <NavLink href="#experience" label="Experience" />
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
      className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
    >
      <span className="h-px w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all" />
      <span className="text-xs font-semibold uppercase tracking-widest">
        {label}
      </span>
    </Link>
  );
}
