export const About = () => {
  return (
    <section
      id="about"
      className="px-6 md:px-12 lg:px-24 py-8 md:py-12 lg:py-20"
    >
      <div className="max-w-5xl pr-2 md:pr-0 mx-auto space-y-6 md:space-y-12">
        <h2 className="text-base md:text-lg lg:text-xl font-semibold uppercase tracking-widest text-primary flex items-center gap-4">
          <span className="h-px w-8 bg-primary" />
          About
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed text-base lg:text-lg">
          <p>
            Full-Stack Developer with 4+ years of professional experience
            building fast, accessible web applications with{" "}
            <span className="text-foreground font-medium">React</span>,{" "}
            <span className="text-foreground font-medium">Next.js</span>,{" "}
            <span className="text-foreground font-medium">TypeScript</span> and{" "}
            <span className="text-foreground font-medium">Tailwind CSS</span>,
            and, more recently, the backends behind them with{" "}
            <span className="text-foreground font-medium">Node.js</span>,{" "}
            <span className="text-foreground font-medium">Express</span>,{" "}
            <span className="text-foreground font-medium">Prisma</span> and{" "}
            <span className="text-foreground font-medium">PostgreSQL</span>.
          </p>
          <p>
            At Rhapsody Media (UK) I built the company website from scratch,
            raised Lighthouse performance from ~60 to ~90 and shipped features
            used by 500+ users. I care about clean, strictly typed, maintainable
            code, work closely with designers and backend developers, and use
            AI-assisted development (Claude Code) every day as a pair
            programmer: I own the decisions and review every change.
          </p>
        </div>
      </div>
    </section>
  );
};
