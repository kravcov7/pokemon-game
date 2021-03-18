import MenuItem from '../MenuItem';
import ROUTES from '../../assets/menu.json'

import cn from 'classnames';
import d from "./style.module.css";

function Menu({ state }) {
  return ( 
    <div className={cn(d.menuContainer, {[d.active]: state})}>
    <div className={d.overlay} />
      <div className={d.menuItems}>
        <ul>
          {
            ROUTES.map(item=> <MenuItem key={item.id} link={item.link} name={item.name} />)
          }
        </ul>
      </div>
    </div>
  );
}

export default Menu;
