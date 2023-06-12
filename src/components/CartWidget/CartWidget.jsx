import './CartWidget.css';
import carrito from '../../assets/img/carrito.png';

const CartWidget = () => {
    const imgcarrito = '.../assets/img/anadir-al-carrito.png'
    return (
      <div className="container">
        <img className="imgCarrito" src={carrito} alt="carrito" />
        <strong className='numero'>3</strong>
      </div>
    )
}

export default CartWidget

