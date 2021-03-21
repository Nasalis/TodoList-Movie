
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
            <i></i>
            <p>Home</p>
          </li>
        </Link>
        <li className="item">
          <i></i>
          <p>Favoritos</p>
        </li>
        <li className="item">
          <i></i>
          <p>Assistidos</p>
        </li>
        <li className="item">
          <i></i>
          <p>Para assistir</p>
        </li>
      </ul>
      <i onClick={activeToggleMenu} className="fas fa-bars toggleMenu"></i>
    </div>
  );
};

export default Menu;
