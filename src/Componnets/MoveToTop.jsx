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

  const isVisible = activeSection !== 'hero';

  return (
    <div className={`${isVisible ? 'opacity-100 fixed bottom-10 right-2' : 'opacity-0'} transition-all duration-300`}>
      <button
        onClick={moveToTop}
        className="p-1.5 box-glow bg-teal-500 cursor-pointer text-gray-700 rounded-full"
      >
        <FaAngleUp size={30} />
      </button>
    </div>
  );
};

export default MoveToTop;
