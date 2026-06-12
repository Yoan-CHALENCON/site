import type { Tag } from "../ components/PillTag";
import ade_redesign from "../assets/projects/ade-redesign.png";
import aifants from "../assets/projects/aifants.png";
import android from "../assets/projects/android.png";
import aramis from "../assets/projects/aramis.png";
import direct_train from "../assets/projects/direct-train.png";
import godot from "../assets/projects/godot.png";
import no_photo from "../assets/projects/no-photo.png";
import photo_share from "../assets/projects/photo-share.png";
import tintin from "../assets/projects/tintin.png";

export type Project = {
  id: string;
  title: string;
  description: string;
  coverImage?: string;
  href: string;
  tags: Tag[];
};

export const projects: Project[] = [
  {
    id: "ade-redesign",
    title: "ADE Redesign",
    description:
      "Une nouvelle interface pour les emplois du temps universitaires.",
    coverImage: ade_redesign,
    href: "/projects/ade-redesign",
    tags: [
      { label: "API", color: "orange" },
      { label: "UI/UX design", color: "purple" },
    ],
  },
  {
    id: "aramis",
    title: "Aramis",
    description:
      "Projet d'étude d'optimisation de palette pour un supermarché.",
    coverImage: aramis,
    href: "/projects/aramis",
    tags: [
      { label: "SolidJS", color: "blue" },
      { label: "TypeScript", color: "indigo" },
      { label: "Drizzle", color: "lime" },
    ],
  },
  {
    id: "ctvr",
    title: "CTVR",
    description: "Projet d'étude pour la gestion d'une compagnie de bus.",
    coverImage: no_photo,
    href: "/projects/ctvr",
    tags: [
      { label: "Angular", color: "red" },
      { label: "Spring Boot", color: "green" },
      { label: "PostgreSQL", color: "blue" },
    ],
  },
  {
    id: "photo-share",
    title: "Photo Share",
    description: "Album photo partagé pour un événement familial.",
    coverImage: photo_share,
    href: "/projects/photo-share",
    tags: [
      { label: "React", color: "blue" },
      { label: "Express", color: "yellow" },
    ],
  },
  {
    id: "shortlinks",
    title: "Shortlinks",
    description: "Mini-site pour avoir des liens raccourcis personnalisés.",
    coverImage: no_photo,
    href: "/projects/shortlinks",
    tags: [{ label: "Netlify", color: "cyan" }],
  },
  {
    id: "direct-train",
    title: "Direct Train",
    description:
      "Site de réservation de billets de train, développé dans le cadre du BUT Informatique.",
    coverImage: direct_train,
    href: "/projects/direct-train",
    tags: [
      { label: "HTML", color: "orange" },
      { label: "CSS", color: "purple" },
      { label: "JavaScript", color: "yellow" },
    ],
  },
  {
    id: "tintin",
    title: "Tintin",
    description:
      "Mon tout premier site Web, réalisé dans le cadre de la spécialité NSI, au lycée.",
    coverImage: tintin,
    href: "/projects/tintin",
    tags: [
      { label: "HTML", color: "orange" },
      { label: "CSS", color: "purple" },
      { label: "JavaScript", color: "yellow" },
    ],
  },
  {
    id: "bot-discord",
    title: "Yoan 24/7",
    description: "Bot Discord pour gérer un serveur et ses utilisateurs.",
    coverImage: no_photo,
    href: "/projects/bot-discord",
    tags: [
      { label: "JavaScript", color: "yellow" },
      { label: "Discord.js", color: "indigo" },
    ],
  },
  {
    id: "godot",
    title: "Projet Godot",
    description: "Jeu inspiré de Asteroïds, développé en BUT 3 Informatique.",
    coverImage: godot,
    href: "/projects/godot",
    tags: [{ label: "Godot", color: "blue" }],
  },
  {
    id: "android",
    title: "Projets Android",
    description:
      "Applications mobiles de cookie clicker et de contrôleur de jeu, réalisées en BUT 2 Informatique.",
    coverImage: android,
    href: "/projects/android",
    tags: [
      { label: "Java", color: "red" },
      { label: "Android", color: "green" },
    ],
  },
  {
    id: "aifants",
    title: "AIFAnts",
    description:
      "Simulation d'IA de fourmis, développée en BUT 3 Informatique.",
    coverImage: aifants,
    href: "/projects/aifants",
    tags: [
      { label: "Python", color: "yellow" },
      { label: "IA", color: "blue" },
    ],
  },
  {
    id: "python",
    title: "Projets Python",
    description:
      "Bataille navale, pendu, Gganbu et jeu de la vie, développés en spécialité NSI, au lycée.",
    coverImage: no_photo,
    href: "/projects/python",
    tags: [
      { label: "Python", color: "blue" },
      { label: "POO", color: "green" },
      { label: "Algorithmie", color: "red" },
    ],
  },
];
