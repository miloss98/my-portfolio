"use client";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiAstro,
  SiTailwindcss,
  SiMui,
  SiChakraui,
  SiSass,
  SiShadcnui,
  SiChartdotjs,
  SiStrapi,
  SiSanity,
  SiGithub,
  SiNpm,
  SiYarn,
  SiVite,
  SiJest,
  SiFastapi,
  SiPostgresql,
  SiRedux,
  SiGraphql,
} from "react-icons/si";

const skillsTopRow = [
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Astro", icon: SiAstro, color: "#FF5D01" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Material UI", icon: SiMui, color: "#007FFF" },
  { name: "Chakra UI", icon: SiChakraui, color: "#319795" },
  { name: "SASS", icon: SiSass, color: "#CC6699" },
  { name: "ShadCN", icon: SiShadcnui, color: "#FFFFFF" },
];

const skillsBottomRow = [
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "Jest", icon: SiJest, color: "#C21325" },
  { name: "Chart.js", icon: SiChartdotjs, color: "#FF6384" },
  { name: "Strapi", icon: SiStrapi, color: "#4945FF" },
  { name: "Sanity", icon: SiSanity, color: "#F03E2F" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { name: "NPM", icon: SiNpm, color: "#CB3837" },
  { name: "Yarn", icon: SiYarn, color: "#2C8EBB" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
];

type Skill = (typeof skillsTopRow)[number];

function SkillItem({ skill }: { skill: Skill }) {
  return (
    <div className="flex flex-col items-center gap-3 group shrink-0">
      <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center transition-transform duration-300 cursor-pointer ">
        <skill.icon className="w-full h-full" style={{ color: skill.color }} />
      </div>
      <span className="text-xs md:text-sm text-muted-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {skill.name}
      </span>
    </div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="px-6 md:px-12 lg:px-24 py-8 md:py-12 lg:py-20"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        <h2 className="text-base md:text-lg lg:text-xl font-semibold uppercase tracking-widest text-primary flex items-center gap-4">
          <span className="h-px w-8 bg-primary" />
          Skills
        </h2>
        <div className="space-y-8">
          {/* Top row - moves left */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 lg:w-32 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 lg:w-32 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

            <div
              className="inline-flex w-max hover:paused"
              style={{
                animation: "scroll-left 45s linear infinite",
              }}
            >
              <div className="flex gap-8 md:gap-12 lg:gap-16 pr-8 md:pr-12 lg:pr-16">
                {skillsTopRow.map((skill) => (
                  <SkillItem key={skill.name} skill={skill} />
                ))}
              </div>
              <div className="flex gap-8 md:gap-12 lg:gap-16 pr-8 md:pr-12 lg:pr-16">
                {skillsTopRow.map((skill) => (
                  <SkillItem key={`${skill.name}-dup`} skill={skill} />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom row - moves right */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 lg:w-32 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 lg:w-32 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

            <div
              className="inline-flex w-max hover:paused"
              style={{
                animation: "scroll-right 45s linear infinite",
              }}
            >
              <div className="flex gap-8 md:gap-12 lg:gap-16 pr-8 md:pr-12 lg:pr-16">
                {skillsBottomRow.map((skill) => (
                  <SkillItem key={skill.name} skill={skill} />
                ))}
              </div>
              <div className="flex gap-8 md:gap-12 lg:gap-16 pr-8 md:pr-12 lg:pr-16">
                {skillsBottomRow.map((skill) => (
                  <SkillItem key={`${skill.name}-dup`} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
