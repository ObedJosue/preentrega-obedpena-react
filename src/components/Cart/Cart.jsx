import React, { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

  return (
    <div className="cartContainer">
      <h2>Tu Carrito</h2>
      {cantidadTotal === 0 ? (
        <div className="cartEmpty">
          <p>No hay productos en el carrito.</p>
          <Link to="/">Ver Productos</Link>
        </div>
      ) : (
        <>
          {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
          <div className="cartSummary">
            <h3>Total: $ {total} </h3>
            <h3>Cantidad total: {cantidadTotal} </h3>
            <div className="cartButtons">
              <button className="cartBtn vaciarBtn" onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
              <Link to="/checkout" className="cartBtn finalizarBtn">Finalizar Compra</Link>
              <Link to="/" className="cartBtn seguirBtn">Seguir Comprando</Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;