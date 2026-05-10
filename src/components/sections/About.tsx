"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/layout/SectionShell";

function Em({ children }: { children: React.ReactNode }) {
  return (
    <strong className="font-semibold text-foreground">{children}</strong>
  );
}

export function About() {
  return (
    <SectionShell id="about" className="relative">
      <FadeIn>
        <SectionHeading
          title="About Me"
          subtitle="Passionate about creating exceptional digital experiences"
        />
      </FadeIn>
      <FadeIn delay={0.08} className="mx-auto mt-12 max-w-3xl space-y-5 text-left">
        <p className="leading-relaxed text-muted">
          I&apos;m a dedicated Full Stack Software Engineer crafting robust user
          experiences backed by clean architecture. My core stack centers on{" "}
          <Em>Angular</Em>, <Em>.NET Core</Em>, and <Em>MS SQL</Em>—with a strong
          emphasis on performance, security, and maintainable <Em>APIs</Em>{" "}
          across the stack.
        </p>
        <p className="leading-relaxed text-muted">
          Over the past years I&apos;ve partnered with teams to deliver enterprise
          workflows, improve reliability where it matters, and uphold engineering
          hygiene through testing, code reviews, and Agile rituals that keep
          momentum without sacrificing quality.
        </p>
        <p className="leading-relaxed text-muted">
          Beyond my primary stack, I routinely work with technologies like{" "}
          <Em>Java</Em>, <Em>Python</Em>, and <Em>REST APIs</Em>—building features
          spanning authentication-heavy modules, reporting surfaces, and complex
          integrations—mirroring the depth you&apos;d expect from platform-grade
          experiences.
        </p>
        <p className="leading-relaxed text-muted">
          Highlights include an advanced face recognition attendance initiative,
          inventory management solutions, a Master&apos;s in Computer Applications,
          and recognition such as a strong Java profile on HackerRank. I&apos;m
          energized by learning, collaboration, meaningful ownership, and staying
          adaptable—<Em>including relocation</Em> when the mission and team fit
          align.
        </p>
      </FadeIn>
    </SectionShell>
  );
}
