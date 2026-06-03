import type { Tag } from "../ components/PillTag";
import yoan from "../assets/yoan_square.jpeg";

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
    id: "portfolio",
    title: "Portfolio",
    description:
      "Mon site portfolio développé avec React, TypeScript et Tailwind CSS.",
    coverImage: yoan,
    href: "/projects/portfolio",
    tags: [
      { label: "React", color: "blue" },
      { label: "TypeScript", color: "indigo" },
      { label: "Tailwind CSS", color: "cyan" },
      { label: "Vite", color: "violet" },
    ],
  },
  {
    id: "portfolio",
    title: "Portfolio",
    description:
      "Mon site portfolio développé avec React, TypeScript et Tailwind CSS.",
    coverImage: yoan,
    href: "/projects/portfolio",
    tags: [
      { label: "React", color: "blue" },
      { label: "TypeScript", color: "indigo" },
      { label: "Tailwind CSS", color: "cyan" },
      { label: "Vite", color: "violet" },
    ],
  },
  {
    id: "portfolio",
    title: "Portfolio",
    description:
      "Mon site portfolio développé avec React, TypeScript et Tailwind CSS.",
    coverImage: yoan,
    href: "/projects/portfolio",
    tags: [
      { label: "React", color: "blue" },
      { label: "TypeScript", color: "indigo" },
      { label: "Tailwind CSS", color: "cyan" },
      { label: "Vite", color: "violet" },
    ],
  },
  {
    id: "portfolio",
    title: "Portfolio",
    description:
      "Mon site portfolio développé avec React, TypeScript et Tailwind CSS.",
    coverImage: yoan,
    href: "/projects/portfolio",
    tags: [
      { label: "React", color: "blue" },
      { label: "TypeScript", color: "indigo" },
      { label: "Tailwind CSS", color: "cyan" },
      { label: "Vite", color: "violet" },
    ],
  },
  {
    id: "portfolio",
    title: "Portfolio",
    description:
      "Mon site portfolio développé avec React, TypeScript et Tailwind CSS.",
    coverImage: yoan,
    href: "/projects/portfolio",
    tags: [
      { label: "React", color: "blue" },
      { label: "TypeScript", color: "indigo" },
      { label: "Tailwind CSS", color: "cyan" },
      { label: "Vite", color: "violet" },
    ],
  },
  {
    id: "portfolio",
    title: "Portfolio",
    description:
      "Mon site portfolio développé avec React, TypeScript et Tailwind CSS.",
    coverImage: yoan,
    href: "/projects/portfolio",
    tags: [
      { label: "React", color: "blue" },
      { label: "TypeScript", color: "indigo" },
      { label: "Tailwind CSS", color: "cyan" },
      { label: "Vite", color: "violet" },
    ],
  },
];
