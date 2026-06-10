type Props = {
  name: string;
  logo: string;
  darkInvert?: boolean;
};

export default function SkillCard(props: Props) {
  return (
    <article className="dark:border-light/20 hover:border-dark/30 border-dark/20 dark:hover:border-light/30 shadow-dark/20 dark:shadow-light/20 flex w-28 max-w-28 min-w-28 flex-col items-center justify-center gap-3 rounded-md border p-3 shadow-md transition-all duration-300 ease-out hover:shadow-lg">
      <img
        src={props.logo}
        alt={props.name}
        className={`aspect-square w-20 ${props.darkInvert ? "dark:invert" : ""}`}
      />
      <p className="text-center text-sm">{props.name}</p>
    </article>
  );
}
