import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function Navigation() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        🌿 Paradise Nursery
      </Link>

      <div className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/plants">Plantas</Link>
        <Link to="/cart">🛒 Carrito</Link>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div>
      <Navigation />

      <section className="home-page">
        <div className="home-content">
          <h1>Paradise Nursery</h1>

          <p>
            Encuentra plantas hermosas para transformar tu hogar
            en un espacio lleno de vida.
          </p>

          <Link to="/plants" className="primary-button">
            Comenzar
          </Link>
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/plants"
        element={<ProductList />}
      />

      <Route
        path="/cart"
        element={<CartItem />}
      />

      <Route
        path="/about"
        element={<AboutUs />}
      />
    </Routes>
  );
}

export default App;
