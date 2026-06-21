import { colorMap, type ColorName } from "../../utils/colors";

export type Tag = {
  label: string;
  color: ColorName;
};

type Props = {
  children: React.ReactNode;
  color?: ColorName;
};

export default function PillTag(props: Props) {
  const color = props.color ?? "gray";

  return (
    <span
      className={`rounded-full px-2 py-1 text-sm font-medium ${colorMap[color][200].bg} ${colorMap[color][800].text} ${colorMap[color][800].border}`}
    >
      {props.children}
    </span>
  );
}
