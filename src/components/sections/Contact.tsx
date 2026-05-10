"use client";

import * as React from "react";
import { Mail, MapPin, Phone as PhoneIcon } from "lucide-react";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionShell } from "@/components/layout/SectionShell";
import { LINKS } from "@/constants/links";

function Field({
  id,
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="block space-y-2 text-sm font-medium text-foreground" htmlFor={id}>
      {label}
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={id === "email" ? "email" : id === "name" ? "name" : undefined}
        className="w-full rounded-xl border border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--card)_90%,transparent)] px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent/60 focus:ring-2 focus:ring-accent/25"
      />
    </label>
  );
}

function TextAreaField({ id, label, placeholder, value, onChange }: { id: string; label: string; placeholder: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="block space-y-2 text-sm font-medium text-foreground" htmlFor={id}>
      {label}
      <textarea
        id={id}
        name={id}
        rows={4}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full resize-y rounded-xl border border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--card)_90%,transparent)] px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent/60 focus:ring-2 focus:ring-accent/25"
      />
    </label>
  );
}

export function ContactSection() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name || "Website visitor"}`);
    const bodyLines = [`Name: ${name}`, `Reply-to: ${email}`, "", message].join("\n");
    const body = encodeURIComponent(bodyLines);
    const target = LINKS.gmail.replace(/^mailto:/, "");
    window.location.href = `mailto:${target}?subject=${subject}&body=${body}`;
  };

  const social = [
    { href: LINKS.github, Icon: GithubIcon, label: "GitHub" },
    { href: LINKS.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
    { href: LINKS.instagram, Icon: InstagramIcon, label: "Instagram" },
  ] as const;

  return (
    <SectionShell id="contact">
      <FadeIn>
        <SectionHeading title="Get In Touch" subtitle="Let's discuss your next project" />
      </FadeIn>

      <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_minmax(0,1fr)] xl:gap-14">
        <FadeIn delay={0.06}>
          <GlassCard className="space-y-6 p-7">
            <div className="flex items-start gap-4">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-accent/15 text-accent shadow-[inset_0_0_0_1px_rgba(167,139,250,0.22)]">
                <Mail className="h-6 w-6" aria-hidden />
              </span>
              <div>
                <h3 className="text-lg font-bold text-foreground">Email</h3>
                <a className="text-sm text-muted transition-colors hover:text-foreground" href={LINKS.gmail}>
                  {LINKS.gmailDisplay}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent">
                <PhoneIcon className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h3 className="text-lg font-bold text-foreground">Phone</h3>
                <a href={`tel:${LINKS.phone}`} className="text-sm text-muted transition-colors hover:text-foreground">
                  {LINKS.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent">
                <MapPin className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h3 className="text-lg font-bold text-foreground">Location</h3>
                <p className="text-sm text-muted">{LINKS.locationDisplay}</p>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              {social.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--card)_90%,transparent)] text-foreground shadow-[0_0_26px_-16px_color-mix(in_oklab,var(--color-accent)_76%,transparent)] transition hover:text-accent"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </GlassCard>
        </FadeIn>

        <FadeIn delay={0.1}>
          <GlassCard className="p-7">
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <Field id="name" label="Full Name" placeholder="Full Name" value={name} onChange={setName} />
              <Field id="email" label="Email Address" placeholder="example@company.com" type="email" value={email} onChange={setEmail} />
              <TextAreaField id="message" label="Message" placeholder="Tell me about your roadmap, timelines, goals..." value={message} onChange={setMessage} />
              <button
                type="submit"
                className="mt-2 w-full rounded-xl bg-gradient-to-r from-accent to-accent2 px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_50px_-26px_color-mix(in_oklab,var(--color-accent)_80%,transparent)] transition hover:brightness-110"
              >
                Reach Out
              </button>
            </form>
          </GlassCard>
        </FadeIn>
      </div>
    </SectionShell>
  );
}
