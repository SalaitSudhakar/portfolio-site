import React from "react";
import "../App.css";
import { FaAngleUp } from "react-icons/fa";

const MoveToTop = ({ activeSection }) => {
  const moveToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const isVisible = activeSection !== "home";

  return (
    <button
      onClick={moveToTop}
      className={`${
        isVisible ? "opacity-100 fixed bottom-10 right-2" : "opacity-0"
      } transition-all duration-300 p-1.5 box-glow bg-teal-500 cursor-pointer text-gray-700 rounded-full hover:border hover:border-teal-500 hover:bg-transparent hover:text-teal-500 z-50`}
    >
      <FaAngleUp size={30} />
    </button>
  );
};

export default MoveToTop;
