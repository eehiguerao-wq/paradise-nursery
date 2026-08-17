import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from "../redux/CartSlice";

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

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Navigation />

      <main className="cart-page">
        <h1>Carrito de Compras</h1>

        {cartItems.length === 0 ? (
          <section className="empty-cart">
            <h2>Tu carrito está vacío</h2>

            <p>
              Agrega algunas plantas para comenzar tu compra.
            </p>

            <Link to="/plants" className="primary-button">
              Continuar comprando
            </Link>
          </section>
        ) : (
          <>
            {cartItems.map((item) => (
              <article
                className="cart-item"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt={`Planta ${item.name}`}
                />

                <div className="cart-item-info">
                  <h2>{item.name}</h2>

                  <p>
                    Precio unitario: ${item.price.toFixed(2)}
                  </p>

                  <p>
                    Total: $
                    {(item.price * item.quantity).toFixed(2)}
                  </p>

                  <div className="quantity-controls">
                    <button
                      className="quantity-button"
                      onClick={() =>
                        dispatch(decreaseQuantity(item.id))
                      }
                      aria-label={`Disminuir cantidad de ${item.name}`}
                    >
                      −
                    </button>

                    <strong>{item.quantity}</strong>

                    <button
                      className="quantity-button"
                      onClick={() =>
                        dispatch(increaseQuantity(item.id))
                      }
                      aria-label={`Aumentar cantidad de ${item.name}`}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="delete-button"
                    onClick={() =>
                      dispatch(removeFromCart(item.id))
                    }
                  >
                    Eliminar
                  </button>
                </div>
              </article>
            ))}

            <section className="cart-summary">
              <p className="cart-total">
                Total del carrito: ${total.toFixed(2)}
              </p>

              <div className="cart-actions">
                <Link
                  to="/plants"
                  className="primary-button"
                >
                  Continuar comprando
                </Link>

                <button
                  className="primary-button"
                  onClick={() =>
                    alert("Próximamente")
                  }
                >
                  Pagar
                </button>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}

export default CartItem;
