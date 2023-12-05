import React from "react";
import "./navbar.css";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <ul className="navbar__menu">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "active" : "deactive"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${isActive ? "active" : "deactive"}`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/work"
              className={({ isActive }) =>
                `${isActive ? "active" : "deactive"}`
              }
            >
              Work
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${isActive ? "active" : "deactive"}`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <HiMiniBars3BottomRight size={32} className="mobile_menu" />
      </div>
    </nav>
  );
};

export default Navbar;
