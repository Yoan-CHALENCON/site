type Props = {
  name: string;
  logo: string;
};

export default function SkillCard(props: Props) {
  return (
    <article className="dark:border-light/20 hover:border-dark/30 border-dark/20 dark:hover:border-light/30 shadow-dark/20 dark:shadow-light/20 flex w-24 max-w-24 min-w-24 flex-col items-center justify-center gap-2 rounded-md border p-3 shadow-md transition-all duration-300 ease-out hover:shadow-lg">
      <img src={props.logo} alt={props.name} className="aspect-square w-full" />
      <p className="text-center text-sm">{props.name}</p>
    </article>
  );
}
