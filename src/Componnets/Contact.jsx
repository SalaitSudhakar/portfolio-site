import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoSendSharp } from "react-icons/io5";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, subject, message } = formData;

    if (name && subject && message) {
      const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(`Hi, I am: ${name}\n\n${message}`)}`;
      window.location.href = mailtoLink;
      setSuccessMsg("Wait for mail to open!");
      setFormData({ message: "" });

      setTimeout(() => {
        setSuccessMsg("");
      }, 3000);
    } else {
      setSuccessMsg("Please fill in all fields.");
    }
  };

  return (
    <section
      id="contact"
      className="bg-custom-dark-blue px-3 md:px-5 lg:px-0 py-24"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="text-4xl lg:text-5xl font-semibold text-center mb-16"
      >
        <span className="text-teal-500 text-3xl lg:text-4xl">{"<"}</span>Contact{" "}
        <span className="text-teal-500">
          Me <span className="text-3xl lg:text-4xl">{"/>"}</span>
        </span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto flex flex-col px-3 md:px-0 md:flex-row gap-5 md:gap-10"
      >
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-400 transition-all duration-300"
            required
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-400 transition-all duration-300"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-400 transition-all duration-300"
            required
          />

          {successMsg && (
            <p className="text-teal-500 my-3 text-center">{successMsg}</p>
          )}

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-teal-500 cursor-pointer text-gray-800 px-6 py-2 rounded-full border border-transparent hover:border-teal-500 hover:text-white box-glow hover:null-box-glow hover:bg-transparent transition-all duration-300 animate-wiggle-down"
            >
              <span>Send Email</span> <IoSendSharp />
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
