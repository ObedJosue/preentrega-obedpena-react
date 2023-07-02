import NavBar from "./components/NavBar/NavBar";
import CartWidget from "./components/CartWidget/CartWidget";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
 
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element= {<ItemListContainer/>} />
          <Route path="/categoria/:idCategoria" element = {<ItemListContainer/>} />
          <Route path="/item/:idItem" element = {<ItemDetailContainer/>}/>
          <Route path="*" element = {<h2> SITIO EN CONSTRUCCION </h2>}/> 
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
