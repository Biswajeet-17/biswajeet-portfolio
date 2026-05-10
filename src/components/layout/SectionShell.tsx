import * as React from "react";
import { cn } from "@/lib/cn";

export function SectionShell({
  id,
  children,
  className,
  containerClassName,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-20", className)}>
      <div
        className={cn(
          "mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8",
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
