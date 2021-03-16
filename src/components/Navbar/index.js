import d from "./style.module.css";
import cn from "classnames";
import { useState } from "react";

function NavBar({ onClickButton }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    onClickButton(isActive);
  }

  return (
    <nav className={d.root}>
      <div className={d.navWrapper}>
        <p className={d.brand}>LOGO</p>
        <a className={cn(d.menuButton, { [d.active]: isActive })} onClick={handleClick} >
          <span />
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
