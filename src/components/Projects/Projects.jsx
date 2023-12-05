import React from "react";
import "./projects.css";
import { MdArrowForwardIos, MdArrowOutward } from "react-icons/md";

const Projects = () => {
  return (
    <section id="projects">
      <div className="project__container">
        <div className="project_header">
          <p className="heading">Projects</p>
          <p className="sub-heading">Selected Work</p>
        </div>
        <div className="projects__grid">
          <div className="project_card p1">
            <img src="/assets/project1.png" alt="" />
            <p className="heading">Webapp</p>
            <p className="project_name">MCES Pal</p>
            <div className="project_card_footer">
              <p className="description">
                An operating interface for the 'SF Campus for Jewish Living' to
              </p>
              <div className="redirect">
                <MdArrowOutward size={18} />
              </div>
            </div>
          </div>
          <div className="project_card p2">
            <img src="/assets/project2.png" alt="" />
            <p className="heading">Mobile App</p>
            <p className="project_name">Demcare</p>
            <div className="project_card_footer">
              <p className="description">
                An operating interface for the 'SF Campus for Jewish Living' to
              </p>
              <div className="redirect">
                <MdArrowOutward size={18} />
              </div>
            </div>
          </div>
          <div className="project_card p3">
            <img src="/assets/project2.png" alt="" />
            <p className="heading">Mobile App</p>
            <p className="project_name">Demcare</p>
            <div className="project_card_footer">
              <p className="description">
                An operating interface for the 'SF Campus for Jewish Living' to
              </p>
              <div className="redirect">
                <MdArrowOutward size={18} />
              </div>
            </div>
          </div>
          <div className="project_card p4">
            <img src="/assets/project1.png" alt="" />
            <p className="heading">Webapp</p>
            <p className="project_name">MCES Pal</p>
            <div className="project_card_footer">
              <p className="description">
                An operating interface for the 'SF Campus for Jewish Living' to
              </p>
              <div className="redirect">
                <MdArrowOutward size={18} />
              </div>
            </div>
          </div>
        </div>
        <div className="morework_container">
          <p className="morework_text">More Work</p>
          <MdArrowForwardIos className="morework_icon" size={12} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
