type Props = {
  children: React.ReactNode;
  title?: string;
};

export default function Terminal(props: Props) {
  return (
    <section className="w-fit rounded-2xl bg-black">
      <div className="flex rounded-t-2xl bg-neutral-600 px-4 py-3">
        <section className="flex flex-1 gap-2">
          <div className="h-4 w-4 rounded-full bg-red-500"></div>
          <div className="h-4 w-4 rounded-full bg-yellow-500"></div>
          <div className="h-4 w-4 rounded-full bg-green-500"></div>
        </section>
        <p className="text-light font-mono leading-none">{props.title ?? ""}</p>
        <div className="flex-1"></div>
      </div>
      <p className="text-light px-4 py-3 font-mono">{props.children}</p>
    </section>
  );
}
