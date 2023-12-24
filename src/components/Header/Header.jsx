import React from "react";
import "./header.css";

const Header = () => {
  return (
    <section className="header">
      <div
        className="header__container"
      >
        <img src="/assets/profile.png" alt="" />
        <div className="intro">
          <p className="user_name">Darshil Shah</p>
          <p className="user_desc">
            A passionate and innovative Frontend Web and Mobile Developer with a
            relentless dedication to transforming pixels into seamless,
            interactive experiences.
          </p>
          <div className="user_location">
            <p>Surat, Gujarat</p>
            <p>India</p>
            <p>Precision, balance & discipline</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
