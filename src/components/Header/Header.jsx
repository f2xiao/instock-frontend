import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import logo from "../../logo/InStock-Logo_2x.png";
import "./Header.scss";

const Header = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo-container">
          <NavLink to="/">
            <img src={logo} className="navbar__img" alt="Instock" />
          </NavLink>
        </div>
        <div className="navbar__links">
          <ul className="navbar__list">
            <li>
              <NavLink
                to="/warehouses"
                className="navbar__link navbar__warehouses--active"
              >
                Warehouses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/inventory"
                className="navbar__link navbar__inventory--active"
              >
                Inventory
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
