import React from "react";
import "./ads.css";

import dogFoodMixedPic from "./Img/dog-food-mixed.png";
import pedigree from "./Img/pedigree.png";
import allForDog from "./Img/allForDog.png";
import PresetFood from "./Img/presentFood.jpg";
import puppy from "./Img/puppy.png";
import goForest from "./Img/goForest.png";
import dryFood from "./Img/dryFood.jpg";
import tastyFood from "./Img/tastyFood.jpg";
import cannedFood from "./Img/cannedFood.png";
import vitamin from "./Img/vitamin.png";

export default () => {
  return (
    <>
      <a href="" className="first-block">
        <div className="first-block__item">
          <h2>
            Подарок за
            <br />
            первый заказ!
          </h2>
          <p>Универсальный сухой корм для собак</p>
        </div>
        <img src={PresetFood} />
      </a>

      <div className="ad-block second-block">
        <a href="" className="ad-block__item green">
          <div>
            <h3>Витамины для собак всех возрастов</h3>
          </div>
          <img className="second-block__img" src={vitamin} />
        </a>
        <a href="" className="ad-block__item orange">
          <div>
            <h3>Все для содержания собак</h3>
          </div>
          <img className="second-block__img" src={allForDog} />
        </a>
        <a href="" className="ad-block__item blue">
          <div>
            <h3>Сухой корм в упаковке</h3>
          </div>
          <img className="second-block__img" src={pedigree} />
        </a>
      </div>
      <div className="ad-block">
        <a href="" className="ad-block__item blue">
          <div>
            <h3>Сухой корм для щенков</h3>
            <p>Только натуральные продукты!</p>
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
            <p>Дрессировка щенка: что нужно знать</p>
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
    </>
  );
};
