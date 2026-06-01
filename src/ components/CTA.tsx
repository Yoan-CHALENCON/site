import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  type: "link" | "button";
} & (
  | { type: "link"; href: string; blank?: boolean; scroll?: boolean }
  | { type: "button"; onClick?: () => void }
);

export default function CTA(props: Props) {
  const className =
    "text-primary border-primary hover:text-light hover:underline! hover:from-primary hover:to-secondary w-fit rounded-md border px-3 py-2 hover:border-transparent hover:bg-linear-to-r flex gap-2";

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (props.type === "link" && props.scroll && props.href.includes("#")) {
      const id = props.href.split("#")[1];
      const element = document.getElementById(id);

      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", props.href);
      }
    }
  };

  if (props.type === "link") {
    return (
      <Link
        to={props.href}
        className={className}
        target={props.blank ? "_blank" : undefined}
        onClick={handleLinkClick}
      >
        {props.children}
        {props.blank && <ArrowUpRight />}
        {props.scroll && <ArrowDown />}
      </Link>
    );
  }

  return (
    <button onClick={props.onClick} className={className}>
      {props.children}
    </button>
  );
}
