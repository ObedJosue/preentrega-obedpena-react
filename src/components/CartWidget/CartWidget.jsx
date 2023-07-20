import './CartWidget.css';
import carrito from '../../assets/img/carrito.png';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';

const CartWidget = () => {
    const { cantidadTotal } = useContext(CarritoContext);
    const imgcarrito = '.../assets/img/anadir-al-carrito.png';
    return (
        <div className="container">
            <Link to="/cart">
                <img className="imgCarrito" src={carrito} alt="carrito" />
                {cantidadTotal > 0 && <span className="cantidadTotal">{cantidadTotal}</span>}
            </Link>
        </div>
    )
}

export default CartWidget;


