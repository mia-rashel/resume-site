// src/components/Skills.jsx
import "../CSS/Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills-section bg-[#f3e6dd] section-container">
      <div className="skills-container">
        <div className="skills-layout">
          {/* Left intro column */}
          <div className="skills-intro">
            <h2 className="skills-title">Skills</h2>
            <p className="skills-text">
              Cloud and DevOps Engineer with a strong foundation 
              in AWS infrastructure, Infrastructure as Code, 
              and CI/CD automation. Focused on designing scalable, 
              secure, and cost-efficient cloud solutions through hands-on projects
               and real-world architectures.

            </p>
          </div>

          {/* Right multi-column grid */}
          <div className="skills-grid">
            <div className="skills-col">
              <h3 className="skills-head red">Cloud & DevOps</h3>
              <ul className="skills-list">
                <li>AWS (EC2, VPC, S3, IAM, ALB, Auto Scaling, CloudWatch)</li>
                <li>Infrastructure as Code (Terraform)</li>
                <li>Docker & Containerization</li>
                <li>CI/CD (GitHub Actions, AWS CodePipeline)</li>
                <li>Monitoring & Alerting (CloudWatch, SNS)</li>
              </ul>
            </div>

            <div className="skills-col">
              <h3 className="skills-head blue">PROGRAMMING & AUTOMATION</h3>
              <ul className="skills-list">
                <li>JavaScript (Node.js, Express.js)</li>
                <li>Python (scripting & automation)</li>
                <li>Bash (Linux automation)</li>
              </ul>
            </div>

            <div className="skills-col">
              <h3 className="skills-head red">DISTRIBUTED SYSTEMS & NETWORKING</h3>
              <ul className="skills-list">
                
                <li>Load Balancing & CDN Architecture</li>
                <li>RESTful APIs & Microservices</li>
                <li>Message Queues (RabbitMQ)</li>
                <li>HTTP/2, WebSockets (foundational)</li>
              </ul>
            </div>
            <div className="skills-col">
              <h3 className="skills-head red">NETWORKING & CLOUD SECURITY</h3>
              <ul className="skills-list">
                <li>TCP/IP, DNS, HTTP/HTTPS</li>
                <li>VPC Design, Subnetting, CIDR</li>
                <li>IAM, Encryption, Cloud Security Best Practices</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
