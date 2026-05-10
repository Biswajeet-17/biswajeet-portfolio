"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/layout/SectionShell";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/project/ProjectCard";

export function ProjectsSection({
  onOpenDetails,
}: {
  onOpenDetails: (id: string) => void;
}) {
  return (
    <SectionShell id="projects">
      <FadeIn>
        <SectionHeading
          title="Featured Projects"
          subtitle="Some of my recent work"
        />
      </FadeIn>
      <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <FadeIn key={project.id} delay={i * 0.05}>
            <ProjectCard
              project={project}
              onOpen={() => onOpenDetails(project.id)}
            />
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}
