import Image from "next/image";
import Link from "next/link";
import { IoLogoGithub, IoLogoLinkedin, IoMailOutline } from "react-icons/io5";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-[75vh]  md:min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-8 md:py-12 lg:py-20"
    >
      <div className="max-w-5xl mx-auto w-full flex  flex-col lg:flex-row gap-12 lg:gap-40 xl:gap-60 items-center">
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative w-28 h-28 md:w-48 md:h-48 rounded-full overflow-hidden ring-2 ring-primary/80 ring-offset-0 ring-offset-background">
              <Image
                src="/profile-pic.webp"
                alt="Profile photo"
                fill
                className="object-cover object-top"
                priority
                sizes="100% 100%"
              />
            </div>
            <div>
              <h1 className="text-center md:text-left text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-balance">
                Miloš Stojanović
              </h1>
              <p className="text-center md:text-left text-lg md:text-2xl text-primary font-medium mt-1">
                Frontend Developer
              </p>
            </div>
          </div>
          <p className="text-muted-foreground text-center md:text-left text-lg leading-relaxed max-w-lg">
            I build accessible, user-focused web applications using modern
            frontend technologies.
          </p>
          <div className="flex justify-center md:justify-start items-center gap-4 pt-4">
            <Link
              href="https://github.com/miloss98"
              className="p-2 rounded-lg text-primary hover:bg-secondary transition-colors"
              aria-label="GitHub"
              target="_blank"
            >
              <IoLogoGithub className="w-8 h-8 md:w-7 md:h-7" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/miloss98/"
              className="p-2 rounded-lg text-primary hover:bg-secondary transition-colors"
              aria-label="LinkedIn"
              target="_blank"
            >
              <IoLogoLinkedin className="w-8 h-8 md:w-7 md:h-7" />
            </Link>
            <Link
              href="mailto:stojanovic98m@gmail.com"
              className="p-2 rounded-lg text-primary hover:bg-secondary transition-colors"
              aria-label="Email"
              target="_self"
            >
              <IoMailOutline className="w-8 h-8 md:w-7 md:h-7" />
            </Link>
          </div>
        </div>
        <nav className="hidden lg:flex flex-col items-start gap-4">
          <NavLink href="#about" label="About" />
          <NavLink href="#experience" label="Experience" />
          <NavLink href="#skills" label="Skills" />
          <NavLink href="#projects" label="Projects" />
          <NavLink href="#certificates" label="Certificates" />
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
