import React from "react";
import "./header.css";

const Header = () => {
  return (
    <section className="header">
      <div className="header__container">
        <img src="/assets/profile.png" alt="" />
        <div className="intro">
          <p className="user_name">Darshil Shah</p>
          <p className="user_desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
            similique, voluptatibus maxime tempora rerum modi velit? Omnis nobis
            libero officiis.
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
