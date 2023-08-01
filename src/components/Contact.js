import React, { useState } from "react";
import "../css/contact.css";
import logo from "../assets/logo.png";

const Contact = () => {
  const [inputValue, setInputValue] = useState("");
  const inputHandler = (e) => {
    console.log(e.target.value);
  };
  const inputValueHandler = (e) => {
    e.preventDefault();
    let inputs = document.querySelector("input");
    inputs.value = " ";
  };
  return (
    <div className="contact" id="contact">
      <div className="newsletter">
        <div className="newsletter-header">
          <h6>Subscribe to our newsletter</h6>
          <p>Don't miss our latest offers and promotions</p>
        </div>
        <form className="newsletter-input">
          <input type="email" placeholder="Email" onChange={inputHandler} />
          <button type="submit" onClick={inputValueHandler}>
            Subscribe
          </button>
        </form>
      </div>
      <div className="contact-main">
        <div className="contact-logo">
          <img src={logo} alt="logo" />
          <h4>Trim House</h4>
        </div>
        <div className="contact-bottom">
          <div className="socials">
            <h4>Our Socials</h4>
            <div className="social-icons">
              <div className="social-icon">
                <box-icon type="logo" name="facebook" size="1.5rem"></box-icon>
              </div>
              <div className="social-icon">
                <box-icon name="instagram" type="logo" size="1.5rem"></box-icon>
              </div>
              <div className="social-icon">
                <box-icon name="snapchat" type="logo" size="1.5rem"></box-icon>
              </div>
              <div className="social-icon">
                <box-icon name="twitter" type="logo" size="1.5rem"></box-icon>
              </div>
            </div>
          </div>
          <div className="hours">
            <h4>Working Hours</h4>
            <div className="hours-info">
              <h5>Monday-Saturday</h5>
              <p>9:00 - 17:00</p>
            </div>
          </div>
          <div className="contact-info">
            <h4>Contact</h4>
            <div className="contact-info-main">
              <p>
                <box-icon
                  name="map"
                  type="solid"
                  size="1.5rem"
                  color="#fff"
                ></box-icon>{" "}
                Address
              </p>
              <p>
                <box-icon name="envelope" type="solid" color="#fff"></box-icon>
                trim.house@gmail.com
              </p>
              <p>
                <box-icon name="phone" type="solid" color="#fff"></box-icon>078
                6611 2097
              </p>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
