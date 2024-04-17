import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom"; // Import BrowserRouter and Link
import logo from "../../logo/InStock-Logo_2x.png";
import "./header.scss";

const Header = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo-container">
          <Link to="/">
            <img src={logo} className="navbar__img" alt="Instock" />
          </Link>
        </div>
        <div className="navbar__links">
          <ul className="navbar__list">
            <Link to="/warehouses" className="navbar__link navbar__warehouses">
              Warehouses
            </Link>
            <Link to="/inventory" className="navbar__link navbar__inventory">
              Inventory
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
