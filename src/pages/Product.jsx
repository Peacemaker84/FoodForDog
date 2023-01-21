import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate, json } from "react-router-dom";
import { Trash3 } from "react-bootstrap-icons"; // добавили корзину из библиотеки
import Review from "../components/Review/review";
import Ctx from "../Ctx";

export default ({}) => {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState({});
  // По id товара получаются данные о товаре для отрисовки страницы с товаром
  const { api, PATH, user, setGoods } = useContext(Ctx);
  const navigate = useNavigate();
  useEffect(() => {
    api
      .getProduct(id)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data.reviews);
      });
  }, []);
  const btnSt = {
    position: "absolute",
    right: "20px",
    top: "120px",
    cursor: "pointer",
    height: "auto",
  };
  // удаляем карточку удаленного товара
  const remove = () => {
    api
      .delProduct(id)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          // страница обновит информацию о карточках товара с сервера (автоматически обновит страницу после удаления карточки)
          setGoods((prev) => prev.filter((g) => g._id !== data._id));
          navigate(`${PATH}catalog`);
        }
      });
  };

  return (
    <>
      {product &&
        product.author &&
        product.author._id === user._id && ( // удалять товар может только тот кто ее добавил
          <button onClick={remove} className="btn" style={btnSt}>
            <Trash3 />
          </button>
        )}
      <h1>{product.name || "Страница товара"}</h1>
      <p>{id}</p>
      <Link to={PATH + "catalog"}>Назад</Link>
      <h2>Отзывы</h2>
      <div className="reviews">
        {product.reviews &&
          product.reviews.length > 0 &&
          product.reviews.map((el, i) => <Review {...el} key={i} />)}
      </div>
    </>
  );
};
