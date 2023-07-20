import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../Services/Config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import "./Checkout.css"

const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");

  const { carrito, vaciarCarrito, total, cantidadTotal } =
    useContext(CarritoContext);
  const manejadorFormulario = (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Por favor completa todos los campos");
      return;
    }
    if (email !== emailConfirmacion) {
      setError("Los campos del email no coinciden");
      return;
    }
    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    };

    Promise.all(
      orden.items.map(async (productoOrden) => {
        const productoRef = doc(db, "inventario", productoOrden.id);
        const productoDoc = await getDoc(productoRef);
        const stockActual = productoDoc.data().stock;
        await updateDoc(productoRef, {
          stock: stockActual - productoOrden.cantidad,
        });
      })
    )
      .then(() => {
        addDoc(collection(db, "ordenes"), orden)
          .then((docRef) => {
            setOrdenId(docRef.id);
            vaciarCarrito();
          })
          .catch((error) => {
            console.log("Error al crear la orden", error);
            setError("Error al crear la orden");
          });
      })
      .catch((error) => {
        console.log("No se puede actualizar el stock", error);
        setError("No se puede actualizar el stock");
      });
  };
  return (
    <div className="checkoutCard">
      <h2>Checkout</h2>
      {carrito.map((producto) => (
        <div key={producto.item.id} className="checkoutItem">
          <p>{producto.item.nombre} x {producto.cantidad}</p>
          <p>Precio: {producto.item.precio}</p>
          <hr />
        </div>
      ))}
      <strong className="checkoutTotal">Cantidad Total: {cantidadTotal}</strong>
      <hr />

      <form className="checkoutForm" onSubmit={manejadorFormulario}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefono">Telefono</label>
          <input
            type="text"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="emailConfirmacion">Email Confirmación</label>
          <input
            type="email"
            id="emailConfirmacion"
            value={emailConfirmacion}
            onChange={(e) => setEmailConfirmacion(e.target.value)}
          />
        </div>
        {error && <p className="checkoutError">{error}</p>}
        <button type="submit" className="checkoutButton">Finalizar Compra</button>
      </form>

      {ordenId && (
        <strong className="ordenId">¡Gracias por tu compra! Tu número de orden es {ordenId}</strong>
      )}
    </div>
  );
};

export default Checkout;
