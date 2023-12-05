import React from "react";
import "./about.css";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
import { goToTop } from "../../App";

const About = () => {
  useEffect(() => {
    goToTop();
  }, []);

  return (
    <section id="about">
      <div className="about__header">
        <img src="/assets/profile.png" alt="" />
        <div className="intro">
          <p className="user_name">Darshil Shah</p>
          <p className="user__desc">
            Interaction / Product Designer — generalist by thinking, specialist
            by practice. I strive to live by my work values — precision, balance
            and discipline.
          </p>
          <p className="user__desc">
            My vocation is in pursuit of systems that seamlessly come together,
            experiences that elegantly convey ideas, and interactions that
            challenge conventions.
          </p>
          <p className="user__desc">
            Design is communication. For me, clarity and momentum are a
            formidable duo.
          </p>
        </div>
      </div>

      {/* skills-work */}
      <div className="skills-work">
        <div className="skills">
          <div className="heading">My Skills</div>
          <ul className="skill-list">
            <li>User Interface, Interaction</li>
            <li>Experience Design</li>
            <li>Product Strategy</li>
            <li>Visual Communication</li>
            <li>Information Architecture</li>
            <li>Design Research</li>
            <li>Human-centered Design</li>
            <li>3D Modeling, Rendering</li>
          </ul>
        </div>
        <div className="work">
          <div className="heading">Work Approach</div>
          <ul className="work-list">
            <li>Design for emergence</li>
            <li>Build momentum first</li>
            <li>Value right problems</li>
            <li>Performance is design</li>
            <li>Go messy, then simplify</li>
          </ul>
        </div>
      </div>

      <div className="experience_interests">
        <div className="experience">
          <div className="heading">Experience</div>
          <p>A Story of Growth, Learning & Professional Development</p>
          <ul className="experience_list">
            <li className="experience__info">
              <div className="company_info">
                <p className="position">Mobile App Developer</p>
                <p className="company">Square Infosoft</p>
              </div>
              <p className="years">2021-2022</p>
            </li>
            <li className="experience__info">
              <div className="company_info">
                <p className="position">Mobile App Developer</p>
                <p className="company">Radarsoft Technology</p>
              </div>
              <p className="years">2022</p>
            </li>
            <li className="experience__info">
              <div className="company_info">
                <p className="position">Frontend Developer</p>
                <p className="company">Zealousweb Technology</p>
              </div>
              <p className="years">2022-2023</p>
            </li>
            <li className="experience__info">
              <div className="company_info">
                <p className="position">Software Developer</p>
                <p className="company">Triveni Global Software</p>
              </div>
              <p className="years">2022-2023</p>
            </li>
          </ul>
        </div>
        <div className="interests">
          <div className="heading">Interests</div>
          <div className="interest__grid">
            <div className="interest_item">
              <img src="/assets/ds.jpg" alt="" />
              <p>Data Science</p>
            </div>
            <div className="interest_item">
              <img src="/assets/ds.jpg" alt="" />
              <p>Data Science</p>
            </div>
            <div className="interest_item">
              <img src="/assets/ds.jpg" alt="" />
              <p>Data Science</p>
            </div>
            <div className="interest_item">
              <img src="/assets/ds.jpg" alt="" />
              <p>Data Science</p>
            </div>
          </div>
        </div>
      </div>

      <Contact />
      <Footer />
    </section>
  );
};

export default About;
