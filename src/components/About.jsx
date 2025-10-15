import React from "react";
import muhammad from "../assets/muhammad.jpg";
import "../CSS/About.css";
import ContactSheet from "./ContactSheet"; // ✅ keep only this

export default function About() {
  const email = "muhammadrashel2015@gmail.com";

  return (
    <section id="about" className="about-section bg-[#f3e6dd] section-container">
      <div className="about-wrapper">
        {/* Left Side: Image */}
        <div className="about-image">
          <img
            src={muhammad}
            alt="Portrait of Muhammad Rashel Mia"
            className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Side: Text */}
        <div className="about-text text-[#1c3b4d]">
          <h2 className="about-title text-4xl font-light mb-6">About Me</h2>

          <p className="about-description text-lg leading-relaxed mb-4">
            I’m <span className="font-semibold">Muhammad Rashel Mia</span>, a passionate
            Cloud Engineer with a Master’s degree in{" "}
            <span className="font-semibold">Electrical & Computer Engineering</span> from{" "}
            <span className="font-semibold">Concordia University, Canada</span>.
          </p>

          <p className="about-description text-lg leading-relaxed mb-4">
            I hold an <span className="font-semibold">AWS Certified Cloud Practitioner</span> 
            credential and specialize in <span className="font-semibold">cloud computing</span>,{" "}
            <span className="font-semibold">distributed software systems</span>, and{" "}
            <span className="font-semibold">modern software engineering</span>.
          </p>

          <p className="about-description text-lg leading-relaxed mb-4">
            I enjoy transforming complex challenges into secure, scalable, and efficient 
            cloud solutions — integrating technologies like AWS, React, Node.js, and Docker 
            to deliver impactful digital experiences.
          </p>

          <p className="about-description text-lg leading-relaxed mb-8">
            Driven by curiosity and innovation, I continuously explore the evolving landscape 
            of cloud architecture to design systems that empower performance and reliability.
          </p>

          {/* Buttons */}
          <div className="about-buttons">
            <a href="/resume.pdf" download className="btn-secondary">Download Resume</a>
            <ContactSheet triggerClassName="btn-secondary">Contact Me</ContactSheet>
          </div>
        </div>
      </div>
    </section>
  );
}
