import { FileText, FolderOpen, Puzzle } from "lucide-react";
import About from "../ components/About";
import CTA from "../ components/CTA";
import Header from "../ components/Header";
import Hero from "../ components/Hero";
import Main from "../ components/Main";

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
      </Main>
    </>
  );
}
