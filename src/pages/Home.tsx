import { BriefcaseBusiness, FileText, FolderOpen, Puzzle } from "lucide-react";
import About from "../ components/About";
import CTA from "../ components/CTA";
import ExperiencesSection from "../ components/ExperiencesSection";
import Header from "../ components/Header";
import Hero from "../ components/Hero";
import Main from "../ components/Main";
import ProjectCard from "../ components/ProjectCard";
import SkillsSection from "../ components/SkillsSection";
import Slider from "../ components/Slider";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <section className="flex gap-20">
          <CTA type="link" href="/#projects" scroll>
            <FolderOpen />
            Projets
          </CTA>
          <CTA type="link" href="/#skills" scroll>
            <Puzzle />
            Compétences
          </CTA>
          <CTA type="link" href="/#experiences" scroll>
            <BriefcaseBusiness />
            Expériences
          </CTA>
          <CTA type="link" href="/#cv" blank>
            <FileText />
            CV
          </CTA>
        </section>
        <About />
        <Slider title="Mes projets" viewAllHref="/projects" id="projects">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              coverImage={project.coverImage}
              href={project.href}
              tags={project.tags}
            />
          ))}
        </Slider>
        <SkillsSection />
        <ExperiencesSection />
      </Main>
    </>
  );
}
