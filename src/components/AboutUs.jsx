import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="about-page">
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

      <main className="about-container">
        <h1>Sobre Paradise Nursery</h1>

        <p>
          Paradise Nursery es una tienda de plantas de interior
          dedicada a ayudar a las personas a crear espacios verdes,
          tranquilos y llenos de vida.
        </p>

        <p>
          Ofrecemos una selección de plantas cuidadosamente
          elegidas, desde plantas de interior hasta suculentas y
          plantas con flores.
        </p>

        <p>
          Nuestro objetivo es hacer que comprar y cuidar plantas
          sea una experiencia sencilla y agradable para todos.
        </p>

        <Link to="/plants" className="start-button">
          Ver nuestras plantas
        </Link>
      </main>
    </div>
  );
}

export default AboutUs;
