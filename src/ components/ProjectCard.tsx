import PillTag, { type Tag } from "./PillTag";

type Props = {
  title: string;
  description?: string;
  coverImage?: string;
  href?: string;
  tags?: Tag[];
};

export default function ProjectCard(props: Props) {
  const Card = props.href ? "a" : "article";

  return (
    <Card
      href={props.href}
      className="group border-dark/20 dark:border-light/20 hover:border-dark/30 dark:hover:border-light/30 shadow-dark/20 dark:shadow-light/20 relative flex w-80 max-w-80 min-w-80 flex-col rounded-md border shadow-md transition-all duration-300 ease-out hover:shadow-lg"
    >
      <div className="relative overflow-hidden rounded-t-md">
        <img
          src={props.coverImage}
          alt={props.title}
          className="aspect-video w-full rounded-t-md object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="from-dark/70 via-dark/10 absolute inset-0 bg-linear-to-t to-transparent" />
      </div>

      <div className="flex flex-col gap-5 p-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold">{props.title}</h3>
          <p className="line-clamp-1">{props.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {props.tags?.map((tag) => (
            <PillTag key={tag.label} color={tag.color}>
              {tag.label}
            </PillTag>
          ))}
        </div>
      </div>
    </Card>
  );
}
