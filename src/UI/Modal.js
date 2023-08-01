import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "../css/modal.css";
import logo from "../assets/logo.png";

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <div className="backdrop">
          <div className="modal-wrapper">
            <div className="modal">
              <div className="modal-main">
                <div className="modal-logo">
                  <img src={logo} alt="logo" />
                  <h1>Trim House</h1>
                </div>
                <div className="modal-text">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nam iusto labore, est inventore a porro incidunt praesentium
                    modi ea maiores?
                  </p>
                </div>
              </div>
              <div className="modal-img"></div>
              <button onClick={props.onCloseAbout}>X</button>
            </div>
          </div>
        </div>,
        document.getElementById("portal")
      )}
    </Fragment>
  );
};

export default Modal;
