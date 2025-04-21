import React from "react";
import aboutMeImage from "../assets/about.png";
import { motion } from "framer-motion";
import "../App.css";

const About = () => {
  return (
    <section id="about" className="py-20 bg-custom-gray text-white z-0 overflow-x-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="text-4xl lg:text-5xl font-semibold text-center mb-10"
      >
        <span className="text-teal-500 text-3xl lg:text-4xl">{'<'}</span>About <span className="text-teal-500">Me <span className="text-3xl lg:text-4xl">{'/>'}</span></span>
      </motion.h1>
      <div className="max-w-6xl mx-auto p-3 flex flex-col-reverse md:flex-row-reverse items-center justify-center gap-16 md:gap-8 mt-16">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex-1 text-lg md:text-xl z-10"
        >
          <p className="mb-4">
            I’m a Full Stack Developer specialized in the MERN stack (
            <span className="text-teal-400">
              MongoDB, Express.js, ReactJS, and Node.js
            </span>
            ), with a strong foundation in HTML, CSS, JavaScript, Tailwind CSS,
            and MySQL.
          </p>
          <p className="mb-4">
            I’m passionate about building user-friendly, innovative, and
            scalable web applications that deliver seamless user experiences. I
            enjoy solving real-world problems by turning ideas into functional,
            performant solutions.
          </p>
          <p className="">
            Currently, I’m expanding my knowledge in web development and seeking
            opportunities in companies that value creativity, innovation, and
            tech-driven growth.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative flex-1 min-w-0 flex justify-center"
        >
          {/* Layer 2 - farthest background */}
          <div className=" absolute w-[270px] sm:w-[320px] h-[380px] sm:h-[480px] bg-slate-700 rounded-lg rotate-12  z-0 shadow-lg " />

          {/* Layer 1 - middle background */}
          <div className="absolute w-[270px] sm:w-[320px] h-[380px] sm:h-[480px] bg-gray-500 rounded-lg rotate-6 top-0.5  z-10 shadow-md " />

          {/* Foreground - image container */}
          <div className="bg-white/90 p-1 rounded-lg z-20 shadow-lg  -rotate-1 ">
            <img
              src={aboutMeImage}
              alt="Illustration representing the developer"
              className="w-[270px]  sm:w-[320px] h-[380px] sm:h-[480px] object-cover rounded-xl"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
