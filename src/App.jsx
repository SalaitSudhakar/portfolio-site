import React, { useState } from "react";
import Navbar from "./Componnets/Navbar";
import Hero from "./Componnets/Hero";
import "./App.css";
import About from "./Componnets/About";
import Skills from "./Componnets/Skills";
import Contact from './Componnets/Contact';
import Footer from './Componnets/Footer'
import MoveToTop from "./Componnets/MoveToTop";
import Projects from "./Componnets/Projects";

const App = () => {
   const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="relative bg-custom-dark-blue min-h-screen text-white overflow-x-hidden">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection}/>
      <MoveToTop activeSection={activeSection}/>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
