import { BriefcaseBusiness, FileText, FolderOpen, Puzzle } from "lucide-react";
import ProjectCard from "../components/cards/ProjectCard";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Main from "../components/Main";
import About from "../components/sections/About";
import ExperiencesSection from "../components/sections/ExperiencesSection";
import Hero from "../components/sections/Hero";
import SkillsSection from "../components/sections/SkillsSection";
import CTA from "../components/ui/CTA";
import Slider from "../components/ui/Slider";
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
      <Footer />
    </>
  );
}
