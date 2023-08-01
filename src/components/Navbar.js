import React, { useState, useRef } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import "../css/navbar.css";
import { FaTimes } from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";

const Navbar = () => {
  const [onScroll, setOnScroll] = useState(false);
  const navRef = useRef();

  const onOpenMenu = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  const setScroll = () => {
    if (window.scrollY >= 1) {
      setOnScroll(true);
    } else setOnScroll(false);
  };
  window.addEventListener("scroll", setScroll);
  return (
    <div className={onScroll ? "navbar bg-navbar" : "navbar"}>
      <div className={onScroll ? "logo bg-logo" : "logo"}>
        <img src={logo} alt="logo" />
        <h2 className={onScroll ? "logo-title bg-logo-title" : "logo-title"}>
          Trim House
        </h2>
      </div>
      <div className="nav" ref={navRef}>
        <Link
          to="appointment"
          spy={true}
          smooth={true}
          offset={-400}
          duration={500}
        >
          Home
        </Link>
        <Link
          to="services"
          spy={true}
          smooth={true}
          offset={-75}
          duration={500}
        >
          Services
        </Link>
        <Link to="pricing" spy={true} smooth={true} offset={-60} duration={500}>
          Pricing
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={85} duration={500}>
          Contact
        </Link>
        <button onClick={onOpenMenu} className="nav-btn nav-close-btn">
          <FaTimes />
        </button>
      </div>
      <button onClick={onOpenMenu} className="nav-btn">
        <VscThreeBars />
      </button>
    </div>
  );
};

export default Navbar;
