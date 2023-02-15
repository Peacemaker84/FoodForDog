import React from "react";

import vitamin from "./img/vitamin.png";
import allForDog from "./img/allForDog.png";
import pedigree from "./img/pedigree.png";

import "./secondStyle.css";

export default () => {
  return (
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
  );
};
