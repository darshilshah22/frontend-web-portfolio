import React from "react";
import "./projects.css";
import { MdArrowForwardIos, MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import { projectsList } from "../../constants/constants";

const Projects = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const onClickUrl = (url) => () => openInNewTab(url);

  return (
    <section id="projects">
      <div className="project__container">
        <motion.div
          className="project_header"
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          <p className="heading">Projects</p>
          <p className="sub-heading">Selected Work</p>
        </motion.div>
        <div className="projects__grid">
          {projectsList.map((e, i) => (
            <motion.div
              key={i}
              className="project_card"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 150, damping: 10 }}
              onClick={onClickUrl(e.link)}
            >
              <img src={e.image} alt="" />
              <p className="heading">{e.type}</p>
              <p className="project_name">{e.name}</p>
              <div className="project_card_footer">
                <p className="description">{e.description}</p>
                <div className="redirect">
                  <MdArrowOutward size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div
          className="morework_container"
          onClick={onClickUrl("https://github.com/darshilshah22")}
        >
          <p className="morework_text">More Work</p>
          <MdArrowForwardIos className="morework_icon" size={12} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
