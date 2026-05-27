import { ArrowDown, ArrowUpRight } from "lucide-react";

type Props = {
  children: React.ReactNode;
  type: "link" | "button";
  href?: string;
  onClick?: () => void;
  blank?: boolean;
  scroll?: boolean;
};

export default function CTA(props: Props) {
  const className =
    "text-primary border-primary hover:text-light hover:underline! hover:from-primary hover:to-secondary w-fit rounded-md border px-3 py-2 hover:border-transparent hover:bg-linear-to-r flex gap-2";
  if (props.type === "link") {
    return (
      <a
        href={props.href}
        className={className}
        target={props.blank ? "_blank" : undefined}
      >
        {props.children}
        {props.blank && <ArrowUpRight />}
        {props.scroll && <ArrowDown />}
      </a>
    );
  }

  return (
    <button onClick={props.onClick} className={className}>
      {props.children}
    </button>
  );
}
