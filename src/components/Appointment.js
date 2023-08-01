import React from "react";
import "../css/appointment.css";

const Appointment = (props) => {
  return (
    <div className="appointment" id="appointment">
      <div className="a-logo">
        <h2>Trim House</h2>
      </div>
      <p>Professional hair&beard styling services</p>
      <a onClick={props.onOpenAbout}>About Us</a>
    </div>
  );
};

export default Appointment;
