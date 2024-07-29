import "./Aboutme.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import New from "./assets/New.pdf";

function Aboutme() {
  const handleDownloadCV = () => {
    window.open(New);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="Aboutme" id="aboutMe">
      <img
        src="./kasun1.jpeg"
        className="Aboutme-me"
        data-aos="fade-up"
      />
      <span className="Aboutme-aboutme" data-aos="fade-up">
        Aboutme
      </span>
      <span className="Aboutme-dis" data-aos="fade-up">
          Aspiring DevOps Engineer with a strong foundation in software development, cloud infrastructure, and
          continuous integration/continuous deployment (CI/CD) processes. Seeking to leverage my skills and experience
          to contribute to efficient and scalable software delivery pipelines in a dynamic tech environment
      </span>
      <a className="Aboutme-cv" data-aos="fade-up" onClick={handleDownloadCV}>
        Download CV
      </a>
    </div>
  );
}

export default Aboutme;
