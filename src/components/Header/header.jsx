import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Search from "../Search/search";
import "./header.css";
import logo from "./img/logo.svg";
import miniLogo from "./img/ic-profile.svg";
import Ctx from "../../Ctx";
import { PlusCircle, HeartFill } from "react-bootstrap-icons";
import { Badge } from "react-bootstrap";

export default () => {
  // хук состояния [свойство, функция в качестве аргумента которой передается новое значение нашего свойства] = useState(аргумент - изначальное значение свойства)
  // const [user, setUser] = useState(localStorage.getItem("user8"));

  // let user = localStorage.getItem("user8");
  const { user, setUser, setModalActive, PATH, favorites } = useContext(Ctx);

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
      <Link className="logo" to={PATH}>
        <img src={logo} alt="" />
      </Link>
      <Search />
      {/* <input type="search" placeholder="Поиск..." className="search" /> */}
      <nav className="menu">
        {/* true && true */}
        {user && (
          <Link to={PATH + "add"}>
            <PlusCircle style={{ fontSize: "20px" }} />
          </Link>
        )}
        {user && (
          <Link to={PATH + "favorite"} className="badge-link">
            <HeartFill style={{ fontSize: "20px" }} />
            <Badge>{favorites.length}</Badge>
          </Link>
        )}
        {user && user.name && <Link to={PATH + "profile"}>{user.name} </Link>}
        {!user && (
          <a href="" onClick={logIn}>
            Войти
          </a>
        )}
        {user && (
          <a href="" onClick={logOut} className="exit">
            Выйти{" "}
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
