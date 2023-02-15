import React from "react";

import FirstBlock from "../../components/Ads/FirstBlock";
import SecondBlock from "../../components/Ads/SecondBlock";
import CardsPage from "../../components/CardsPage/CardsPage";
import ThirdBlock from "../../components/Ads/ThirdBlock";

import "./home.css";

export default ({ data }) => {
  return (
    <div className="home">
      <FirstBlock />
      <SecondBlock />
      <CardsPage data={data} />
      <ThirdBlock />
    </div>
  );
};
