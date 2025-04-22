import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-800 p-3 shadow-sm shadow-white">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400">copyright©️{new Date().getFullYear()} Salait Sudhakar</p>
      </div>
    </footer>
  );
};

export default Footer;
