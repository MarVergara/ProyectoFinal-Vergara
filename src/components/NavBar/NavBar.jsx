import "./navBar.css";
import logo from "../../assets/logo.png";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="store" />
      </div>
      <div className="navbar-links">
        <a href="/home">Home</a> | <a href="/flowers">Flowers</a> | <a href="/contact">Reach out</a>
      </div>
      <CartWidget />
    </nav>
  );
};
