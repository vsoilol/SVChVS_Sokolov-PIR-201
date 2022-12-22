import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__contacts contacts-footer">
          <div className="contacts-footer__title">Контакты</div>
          <ul className="contacts-footer__list list-contacts">
            <li className="list-contacts__item">
              <div className="list-contacts__title">Почта:</div>
              <a
                href="mailto:vsoilol1701@gmail.com"
                className="list-contacts__info_link">
                vsoilol1701@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
