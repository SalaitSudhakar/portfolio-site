import React, { memo } from "react";
import { Typewriter } from "react-simple-typewriter";
import heroImage from "../assets/hero.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../App.css";
import { FiDownload } from "react-icons/fi";

const socialLinks = [
  { href: "", icon: FaLinkedinIn, ariaLabel: "LinkedIn Profile" },
  { href: "", icon: FaGithub, ariaLabel: "GitHub Profile" },
  { href: "", icon: MdEmail, ariaLabel: "Email Contact" },
];

const typewriterWords = [
  "Full-Stack Developer",
  "MERN Stack Specialist",
  "UI/UX Enthusiast",
];

const Hero = () => {
  return (
    <section className="pt-28 max-w-6xl mx-auto bg-custom-dark-blue text-white p-3 flex flex-col-reverse md:flex-row gap-5 items-center md:justify-between relative">
      <div className="flex flex-col sm:gap-2 leading-loose tracking-wide">
        <p className="text-xl sm:text-2xl mb-2 font-medium">Hello there! I'm</p>
        <h1 className="text-4xl sm:text-5xl mb-2 font-bold">Salait Sudhakar</h1>

        <div className="text-4xl sm:text-5xl font-bold min-h-[3rem] sm:min-h-[4rem]">
          <span className="text-2xl">a </span>
          <span className="text-teal-500">
            <Typewriter
              words={typewriterWords}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={75}
              delaySpeed={1500}
            />
          </span>
        </div>

        <p className="mt-3 sm:text-lg tracking-wide text-gray-300">
          Transforming ideas into responsive and efficient web applications.
        </p>

        <div className="flex gap-6 my-5">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              aria-label={link.ariaLabel}
              className="p-2 rounded-full border border-teal-500 text-teal-500 bg-transparent hover:box-glow transition-all duration-300 hover:custom-bg-teal hover:text-gray-700"
            >
              <link.icon size={23} />
            </a>
          ))}
        </div>

        <a
          href="/salait_sudhakar_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download="Salait_Sudhakar_Resume.pdf"
          className="p-2 flex gap-2 w-64 items-center justify-center font-bold border cursor-pointer border-teal-500 text-gray-800 box-glow rounded-full bg-teal-500 hover:border-teal-500 hover:text-teal-500 hover:bg-transparent transition-all duration-300 hover:null-box-glow"
        >
          <span>Download Resume</span>
          <FiDownload size={18} className="font-bold animate-wiggle-down" />
        </a>
      </div>

      {/* Hero Image */}
      <div>
        <img
          src={heroImage}
          alt="A young man working on a laptop sitting on a gaming chair"
          className="h-[400px] w-[300px] md:h-[600px] md:w-[450px]"
          loading="eager"
        />
      </div>
    </section>
  );
};

export default memo(Hero);
