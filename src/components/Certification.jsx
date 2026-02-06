import React from "react";
import { Award } from "lucide-react";

// src/components/Certifications.jsx
import "../CSS/Certifications.css";

const certifications = [
  {
    title: "AWS Certified Solutions Architect – Associate (SAA-C03)",
    issuer: "Amazon Web Services",
    year: "February 2026",
    credential: "Credential ID:9faa30a2bc0440dbb935a6c0a736b5c6",
    url :"https://www.credly.com/badges/8c273c83-0cad-4e51-a7d6-2e5c50b2b8a7/public_url"
  },
  {
    title: "HashiCorp Certified: Terraform Associate (003)",
    issuer: "HashiCorp",
    year: "December 2025",
    credential: "Credential ID: a7ed47c2-a2d4-4a30-87d4-87c5bfecd472",
    url:"https://www.credly.com/badges/a7ed47c2-a2d4-4a30-87d4-87c5bfecd472/linked_in_profile"
  },
  {
    title: "AWS Certified Cloud Practitioner (CLF-C02)",
    issuer: "Amazon Web Services",
    year: " September 2025",
    credential: "Credential ID: 81998cfa-dc6c-43c2-adbc-888b5318e378",
    url:"https://www.credly.com/badges/81998cfa-dc6c-43c2-adbc-888b5318e378/linked_in_profile"
    
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="certifications-section bg-[#f3e6dd] section-container"
    >
      <div className="certifications-wrapper">
        <h2 className="certifications-title">Certifications</h2>

        <div className="certifications-list">
          {certifications.map((cert, index) => (
            <div className="certification-item" key={index}>
              <div className="certification-header">
                <h3>{cert.title}</h3>
                <span>{cert.year}</span>
              </div>

              <p className="certification-issuer">{cert.issuer}</p>
              <p className="certification-id">{cert.credential}</p>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="credential-btn"
              >
                Show credential
                <span className="credential-icon">↗</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
