import React, { useState } from "react";
import "./ItemDetail.css";
import { useNavigate } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const {agregarProducto} = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    // console.log("Productos agregados: " + cantidad);
  const item = {id, nombre, precio};
    agregarProducto(item, cantidad)   
  };

  return (
    <div className="itemDetailContainer">
      <h2>Nombre: {nombre}</h2>
      <h3>Precio: {precio}</h3>
      <h3>ID: {id}</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, a?</p>
      <img className="imgDetail" src={img} alt={nombre} />
      {agregarCantidad > 0 ? (
        <Link to="/cart" className="btnBack">
          Terminar compra
        </Link>
      ) : (
        <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
      )}
      <button className="btnBack" onClick={handleBack}>
        Volver
      </button>
    </div>
  );
};

export default ItemDetail;
