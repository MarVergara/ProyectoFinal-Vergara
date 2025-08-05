import React from "react";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />

      <main className="main-content">
        <ItemListContainer heading="The PMO flower shop" />
        <button className="cta-button">Shop now</button>
      </main>
    </div>
  );
}

export default App;
