import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plants = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    category: "Plantas tropicales",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1614594575920-ae4f6b5e9f8a?auto=format&fit=crop&w=600&q=80",
    description: "Planta tropical de hojas grandes y decorativas."
  },
  {
    id: 2,
    name: "Calathea Orbifolia",
    category: "Plantas tropicales",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
    description: "Planta de interior con hojas grandes y elegantes."
  },
  {
    id: 3,
    name: "Palmera Areca",
    category: "Plantas tropicales",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1520412099551-62b6bafeb9bb?auto=format&fit=crop&w=600&q=80",
    description: "Palmera ideal para darle un toque tropical al hogar."
  },
  {
    id: 4,
    name: "Alocasia",
    category: "Plantas tropicales",
    price: 28,
    image:
      "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=600&q=80",
    description: "Planta tropical con hojas llamativas."
  },
  {
    id: 5,
    name: "Ave del Paraíso",
    category: "Plantas tropicales",
    price: 40,
    image:
      "https://images.unsplash.com/photo-1597055181300-6b4d0e8f5a8b?auto=format&fit=crop&w=600&q=80",
    description: "Planta de aspecto exótico para espacios amplios."
  },
  {
    id: 6,
    name: "Filodendro",
    category: "Plantas tropicales",
    price: 22,
    image:
      "https://images.unsplash.com/photo-1545165375-8f6f6f0c3b3c?auto=format&fit=crop&w=600&q=80",
    description: "Planta resistente y fácil de cuidar."
  },

  {
    id: 7,
    name: "Sansevieria",
    category: "Plantas resistentes",
    price: 18,
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae2f1b?auto=format&fit=crop&w=600&q=80",
    description: "Planta resistente que requiere pocos cuidados."
  },
  {
    id: 8,
    name: "Zamioculca",
    category: "Plantas resistentes",
    price: 24,
    image:
      "https://images.unsplash.com/photo-1600326145552-327f74b9f6b0?auto=format&fit=crop&w=600&q=80",
    description: "Excelente planta para interiores con poca luz."
  },
  {
    id: 9,
    name: "Pothos Dorado",
    category: "Plantas resistentes",
    price: 16,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80",
    description: "Planta colgante de crecimiento rápido."
  },
  {
    id: 10,
    name: "Dracaena",
    category: "Plantas resistentes",
    price: 27,
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=600&q=80",
    description: "Planta decorativa y fácil de mantener."
  },
  {
    id: 11,
    name: "Árbol de Jade",
    category: "Plantas resistentes",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1534710961216-75c88202f43e?auto=format&fit=crop&w=600&q=80",
    description: "Suculenta de hojas carnosas y brillantes."
  },
  {
    id: 12,
    name: "Aglaonema",
    category: "Plantas resistentes",
    price: 23,
    image:
      "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=600&q=80",
    description: "Planta de interior resistente y decorativa."
  },

  {
    id: 13,
    name: "Echeveria",
    category: "Suculentas",
    price: 12,
    image:
      "https://images.unsplash.com/photo-1520302519878-0f7f2b0b5a89?auto=format&fit=crop&w=600&q=80",
    description: "Pequeña suculenta perfecta para escritorios."
  },
  {
    id: 14,
    name: "Aloe Vera",
    category: "Suculentas",
    price: 15,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80",
    description: "Suculenta conocida por sus hojas carnosas."
  },
  {
    id: 15,
    name: "Haworthia",
    category: "Suculentas",
    price: 14,
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80",
    description: "Suculenta compacta ideal para interiores."
  },
  {
    id: 16,
    name: "Cactus Globo",
    category: "Suculentas",
    price: 10,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
    description: "Cactus pequeño y fácil de cuidar."
  },
  {
    id: 17,
    name: "Crassula",
    category: "Suculentas",
    price: 13,
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80",
    description: "Suculenta ornamental para espacios interiores."
  },
  {
    id: 18,
    name: "Sedum",
    category: "Suculentas",
    price: 11,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80",
    description: "Planta pequeña que necesita muy poco riego."
  }
];

function Navigation() {
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        🌿 Paradise Nursery
      </Link>

      <div className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/plants">Plantas</Link>
        <Link to="/cart">
          🛒 Carrito ({totalItems})
        </Link>
      </div>
    </nav>
  );
}

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const categories = [...new Set(plants.map((plant) => plant.category))];

  const isInCart = (id) =>
    cartItems.some((item) => item.id === id);

  return (
    <div>
      <Navigation />

      <main className="products-page">
        <h1>Plantas de Paradise Nursery</h1>

        <p>
          Explora nuestra selección de plantas de interior.
          Elige tus favoritas y agrégalas al carrito.
        </p>

        {categories.map((category) => (
          <section
            className="category-section"
            key={category}
          >
            <h2>{category}</h2>

            <div className="product-grid">
              {plants
                .filter(
                  (plant) => plant.category === category
                )
                .map((plant) => (
                  <article
                    className="product-card"
                    key={plant.id}
                  >
                    <img
                      src={plant.image}
                      alt={`Planta ${plant.name}`}
                    />

                    <h3>{plant.name}</h3>

                    <p>{plant.description}</p>

                    <p className="price">
                      ${plant.price.toFixed(2)}
                    </p>

                    <button
                      className="add-button"
                      onClick={() =>
                        dispatch(addToCart(plant))
                      }
                      disabled={isInCart(plant.id)}
                    >
                      {isInCart(plant.id)
                        ? "Agregado al carrito"
                        : "Agregar al Carrito"}
                    </button>
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
