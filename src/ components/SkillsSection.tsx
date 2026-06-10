import { CircleArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import angular from "../assets/logo/frameworks_template_engines/angular.svg";
import react from "../assets/logo/frameworks_template_engines/react.svg";
import smarty from "../assets/logo/frameworks_template_engines/smarty.svg";
import solid from "../assets/logo/frameworks_template_engines/solid_js.svg";
import spring_boot from "../assets/logo/frameworks_template_engines/spring_boot.svg";
import symfony from "../assets/logo/frameworks_template_engines/symfony.svg";
import tailwindcss from "../assets/logo/frameworks_template_engines/tailwind_css.svg";
import twig from "../assets/logo/frameworks_template_engines/twig.svg";
import vuejs from "../assets/logo/frameworks_template_engines/vue.svg";
import android from "../assets/logo/os/android.svg";
import linux from "../assets/logo/os/linux.svg";
import macos from "../assets/logo/os/macos.svg";
import windows_11 from "../assets/logo/os/windows_11.svg";
import bash from "../assets/logo/programming_languages/bash.svg";
import c from "../assets/logo/programming_languages/c.svg";
import css from "../assets/logo/programming_languages/css.svg";
import html from "../assets/logo/programming_languages/html.svg";
import java from "../assets/logo/programming_languages/java.svg";
import javascript from "../assets/logo/programming_languages/javascript.svg";
import mysql from "../assets/logo/programming_languages/mysql.svg";
import neo4j from "../assets/logo/programming_languages/neo4j.svg";
import php from "../assets/logo/programming_languages/php.svg";
import postgresql from "../assets/logo/programming_languages/postgresql.svg";
import python from "../assets/logo/programming_languages/python.svg";
import rust from "../assets/logo/programming_languages/rust.svg";
import typescript from "../assets/logo/programming_languages/typescript.svg";
import adobe from "../assets/logo/tools_softs/adobe.svg";
import android_studio from "../assets/logo/tools_softs/android_studio.svg";
import dbeaver from "../assets/logo/tools_softs/dbeaver.svg";
import figma from "../assets/logo/tools_softs/figma.svg";
import file_zilla from "../assets/logo/tools_softs/file_zilla.svg";
import firestore from "../assets/logo/tools_softs/firestore.svg";
import git from "../assets/logo/tools_softs/git.svg";
import godot from "../assets/logo/tools_softs/godot.svg";
import jetbrains from "../assets/logo/tools_softs/jetbrains.svg";
import looping_mcd from "../assets/logo/tools_softs/looping.svg";
import netlogo from "../assets/logo/tools_softs/netlogo.png";
import nodejs from "../assets/logo/tools_softs/node_js.svg";
import notion from "../assets/logo/tools_softs/notion.svg";
import office from "../assets/logo/tools_softs/office.svg";
import power_bi from "../assets/logo/tools_softs/power_bi.svg";
import vim from "../assets/logo/tools_softs/vim.svg";
import virtual_box from "../assets/logo/tools_softs/virtual_box.svg";
import vs_code from "../assets/logo/tools_softs/vs_code.svg";
import SkillCard from "./SkillCard";
import SkillsSubSection from "./SkillsSubSection";

export default function SkillsSection() {
  return (
    <section id="skills" className="flex w-full flex-col items-start gap-5">
      <Link
        to="/skills"
        className="hover:text-primary flex w-fit hover:underline!"
      >
        <h2 className="flex items-center gap-2 text-4xl font-semibold">
          Mes compétences
          <CircleArrowRight size={32} />
        </h2>
      </Link>
      <section className="flex flex-col gap-8">
        <SkillsSubSection title="Systèmes d'exploitation">
          <SkillCard name="Windows (7 à 11)" logo={windows_11} />
          <SkillCard name="Linux (Ubuntu, Debian, Rocky)" logo={linux} />
          <SkillCard name="macOS" logo={macos} darkInvert />
          <SkillCard name="Android" logo={android} />
        </SkillsSubSection>
        <SkillsSubSection title="Logiciels &amp; Outils">
          <SkillCard name="VS Code" logo={vs_code} />
          <SkillCard name="Suite JetBrains" logo={jetbrains} />
          <SkillCard name="Android Studio" logo={android_studio} />
          <SkillCard name="Vim" logo={vim} />
          <SkillCard name="Git" logo={git} />
          <SkillCard name="Looping-MCD" logo={looping_mcd} />
          <SkillCard name="DBeaver" logo={dbeaver} />
          <SkillCard name="Firestore" logo={firestore} />
          <SkillCard name="Node.js" logo={nodejs} />
          <SkillCard name="Godot" logo={godot} />
          <SkillCard name="NetLogo" logo={netlogo} />
          <SkillCard name="Virtual Box" logo={virtual_box} />
          <SkillCard name="File Zilla" logo={file_zilla} />
          <SkillCard name="Figma" logo={figma} />
          <SkillCard name="Notion" logo={notion} />
          <SkillCard name="Suite Office" logo={office} />
          <SkillCard name="Power BI" logo={power_bi} />
          <SkillCard name="Suite Adobe" logo={adobe} />
        </SkillsSubSection>
        <SkillsSubSection title="Langages de programmation">
          <SkillCard name="HTML" logo={html} />
          <SkillCard name="CSS" logo={css} />
          <SkillCard name="JavaScript" logo={javascript} />
          <SkillCard name="TypeScript" logo={typescript} />
          <SkillCard name="PHP" logo={php} />
          <SkillCard name="PostgreSQL" logo={postgresql} />
          <SkillCard name="MySQL" logo={mysql} />
          <SkillCard name="Neo4J" logo={neo4j} />
          <SkillCard name="Python" logo={python} />
          <SkillCard name="Bash" logo={bash} />
          <SkillCard name="Java" logo={java} />
          <SkillCard name="C" logo={c} />
          <SkillCard name="Rust" logo={rust} darkInvert />
        </SkillsSubSection>
        <SkillsSubSection title="Frameworks &amp; Moteurs de templates">
          <SkillCard name="React" logo={react} />
          <SkillCard name="SolidJS" logo={solid} />
          <SkillCard name="Tailwind CSS" logo={tailwindcss} />
          <SkillCard name="Angular" logo={angular} />
          <SkillCard name="Vue.js" logo={vuejs} />
          <SkillCard name="Symfony" logo={symfony} darkInvert />
          <SkillCard name="Twig" logo={twig} />
          <SkillCard name="Smarty" logo={smarty} />
          <SkillCard name="Spring Boot" logo={spring_boot} />
        </SkillsSubSection>
      </section>
    </section>
  );
}
