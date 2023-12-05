import React from "react";
import "./tools.css";
import Marquee from "react-fast-marquee";

const Tools = () => {
  return (
    <div className="tools">
      <Marquee behavior="" direction="left" speed="100" autoFill="true">
        <img src="/assets/tools/html5.png" alt="" className="tools_icon" />
        <img src="/assets/tools/css.png" alt="" className="tools_icon" />
        <img src="/assets/tools/sass.png" alt="" className="tools_icon" />
        <img
          src="/assets/tools/bootstrap5.png"
          alt=""
          className="tools_icon"
        />
        <img src="/assets/tools/js.png" alt="" className="tools_icon" />
        <img
          src="/assets/tools/tailwind.png"
          alt=""
          className="tools_icon"
        />
      </Marquee>
      <Marquee behavior="" direction="right" speed="100" autoFill="true">
        <img src="/assets/tools/flutter.png" alt="" className="tools_icon" />
        <img src="/assets/tools/python.png" alt="" className="tools_icon" />
        <img src="/assets/tools/reactjs.png" alt="" className="tools_icon" />
        <img src="/assets/tools/redux.png" alt="" className="tools_icon" />
      </Marquee>
      <Marquee behavior="" direction="left" speed="100" autoFill="true">
        <img src="/assets/tools/git.png" alt="" className="tools_icon" />
        <img src="/assets/tools/github.png" alt="" className='tools_icon'/>
        <img src="/assets/tools/figma.png" alt="" className='tools_icon'/> 
        <img src="/assets/tools/postman.png" alt="" className='tools_icon'/> 
        <img src="/assets/tools/canva.png" alt="" className='tools_icon'/>
      </Marquee>
    </div>
  );
};

export default Tools;
