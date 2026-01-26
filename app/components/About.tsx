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
            I&apos;m a developer passionate about crafting accessible,
            pixel-perfect user interfaces that blend thoughtful design with
            robust engineering. My favorite work lies at the intersection of
            design and development, creating experiences that are meticulously
            built for performance and usability.
          </p>
          <p>
            Currently, I&apos;m focused on building modern web applications
            using <span className="text-foreground font-medium">React</span>,{" "}
            <span className="text-foreground font-medium">Next.js</span>,{" "}
            <span className="text-foreground font-medium">TypeScript</span>, and{" "}
            <span className="text-foreground font-medium">Node.js</span>. I
            specialize in creating responsive designs that work seamlessly
            across all devices.
          </p>
          <p>
            In my spare time, I enjoy contributing to open source projects,
            learning new technologies, and sharing knowledge through blog posts
            and tutorials.
          </p>
        </div>
      </div>
    </section>
  );
};
