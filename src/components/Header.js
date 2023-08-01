import React from "react";
import "../css/header.css";
import Appointment from "./Appointment";

const Header = (props) => {
  return (
    <div className="header">
      <Appointment onOpenAbout={props.onOpenAbout} />
    </div>
  );
};

export default Header;
