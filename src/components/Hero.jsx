// src/components/Hero.jsx
import "../CSS/Hero.css";
import cloudImage from "../assets/cloud.jpg";

export default function Hero() {
  return (
    <section id="home" className="hero-section bg-[#f3e6dd] section-container">
      <div className="hero-wrapper">
        {/* Left Side: Text */}
        <div className="hero-text">
          <h1 className="hero-title tracking-tight text-[#1c3b4d]">
            Muhammad Rashel Mia
          </h1>

          <p className="hero-subtitle uppercase text-[#c94b4b] tracking-[0.25em] mb-4">
            Cloud Engineer
          </p>

          <hr className="hero-divider border-t-[3px] border-[#1c3b4d] w-16 mb-6" />

          <p className="hero-description text-[#1c3b4d]/90 text-lg leading-relaxed">
            Building scalable <span className="font-semibold">cloud architectures</span> 
            and intelligent <span className="font-semibold">distributed systems </span> 
            that blend performance, reliability, and thoughtful design.
          </p>

          <p className="hero-description text-[#1c3b4d]/90 text-lg leading-relaxed">
            AWS Certified Cloud Practitioner | M.Eng. in Electrical & Computer Engineering, 
            <span className="font-semibold"> Concordia University</span>.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="hero-image">
          <img
            src={cloudImage}
            alt="Cloud engineering visualization"
            className="rounded-xl shadow-xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
