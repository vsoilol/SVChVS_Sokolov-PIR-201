import React from "react";
import "./Footer.scss";
import {Link} from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <Link to={`about-us`} className={"footer__link"}>О нас</Link>
      </div>
    </footer>
  );
}

export default Footer;
