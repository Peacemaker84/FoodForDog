import React from "react";
import { useNavigate } from "react-router-dom";

export default ({ setUser, user }) => {
  //   const user = localStorage.getItem("user8");

  const navigate = useNavigate();
  const logOut = (e) => {
    e.preventDefault();
    setUser("");
    localStorage.removeItem("user8");
    navigate("/");
  };

  return (
    <>
      <h1>Личный кабинет</h1>
      {user && <p>Привет, {user}</p>}
      <a href="" onClick={logOut} style={{ color: "orange" }}>
        Выйти из аккаунта
      </a>
    </>
  );
};
