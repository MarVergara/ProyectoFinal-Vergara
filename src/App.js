import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Contact } from "./components/Contact/Contact";

function NotFound() {
  return <h2 style={{ padding: 16 }}>404 - Page not found</h2>;
}

export default function App() {
  return (
    <>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<ItemListContainer heading="Product catalog" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer heading="Products by category" />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}
