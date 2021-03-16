import d from "./style.module.css";
import cn from "classnames";
import { useState } from "react";

function NavBar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className={d.root}>
      <div className={d.navWrapper}>
        <p className={d.brand}>LOGO</p>
        <a className={cn(d.menuButton, { [d.active]: isActive })}>
          <span />
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
