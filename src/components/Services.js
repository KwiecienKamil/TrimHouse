import React from "react";
import Card from "../UI/Card";
import services1 from "../assets/services1.jpg";
import services2 from "../assets/services2.jpg";
import services4 from "../assets/services4.jpg";
import services3 from "../assets/services3.jpg";
import "../css/services.css";

const Services = () => {
  return (
    <div className="services-wrapper" id="services">
      <h3>
        <box-icon name="cut" size="3rem" animation="tada"></box-icon>Our
        Services
      </h3>
      <div className="services">
        <Card img={services1} title="Hair & Beard Styling" />
        <Card
          img={services2}
          alt="img-2"
          title="Changing Color"
          description="xxx"
        />
        <Card
          img={services3}
          alt="img-3"
          title="Only Hair Styling"
          description="xxx"
        />
        <Card
          img={services4}
          alt="img-4"
          title="Only Beard Styling"
          description="xxx"
        />
      </div>
    </div>
  );
};

export default Services;
