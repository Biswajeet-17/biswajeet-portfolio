"use client";

import * as React from "react";

const DEFAULT_IDS = [
  "home",
  "about",
  "projects",
  "skills",
  "experience",
  "education",
  "contact",
] as const;

export type SectionId = (typeof DEFAULT_IDS)[number];

export function useActiveSection(sectionIds: readonly string[] = DEFAULT_IDS) {
  const [active, setActive] = React.useState<string>(sectionIds[0] ?? "home");

  React.useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0.15, 0.35, 0.55, 0.75],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}
