import Logoslider from "./Logoslider";
import "./Skillset.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Skillset() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="Skillset">
      <div className="Skillset-skill">
        <span className="Skillset-skill-name" data-aos="fade-up">
          Skillset
        </span>
        <div className="Skillset-skill-des">
          <div data-aos="fade-up">
            <span id="title">Problem Solving</span>
            <span id="title-content">Python, JavaScript</span>
          </div>
          <div data-aos="fade-up">
            <span id="title">Web Development</span>
            <span id="title-content">
              Html, CSS, JS, Reactjs, Nextjs, Nodejs, Expressjs
            </span>
          </div>
          
          <div data-aos="fade-up">
            <span id="title">DevOps</span>
            <span id="title-content">Git, Github, GitHub Action, Jenkins, Docker, Kubernetes,Ansible, Terraform</span>
          </div>
          <div data-aos="fade-up">
            <span id="title">Cloud Computing</span>
            <span id="title-content">AWS Services</span>
          </div>
          <div data-aos="fade-up">
            <span id="title">Containerization</span>
            <span id="title-content"> Docker, Kubernetes</span>
          </div>
          <div data-aos="fade-up">
            <span id="title">CI/CD</span>
            <span id="title-content">Jenkins, GitHub Action</span>
          </div>
          <div data-aos="fade-up">
            <span id="title">Monitoring & Logging</span>
            <span id="title-content">Prometheus, Grafana</span>
          </div>
          <div data-aos="fade-up">
            <span id="title">Operating Systems</span>
            <span id="title-content">Linux (Ubuntu)</span>
          </div>
          <div data-aos="fade-up">
            <span id="title">Database Management</span>
            <span id="title-content">MySQL,MongoDB</span>
          </div>
          
          
        </div>
      </div>
      <Logoslider className="Skillset-bar" />
    </div>
  );
}

export default Skillset;
