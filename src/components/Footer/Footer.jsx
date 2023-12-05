import React from "react";
import "./footer.css";
import { IoIosArrowDropup } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { goToTop } from "../../App";

const Footer = () => {
  const location = useLocation();

  return (
    <footer>
      <NavLink
        to={location.pathname}
        className={() => "footer"}
        onClick={() => goToTop()}
      >
        <p>All good things end. Back to the top</p>
        <IoIosArrowDropup size={24} />
      </NavLink>
    </footer>
  );
};

export default Footer;
