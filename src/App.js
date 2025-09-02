import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<ItemListContainer heading="Product catalog" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer heading="Products by category" />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<h2>404 - Page not found</h2>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
