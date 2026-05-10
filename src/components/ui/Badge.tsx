import * as React from "react";
import { cn } from "@/lib/cn";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--card)_88%,transparent)] px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm",
        className,
      )}
    >
      {children}
    </span>
  );
}
