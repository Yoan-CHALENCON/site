import { Link } from "react-router-dom";
import type { Tag } from "./PillTag";
import PillTag from "./PillTag";

type Props = {
  title: string;
  subtitle: string;
  companyName: string;
  companyLogo: string;
  startDate: string;
  endDate?: string;
  href: string;
  tags?: Tag[];
};

export default function ExperienceCard(props: Props) {
  return (
    <Link
      to={props.href}
      className="dark:border-light/20 hover:border-dark/30 border-dark/20 dark:hover:border-light/30 shadow-dark/20 dark:shadow-light/20 flex items-center gap-4 rounded-md border px-4 shadow-md transition-all duration-300 ease-out hover:shadow-lg"
    >
      <img
        src={props.companyLogo}
        alt={props.companyName}
        className="aspect-square w-1/6 object-cover p-1"
      />
      <div className="border-dark/20 dark:border-light/20 my-4 self-stretch border-l" />
      <div className="flex flex-1 flex-col gap-2 py-2">
        <h4 className="text-primary text-lg font-bold">
          {props.title} &ndash; {props.companyName}
        </h4>
        <p>{props.subtitle}</p>
        {props.tags && (
          <div className="flex flex-wrap gap-2">
            {props.tags?.map((tag) => (
              <PillTag key={tag.label} color={tag.color}>
                {tag.label}
              </PillTag>
            ))}
          </div>
        )}
      </div>
      <div className="border-dark/20 dark:border-light/20 self-stretch border-l" />
      <div className="flex shrink-0 flex-col items-center justify-center py-2">
        {props.endDate ? (
          <>
            <p className="whitespace-nowrap">{props.startDate}</p>
            <p>&ndash;</p>
            <p className="whitespace-nowrap">{props.endDate}</p>
          </>
        ) : (
          <>
            <p>Depuis</p>
            <p className="whitespace-nowrap">{props.startDate}</p>
          </>
        )}
      </div>
    </Link>
  );
}
