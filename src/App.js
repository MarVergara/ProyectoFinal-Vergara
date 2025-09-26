import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import Products from "./pages/Products";
import Catalog from "./pages/Catalog";
import ItemDetail from "./pages/ItemDetail";
import Contact from "./pages/Contact";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";

function NotFound() {
  return <h2 style={{ padding: 16 }}>404 - Page not found</h2>;
}

export default function App() {
  return (
    <CartProvider>
      {" "}
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/category/:categoryId" element={<Catalog heading="Products by category" />} />
          <Route path="/item/:itemId" element={<ItemDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </CartProvider>
  );
}
