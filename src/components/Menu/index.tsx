import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css'


function Menu () {

  const [menuActive, setMenuActive] = useState(false);

  function activeToggleMenu() {
    setMenuActive(!menuActive)
  }

  return (
    <div className="menuContainer">
      <h1>Menu</h1>
      <ul className={`menuItems ${menuActive && "active"}`}>
        <Link className="item" to="/">
          <li >
            <p>Home</p>
          </li>
        </Link>
        <Link className="item item-secondary" to="/favorites">
          <li>
            <p>Favoritos</p>
          </li>
        </Link>
        <Link className="item item-secondary" to="/watched">
          <li >
            <p>Assistidos</p>
          </li>
        </Link>
        <Link className="item item-secondary" to="/later">
          <li>
            <p>Para assistir</p>
          </li>
        </Link>
      </ul>
      <i onClick={activeToggleMenu} className="fas fa-bars toggleMenu"></i>
    </div>
  );
};

export default Menu;
