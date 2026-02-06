import React from "react";
import { Award } from "lucide-react";

// src/components/Certifications.jsx
import "../CSS/Certifications.css";

const certifications = [
  {
    title: "AWS Certified Solutions Architect – Associate (SAA-C03)",
    issuer: "Amazon Web Services",
    year: "January 2026",
    credential: "Credential ID: XXXXXXXX",
  },
  {
    title: "HashiCorp Certified: Terraform Associate (003)",
    issuer: "HashiCorp",
    year: "December 2025",
    credential: "Credential ID: XXXXXXXX",
  },
  {
    title: "AWS Certified Cloud Practitioner (CLF-C02)",
    issuer: "Amazon Web Services",
    year: " September 2025",
    credential: "Credential ID: XXXXXXXX",
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
