import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#fdf0e9] py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-12">
        {/* Social Icons (left side with forced spacing + padding) */}
        <div
          className="flex items-center"
          style={{ paddingLeft: "20px", gap: "30px" }} // 🔑 Forces left padding & spacing
        >
          
          <a
            href="https://www.linkedin.com/in/muhammad-rashel-mia-9b0123173?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1c3b4d] hover:text-[#c94b4b] text-2xl transition-colors"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://github.com/mia-rashel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1c3b4d] hover:text-[#c94b4b] text-2xl transition-colors"
          >
            <FaGithub size={28} />
          </a>
        </div>

        {/* Copyright (center) */}
        <p className="flex-1 text-center text-sm text-[#1c3b4d]">
          Copyright © 2025 Muhammad Rashel Mia. All Rights Reserved
        </p>

        {/* Right side placeholder */}
        <div style={{ width: "150px" }}></div>
      </div>
    </footer>
  );
}
