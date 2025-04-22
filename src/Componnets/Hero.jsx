import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/hero.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import "../App.css";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/salaitsudhakar",
    icon: FaLinkedinIn,
    ariaLabel: "LinkedIn Profile",
  },
  {
    href: "https://github.com/SalaitSudhakar",
    icon: FaGithub,
    ariaLabel: "GitHub Profile",
  },
  {
    href: "mailto:saletsudhakar@gmail.com",
    icon: MdEmail,
    ariaLabel: "Email Contact",
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-28 pb-20 max-w-6xl mx-auto px-4 md:px-5 lg:px-8 flex flex-col-reverse md:flex-row gap-5 items-center md:justify-between relative"
    >
      {/* Left Content - Animated */}
      <div className="flex flex-col flex-1 gap-2 leading-loose tracking-wide">
        <motion.p
          className="text-xl sm:text-2xl mb-2 font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Hello there! I'm
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-5xl mb-2 font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Salait Sudhakar
        </motion.h1>

        <motion.div
          className="text-4xl sm:text-5xl font-bold min-h-[3rem] sm:min-h-[4rem]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          <span className="text-4xl sm:text-5xl">I'm a </span>
          <span className="text-teal-500">MERN Stack Developer</span>
        </motion.div>

        <motion.p
          className="sm:text-lg tracking-wide text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
        >
          Transforming ideas into responsive and efficient web applications.
        </motion.p>

        <motion.div
          className="flex gap-6 my-5 flex-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              className="p-2 rounded-full border border-teal-500 text-teal-500 bg-transparent hover:box-glow transition-all duration-300 hover:custom-bg-teal hover:text-gray-700"
            >
              <link.icon size={23} />
            </a>
          ))}
        </motion.div>

        <motion.a
          href="/salait_sudhakar_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download="Salait_Sudhakar_Resume.pdf"
          className="p-2 flex gap-2 w-64 items-center animate-wiggle-down justify-center font-bold border cursor-pointer border-teal-500 text-gray-800 box-glow rounded-full bg-teal-500 hover:border-teal-500 hover:text-teal-500 hover:bg-transparent transition-all duration-300 "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
          viewport={{ once: true }}
        >
          <span>Download Resume</span>
          <FiDownload size={18} className="font-bold " />
        </motion.a>
      </div>

      {/* Hero Image - Animated */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <img
          src={heroImage}
          alt="A young man working on a laptop sitting on a gaming chair"
          className="h-[380px] w-[270px] sm:h-[400px] sm:w-[300px] md:h-[580px] md:w-[430px]"
          loading="eager"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
