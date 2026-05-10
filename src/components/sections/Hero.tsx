"use client";

import Image from "next/image";
import { Folder, Mail, Download } from "lucide-react";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/icons/BrandIcons";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { PROFILE_IMAGE_PATH, SITE } from "@/constants/site";
import { LINKS } from "@/constants/links";
import { useTypingText } from "@/hooks/useTypingText";
import { cn } from "@/lib/cn";

const TYPING = [
  "Scalable, robust APIs",
  "Secure IAM experiences",
  "Real-time logistics platforms",
] as const;

const ORBITALS = [
  { label: ".NET", className: "-left-6 top-4", delay: 0 },
  { label: "Angular", className: "right-[-10px] top-14", delay: 0.12 },
  { label: "TS", className: "-left-2 bottom-14", delay: 0.18 },
  { label: "SQL", className: "bottom-[-6px] right-10", delay: 0.08 },
];

function navigate(hash: string) {
  document.querySelector(hash)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export function Hero() {
  const typed = useTypingText(TYPING, 55, 1500);

  return (
    <section
      id="home"
      className="relative scroll-mt-20 overflow-hidden pb-14 pt-10 md:pb-18 md:pt-14"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-[8%] top-[18%] h-36 w-36 rotate-12 rounded-[24px] border border-white/10 bg-white/5 backdrop-blur-sm" />
        <div className="absolute right-[10%] top-[12%] h-44 w-44 rotate-[18deg] rounded-[30px] border border-white/10 bg-white/[0.03]" />
        <div className="absolute bottom-[10%] left-[42%] h-14 w-14 rotate-45 border border-accent/25 bg-accent/10" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:px-8">
        <div className="space-y-6 lg:col-span-7">
          <FadeIn>
            <Badge className="border-accent/35 bg-accent/10 text-accent">
              👋 Welcome!
            </Badge>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1
              id="hero-heading"
              className="text-balance text-4xl font-extrabold leading-tight tracking-tight md:text-6xl"
            >
              <span className="text-gradient-accent">{SITE.name}</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-2xl font-bold text-foreground md:text-3xl">
              Software Engineer
            </p>
          </FadeIn>

          <FadeIn delay={0.14}>
            <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
              {SITE.taglineHero}
            </p>
          </FadeIn>

          <FadeIn delay={0.18}>
            <p className="text-base font-semibold text-accent md:text-lg">
              {typed}
              <span className="typing-caret">|</span>
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="flex flex-wrap gap-3 pt-2">
            <Button
              type="button"
              variant="primary"
              onClick={() => navigate("#projects")}
              className="min-w-[150px]"
            >
              <Folder className="h-4 w-4" aria-hidden /> View Projects
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("#contact")}
              className="min-w-[164px]"
            >
              <Mail className="h-4 w-4" aria-hidden /> Get In Touch
            </Button>
          </FadeIn>

          <FadeIn delay={0.23} className="flex gap-3 pt-2">
            {[
              { href: LINKS.github, Icon: GithubIcon, label: "GitHub" },
              { href: LINKS.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
              { href: LINKS.instagram, Icon: InstagramIcon, label: "Instagram" },
              { href: LINKS.resume, Icon: Download, label: "Download resume" },
            ].map(({ href, Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.96 }}
                className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--card)_90%,transparent)] text-foreground shadow-[0_0_24px_-18px_color-mix(in_oklab,var(--color-accent)_66%,transparent)] transition-colors hover:text-accent"
              >
                <Icon className="h-5 w-5" aria-hidden />
              </motion.a>
            ))}
          </FadeIn>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:col-span-5">
          <FadeIn delay={0.06} className="relative isolate flex justify-center">
            <motion.div
              className={cn(
                "relative rounded-full bg-gradient-to-br from-white/25 via-white/10 to-transparent p-[14px]",
                "shadow-[0_0_80px_-20px_color-mix(in_oklab,var(--color-accent)_70%,transparent)] ring-8 ring-accent/55",
              )}
              animate={{
                rotate: [-0.6, 0.8, -0.4, 0.6],
                y: [-2, 1, -1, 0],
              }}
              transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
            >
              <Image
                src={PROFILE_IMAGE_PATH}
                alt={SITE.name}
                width={400}
                height={400}
                priority
                sizes="(min-width: 1024px) 340px, 70vw"
                className="h-[280px] w-[280px] rounded-full object-cover shadow-[inset_0_0_0_6px_white] md:h-[360px] md:w-[360px]"
              />

              <span
                aria-hidden
                className="pointer-events-none absolute inset-[-18%] -z-10 rounded-full bg-accent/22 blur-[64px]"
              />
              {ORBITALS.map(({ label, className, delay }) => (
                <motion.span
                  key={label}
                  className={cn(
                    "glass-panel hero-float absolute rounded-full px-3 py-1 text-xs font-semibold text-accent shadow-inner",
                    className,
                  )}
                  style={{ animationDelay: `${delay * 1200}ms` }}
                >
                  {label}
                </motion.span>
              ))}
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
