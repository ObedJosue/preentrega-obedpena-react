import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, precio, img, stock }) => {
  return (    
    <div className='tarjetaContainer'>
      <div className='tarjeta'>
        <div className='imgContainer'>
          <img className='imgProducto' src={img} alt={nombre} />
        </div>
        <div className='contenido'>
          <h3>{nombre}</h3>
          <p className='precio'>Precio: ${precio}</p>
          <p>ID: {id}</p>
          <p className='stock'>Stock: {stock}</p>
          <Link className='btn' to={`/item/${id}`}>Ver Detalles</Link>
        </div>
      </div>
    </div>    
  );
};

export default Item;



