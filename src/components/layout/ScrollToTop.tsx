"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/cn";

export function ScrollToTop({ className }: { className?: string }) {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={cn(
            "fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-accent text-white shadow-[0_16px_40px_-16px_color-mix(in_oklab,var(--color-accent)_80%,transparent)] ring-2 ring-white/15 backdrop-blur-sm transition hover:brightness-110",
            className,
          )}
        >
          <ChevronUp className="h-6 w-6" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
