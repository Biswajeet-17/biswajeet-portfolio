"use client";

import Image from "next/image";
import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import type { Project } from "@/types/project";
import { cn } from "@/lib/cn";

function AccentHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="h-9 w-1.5 rounded-full bg-gradient-to-b from-accent to-accent2"
        aria-hidden
      />
      <h3 className="text-lg font-bold text-foreground">{children}</h3>
    </div>
  );
}

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center px-3 py-6 sm:px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Close dialog"
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.22 }}
            className={cn(
              "relative z-10 flex max-h-[min(90vh,840px)] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--background)_94%,transparent)] shadow-[0_30px_110px_-52px_color-mix(in_oklab,var(--color-accent)_72%,transparent)] backdrop-blur-xl",
            )}
          >
            <div className="flex items-start justify-between gap-4 border-b border-[color:var(--border)] px-6 py-4">
              <h2
                id="project-modal-title"
                className="text-lg font-bold text-foreground sm:text-xl"
              >
                {project.title}
              </h2>
              <button
                type="button"
                aria-label="Close"
                className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--border)] text-muted transition-colors hover:text-foreground"
                onClick={onClose}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 pb-[120px] pt-6 sm:pb-28">
              <div className="relative h-48 w-full overflow-hidden rounded-xl sm:h-56">
                <Image
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 720px, 100vw"
                />
              </div>

              <div className="mt-8 space-y-8 text-sm leading-relaxed text-muted sm:text-[15px]">
                <div className="space-y-4">
                  <AccentHeading>Project Overview</AccentHeading>
                  <p>{project.overview}</p>
                </div>

                <div className="space-y-4">
                  <AccentHeading>Key Features</AccentHeading>
                  <ul className="list-disc space-y-2 ps-6">
                    {project.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <AccentHeading>Technologies</AccentHeading>
                  <ul className="list-disc space-y-2 ps-6">
                    {project.technologies.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <AccentHeading>Challenges</AccentHeading>
                  <p>{project.challenges}</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 border-t border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--background)_88%,transparent)] px-6 py-4 backdrop-blur-md">
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--foreground)_06%,transparent)] px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-[color:color-mix(in_oklab,var(--foreground)_10%,transparent)] sm:flex-none sm:min-w-[150px]"
                  >
                    <GithubIcon className="h-5 w-5" aria-hidden /> View Code
                  </a>
                ) : null}
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent2 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_50px_-26px_color-mix(in_oklab,var(--color-accent)_90%,transparent)] transition hover:brightness-110 sm:flex-none sm:min-w-[150px]"
                  >
                    Live Demo <ExternalLink className="h-5 w-5" aria-hidden />
                  </a>
                ) : null}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
