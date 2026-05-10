"use client";

import * as React from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "ghost";

export function Button({
  className,
  variant = "primary",
  type = "button",
  asChild,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  asChild?: never;
}) {
  const styles =
    variant === "primary"
      ? "bg-accent2 text-white shadow-[0_12px_50px_-20px_color-mix(in_oklab,var(--color-accent)_70%,transparent)] hover:brightness-110"
      : variant === "outline"
        ? "border border-accent2/45 bg-transparent text-accent2 hover:bg-accent2/10"
        : "border border-[color:var(--border)] bg-white/5 text-foreground hover:bg-white/10";

  return (
    <button
      type={type}
      className={cn(
        "inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition [transition-property:transform,background-color,color,filter]",
        styles,
        "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
        "disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
