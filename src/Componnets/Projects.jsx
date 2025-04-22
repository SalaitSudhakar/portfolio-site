import React from "react";
import { motion } from "framer-motion";
import passwordManagerImage from "../assets/project/password-manager.png";
import hostelManagementImage from "../assets/project/hostel-management.png";
import authAppImage from "../assets/project/auth-app.png";
import { FaLink } from "react-icons/fa";

const projectData = [
  {
    title: "Password Manager App",
    image: passwordManagerImage,
    description:
      "A secure MERN-based application allowing users to manage passwords with authentication, OTP verification, and CRUD operations.",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "TailwindCss"],
    demoLink: "https://password-manager-mern.netlify.app/",
    frontEndCode: "https://github.com/SalaitSudhakar/password-manager-frontend",
    backEndCode: "https://github.com/SalaitSudhakar/password-manager-backend",
  },
  {
    title: "Hostel Management App",
    image: hostelManagementImage,
    description:
      "A full-stack web application for booking hostels with PayPal payments and Role-Based Access Control (RBAC) for users, admins, and hostel owners.",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Paypal API"],
    demoLink: "https://hostel-management-mern.netlify.app",
    frontEndCode:
      "https://github.com/SalaitSudhakar/Hostel-Management-Frontend",
    backEndCode: "https://github.com/SalaitSudhakar/Hostel-Management-backend",
  },
  {
    title: "Password Reset Flow App",
    image: authAppImage,
    description:
      "A user authentication app implementing secure login/logout, and password reset flow.",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    demoLink: "https://password-reset-project-reactjs.netlify.app",
    frontEndCode: "https://github.com/SalaitSudhakar/password-reset",
    backEndCode: "https://github.com/SalaitSudhakar/Password-Reset-API",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-custom-gray pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4 md:px-5 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-semibold text-center mb-16"
        >
          <span className="text-teal-500 text-3xl lg:text-4xl">{"<"}</span>
          My <span className="text-teal-500">Projects</span>
          <span className="text-teal-500">
            <span className="text-3xl lg:text-4xl">{" />"}</span>
          </span>
        </motion.h1>

        {projectData.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className={`mb-20 flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-10 border border-transparent shadow-md sm:shadow-none pb-5`}
          >
            {/* Responsive Image */}
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="w-full  h-auto lg:w-1/2  object-contain rounded-lg "
            />

            {/* className=" bg-gray-300 rounded-lg shadow-lg " */}

            {/* Text and Buttons */}
            <div className="w-full lg:w-1/2 p-3">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg sm:text-2xl font-semibold text-white">
                  {project.title}
                </h2>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base bg-teal-500 box-glow text-gray-800 font-medium px-3 sm:px-4 py-2 rounded-lg hover:bg-transparent hover:border hover:border-teal-500 hover:text-teal-500 transition duration-300"
                >
                  <FaLink /> <span>Demo</span>
                </a>
              </div>
              <p className="sm:text-lg text-gray-200 mb-4">
                {project.description}
              </p>
              <p className="text-xs mb-4 ">
                {project.techStack.map((stack, index) => (
                  <span
                    key={index}
                    className="inline-flex p-1.5 font-medium bg-white/20 text-white/80 rounded-full m-1 ml-0"
                  >
                    {stack}
                  </span>
                ))}
              </p>
              <div className="flex gap-4">
                <a
                  href={project.frontEndCode}
                  target="_blank"
                  rel="noreferrer noopener"
                  className=" border border-teal-500 text-sm sm:text-base text-teal-500 hover:box-glow hover:bg-teal-500 font-medium cursor-pointer hover:text-gray-800 px-4 py-2 rounded-lg  transition duration-300"
                >
                  Frontend Code
                </a>
                <a
                  href={project.frontEndCode}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="cursor-pointer text-sm sm:text-base hover:box-glow bg-teal-500 text-gray-800 font-medium  px-4 py-2 rounded-lg hover:bg-transparent hover:border hover:border-teal-500 hover:text-teal-500  transition duration-300"
                >
                  Backend Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
