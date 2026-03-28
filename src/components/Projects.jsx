import React from "react";
import "../CSS/Projects.css";
import architectureImage from "../assets/aws-3tier-architecture.gif";
import cloudNativeImage from "../assets/aws-cloud-native-architecture.jpg";

function Projects() {
  const projects = [
    {
      title: "Cloud-Native Microservices Platform on AWS",
      description: "Built a production-grade cloud-native platform on AWS using Terraform, deploying two containerized microservices (Node.js + Python FastAPI) on EKS with a full CI/CD pipeline, observability stack, and zero-trust security. Implemented OIDC-based GitHub Actions with no static credentials, Horizontal Pod Autoscaler (2-20 replicas), AWS Secrets Manager with CSI driver for secret injection, and Prometheus + Grafana for live metrics dashboards.",
      stack: ["AWS", "EKS", "Terraform", "Docker", "Kubernetes", "GitHub Actions", "Prometheus", "Grafana", "RDS", "Secrets Manager", "Route 53", "ACM"],
      github: "https://github.com/mia-rashel/Cloud-Native-Platform-On-AWS",
      image: cloudNativeImage,
      imageAlt: "Cloud-Native AWS Architecture Diagram",
    },
    {
      title: "Production-Grade 3-Tier AWS Architecture",
      description: "Architected and deployed a production-grade 3-tier AWS infrastructure using Terraform, enabling scalable and fault-tolerant application deployment across multiple Availability Zones. Implemented secure VPC networking, auto-scaling compute, load balancing, and Multi-AZ RDS with integrated monitoring and alerting for high availability and operational reliability.",
      stack: ["AWS", "Terraform", "ALB", "Auto Scaling", "RDS", "CloudWatch", "SNS"],
      github: "https://github.com/mia-rashel/Production-Grade-3-Tier-AWS-Architecture",
      image: architectureImage,
      imageAlt: "AWS 3-Tier Architecture Diagram",
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
              <p className="project-description">{project.description}</p>
              <p className="diagram-label">Architecture Overview</p>
              <a href={project.image} target="_blank" rel="noopener noreferrer" className="architecture-preview">
                <img src={project.image} alt={project.imageAlt} className="architecture-image" />
              </a>
              <div className="project-stack">
                {project.stack.map((tech, i) => (
                  <span key={i} className="stack-tag">{tech}</span>
                ))}
              </div>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-btn">
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