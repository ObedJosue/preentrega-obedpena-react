import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const Navbar = () => {
  return (
    <header>
      <h1>GAMING SHOP</h1>
      <nav className="navbar">
        <ul>
          <li>TECLADOS</li>
          <li>AURICULARES</li>
          <li>MONITORES</li>
          <li>MOUSES</li>
          <li>DESKTOPS</li>
        </ul>
      </nav>
      <CartWidget/>
    </header>
  );
};

export default Navbar;
