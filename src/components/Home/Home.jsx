import React from "react";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import MoreWork from "../MoreWork/MoreWork";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import "./home.css";

const Home = () => {

  return (
    <div id="home">
      <Header />
      <Projects />
      <MoreWork />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
