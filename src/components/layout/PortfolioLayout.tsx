"use client";

import * as React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { ProjectsSection } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { ExperienceSection } from "@/components/sections/Experience";
import { EducationSection } from "@/components/sections/Education";
import { ContactSection } from "@/components/sections/Contact";
import { ProjectModal } from "@/components/project/ProjectModal";
import { PROJECTS } from "@/data/projects";

export function PortfolioLayout() {
  const [openId, setOpenId] = React.useState<string | null>(null);
  const project = PROJECTS.find((p) => p.id === openId) ?? null;

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <ProjectsSection onOpenDetails={setOpenId} />
        <Skills />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
      <ProjectModal project={project} onClose={() => setOpenId(null)} />
    </>
  );
}
