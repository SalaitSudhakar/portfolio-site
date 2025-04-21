import React from "react";
import Navbar from "./Componnets/Navbar";
import Hero from "./Componnets/Hero";
import "./App.css";
import About from "./Componnets/About";


const App = () => {
  return (
    <div className="bg-custom-dark-blue min-h-screen">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default App;
