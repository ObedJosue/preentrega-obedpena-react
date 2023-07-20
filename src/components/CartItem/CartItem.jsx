import React, { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import "./CartItem.css";

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);

  return (
    <div className="cartItem">
      <div className="itemInfo">
        <div className="itemDetails">
          <h4>{item.nombre}</h4>
          <p>Cantidad: {cantidad}</p>
          <p>Precio: ${item.precio}</p>
        </div>
      </div>
      <button
        className="removeBtn"
        onClick={() => eliminarProducto(item.id)}
      >
        Eliminar
      </button>
    </div>
  );
};

export default CartItem;
