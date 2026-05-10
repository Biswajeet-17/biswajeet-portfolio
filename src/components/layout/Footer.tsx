"use client";

import Link from "next/link";
import { Mail, MapPin, Download } from "lucide-react";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/icons/BrandIcons";
import { motion } from "framer-motion";
import { SITE } from "@/constants/site";
import { LINKS } from "@/constants/links";
import { CORE_SKILLS_SHORT } from "@/data/skills";
import { STATS } from "@/data/stats";
import { cn } from "@/lib/cn";

const QUICK = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ y: -2, scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--card)_90%,transparent)] text-foreground shadow-[0_0_24px_-18px_color-mix(in_oklab,var(--color-accent)_70%,transparent)] transition-colors hover:text-accent"
    >
      {children}
    </motion.a>
  );
}

export function Footer({ className }: { className?: string }) {
  const statProject = STATS[0];
  const statYears = STATS[1];

  return (
    <footer
      className={cn(
        "border-t border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--background)_96%,transparent)]",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">{SITE.name}</h3>
            <p className="text-sm leading-relaxed text-muted">{SITE.bio}</p>
            <div className="space-y-2 text-sm text-muted">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" aria-hidden />
                <a
                  className="hover:text-foreground"
                  href={LINKS.gmail}
                >
                  {LINKS.gmailDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" aria-hidden />
                <span>{LINKS.locationDisplay}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {QUICK.map((q) => (
                <li key={q.href}>
                  <Link
                    href={q.href}
                    className="hover:text-foreground"
                    scroll
                  >
                    {q.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground">Core Skills</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {CORE_SKILLS_SHORT.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--card)_88%,transparent)] px-3 py-1 text-xs font-medium text-accent"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground">Connect</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              <SocialIcon href={LINKS.github} label="GitHub">
                <GithubIcon className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon href={LINKS.linkedin} label="LinkedIn">
                <LinkedinIcon className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon href={LINKS.instagram} label="Instagram">
                <InstagramIcon className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon href={LINKS.resume} label="Download resume">
                <Download className="h-5 w-5" />
              </SocialIcon>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs">
              <div>
                <div className="text-lg font-extrabold text-accent">
                  {statProject.value}
                </div>
                <div className="text-muted">Projects</div>
              </div>
              <div>
                <div className="text-lg font-extrabold text-accent">
                  {statYears.value}
                </div>
                <div className="text-muted">Years</div>
              </div>
              <div>
                <div className="text-lg font-extrabold text-accent">4★</div>
                <div className="text-muted">HackerRank</div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-muted">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
