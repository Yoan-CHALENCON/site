import type { Tag } from "../ components/PillTag";
import hugo_decrypte from "../assets/logo/companies/hd_media.svg";
import iut_valence from "../assets/logo/companies/iut_valence.svg";
import kyxar from "../assets/logo/companies/kyxar.svg";
import lycee_le_cheylard from "../assets/logo/companies/lycee_le_cheylard.jpg";

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
    subtitle: "Développeur Web <em>backend</em>",
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
    title: "CDD (emploi étudiant)",
    subtitle: "Développeur Web <em>backend</em>",
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
    title: "Stage (11 semaines)",
    subtitle: "Développeur Web <em>backend</em>",
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
    id: "but1-info",
    title: "BUT 1 Informatique",
    subtitle: "Classement : 1<sup>er</sup>/76",
    companyName: "IUT de Valence (UGA)",
    companyLogo: iut_valence,
    startDate: "09/2023",
    endDate: "06/2024",
    href: "/experiences/but1-info",
    tags: [
      { label: "HTML", color: "red" },
      { label: "CSS", color: "purple" },
      { label: "JavaScript", color: "yellow" },
      { label: "PostgreSQL", color: "blue" },
    ],
    path: "/formation/iut",
  },
  {
    id: "but2-info",
    title: "BUT 2 Informatique",
    subtitle: "Parcours Réalisation d'Applications",
    companyName: "IUT de Valence (UGA)",
    companyLogo: iut_valence,
    startDate: "09/2024",
    endDate: "06/2025",
    href: "/experiences/but2-info",
    tags: [
      { label: "PHP", color: "purple" },
      { label: "Symfony", color: "green" },
      { label: "React", color: "blue" },
    ],
    path: "/formation/iut",
  },
  {
    id: "but3-info",
    title: "BUT 3 Informatique",
    subtitle: "Parcours Réalisation d'Applications",
    companyName: "IUT de Valence (UGA)",
    companyLogo: iut_valence,
    startDate: "09/2025",
    href: "/experiences/but3-info",
    tags: [
      { label: "Godot", color: "blue" },
      { label: "NetLogo", color: "red" },
      { label: "Neo4J", color: "green" },
      { label: "Firestore", color: "orange" },
    ],
    path: "/formation/iut",
  },
  {
    id: "bac",
    title: "Baccalauréat général",
    subtitle: "Mention très bien",
    companyName: "Lycée Polyvalent du Cheylard (07)",
    companyLogo: lycee_le_cheylard,
    startDate: "09/2020",
    endDate: "07/2023",
    href: "/experiences/bac",
    tags: [
      { label: "NSI", color: "orange" },
      { label: "Maths", color: "blue" },
      { label: "Option Maths Expertes", color: "green" },
    ],
    path: "/formation/bac",
  },
  {
    id: "soutien",
    title: "Emploi étudiant",
    subtitle: "Soutien informatique aux étudiants",
    companyName: "IUT de Valence (UGA)",
    companyLogo: iut_valence,
    startDate: "09/2024",
    endDate: "03/2025",
    href: "/experiences/soutien",
    tags: [
      { label: "Aide", color: "green" },
      { label: "Pédagogie", color: "blue" },
      { label: "Vulgarisation", color: "orange" },
    ],
    path: "/experiences/iut",
  },
  {
    id: "hugo-decrypte",
    title: "Bénévolat",
    subtitle: "Correcteur, gestionnaire de communauté",
    companyName: "Hugo Décrypte",
    companyLogo: hugo_decrypte,
    startDate: "06/2021",
    endDate: "03/2025",
    href: "/experiences/hugo-decrypte",
    tags: [
      { label: "Communication", color: "pink" },
      { label: "Orthographe", color: "blue" },
      { label: "Travail d'équipe", color: "green" },
    ],
    path: "/experiences/benevolat",
  },
];
