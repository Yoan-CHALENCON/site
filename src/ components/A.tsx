import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
  href: string;
  _blank?: boolean;
};

export default function A(props: Props) {
  return (
    <a
      target={props._blank ? "_blank" : undefined}
      href={props.href}
      className={clsx("text-primary hover:underline!", props.className)}
    >
      {props.children}
    </a>
  );
}
