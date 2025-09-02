import { Link } from "react-router-dom";
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
        <Link to="/">Home</Link> |{" "}
        <Link to="/category/flowers">Flowers</Link> |{" "}
        <Link to="/contact">Reach out</Link>
      </div>
      <CartWidget />
    </nav>
  );
};
