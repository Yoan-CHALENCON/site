import yoan from "../assets/yoan_square.jpeg";

export default function About() {
  return (
    <section className="flex">
      <img src={yoan} alt="Yoan" className="m-3 flex-1 rounded-2xl" />
      <section className="flex flex-1 flex-col gap-3 p-3">
        <h2 className="text-4xl font-semibold">À propos de moi</h2>
        <p>
          &Eacute;tudiant en fin de BUT Informatique à l'IUT de Valence, je suis
          actuellement en alternance dans l'agence Web KYXAR, située à
          Mours-Saint-Eusèbe (26). Au sein de l'entreprise, je suis développeur{" "}
          <em>backend</em>. <br />
          <br />
          Passionné par l'informatique et les nouvelles technologies depuis de
          nombreuses années, j'ai choisi de faire du développement Web mon
          domaine d'expertise. Mon objectif est de devenir développeur Web{" "}
          <em>fullstack</em> à long terme.
          <br />
          <br />
          Ce portfolio présente mes projets, mes compétences ainsi que mes
          expériences professionnelles et ma formation. N'hésitez pas à
          parcourir les différentes sections pour en savoir plus sur mon
          parcours et mes réalisations.
        </p>
      </section>
    </section>
  );
}
