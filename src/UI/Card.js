import React from "react";
import "../css/card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt={props.alt} />
      <div className="overlay">
        <h5>{props.title}</h5>
      </div>
    </div>
  );
};

export default Card;
