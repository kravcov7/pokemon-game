import d from "./style.module.css";

function Menu({ state }) {
  return (
    <div className={`${d.menuContainer} ${state ? d.active : d.deactive}`}>
      <div className={d.overlay} />
      <div className={d.menuItems}>
        <ul>
          <li>
            <a href="/#">HOME</a>
          </li>
          <li>
            <a href="/#">GAME</a>
          </li>
          <li>
            <a href="/#">ABOUT</a>
          </li>
          <li>
            <a href="/#">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
