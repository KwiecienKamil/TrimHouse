import React from "react";
import "../css/offer.css";

const Offer = (props) => {
  return (
    <div className="offer">
      <p className="number">{props.number}</p>
      <div className="offer-info">
        <h5>{props.title}</h5>
        <p className="time">{props.time}</p>
        <p className="price">{props.price}</p>
      </div>
      <div className="booking">
        <a href="#">Book now</a>
      </div>
    </div>
  );
};

export default Offer;
