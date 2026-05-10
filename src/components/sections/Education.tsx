"use client";

import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionShell } from "@/components/layout/SectionShell";
import { EDUCATION } from "@/data/education";

export function EducationSection() {
  return (
    <SectionShell id="education">
      <FadeIn>
        <SectionHeading
          title="Education"
          subtitle="Academic background"
        />
      </FadeIn>
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {EDUCATION.map((edu, i) => (
          <FadeIn key={edu.id} delay={i * 0.05}>
            <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
              <GlassCard className="flex h-full flex-col gap-4 p-7">
                <div className="flex items-start gap-4">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-accent/18 text-accent shadow-[inset_0_0_0_1px_rgba(167,139,250,0.22)]">
                    <GraduationCap className="h-7 w-7" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-base font-semibold text-accent">
                      {edu.institution}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--card)_92%,transparent)] px-4 py-1.5 text-xs font-semibold text-foreground">
                    {edu.duration}
                  </span>
                  <span className="rounded-full border border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--card)_92%,transparent)] px-4 py-1.5 text-xs font-semibold text-foreground">
                    {edu.gradeLabel}
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}
