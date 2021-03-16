import d from "./style.module.css";

function Menu({ state }) {
  return (
    <div className={`${d.menuContainer} ${state ? d.active : d.deactive}`}>
      <div className={d.overlay} />
      <div className={d.menuItems}>
        <ul>
          <li>
            <a href="#welcome">HOME</a>
          </li>
          <li>
            <a href="#game">GAME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
