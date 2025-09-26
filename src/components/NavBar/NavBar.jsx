import { Link } from "react-router-dom";
import "./navBar.css";
import logo from "../../assets/logo.png";
import { CartWidget } from "../CartWidget/CartWidget";
import { useCart } from "../../context/CartContext";

export const NavBar = () => {
  const { clearCart } = useCart();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" aria-label="Go to home">
          <img src={logo} alt="store" />
        </Link>
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link> |{" "}
        <Link to="/products">Products</Link> |{" "}
        <Link to="/category/bouquets">Bouquets</Link> |{" "}
        <Link to="/category/indoor">Indoor Plants</Link> |{" "}
        <Link to="/category/succulents">Succulents</Link> |{" "}
        <Link to="/checkout">Checkout</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </div>

      <div className="navbar-actions">
        <CartWidget />
        <button onClick={clearCart} className="cta-button reset-btn">
          Reset cart
        </button>
      </div>
    </nav>
  );
};
