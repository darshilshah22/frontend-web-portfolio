import React from "react";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import MoreWork from "../MoreWork/MoreWork";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import "./home.css";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
    >
      <Header />
      <Projects />
      <MoreWork />
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default Home;
