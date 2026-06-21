import { CircleArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { experiences } from "../../data/experiences";
import ExperienceCard from "../cards/ExperienceCard";

export default function ExperiencesSection() {
  return (
    <section id="experiences">
      <Link
        to="/experiences"
        className="hover:text-primary flex w-fit hover:underline!"
      >
        <h2 className="mb-5 flex items-center gap-2 text-4xl font-semibold">
          Mon parcours
          <CircleArrowRight size={32} />
        </h2>
      </Link>
      <section className="grid grid-cols-[1fr_auto_1fr] gap-5">
        <section className="flex flex-col gap-5">
          <h3 className="text-xl font-bold">Expériences</h3>
          {experiences
            .filter((experience) => experience.path.startsWith("/experiences"))
            .sort((a, b) => {
              const [aEndMonth, aEndYear] = a.endDate?.split("/") || [];
              const [bEndMonth, bEndYear] = b.endDate?.split("/") || [];
              const dateA = a.endDate
                ? new Date(parseInt(aEndYear), parseInt(aEndMonth) - 1)
                : new Date();
              const dateB = b.endDate
                ? new Date(parseInt(bEndYear), parseInt(bEndMonth) - 1)
                : new Date();
              return dateB.getTime() - dateA.getTime();
            })
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
        <div className="bg-dark/30 dark:bg-light/30 my-4 w-px"></div>
        <section className="flex flex-col gap-5">
          <h3 className="text-xl font-bold">Formation</h3>
          {experiences
            .filter((experience) => experience.path.startsWith("/formation"))
            .sort((a, b) => {
              const [aEndMonth, aEndYear] = a.endDate?.split("/") || [];
              const [bEndMonth, bEndYear] = b.endDate?.split("/") || [];
              const dateA = a.endDate
                ? new Date(parseInt(aEndYear), parseInt(aEndMonth) - 1)
                : new Date();
              const dateB = b.endDate
                ? new Date(parseInt(bEndYear), parseInt(bEndMonth) - 1)
                : new Date();
              return dateB.getTime() - dateA.getTime();
            })
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
  );
}
