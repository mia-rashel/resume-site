// src/components/Projects.jsx
import React from "react";
import "../CSS/Projects.css";
import architectureImage from "../assets/aws-3tier-architecture.gif";

function Projects() {
  const projects = [
    {
      title: "Production-Grade 3-Tier AWS Architecture",
      description:
        "Architected and deployed a production-grade 3-tier AWS infrastructure using Terraform, enabling scalable and fault-tolerant application deployment across multiple Availability Zones. Implemented secure VPC networking, auto-scaling compute, load balancing, and Multi-AZ RDS with integrated monitoring and alerting for high availability and operational reliability.",
      stack: ["AWS", "Terraform", "ALB", "Auto Scaling", "RDS", "CloudWatch","SNS"],
      github: "https://github.com/mia-rashel/Production-Grade-3-Tier-AWS-Architecture",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-wrapper">
        <h2 className="projects-title">Projects</h2>

        <div className="projects-list">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3 className="project-title">{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>
              <p className="diagram-label">Architecture Overview</p>
              <a
                  href={architectureImage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="architecture-preview"
                >
                  <img
                    src={architectureImage}
                    alt="AWS 3-Tier Architecture Diagram"
                    className="architecture-image"
                  />
                </a>

              {/* Stack */}
              <div className="project-stack">
                {project.stack.map((tech, i) => (
                  <span key={i} className="stack-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                View Code ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;