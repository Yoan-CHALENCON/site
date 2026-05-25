import Terminal from "./Terminal";

export default function Hero() {
  return (
    <section className="flex p-3">
      <section className="flex w-1/2 flex-col gap-5">
        <h1 className="font-logo from-primary to-secondary bg-linear-to-r bg-clip-text text-6xl font-bold text-transparent">
          Yoan <br />
          CHALENCON
        </h1>
        <h2 className="text-4xl font-semibold">Développeur Web</h2>
        <h3 className="text-2xl">
          &Eacute;tudiant en 3<sup>e</sup> année de BUT Informatique à l'IUT de
          Valence et alternant développeur <em>backend</em> chez Kyxar.
        </h3>
      </section>
      <section className="flex w-1/2 items-center justify-center">
        <Terminal title="yoan@dev">
          <span className="text-secondary">const</span> infos ={" "}
          <span className="text-yellow-300">{"{"}</span>
          <br /> <span className="text-primary">&nbsp;&nbsp;&nbsp;name</span>:
          "Yoan CHALENCON",
          <br /> <span className="text-primary">
            &nbsp;&nbsp;&nbsp;age
          </span>: <span className="text-lime-200">21</span>,
          <br />{" "}
          <span className="text-primary">&nbsp;&nbsp;&nbsp;location</span>:
          "Valence",
          <br /> <span className="text-primary">&nbsp;&nbsp;&nbsp;phone</span>:
          "06 70 25 91 78",
          <br /> <span className="text-primary">&nbsp;&nbsp;&nbsp;email</span>:
          "contact@yoan-chalencon.fr",
          <br />
          <span className="text-yellow-300">{"}"}</span>;
        </Terminal>
      </section>
    </section>
  );
}
