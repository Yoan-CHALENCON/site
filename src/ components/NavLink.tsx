import { Link } from "react-router-dom";

type Props = {
  title: string;
  to?: string;
  isCurrentPage?: boolean;
};

export default function NavLink(props: Props) {
  if (props.isCurrentPage) {
    return (
      <span className="text-primary text-2xl font-semibold">{props.title}</span>
    );
  }

  return (
    <Link
      to={props.to ?? "/"}
      className="after:bg-primary relative text-2xl after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:transition-[width] after:duration-200 hover:after:w-full"
    >
      {props.title}
    </Link>
  );
}
