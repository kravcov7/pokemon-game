import d from "./style.module.css";

function Menu({ state }) {
  return (
    <div className={`${d.menuContainer} ${state ? d.active : d.deactive}`}>
      <div className={d.overlay} />
      <div className={d.menuItems}>
        <ul>
          <li>
            <button>HOME</button>
          </li>
          <li>
            <button>GAME</button>
          </li>
          <li>
            <button>ABOUT</button>
          </li>
          <li>
            <button>CONTACT</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
