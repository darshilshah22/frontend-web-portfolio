import React from "react";
import "./contact.css";

const Contact = () => {
  const openLink = (url) => window.open(url, "_blank")?.focus();

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
          <img
            src="assets/social/mail.png"
            alt="Mail"
            onClick={() => openLink("mailto:someone@example.com")}
          />
          <img
            src="assets/social/linkedin.png"
            alt="LinkedIn"
            onClick={() => openLink("https://www.linkedin.com/in/ds06/")}
          />
          <img
            src="assets/social/github.png"
            alt="Github"
            onClick={() => openLink("https://github.com/darshilshah22")}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
