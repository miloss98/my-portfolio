"use client";

import { useState } from "react";
import { skillsBottomRow, skillsTopRow } from "../data";

type Skill = (typeof skillsTopRow)[number];

function SkillItem({
  skill,
  onMouseEnter,
  onMouseLeave,
}: {
  skill: Skill;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <div
      className="flex flex-col items-center gap-3 group shrink-0"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center transition-transform duration-300 group-hover:cursor-pointer">
        <skill.icon className="w-full h-full" style={{ color: skill.color }} />
      </div>
      <span className="text-xs md:text-sm text-muted-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {skill.name}
      </span>
    </div>
  );
}

export function Skills() {
  const [topRowPaused, setTopRowPaused] = useState(false);
  const [bottomRowPaused, setBottomRowPaused] = useState(false);

  return (
    <section id="skills" className="px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-5xl mx-auto space-y-8">
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
              className="inline-flex w-max"
              style={{
                animation: "scroll-left 45s linear infinite",
                animationPlayState: topRowPaused ? "paused" : "running",
              }}
            >
              <div className="flex gap-8 md:gap-12 lg:gap-16 pr-8 md:pr-12 lg:pr-16">
                {skillsTopRow.map((skill) => (
                  <SkillItem
                    key={skill.name}
                    skill={skill}
                    onMouseEnter={() => setTopRowPaused(true)}
                    onMouseLeave={() => setTopRowPaused(false)}
                  />
                ))}
              </div>
              <div className="flex gap-8 md:gap-12 lg:gap-16 pr-8 md:pr-12 lg:pr-16">
                {skillsTopRow.map((skill) => (
                  <SkillItem
                    key={`${skill.name}-dup`}
                    skill={skill}
                    onMouseEnter={() => setTopRowPaused(true)}
                    onMouseLeave={() => setTopRowPaused(false)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom row - moves right */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 lg:w-32 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 lg:w-32 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

            <div
              className="inline-flex w-max"
              style={{
                animation: "scroll-right 45s linear infinite",
                animationPlayState: bottomRowPaused ? "paused" : "running",
              }}
            >
              <div className="flex gap-8 md:gap-12 lg:gap-16 pr-8 md:pr-12 lg:pr-16">
                {skillsBottomRow.map((skill) => (
                  <SkillItem
                    key={skill.name}
                    skill={skill}
                    onMouseEnter={() => setBottomRowPaused(true)}
                    onMouseLeave={() => setBottomRowPaused(false)}
                  />
                ))}
              </div>
              <div className="flex gap-8 md:gap-12 lg:gap-16 pr-8 md:pr-12 lg:pr-16">
                {skillsBottomRow.map((skill) => (
                  <SkillItem
                    key={`${skill.name}-dup`}
                    skill={skill}
                    onMouseEnter={() => setBottomRowPaused(true)}
                    onMouseLeave={() => setBottomRowPaused(false)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
