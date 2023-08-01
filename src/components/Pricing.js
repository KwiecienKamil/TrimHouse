import React from "react";
import "../css/pricing.css";
import Offer from "../UI/Offer";
import "boxicons";

const Pricing = () => {
  return (
    <div className="pricing-wrapper" id="pricing">
      <div className="pricing-header">
        <h3>
          <box-icon name="cut" size="3rem" animation="tada" color="#fff" />
          Pricing
        </h3>
      </div>
      <div className="pricing">
        <div className="offers-wrapper">
          <Offer
            title="Hair & Beard Styling"
            number="#1"
            price="40$"
            time="40-80min"
          />
          <Offer
            title="Only Hair Styling"
            number="#2"
            price="25$"
            time="30-50min"
          />
          <Offer
            title="Only Beard Styling"
            number="#3"
            price="25$"
            time="30-50min"
          />
          <Offer
            title="Changing Color"
            number="#4"
            price="55$"
            time="1h - 2h"
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
