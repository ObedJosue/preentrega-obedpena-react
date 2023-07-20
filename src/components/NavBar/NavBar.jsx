import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
  return (
    <header>
      <Link to = "/">
      <h1 className='titulo'>GAMING SHOP</h1>
      </Link>
      <nav className="navbar">
        <ul>
          <li>
              <NavLink to="/categoria/1">TECLADOS</NavLink> 
          </li>
          <li>
              <NavLink to="/categoria/2">AURICULARES</NavLink> 
          </li>
          <li>
              <NavLink to="/categoria/3">MONITORES</NavLink>
          </li>
          <li>
            <NavLink to="/categoria/4">MOUSES</NavLink>
          </li>
          <li>
            <NavLink to="/categoria/5">DESKTOPS</NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget/>
    </header>
  );
};

export default Navbar;
