

import NavBar from "./components/NavBar/NavBar";
import CartWidget from "./components/CartWidget/CartWidget";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


const App = () => {
 
  return (
    <>
      <NavBar />
      <ItemListContainer greeting = {" Bienvenidos a nuestra tienda "} />
      <ItemDetailContainer/>
    </>
  );
};

export default App;
