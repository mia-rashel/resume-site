// src/components/Skills.jsx
import "../CSS/skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills-section bg-[#f3e6dd] section-container">
      <div className="skills-container">
        <div className="skills-layout">
          {/* Left intro column */}
          <div className="skills-intro">
            <h2 className="skills-title">Skills</h2>
            <p className="skills-text">
              A fusion of engineering precision and software creativity — combining
              <span className="highlight"> cloud computing</span>, 
              <span className="highlight"> distributed systems</span>, and 
              <span className="highlight"> embedded innovation</span> to craft scalable,
              secure, and intelligent solutions.
            </p>
          </div>

          {/* Right multi-column grid */}
          <div className="skills-grid">
            <div className="skills-col">
              <h3 className="skills-head red">Cloud & DevOps</h3>
              <ul className="skills-list">
                <li>AWS (EC2, S3, VPC, CloudFront, IAM, Lambda)</li>
                <li>Docker & Containers</li>
                <li>CI/CD (GitHub Actions, AWS CodePipeline)</li>
                <li>Linux Server Administration</li>
                <li>Monitoring & Security Best Practices</li>
              </ul>
            </div>

            <div className="skills-col">
              <h3 className="skills-head blue">Programming & Frameworks</h3>
              <ul className="skills-list">
                <li>JavaScript (Node.js, React.js, Express.js)</li>
                <li>Python ( NumPy, Pandas)</li>
                <li>Java</li>
                <li>HTML5, CSS3, Tailwind CSS</li>
              </ul>
            </div>

            <div className="skills-col">
              <h3 className="skills-head red">Distributed & Real-Time Systems</h3>
              <ul className="skills-list">
                <li>Microservices & REST APIs</li>
                <li>HTTP/2, WebSockets, gRPC</li>
                <li>Load Balancing & CDN Architecture</li>
                <li>Message Queues (RabbitMQ)</li>
              </ul>
            </div>

            <div className="skills-col">
              <h3 className="skills-head blue">IoT & Embedded Systems</h3>
              <ul className="skills-list">
                <li>Arduino (UNO R4 Wi-Fi, GSM/GPRS)</li>
                <li>Sensor Integration (DHT11, Flame, MQ-4)</li>
                <li>IoT Data with ThingSpeak</li>
                <li>Embedded C Programming</li>
              </ul>
            </div>

            <div className="skills-col">
              <h3 className="skills-head red">Networking & Security</h3>
              <ul className="skills-list">
                <li>TCP/IP, OSPF, QoS, SIP</li>
                <li>OMNeT++ / INET Simulation</li>
                <li>IAM, Encryption, Cloud Security</li>
              </ul>
            </div>

            <div className="skills-col">
              <h3 className="skills-head blue">Software Engineering</h3>
              <ul className="skills-list">
                <li>Agile / Scrum</li>
                <li>UML & System Modeling</li>
                <li>Git / GitHub</li>
                <li>Technical Documentation</li>
              </ul>
            </div>

            <div className="skills-col">
              <h3 className="skills-head red">Soft Skills</h3>
              <ul className="skills-list">
                <li>Problem-Solving</li>
                <li>Collaboration</li>
                <li>Research & Innovation</li>
                <li>Adaptability</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
