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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquam
            ex quidem maiores? Tempora, recusandae. Suscipit aperiam debitis
            consequatur dicta inventore, illum fugit doloremque fuga
            dignissimos. Aut ipsa pariatur eos. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Exercitationem, sit? Tempora,
            recusandae. Suscipit aperiam debitis consequatur dicta inventore,
            illum fugit doloremque fuga dignissimos. Aut ipsa pariatur eos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, sit?
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
            <p className="card_description">Tools i enjoy using</p>
          </div>
          <Tools />
        </div>
      </div>
    </section>
  );
};

export default MoreWork;
