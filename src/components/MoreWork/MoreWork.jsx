import React from "react";
import "./morework.css";
import CustomCarousel from "../../container/CustomSlider/CustomSlider";
import Tools from "../../container/Tools/Tools";

const MoreWork = () => {
  return (
    <section className="morework">
      <div className="morework__container">
        <div className="aboutme card">
          <p className="heading">About Me</p>
          <p className="card_description">
            Darshil Shah, a dynamic and innovative 24-year-old software
            developer, is making waves in the world of technology with a keen
            focus on web and mobile projects. Armed with a degree in IT
            engineering, Darshil brings a unique blend of academic prowess and
            hands-on experience to the table. Hailing from a background rich in
            problem-solving and logical thinking, Darshil has proven himself as
            a valuable asset in the software development realm. His passion for
            creating seamless and user-friendly applications has been the
            driving force behind his success. Darshil's journey into the tech
            landscape began with a genuine curiosity about how things work in
            the digital realm. This curiosity evolved into a deep-seated
            commitment to mastering the intricacies of coding and software
            architecture. His educational background has provided him with a
            solid foundation, while his practical experience has honed his
            skills in real-world scenarios. In addition to his technical
            proficiency, Darshil is recognized for his collaborative spirit and
            effective communication skills. Whether working independently or as
            part of a team, he consistently contributes to the success of
            projects, demonstrating an ability to translate complex technical
            concepts into user-friendly solutions. Outside the realm of coding,
            Darshil is a lifelong learner with a passion for staying abreast of
            the latest industry trends. He understands the importance of
            continuous improvement in the ever-evolving landscape of technology.
            Darshil's commitment to growth extends beyond his professional life,
            as he actively engages in community forums and knowledge-sharing
            platforms, fostering an environment of collaboration and learning.
            As Darshil continues to evolve in his career, he remains committed
            to pushing the boundaries of what's possible in the digital world.
            His journey is not just about writing code but leaving a lasting
            impact on the way we interact with technology, one innovative
            project at a time.
          </p>
          <div className="bottom"></div>
        </div>
        <div className="mylibrary card">
          <p className="heading">My Library</p>
          <p className="card_description">
            Books I learn from and get inspired by
          </p>
          <CustomCarousel />
        </div>
        <div className="tools_container card">
          <div className="tools_header">
            <p className="heading">Tools</p>
            <p className="card_description">Tools I enjoy using</p>
          </div>
          <Tools />
        </div>
      </div>
    </section>
  );
};

export default MoreWork;
