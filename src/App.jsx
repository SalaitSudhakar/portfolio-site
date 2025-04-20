import React from "react";
import Navbar from "./Componnets/Navbar";
import Hero from "./Componnets/Hero";
import "./App.css";

const App = () => {
  return (
    <div className="bg-custom-dark-blue min-h-screen">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
