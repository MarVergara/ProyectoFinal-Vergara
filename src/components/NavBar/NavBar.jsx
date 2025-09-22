import { Link } from "react-router-dom";
import "./navBar.css";
import logo from "../../assets/logo.png";
import { CartWidget } from "../CartWidget/CartWidget";
import { useCart } from "../../context/CartContext";

export const NavBar = () => {
  const { resetCart } = useCart();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" aria-label="Go to home">
          <img src={logo} alt="store" />
        </Link>
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link> |{" "}
        <Link to="/category/bouquets">Bouquets</Link> |{" "}
        <Link to="/category/indoor">Indoor Plants</Link> |{" "}
        <Link to="/category/succulents">Succulents</Link> |{" "}
        <Link to="/contact">Reach out</Link>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <CartWidget />
        <button onClick={resetCart} className="cta-button" style={{ padding: "0.4rem 0.8rem" }}>
          Reset cart
        </button>
      </div>
    </nav>
  );
};
