import "./ItemListContainer.css";
import { useState,useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../Services/Config";

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);
  const {idCategoria} = useParams ();
  useEffect(() => {
    const misProductos = idCategoria ? query(collection(db, "inventario"), where("idCat", "==", idCategoria)) : collection(db, "inventario");

    getDocs(misProductos)
        .then(res => {
            const nuevosProductos = res.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data }
            })
            setProductos(nuevosProductos);
        })
        .catch(error => console.log(error))
}, [idCategoria])

  return (
    <div className="itemListContainer">      
      <h2>{props.greeting}</h2>
      <ItemList productos={productos}/>
    </div>
  );
};
export default ItemListContainer