import "./ItemListContainer.css";
import { useState,useEffect } from "react";
import { getProductos } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = (props) => {
  const [productos, setproductos] = useState([]);
  useEffect(() => {
      getProductos()
         .then(respuesta => setproductos(respuesta))
         .catch(error => console.log(error))
  }, [])
  return (
    <div className="itemListContainer">      
      <h2>{props.greeting}</h2>
      <ItemList productos={productos}/>
    </div>
  );
};
export default ItemListContainer