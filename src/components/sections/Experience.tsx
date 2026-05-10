"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionShell } from "@/components/layout/SectionShell";
import { EXPERIENCE } from "@/data/experience";

export function ExperienceSection() {
  return (
    <SectionShell id="experience">
      <FadeIn>
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey"
        />
      </FadeIn>

      <div className="relative mx-auto mt-14 max-w-4xl">
        <div
          className="absolute left-3 top-2 bottom-4 w-px bg-gradient-to-b from-accent/10 via-accent/70 to-accent/10 md:left-4"
          aria-hidden
        />
        <ol className="space-y-10">
          {EXPERIENCE.map((job, index) => (
            <FadeIn key={job.id} delay={index * 0.06}>
              <li className="relative pl-12 md:pl-16">
                <span
                  className="absolute left-0 top-3 grid h-7 w-7 place-items-center rounded-full border border-accent/40 bg-[color:color-mix(in_oklab,var(--background)_90%,transparent)] shadow-[0_0_30px_-10px_color-mix(in_oklab,var(--color-accent)_80%,transparent)] md:left-1"
                  aria-hidden
                >
                  <span className="h-3 w-3 rounded-full bg-gradient-to-br from-accent to-accent2" />
                </span>

                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <GlassCard className="p-6 md:p-7">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-bold text-foreground">
                        {job.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
                        {job.companyUrl ? (
                          <Link
                            href={job.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-semibold text-accent hover:text-accent2"
                          >
                            {job.company}
                            <ExternalLink className="h-4 w-4" aria-hidden />
                          </Link>
                        ) : (
                          <span className="font-semibold text-accent">
                            {job.company}
                          </span>
                        )}
                        <span className="text-muted">{job.period}</span>
                      </div>
                      <ul className="mt-4 list-disc space-y-3 ps-5 text-sm leading-relaxed text-muted">
                        {job.highlights.map((h) => (
                          <li key={h}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  </GlassCard>
                </motion.div>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </SectionShell>
  );
}
