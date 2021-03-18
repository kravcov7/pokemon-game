import { useState } from "react";
import Menu from "../../components/Menu";
import NavBar from "../../components/Navbar";

function MenuHeader() {
  const [isActive, setIsActive] = useState(false);
  const handleClickButton = () => {
    setIsActive(!isActive);
  }

  return (
    <>
      <Menu state={ isActive } />
      <NavBar onClickButton={handleClickButton} />
    </>
  );
}

export default MenuHeader;
