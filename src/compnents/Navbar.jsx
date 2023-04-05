import React, { useState } from 'react'

import './Navbar.css';
import { NavLink } from 'react-router-dom';



export default function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");
  const navtoggle = () => {
    active === "nav__menu" ? setActive("nav__menu nav__active") : setActive("nav__menu");
    toggleIcon === "nav__toggler" ? setToggleIcon("nav__toggler toggle") : setToggleIcon("nav__toggler");
  };

  return (
    <nav className="nav">
      <NavLink to="/" className="nav__brand">Movie Materials</NavLink>
      <ul className={active}>
        <li className="nav__item"><NavLink to={"/"} className="nav__link">Home</NavLink></li>
        <li className="nav__item"><NavLink to={"/about"} className="nav__link">About Us</NavLink></li>
        <li className="nav__item"><NavLink to={"/contact"} className="nav__link">Contact</NavLink></li>
      </ul>
      <div onClick={navtoggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line1"></div>
        <div className="line1"></div>
      </div>
    </nav>
  );
}