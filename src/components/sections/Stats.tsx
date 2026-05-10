"use client";

import { motion } from "framer-motion";
import { STATS } from "@/data/stats";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionShell } from "@/components/layout/SectionShell";

export function Stats() {
  return (
    <SectionShell className="-mt-4 pt-2 md:-mt-8 md:pt-6">
      <div className="grid gap-4 md:grid-cols-3">
        {STATS.map((stat, i) => (
          <FadeIn key={stat.label} delay={i * 0.05}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.22 }}
            >
              <GlassCard className="relative overflow-hidden px-6 py-10 text-center hover:shadow-[0_30px_70px_-42px_color-mix(in_oklab,var(--color-accent)_62%,transparent)]">
                <div className="pointer-events-none absolute inset-0 opacity-30">
                  <div className="absolute inset-x-6 top-0 h-24 bg-gradient-to-b from-accent/30 to-transparent blur-2xl" />
                </div>
                <div className="text-4xl font-black text-accent">{stat.value}</div>
                <div className="mt-2 text-sm font-semibold text-foreground">
                  {stat.label}
                </div>
              </GlassCard>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}
