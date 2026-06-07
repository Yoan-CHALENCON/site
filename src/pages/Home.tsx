import { FileText, FolderOpen, Puzzle } from "lucide-react";
import About from "../ components/About";
import CTA from "../ components/CTA";
import ExperienceCard from "../ components/ExperienceCard";
import Header from "../ components/Header";
import Hero from "../ components/Hero";
import Main from "../ components/Main";
import ProjectCard from "../ components/ProjectCard";
import Slider from "../ components/Slider";
import { experiences } from "../data/experiences";
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
        <section>
          <h2 className="mb-5 text-2xl font-bold">Mon parcours</h2>
          <section className="grid grid-cols-[1fr_auto_1fr] gap-5">
            <section className="flex flex-col gap-5">
              <h3 className="text-xl font-bold">Expériences</h3>
              {experiences
                .filter((experience) =>
                  experience.path.startsWith("/experiences"),
                )
                .map((experience) => (
                  <ExperienceCard
                    key={experience.id}
                    title={experience.title}
                    subtitle={experience.subtitle}
                    companyName={experience.companyName}
                    companyLogo={experience.companyLogo}
                    startDate={experience.startDate}
                    endDate={experience.endDate}
                    href={experience.href}
                    tags={experience.tags}
                  />
                ))}
            </section>
            <div className="bg-dark/30 my-4 w-px"></div>
            <section className="flex flex-col gap-5">
              <h3 className="text-xl font-bold">Formation</h3>
              {experiences
                .filter((experience) =>
                  experience.path.startsWith("/formation"),
                )
                .map((experience) => (
                  <ExperienceCard
                    key={experience.id}
                    title={experience.title}
                    subtitle={experience.subtitle}
                    companyName={experience.companyName}
                    companyLogo={experience.companyLogo}
                    startDate={experience.startDate}
                    endDate={experience.endDate}
                    href={experience.href}
                    tags={experience.tags}
                  />
                ))}
            </section>
          </section>
        </section>
      </Main>
    </>
  );
}
