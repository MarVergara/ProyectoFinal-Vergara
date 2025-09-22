import { NavLink, Link } from "react-router-dom";
import "./navBar.css";
import logo from "../../assets/logo.png";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  const active = ({ isActive }) => (isActive ? "active" : "");

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" aria-label="Go to home">
          <img src={logo} alt="store" />
        </Link>
      </div>

      <div className="navbar-links">
        <NavLink to="/" end className={active}>Home</NavLink> {" | "}
        <NavLink to="/category/bouquets" className={active}>Bouquets</NavLink> {" | "}
        <NavLink to="/category/indoor" className={active}>Indoor Plants</NavLink> {" | "}
        <NavLink to="/category/succulents" className={active}>Succulents</NavLink> {" | "}
        <NavLink to="/contact" className={active}>Reach out</NavLink>
      </div>

      <CartWidget />
    </nav>
  );
};
