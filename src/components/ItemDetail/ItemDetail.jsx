import "./ItemDetail.css";
import { useNavigate } from "react-router-dom";

const ItemDetail = ({ id, nombre, precio, img }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Regresar a la página anterior
  };

  return (
    <div className="itemDetailContainer">
      <h2>Nombre: {nombre}</h2>
      <h3>Precio: {precio}</h3>
      <h3>ID: {id}</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, a?</p>
      <img className="imgDetail" src={img} alt={nombre} />
      <button className="btnBack" onClick={handleBack}>Volver</button>
    </div>
  );
}

export default ItemDetail;

