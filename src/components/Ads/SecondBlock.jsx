import React from "react";

import vitamin from "./Img/vitamin.png";
import allForDog from "./Img/allForDog.png";
import pedigree from "./Img/pedigree.png";

import "./secondStyle.css";

export default () => {
  return (
    <div className="add-block second-block">
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
  );
};
