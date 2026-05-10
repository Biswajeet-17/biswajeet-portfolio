export type SkillIconKey =
  | "angular"
  | "typescript"
  | "html"
  | "bootstrap"
  | "csharp"
  | "dotnet"
  | "ef"
  | "aspnet"
  | "sqlserver"
  | "mysql"
  | "vscode"
  | "git"
  | "github"
  | "aws"
  | "azure";

export type SkillEntry = {
  label: string;
  iconKey: SkillIconKey;
};

export type SkillCategory = {
  id: string;
  title: string;
  icon: "frontend" | "backend" | "database" | "tools";
  items: SkillEntry[];
};
