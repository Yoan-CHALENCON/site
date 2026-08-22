import NavLink from "./NavLink";
import { useLocation } from "react-router-dom";

export default function Nav() {
  const { pathname } = useLocation();

  return (
    <nav className="flex gap-12">
      <NavLink to="/" title="Accueil" isCurrentPage={pathname === "/"} />
      <NavLink to="/projets" title="Projets" isCurrentPage={pathname.startsWith("/projets")} />
      <NavLink to="/parcours" title="Parcours" isCurrentPage={pathname.startsWith("/parcours")} />
      <NavLink to="/contact" title="Contact" isCurrentPage={pathname.startsWith("/contact")} />
    </nav>
  );
}
