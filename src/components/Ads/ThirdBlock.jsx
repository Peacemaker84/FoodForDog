import React from "react";

import dogFoodMixedPic from "./img/dog-food-mixed.png";

import puppy from "./img/puppy.png";
import goForest from "./img/goForest.png";
import dryFood from "./img/dryFood.jpg";
import tastyFood from "./img/tastyFood.jpg";
import cannedFood from "./img/cannedFood.png";

import "./thirdStyle.css";

export default () => {
  return (
    <div className="third-block">
      <div className="ad-block">
        <a href="" className="ad-block__item blue">
          <div>
            <h3>Сухой корм для щенков</h3>
            {/* <p>Только натуральные продукты!</p> */}
          </div>
          <img className="ad-block__img" src={dogFoodMixedPic} />
        </a>
        <a href="" className="ad-block__item">
          <div>
            <h3>Сбалансированный консервированный корм для собак</h3>
          </div>
          <img className="ad-block__img" src={cannedFood} />
        </a>
      </div>
      <h2>Новости</h2>
      <div className="news">
        <div className="news__block">
          <a href="">
            <img className="news__img" src={puppy} />
            <h5>17 мая 2022</h5>
            <p>Дрессировка щенка</p>
          </a>
        </div>
        <div className="news__block block2">
          <a href="">
            <img className="news__img" src={goForest} />
            <h5>08 июля 2022</h5>
            <p>Идем гулять с собакой в лес</p>
          </a>
        </div>
        <div className="news__block block2">
          <a href="">
            <img className="news__img" src={dryFood} />
            <h5>16 августа 2022</h5>
            <p>Сухие корма для собак</p>
          </a>
        </div>
        <div className="news__block">
          <a href="">
            <img className="news__img" src={tastyFood} />
            <h5>02 сентября 2022</h5>
            <p>5 лакомств для собак</p>
          </a>
        </div>
      </div>
    </div>
  );
};
