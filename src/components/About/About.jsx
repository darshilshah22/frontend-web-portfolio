import React from "react";
import "./about.css";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
import { goToTop } from "../../App";
import { motion } from "framer-motion";

const About = () => {
  useEffect(() => {
    goToTop();
  }, []);

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
    >
      <div className="about__header">
        <img src="/assets/profile.png" alt="" />
        <div className="intro">
          <p className="user_name">Darshil Shah</p>
          <p className="user__desc">
            A 24-year-old IT engineering graduate, is a skilled software
            developer specializing in web and mobile projects. With a passion
            for crafting seamless digital experiences, I bring a blend of
            academic excellence and practical expertise to my work.
          </p>
          <p className="user__desc">
            My collaborative approach and effective communication, I
            contribute significantly to project success. Outside of coding,
            I'm a dedicated learner, staying abreast of industry trends.
            Committed to leaving a lasting impact on technology.
          </p>
          <p className="user__desc">
            My journey is marked by innovation and a drive for continuous
            improvement.
          </p>
        </div>
      </div>

      {/* skills-work */}
      <div className="skills-work">
        <div className="skills">
          <div className="heading">Soft Skills</div>
          <ul className="skill-list">
            <li>Leadership</li>
            <li>Teamwork</li>
            <li>Problem-solving</li>
            <li>Adaptability/Flexibility</li>
            <li>Emotional Intelligence</li>
            <li>Conflict Resolution</li>
            <li>Time Management</li>
            <li>Critical Thinking</li>
          </ul>
        </div>
        <div className="work">
          <div className="heading">Tech Skills</div>
          <ul className="work-list">
            <li>HTML, CSS, JavaScript</li>
            <li>TypeScript</li>
            <li>ReactJS</li>
            <li>Redux</li>
            <li>NextJS</li>
            <li>Flutter</li>
            <li>Firebase</li>
            <li>Python</li>
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
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20230911173805/What-is-Artiificial-Intelligence(AI).webp"
                alt=""
              />
              <p>Artificial Intelligence</p>
            </div>
            <div className="interest_item">
              <img
                src="https://www.simplilearn.com/ice9/free_resources_article_thumb/full-stack-developer.jpg"
                alt=""
              />
              <p>Full Stack Development</p>
            </div>
            <div className="interest_item">
              <img
                src="https://www.fsm.ac.in/blog/wp-content/uploads/2022/08/ml-e1610553826718.jpg"
                alt=""
              />
              <p>Machine Learning</p>
            </div>
          </div>
        </div>
      </div>

      <Contact />
      <Footer />
    </motion.section>
  );
};

export default About;
