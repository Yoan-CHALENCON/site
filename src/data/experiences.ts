import type { Tag } from "../ components/PillTag";
import iut_valence from "../assets/logo/iut-valence_square.svg";
import kyxar from "../assets/logo/kyxar_circle.svg";

export type Experience = {
  id: string;
  title: string;
  subtitle: string;
  companyName: string;
  companyLogo: string;
  startDate: string;
  endDate?: string;
  href: string;
  tags?: Tag[];
  path: string;
};

export const experiences: Experience[] = [
  {
    id: "alternance-kyxar",
    title: "Alternance",
    subtitle: "Développeur backend",
    companyName: "KYXAR",
    companyLogo: kyxar,
    startDate: "09/2025",
    href: "/experiences/alternance-kyxar",
    tags: [
      { label: "PHP", color: "purple" },
      { label: "Vue.js", color: "green" },
      { label: "Wazo", color: "blue" },
    ],
    path: "/experiences/kyxar",
  },
  {
    id: "cdd-kyxar",
    title: "CDD",
    subtitle: "Développeur backend",
    companyName: "KYXAR",
    companyLogo: kyxar,
    startDate: "06/2025",
    endDate: "07/2025",
    href: "/experiences/cdd-kyxar",
    tags: [
      { label: "PHP", color: "purple" },
      { label: "JavaScript", color: "yellow" },
      { label: "API", color: "pink" },
    ],
    path: "/experiences/kyxar",
  },
  {
    id: "stage-kyxar",
    title: "Stage",
    subtitle: "Développeur backend",
    companyName: "KYXAR",
    companyLogo: kyxar,
    startDate: "03/2025",
    endDate: "06/2025",
    href: "/experiences/stage-kyxar",
    tags: [
      { label: "PHP", color: "purple" },
      { label: "Smarty", color: "orange" },
      { label: "Framework interne", color: "cyan" },
    ],
    path: "/experiences/kyxar",
  },
  {
    id: "but-info1",
    title: "BUT Informatique 1",
    subtitle: "Classement : 1er de promotion",
    companyName: "IUT de Valence",
    companyLogo: iut_valence,
    startDate: "09/2023",
    endDate: "06/2024",
    href: "/experiences/but-info1",
    tags: [
      { label: "HTML", color: "red" },
      { label: "CSS", color: "purple" },
      { label: "JavaScript", color: "yellow" },
      { label: "PostgreSQL", color: "blue" },
    ],
    path: "/formation/iut",
  },
  {
    id: "but-info2",
    title: "BUT Informatique 2",
    subtitle: "Parcours Réalisation d'Applications",
    companyName: "IUT de Valence",
    companyLogo: iut_valence,
    startDate: "09/2024",
    endDate: "06/2025",
    href: "/experiences/but-info2",
    tags: [
      { label: "PHP", color: "purple" },
      { label: "Symfony", color: "green" },
      { label: "React", color: "blue" },
    ],
    path: "/formation/iut",
  },
  {
    id: "but-info3",
    title: "BUT Informatique 3",
    subtitle: "Parcours Réalisation d'Applications",
    companyName: "IUT de Valence",
    companyLogo: iut_valence,
    startDate: "09/2025",
    href: "/experiences/but-info3",
    tags: [
      { label: "Godot", color: "blue" },
      { label: "NetLogo", color: "red" },
      { label: "Neo4J", color: "green" },
      { label: "Firestore", color: "orange" },
    ],
    path: "/formation/iut",
  },
];
