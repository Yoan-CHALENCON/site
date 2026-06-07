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
    startDate: "sept. 2025",
    href: "/experiences/alternance-kyxar",
    tags: [
      { label: "React", color: "blue" },
      { label: "TypeScript", color: "indigo" },
      { label: "Tailwind CSS", color: "cyan" },
    ],
    path: "/experiences/kyxar",
  },
  {
    id: "cdd-kyxar",
    title: "CDD",
    subtitle: "Développeur backend",
    companyName: "KYXAR",
    companyLogo: kyxar,
    startDate: "juin 2025",
    endDate: "juil. 2025",
    href: "/experiences/cdd-kyxar",
    tags: [
      { label: "React", color: "blue" },
      { label: "TypeScript", color: "indigo" },
      { label: "Tailwind CSS", color: "cyan" },
    ],
    path: "/experiences/kyxar",
  },
  {
    id: "stage-kyxar",
    title: "Stage",
    subtitle: "Développeur backend",
    companyName: "KYXAR",
    companyLogo: kyxar,
    startDate: "mars 2025",
    endDate: "juin 2025",
    href: "/experiences/stage-kyxar",
    tags: [
      { label: "React", color: "blue" },
      { label: "TypeScript", color: "indigo" },
      { label: "Tailwind CSS", color: "cyan" },
    ],
    path: "/experiences/kyxar",
  },
  {
    id: "but-info3",
    title: "BUT Informatique 3",
    subtitle: "Parcours Réalisation d'Applications",
    companyName: "IUT de Valence",
    companyLogo: iut_valence,
    startDate: "sept. 2025",
    href: "/experiences/but-info3",
    tags: [
      { label: "React", color: "blue" },
      { label: "TypeScript", color: "indigo" },
      { label: "Tailwind CSS", color: "cyan" },
    ],
    path: "/formation/iut",
  },
];
