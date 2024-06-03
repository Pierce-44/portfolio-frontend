"use client";

import AboutMePage from "@/components/aboutMePage";
import BottomBanner from "@/components/bottomBanner";
import ContactPage from "@/components/contactPage";
import CoverPage from "@/components/coverPage";
import Header from "@/components/header";
import MySkillsPage from "@/components/mySkillsPage";
import ProjectsPage from "@/components/projectsPage";
import React from "react";

export default function Home() {
  const coverPageRef = React.useRef<HTMLDivElement>(null);
  const aboutMeRef = React.useRef<HTMLDivElement>(null);
  const mySkillsRef = React.useRef<HTMLDivElement>(null);
  const projectsRef = React.useRef<HTMLDivElement>(null);
  const contactRef = React.useRef<HTMLDivElement>(null);

  return (
    <main className="h-full w-full text-[#252525] ">
      <Header
        coverPageRef={coverPageRef}
        aboutMeRef={aboutMeRef}
        mySkillsRef={mySkillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <CoverPage coverPageRef={coverPageRef} />
      <AboutMePage aboutMeRef={aboutMeRef} />
      <MySkillsPage mySkillsRef={mySkillsRef} />
      <ProjectsPage projectsRef={projectsRef} />
      <ContactPage contactRef={contactRef} />
      <BottomBanner />
    </main>
  );
}
