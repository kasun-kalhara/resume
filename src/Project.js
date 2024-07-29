import "./projects.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="Skillset">
      <div className="Skillset-skill">
        <span className="Skillset-skill-name" data-aos="fade-up">
          Projects
        </span>
        <div className="Skillset-skill-des">
          <div data-aos="fade-up">
            <span id="title">GPS Live Tracking System</span>
            <span id="title-content">ESP32, NEO-8M GPS module, SIM900 GSM module, Node.js, React, Google Maps, Docker, Kubernetes, AWS
• Developed a live tracking system using ESP32, NEO-8M GPS module, and SIM900 GSM module.
• Integrated the system with a Node.js server to send real-time GPS data.
• Displayed GPS data on a React application with Google Maps integration.
• Used Docker to containerize the application and deployed it on AWS using Kubernetes.</span>
          </div>
          <div data-aos="fade-up">
            <span id="title">Serverless Application with AWS Lambda and API Gateway</span>
            <span id="title-content">
            AWS Lambda, API Gateway, DynamoDB, SAM
• Developed and deployed a serverless application using AWS Lambda to handle application logic.
• Configured API Gateway to expose Lambda functions as RESTful APIs.
• Utilized DynamoDB for scalable and managed data storage.
• Automated deployment processes using AWS SAM for efficient management of serverless resources.
            </span>
          </div>
          
          <div data-aos="fade-up">
            <span id="title">Infrastructure as Code (IaC) with Terraform and AWS</span>
            <span id="title-content">Terraform, AWS, GitHub, Jenkins
• Developed Terraform scripts to provision and manage EC2 instances, RDS databases, S3 buckets, and other AWS
resources.
• Implemented state management and version control for infrastructure using Terraform.
• Integrated Terraform with Jenkins to automate infrastructure provisioning and updates.
</span>
          </div>
          <div data-aos="fade-up">
            <span id="title">E-Commerce Web Application</span>
            <span id="title-content">MongoDB, Express.js, React, Node.js, Docker, Kubernetes, AWS, Jenkins
• Developed a full-stack e-commerce application using MongoDB, Express.js, React, and Node.js (MERN stack).
• Implemented user authentication, product listing, shopping cart, and order management features.
• Deployed the application on AWS using Docker and Kubernetes.
• Set up CI/CD pipelines with Jenkins for automated testing and deployment.
</span>
          </div>
          
          
          
        </div>
      </div>
      
    </div>
  );
}

export default Projects;
