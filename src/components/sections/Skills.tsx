"use client";

import type { LucideIcon } from "lucide-react";
import { Database, Monitor, Server, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { SkillPill } from "@/components/ui/SkillPill";
import { SectionShell } from "@/components/layout/SectionShell";
import { SKILL_CATEGORIES } from "@/data/skills";
import type { SkillCategory } from "@/types/skill-category";
import { cn } from "@/lib/cn";

const CATEGORY_ICON: Record<SkillCategory["icon"], LucideIcon> = {
  frontend: Monitor,
  backend: Server,
  database: Database,
  tools: Wrench,
};

export function Skills() {
  return (
    <SectionShell id="skills">
      <FadeIn>
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Technologies I work with"
        />
      </FadeIn>

      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {SKILL_CATEGORIES.map((category, index) => {
          const Icon = CATEGORY_ICON[category.icon];
          const isTools = category.id === "tools";
          return (
            <FadeIn key={category.id} delay={index * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                <GlassCard className="h-full p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-accent">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-lg font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  <div
                    className={cn(
                      "flex flex-col gap-2",
                      isTools &&
                        "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2",
                    )}
                  >
                    {category.items.map((item) => (
                      <SkillPill
                        key={`${category.id}-${item.label}`}
                        iconKey={item.iconKey}
                        label={item.label}
                      />
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            </FadeIn>
          );
        })}
      </div>
    </SectionShell>
  );
}
