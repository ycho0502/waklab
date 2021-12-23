import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import logo from "../assets/WAK.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const changeBackground = () => {
    if (window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        {/* LOGO */}
        <Link to="/" className="navbar-logo">
          <img className="logo" src={logo} />
        </Link>

        {/* MENU ICON */}
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        {/* MENUS */}
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {/* HOME */}
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              <i class="fas fa-home"></i> Home
            </Link>
            <div className="menu_animation"></div>
          </li>

          {/* ABOUT */}
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              <i class="fas fa-info-circle"></i> About
            </Link>
            <div className="menu_animation"></div>
          </li>

          {/* PRODUCTS */}
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/products"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              <i class="fas fa-store"></i> Products{" "}
              <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>

          {/* TEAM */}
          <li className="nav-item">
            <Link to="/team" className="nav-links" onClick={closeMobileMenu}>
              <i class="fas fa-users"></i> Team
            </Link>
            <div className="menu_animation"></div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
