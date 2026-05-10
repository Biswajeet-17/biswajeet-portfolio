import type { SkillCategory } from "@/types/skill-category";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: "frontend",
    items: [
      { label: "Angular", iconKey: "angular" },
      { label: "TypeScript", iconKey: "typescript" },
      { label: "HTML/CSS", iconKey: "html" },
      { label: "Bootstrap", iconKey: "bootstrap" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: "backend",
    items: [
      { label: "C#", iconKey: "csharp" },
      { label: ".NET Core", iconKey: "dotnet" },
      { label: "Entity Framework", iconKey: "ef" },
      { label: "ASP.NET", iconKey: "aspnet" },
    ],
  },
  {
    id: "database",
    title: "Database",
    icon: "database",
    items: [
      { label: "SQL Server", iconKey: "sqlserver" },
      { label: "MySQL", iconKey: "mysql" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    icon: "tools",
    items: [
      { label: "Visual Studio", iconKey: "vscode" },
      { label: "Git", iconKey: "git" },
      { label: "GitHub", iconKey: "github" },
      { label: "AWS", iconKey: "aws" },
      { label: "Azure", iconKey: "azure" },
    ],
  },
];

export const CORE_SKILLS_SHORT = [
  "Angular",
  ".NET Core",
  "MS SQL",
  "Java",
  "Python",
  "REST APIs",
  "Git",
  "Agile",
] as const;
