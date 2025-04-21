import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiExpress, SiJavascript, SiMongodb, SiMysql } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      icon: <FaHtml5 size={70} />,
      textColor: "html-text-color",
      shadow: "html-box-glow",
      name: "HTML",
    },
    {
      icon: <FaCss3Alt size={70} />,
      textColor: "css-text-color",
      shadow: "css-box-glow",
      name: "CSS",
    },
    {
      icon: <SiJavascript size={70} />,
      textColor: "javascript-text-color",
      shadow: "javascript-box-glow",
      name: "JavaScript",
    },
    {
      icon: <BiLogoTailwindCss size={70} />,
      textColor: "tailwind-text-color",
      shadow: "tailwind-box-glow",
      name: "TailwindCSS",
    },
    {
      icon: <FaReact size={70} />,
      textColor: "react-text-color",
      shadow: "react-box-glow",
      name: "React",
    },
    {
      icon: <FaNodeJs size={70} />,
      textColor: "nodejs-text-color",
      shadow: "nodejs-box-glow",
      name: "NodeJS",
    },
    {
      icon: <SiExpress size={68} />,
      textColor: "text-black",
      shadow: "express-box-glow",
      name: "ExpressJS",
    },
    {
      icon: <SiMongodb size={70} />,
      textColor: "mongodb-text-color",
      shadow: "mongodb-box-glow",
      name: "MongoDB",
    },
    {
      icon: <SiMysql size={70} />,
      textColor: "mysql-text-color",
      shadow: "mysql-box-glow",
      name: "MySQL",
    },
    {
      icon: <FaGitAlt size={70} />,
      textColor: "git-text-color",
      shadow: "git-box-glow",
      name: "Git",
    },
    {
      icon: <FaGithub size={70} />,
      textColor: "text-white",
      shadow: "github-box-glow",
      name: "GitHub",
    },
  ];



  return (
    <section id="skills" className="max-w-6xl mx-auto p-4 py-18">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="text-4xl lg:text-5xl font-semibold text-center mb-12"
      >
        <span className="text-teal-500 text-3xl lg:text-4xl">{"<"}</span>My{" "}
        <span className="text-teal-500">
          Skills <span className="text-3xl lg:text-4xl">{"/>"}</span>
        </span>
      </motion.h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12 md:gap-16 lg:gap-18 ">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={`p-3 rounded-lg bg-gray-800 flex flex-col items-center justify-center ${skill.shadow} hover:scale-105 transition-all duration-300 `}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className={`text-4xl mb-2 ${skill.textColor} ${(skill.name === 'ExpressJS' && "p-2 bg-white rounded-full")}`}>
              {skill.icon}
            </div>

            <motion.p
              className={`text-sm sm:text-base font-medium mt-2 text-white`}
            >
              {skill.name}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
