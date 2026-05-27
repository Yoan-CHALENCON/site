import yoan from "../assets/yoan_square.jpeg";

export default function About() {
  return (
    <section className="flex">
      <img src={yoan} alt="Yoan" className="m-3 flex-1 rounded-2xl" />
      <section className="flex flex-1 flex-col gap-3 p-3">
        <h2 className="text-4xl font-semibold">À propos de moi</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
          sapien eget nunc efficitur commodo. Sed at felis a enim efficitur
          tincidunt. Curabitur ac ligula a nisl convallis bibendum. In hac
          habitasse platea dictumst. Nulla facilisi. Donec ut odio sed metus
          efficitur fermentum. Proin ac nunc id justo efficitur commodo.
        </p>
      </section>
    </section>
  );
}
