

import NavBar from "./components/NavBar/navbar";git 
import CartWidget from "./components/CartWidget/CartWidget";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


const App = () => {
 
  return (
    <>
      <NavBar />
      <ItemListContainer greeting = {" Bienvenidos a nuestra tienda Nos complace darles la más cordial bienvenida a este espacio donde encontrarán una amplia variedad de productos y servicios Estamos emocionados de tener la oportunidad de servirles y brindarles una experiencia excepcional de compra Nuestro equipo está aquí para ayudarles en lo que necesiten Si tienen alguna pregunta requerimientos especiales o simplemente buscan asesoramiento no duden en acercarse a nosotros. Estamos comprometidos en hacer de su visita una experiencia placentera y satisfactoria. Exploren nuestros estantes y descubran una amplia gama de productos de alta calidad. Desde artículos para el hogar hasta gadgets tecnológicos, tenemos algo para cada uno de ustedes. Además, estamos constantemente actualizando nuestro inventario para ofrecerles las últimas tendencias y novedades del mercado. Una vez más, les agradecemos por elegirnos y confiar en nosotros. Esperamos que su visita a nuestra tienda sea agradable y que encuentren todo lo que están buscando. ¡Disfruten de su estancia y no duden en acercarse si necesitan algo!"} />
    </>
  );
};

export default App;
