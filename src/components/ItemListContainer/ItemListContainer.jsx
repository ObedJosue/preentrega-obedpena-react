import "./ItemListContainer.css";
import { useState,useEffect } from "react";
import { getProductos, getProductosPorCategoria } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);
  const {idCategoria} = useParams ();
  useEffect (() => {
    const funcion = idCategoria ? getProductosPorCategoria : getProductos;
    funcion(idCategoria)
      .then(res => setProductos(res))
  }, [idCategoria])

  return (
    <div className="itemListContainer">      
      <h2>{props.greeting}</h2>
      <ItemList productos={productos}/>
    </div>
  );
};
export default ItemListContainer