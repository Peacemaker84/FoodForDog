import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import logo from "../Header/img/logo.svg";

export default () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      {/* <div className="container__footer"> */}
      <div className="footer__logo">
        <Link to="/">
          <img src={logo} />
        </Link>
        <div className="footer__copy">
          ©️ {year} "Интернет-магазин DogFood.ru"
        </div>
      </div>
      <div className="footer__contacts">
        <div className="contacts">
          <p>Мы на связи</p>
          <a className="phone" href="tel:+79451111111">
            8 (945) 111-11-11
          </a>
          <a href="dogfood@mail.ru">dogfood@mail.ru</a>
        </div>
        <div className="social-media">
          <a href="#">
            <i className="fa-brands fa-telegram"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-vk"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-skype"></i>
          </a>
        </div>
      </div>
      {/* </div> */}
    </footer>
  );
};
//©️ => &copy
// &nbsp - полный пробел
