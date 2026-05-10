"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Theme"
        className={cn(
          "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-muted",
          className,
        )}
        disabled
      >
        <Loader2 className="h-5 w-5 animate-spin opacity-75" aria-hidden />
      </button>
    );
  }

  const nextTheme = resolvedTheme === "dark" ? "light" : "dark";

  return (
    <motion.button
      type="button"
      aria-label={`Switch theme to ${nextTheme}`}
      whileTap={{ rotate: -12, scale: 0.96 }}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.16 }}
      onClick={() => setTheme(nextTheme)}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--card)_92%,transparent)] text-muted backdrop-blur-sm shadow-[0_0_24px_-10px_color-mix(in_oklab,var(--color-accent)_40%,transparent)] transition-colors hover:text-foreground",
        className,
      )}
    >
      {/* Using Settings icon aesthetic from screenshots */}
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <path d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" />
        <path d="M19.4 13a8 8 0 00 .1-2l2-1.2-2-3.5-2.4 1a7.96 7.96 0 00-3.9-2.4L13 3h-2l-.2 4.9a8.04 8.04 0 00-3.9 2.4L4.7 9.4l-2 3.5L4.9 13a8 8 0 000 2l-2 1.2 2 3.5 2.3-1a8.04 8.04 0 003.9 2.4L11 24h2l.2-4.9a8 8 0 003.9-2.4l2.3 1 2-3.5-2-1.2z" />
      </svg>
    </motion.button>
  );
}
