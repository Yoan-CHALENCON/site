import clsx from "clsx";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  className?: string;
  href: string;
  _blank?: boolean;
};

export default function A(props: Props) {
  return (
    <Link
      target={props._blank ? "_blank" : undefined}
      to={props.href}
      className={clsx("text-primary hover:underline!", props.className)}
    >
      {props.children}
    </Link>
  );
}
