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
  Cloud & DevOps Engineer with a Master’s degree in{" "}
  <strong>Electrical & Computer Engineering</strong> from{" "}
  <span className="font-semibold">Concordia University, Canada</span>.
</p>

<p className="about-description text-lg leading-relaxed mb-4">
  I hold the{" "}
  <strong>AWS Certified Solutions Architect – Associate</strong>,{" "}
  <strong>HashiCorp Terraform Associate</strong>{" "}
  <strong>AWS Certified Cloud Practitioner</strong>, and{" "}
  
  certifications, and specialize in{" "}
  <span className="font-semibold">cloud infrastructure</span>,{" "}
  <span className="font-semibold">infrastructure as code</span>,{" "}
  <span className="font-semibold">distributed systems</span>, and{" "}
  <span className="font-semibold">modern software engineering</span>.
</p>

<p className="about-description text-lg leading-relaxed mb-4">
  I enjoy transforming complex challenges into secure, scalable, and cost-efficient
  cloud solutions — integrating technologies like{" "}
  <span className="font-semibold">AWS</span>,{" "}
  <span className="font-semibold">Terraform</span>,{" "}
  <span className="font-semibold">Docker</span>,{" "}
  <span className="font-semibold">React</span>, and{" "}
  <span className="font-semibold">Node.js</span>{" "}
  to deliver reliable, production-ready systems.
</p>

<p className="about-description text-lg leading-relaxed mb-8">
  Driven by curiosity and continuous learning, I explore evolving cloud and DevOps
  practices to design architectures that emphasize{" "}
  <span className="font-semibold">automation</span>,{" "}
  <span className="font-semibold">performance</span>, and{" "}
  <span className="font-semibold">resilience</span>.
</p>


          {/* Buttons */}
          <div className="about-buttons">
            <a href="/Muhammad_Rashel_Mia_Resume-v2.pdf" download="Muhammad_Rashel_Mia_Resume.pdf" className="btn-secondary">Download Resume</a>
            <ContactSheet triggerClassName="btn-secondary">Contact Me</ContactSheet>
          </div>
        </div>
      </div>
    </section>
  );
}
