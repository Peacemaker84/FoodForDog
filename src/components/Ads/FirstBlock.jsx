import React from "react";

import presentPic from "./Img/present.jpg";
import "./firstStyle.css";

export default () => {
  return (
    <a href="" className="first-block">
      <div className="first-block__item">
        <h2>
          Подарок за
          <br />
          первый заказ!
        </h2>
        <p>Универсальный сухой корм для собак</p>
      </div>
      <img src={presentPic} />
    </a>
  );
};
