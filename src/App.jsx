import React, { useState, useEffect } from "react";
// Router - маршрут
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import products from "./assets/data.json";

import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Modal from "./components/Modal";

import Home from "./pages/Home.jsx";
import Catalog from "./pages/Catalog.jsx";
import Profile from "./pages/Profile.jsx";
import Product from "./pages/Product";
import AddForm from "./pages/AddForm";

import { Api } from "./Api";
import Ctx from "./Ctx";
import Favorites from "./pages/Favorites";

const PATH = "/";
// const PATH = "/"  - когда работаем локально
// const PATH = "/dogfood";
// const PATH = "/dogfood"  - когда выкладываем на Гитхаб

const smiles = [<span>^_^</span>, "=)", "O_o", ";(", "^_0", "@_@", "–_–"];

const App = () => {
  let usr = localStorage.getItem("user8");
  if (usr) {
    usr = JSON.parse(usr);
  }
  const [user, setUser] = useState(usr);
  const [token, setToken] = useState(localStorage.getItem("token8"));
  const [modalActive, setModalActive] = useState(false);
  const [api, setApi] = useState(new Api(token));
  const [goods, setGoods] = useState([]);
  const [visibleGoods, setVisibleGoods] = useState(goods);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (token) {
      // загрузить данные с сервера
      api
        .getProducts()
        .then((res) => res.json())
        .then((data) => {
          setGoods(data.products);
        });
    }
  }, []); // функция отработает один раз при создании компонента

  useEffect(() => {
    console.log("Change token");
    setApi(new Api(token));
    let usr = localStorage.getItem("user8");
    if (usr) {
      usr = JSON.parse(usr);
    }
    setUser(usr);
  }, [token]);

  useEffect(() => {
    console.log(user);
    if (!user) {
      localStorage.removeItem("token8");
      setToken(null);
    }
  }, [user]);

  useEffect(() => {
    if (token) {
      // загрузить данные с сервера
      api
        .getProducts()
        .then((res) => res.json())
        .then((data) => {
          setGoods(data.products);
        });
    }
  }, [api]);

  useEffect(() => {
    setVisibleGoods(goods);
    setFavorites(
      goods.filter((el) => {
        // найти только те товары в которых св-во likes вкслючает в себя id моего пользователя
        return el.likes && el.likes.includes(user._id);
      })
    );
  }, [goods]);

  return (
    <Ctx.Provider
      value={{
        user: user,
        token: token,
        api: api,
        modalActive: modalActive,
        goods: goods,
        visibleGoods: visibleGoods,
        favorites: favorites,
        setUser: setUser,
        setToken: setToken,
        setApi: setApi,
        setModalActive: setModalActive,
        setGoods: setGoods,
        setVisibleGoods,
        setFavorites: setFavorites,
        PATH: PATH,
      }}
    >
      <div className="wrapper">
        <Header />
        <main>
          {/* {user ? <Catalog data={goods} /> : <Home data={smiles} />} */}
          <Routes>
            <Route path={PATH} element={<Home data={smiles} />} />
            <Route
              path={PATH + "catalog"}
              element={<Catalog data={smiles} />}
            />
            <Route path={PATH + "profile"} element={<Profile />} />
            <Route path={PATH + "catalog/:id"} element={<Product />} />
            <Route path={PATH + "add"} element={<AddForm />} />
            <Route path={PATH + "favorites"} element={<Favorites />} />
          </Routes>
        </main>
        <Footer />
      </div>
      {/* 
                isActive, setState - параметры, которые работают внутри компонента Modal
                modalActive, setModalActive - значения, которые сохраняются внутри параметров
            */}
      <Modal />
    </Ctx.Provider>
  );
};
export default App;
