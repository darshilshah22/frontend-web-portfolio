import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact__container">
        <div className="heading">
          <p>Contact</p>
        </div>
        <p>
          An opportunity? A piece of advice? How about a photo walk? Good things
          come to those who don't wait. Reach out to me below!
        </p>
        <div className="contact__socials">
          <img src="/public/assets/social/gmail.png" alt="" />
          <img src="/public/assets/social/linkedin.png" alt="" />
          <img src="/public/assets/social/github.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
