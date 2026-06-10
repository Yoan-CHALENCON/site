type Props = {
  title: string;
  children: React.ReactNode;
};

export default function SkillsSubSection(props: Props) {
  return (
    <section className="flex flex-col gap-2">
      <h3 className="text-xl font-bold">{props.title}</h3>
      <section className="flex flex-wrap gap-2">{props.children}</section>
    </section>
  );
}
