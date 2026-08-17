import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plants = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    price: 25,
    category: "Plantas de interior",
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=500",
  },
  {
    id: 2,
    name: "Pothos Dorado",
    price: 18,
    category: "Plantas de interior",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=500",
  },
  {
    id: 3,
    name: "Sansevieria",
    price: 22,
    category: "Plantas de interior",
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae2c8f?w=500",
  },
  {
    id: 4,
    name: "Ficus Lyrata",
    price: 35,
    category: "Plantas de interior",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500",
  },
  {
    id: 5,
    name: "Calathea",
    price: 28,
    category: "Plantas de interior",
    image:
      "https://images.unsplash.com/photo-1597055181300-d5f90b5f2c1f?w=500",
  },
  {
    id: 6,
    name: "Palmera Areca",
    price: 30,
    category: "Plantas de interior",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=500",
  },

  {
    id: 7,
    name: "Aloe Vera",
    price: 15,
    category: "Plantas suculentas",
    image:
      "https://images.unsplash.com/photo-1546470427-e26264be0b0d?w=500",
  },
  {
    id: 8,
    name: "Echeveria",
    price: 12,
    category: "Plantas suculentas",
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500",
  },
  {
    id: 9,
    name: "Haworthia",
    price: 14,
    category: "Plantas suculentas",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500",
  },
  {
    id: 10,
    name: "Crassula",
    price: 16,
    category: "Plantas suculentas",
    image:
      "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=500",
  },
  {
    id: 11,
    name: "Sedum",
    price: 13,
    category: "Plantas suculentas",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=500",
  },
  {
    id: 12,
    name: "Cactus Mini",
    price: 10,
    category: "Plantas suculentas",
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500",
  },

  {
    id: 13,
    name: "Orquídea Blanca",
    price: 32,
    category: "Plantas con flores",
    image:
      "https://images.unsplash.com/photo-1566958799193-c9e4f5f2f5e0?w=500",
  },
  {
    id: 14,
    name: "Anthurium",
    price: 27,
    category: "Plantas con flores",
    image:
      "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=500",
  },
  {
    id: 15,
    name: "Peace Lily",
    price: 24,
    category: "Plantas con flores",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=500",
  },
  {
    id: 16,
    name: "Begonia",
    price: 20,
    category: "Plantas con flores",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500",
  },
  {
    id: 17,
    name: "Geranio",
    price: 19,
    category: "Plantas con flores",
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=500",
  },
  {
    id: 18,
    name: "Violeta Africana",
    price: 17,
    category: "Plantas con flores",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=500",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart?.items || []
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const isInCart = (id) =>
    cartItems.some((item) => item.id === id);

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  const categories = [
    "Plantas de interior",
    "Plantas suculentas",
    "Plantas con flores",
  ];

  return (
    <div className="product-page">
      <nav className="navbar">
        <Link to="/" className="nav-logo">
          🌿 Paradise Nursery
        </Link>

        <div className="nav-links">
          <Link to="/">Inicio</Link>
          <Link to="/plants">Plantas</Link>
          <Link to="/cart">
            🛒 Carrito ({cartCount})
          </Link>
        </div>
      </nav>

      <main className="products-container">
        <h1>Paradise Nursery</h1>

        <p className="products-intro">
          Descubre nuestra colección de hermosas plantas para
          transformar tu hogar en un espacio lleno de vida.
        </p>

        {categories.map((category) => (
          <section key={category} className="category-section">
            <h2>{category}</h2>

            <div className="products-grid">
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => (
                  <article className="plant-card" key={plant.id}>
                    <img
                      src={plant.image}
                      alt={`Planta ${plant.name}`}
                    />

                    <div className="plant-info">
                      <h3>{plant.name}</h3>

                      <p className="plant-price">
                        ${plant.price.toFixed(2)}
                      </p>

                      <button
                        type="button"
                        onClick={() => handleAddToCart(plant)}
                        disabled={isInCart(plant.id)}
                      >
                        {isInCart(plant.id)
                          ? "Agregado al Carrito"
                          : "Agregar al Carrito"}
                      </button>
                    </div>
                  </article>
                ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;
