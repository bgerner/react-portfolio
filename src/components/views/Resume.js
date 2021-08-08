import React from "react";
import '../assets/css/app.css';
import resume from "../assets/docs/Ben-Gerner-Resume.pdf";

function Resume() {
  return (
    <section id="resume" className="s">
      <div className="section-title">
        <h3>Resume</h3>
      </div>
      <div id="resume-a">
      <a id="paragraph-link" href={resume} download>Click here to download my resume!</a>
      </div>
    </section>
  );
}

export default Resume;
