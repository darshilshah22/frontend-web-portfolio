import React, { useState } from "react";
import "./navbar.css";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { goToTop } from "../../App";

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="navbar">
        <ul className={`navbar__menu ${open ? "open" : ""}`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive && location.hash === "" ? "active" : "deactive"}`
              }
              onClick={() => {
                setOpen(false);
                goToTop();
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${isActive && location.hash === "" ? "active" : "deactive"}`
              }
              onClick={() => {
                setOpen(false);
                goToTop();
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            <HashLink
              smooth
              to="/#projects"
              className={`${
                location.hash === "#projects" ? "active" : "deactive"
              }`}
              onClick={()=>setOpen(false)}
            >
              Work
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to={`${location.pathname}#contact`}
              className={`${
                location.hash === "#contact" ? "active" : "deactive"
              }`}
              onClick={()=>setOpen(false)}
            >
              Contact
            </HashLink>
          </li>
        </ul>
        <HiMiniBars3BottomRight
          size={32}
          className="mobile_menu"
          onClick={() => setOpen(!open)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
