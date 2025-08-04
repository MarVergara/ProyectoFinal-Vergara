// src/components/NavBar.jsx
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "1rem", backgroundColor: "#eee" }}>
      <div><strong>MiTienda</strong></div>
      <div>
        <a href="#">Inicio</a> | <a href="#">Productos</a> | <a href="#">Contacto</a>
      </div>
      <CartWidget />
    </nav>
  );
};
