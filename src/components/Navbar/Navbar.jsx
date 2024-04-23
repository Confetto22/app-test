// import siteLogo from "../../../public/images/Logo.svg"
// import menuBt from "../../../public/images/menu_bt.svg";
import { useState } from "react";

import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuBtClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="top_sec">
        <p>subscribe to our newsletter for blogs and resources</p>
        <span className="nav_arrow">
          <img src="../../../public/images/arrow_icon.svg" alt="" />
        </span>
      </div>

      <div className="nav_actual">
        <div className="logo">
          <img src="../../../public/images/Logo.svg" alt="" />
        </div>
        <div className="phone_menu">
          <img
            src="../../../public/images/menu_bt.svg"
            alt=""
            onClick={menuBtClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
