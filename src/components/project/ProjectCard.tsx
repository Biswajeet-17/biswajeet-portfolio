"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Info } from "lucide-react";
import type { Project } from "@/types/project";
import { GlassCard } from "@/components/ui/GlassCard";

export function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  return (
    <motion.article
      layout
      whileHover={{ y: -8 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="h-full cursor-pointer"
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
    >
      <GlassCard className="flex h-full flex-col overflow-hidden hover:shadow-[0_30px_65px_-42px_color-mix(in_oklab,var(--color-accent)_55%,transparent)]">
        <div className="relative h-48 w-full overflow-hidden md:h-56">
          <Image
            src={project.imageSrc}
            alt={project.imageAlt}
            fill
            sizes="(min-width: 1024px) 30vw, 100vw"
            className="object-cover transition duration-700 ease-out hover:scale-[1.04]"
          />
        </div>
        <div className="flex flex-1 flex-col gap-3 px-5 pb-5 pt-4">
          <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
          <p className="flex-1 text-sm leading-relaxed text-muted">
            {project.shortDescription}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <span
                key={t}
                className="rounded-full border border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--card)_94%,transparent)] px-3 py-1 text-xs font-medium text-foreground"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-1 flex items-center gap-2 text-sm font-semibold text-accent2">
            <Info className="h-4 w-4" aria-hidden /> Click for details
          </div>
        </div>
      </GlassCard>
    </motion.article>
  );
}
