import React from "react";
import "./tools.css";
import Marquee from "react-fast-marquee";

const Tools = () => {
  return (
    <div className="tools">
      <Marquee behavior="" direction="left" speed="50" autoFill="true">
        <img src="/assets/tools/html.png" alt="" className="tools_icon" />
        <img src="/assets/tools/css.png" alt="" className="tools_icon" />
        <img src="/assets/tools/sass.png" alt="" className="tools_icon" />
        <img src="/assets/tools/bootstrap.png" alt="" className="tools_icon" />
        <img src="/assets/tools/js.png" alt="" className="tools_icon" />
      </Marquee>
      <Marquee behavior="" direction="right" speed="50" autoFill="true">
        <img src="/assets/tools/flutter.png" alt="" className="tools_icon" />
        <img src="/assets/tools/python.png" alt="" className="tools_icon" />
        <img src="/assets/tools/react.png" alt="" className="tools_icon" />
        <img src="/assets/tools/redux.png" alt="" className="tools_icon" />
        <img src="/assets/tools/firebase.png" alt="" className="tools_icon" />
        <img src="/assets/tools/nextjs.png" alt="" className="tools_icon" />
      </Marquee>
      <Marquee behavior="" direction="left" speed="50" autoFill="true">
        <img src="/assets/tools/git.png" alt="" className="tools_icon" />
        <img src="/assets/tools/github.png" alt="" className="tools_icon" />
        <img src="/assets/tools/figma.png" alt="" className="tools_icon" />
        <img src="/assets/tools/postman.png" alt="" className="tools_icon" />
        <img src="/assets/tools/vscode.png" alt="" className="tools_icon" />
        <img src="/assets/tools/tailwind.png" alt="" className="tools_icon" />
      </Marquee>
    </div>
  );
};

export default Tools;
