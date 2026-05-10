"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";
import { SITE } from "@/constants/site";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { useActiveSection } from "@/hooks/useActiveSection";

const NAV = [
  { href: "#home", label: "Home", sectionId: "home" },
  { href: "#about", label: "About", sectionId: "about" },
  { href: "#projects", label: "Projects", sectionId: "projects" },
  { href: "#skills", label: "Skills", sectionId: "skills" },
  { href: "#experience", label: "Experience", sectionId: "experience" },
  { href: "#contact", label: "Contact", sectionId: "contact" },
];

const SECTION_IDS = NAV.map((n) => n.sectionId);

export function Navbar({ className }: { className?: string }) {
  const active = useActiveSection(SECTION_IDS);
  const [open, setOpen] = React.useState(false);

  const navigate = React.useCallback((hash: string) => {
    setOpen(false);
    const target = document.querySelector(hash);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <header className={cn("sticky top-4 z-50 w-full", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          layout
          className={cn(
            "glass-panel relative flex w-full flex-wrap items-center gap-4 rounded-b-3xl rounded-t-2xl border px-4 py-3 shadow-[0_18px_55px_-42px_color-mix(in_oklab,var(--color-accent)_70%,transparent)]",
          )}
        >
        <Link
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            navigate("#home");
          }}
          className="flex items-center gap-2"
        >
          <span className="logo-chip grid h-9 min-w-9 place-items-center rounded-xl text-sm font-black text-white shadow-inner">{SITE.initials}</span>
          <span className="text-sm font-semibold text-foreground md:text-base">{SITE.name}</span>
        </Link>

        <nav className="mx-auto hidden flex-1 items-center justify-center gap-7 text-sm font-medium text-muted md:flex" aria-label="Primary">
          {NAV.map((item) => {
            const isActive = active === item.sectionId;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(item.href);
                }}
                className={cn("relative transition-colors hover:text-foreground", isActive ? "text-foreground" : "text-muted")}
              >
                {item.label}
                {isActive ? <span className="absolute -bottom-1 left-1/2 h-0.5 w-10 -translate-x-1/2 rounded-full bg-gradient-to-r from-accent to-accent2" /> : null}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--card)_90%,transparent)] text-foreground shadow-sm backdrop-blur-sm md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav-panel"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <ThemeToggle />
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              id="mobile-nav-panel"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="absolute left-0 right-0 top-full z-40 mt-2 overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--background)_92%,transparent)] p-4 shadow-xl backdrop-blur-xl md:hidden"
            >
              <nav className="flex flex-col gap-1" aria-label="Mobile">
                {NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(item.href);
                    }}
                    className={cn("rounded-xl px-3 py-3 text-base font-semibold hover:bg-accent/10", active === item.sectionId ? "text-accent" : "text-muted")}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>
      </div>
    </header>
  );
}
