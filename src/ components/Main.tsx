type Props = {
  children: React.ReactNode;
};

export default function Main(props: Props) {
  return (
    <main className="mx-auto mt-50 flex max-w-7xl flex-col items-center gap-32">
      {props.children}
    </main>
  );
}
