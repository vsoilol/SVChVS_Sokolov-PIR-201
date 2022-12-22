import React from "react";
import "./Header.scss";
import {Link} from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
          <Link to={``} className={"header__title"}>Sokol</Link>
      </div>
    </header>
  );
}

export default Header;
