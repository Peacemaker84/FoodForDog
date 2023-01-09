import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../Search/search";
import "./header.css";
import logo from "./img/logo.svg";
import miniLogo from "./img/ic-profile.svg";

export default ({ user, setUser, goods, searchGoods, setModalActive }) => {
  // хук состояния [свойство, функция в качестве аргумента которой передается новое значение нашего свойства] = useState(аргумент - изначальное значение свойства)
  // const [user, setUser] = useState(localStorage.getItem("user8"));

  // let user = localStorage.getItem("user8");
  const logIn = (e) => {
    e.preventDefault();
    // let name = prompt("Как вас зовут?");
    // if (name) {
    //   localStorage.setItem("user8", name);
    //   setUser(name);
    // }
    setModalActive((prev) => !prev);
  };

  const logOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("user8");
    setUser("");
  };
  return (
    <header>
      <Link className="logo" to="/">
        <img src={logo} alt="" />
      </Link>
      <Search data={goods} searchGoods={searchGoods} />
      {/* <input type="search" placeholder="Поиск..." className="search" /> */}
      <nav className="menu">
        {/* true && true */}
        {user && <Link to="/profile">{user} </Link>}
        {!user && (
          <a href="" onClick={logIn}>
            Войти
          </a>
        )}
        {user && (
          <a href="" onClick={logOut} className="exit">
            Выйти
          </a>
        )}
      </nav>
      <div className="mini__logo">
        <img src={miniLogo} alt="" />
      </div>
    </header>
  );
};

// header, footer, main, section, nav, aside, article => div
