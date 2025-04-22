import React from "react";
import Navbar from "./Componnets/Navbar";
import Hero from "./Componnets/Hero";
import "./App.css";
import About from "./Componnets/About";
import Skills from "./Componnets/Skills";
import Contact from './Componnets/Contact';
import Footer from './Componnets/Footer'
import MoveToTop from "./Componnets/MoveToTop";

const App = () => {
  return (
    <div className="bg-custom-dark-blue min-h-screen text-white overflow-x-hidden">
      <Navbar />
      <MoveToTop />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
