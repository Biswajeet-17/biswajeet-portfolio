import * as React from "react";
import { cn } from "@/lib/cn";

export function SectionHeading({
  title,
  subtitle,
  id,
  className,
}: {
  title: string;
  subtitle?: string;
  id?: string;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      <h2
        id={id}
        className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl"
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-sm text-muted md:text-base">{subtitle}</p>
      ) : null}
    </div>
  );
}
