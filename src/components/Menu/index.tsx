
import { Link } from 'react-router-dom';
import './index.css'


function Menu () {

 

  return (
    <div className="menuContainer">
      <h1>Menu</h1>
      <ul className="menuItems">
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
    </div>
  );
};

export default Menu;
