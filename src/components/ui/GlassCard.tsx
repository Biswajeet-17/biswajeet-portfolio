import * as React from "react";
import { cn } from "@/lib/cn";

export function GlassCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "glass-panel rounded-2xl shadow-[0_28px_80px_-50px_color-mix(in_oklab,var(--foreground)_52%,transparent)] transition-transform duration-300",
        className,
      )}
    >
      {children}
    </div>
  );
}
