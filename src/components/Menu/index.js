import ROUTES from '../../assets/menu.json';

import { Link } from 'react-router-dom';

import cn from 'classnames';
import d from "./style.module.css";

function Menu({ state }) {
  return ( 
    <div className={cn(d.menuContainer, {[d.active]: state})}>
    <div className={d.overlay} />
      <div className={d.menuItems}>
        <ul>
          {
            ROUTES.map(({ link, name }, index) => (
              <li key={index} >
                <Link to={link}>{ name }</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default Menu;
