import React from "react";
import { Star, starFill, star, StarFill } from "react-bootstrap-icons";

export default ({ author, rating, created_at }) => {
  const setRating = (n) => {
    let stars = [];
    for (let i = 0; i < n; i++) {
      stars.push(<StarFill />);
    }
    for (let i = stars.length; i < 5; i++) {
      stars.push(<Star key={i} />);
    }
    return stars;
  };

  return (
    <>
      <h3>{author || ""}</h3>
      <div>{setRating(rating)}</div>
      <div>{new Date(created_at).toLocaleString()}</div>
    </>
  );
};
