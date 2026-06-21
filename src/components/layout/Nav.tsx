import NavLink from "./NavLink";

export default function Nav() {
  return (
    <nav className="flex gap-12">
      <NavLink isCurrentPage={true} title="Accueil" />
      <NavLink to="/projets" title="Projets" />
      <NavLink to="/parcours" title="Parcours" />
      <NavLink to="/contact" title="Contact" />
    </nav>
  );
}
