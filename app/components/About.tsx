export const About = () => {
  return (
    <section
      id="about"
      className="px-6 md:px-12 lg:px-24 py-8 md:py-12 lg:py-20"
    >
      <div className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-base md:text-lg lg:text-xl font-semibold uppercase tracking-widest text-primary flex items-center gap-4">
          <span className="h-px w-8 bg-primary" />
          About
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base lg:text-lg">
          <p>
            Frontend Developer with 3.5 years of professional experience
            building modern, user-friendly web applications. Strong expertise in{" "}
            <span className="text-foreground font-medium">React</span>,{" "}
            <span className="text-foreground font-medium">Next.js</span>,{" "}
            <span className="text-foreground font-medium">JavaScript</span>,{" "}
            <span className="text-foreground font-medium">TypeScript</span> and{" "}
            <span className="text-foreground font-medium">Tailwind CSS</span>,
            with a focus on clean, maintainable, and scalable code. Proven
            experience collaborating closely with designers and backend
            developers to deliver high-quality products on time. Proactive,
            detail-oriented, and continuously learning, with a strong passion
            for creating reliable and engaging user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};
