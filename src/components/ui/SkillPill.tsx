"use client";

import type { ComponentType, SVGProps } from "react";
import {
  Boxes,
  Braces,
  Cloud,
  Code2,
  Cpu,
  Database,
  GitBranch,
  LayoutTemplate,
  Layers,
  Server,
  Wrench,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import type { SkillIconKey } from "@/types/skill-category";
import { cn } from "@/lib/cn";

type PillIcon = ComponentType<SVGProps<SVGSVGElement>>;

const ICONS: Record<SkillIconKey, PillIcon> = {
  angular: Layers,
  typescript: Code2,
  html: LayoutTemplate,
  bootstrap: Boxes,
  csharp: Braces,
  dotnet: Cpu,
  ef: Boxes,
  aspnet: Server,
  sqlserver: Database,
  mysql: Database,
  vscode: Code2,
  git: GitBranch,
  github: GithubIcon,
  aws: Cloud,
  azure: Cloud,
};

export function SkillPill({
  iconKey,
  label,
  className,
}: {
  iconKey: SkillIconKey;
  label: string;
  className?: string;
}) {
  const Icon = ICONS[iconKey];
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--card)_92%,transparent)] px-2.5 py-1.5 text-sm font-medium text-foreground shadow-[0_0_24px_-18px_color-mix(in_oklab,var(--color-accent)_70%,transparent)] transition-transform duration-300 hover:-translate-y-0.5",
        className,
      )}
    >
      <span className="grid h-8 w-8 place-items-center rounded-full bg-accent/15 text-accent">
        <Icon className="h-4 w-4" aria-hidden />
      </span>
      <span>{label}</span>
    </div>
  );
}
