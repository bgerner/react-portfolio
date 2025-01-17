import React from "react";
import resume from "./assets/docs/Ben-Gerner-Resume.pdf";

function Footer() {
  return (
    <footer>
      <div className="footer" id="footer">
        <a href="https://github.com/bgerner" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/ios/50/000000/github--v1.png" alt="Github" className="icon"/></a>
        <a href="https://www.linkedin.com/in/ben-gerner-790683208/" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/ios/50/000000/linkedin.png" alt="LinkedIn" className="icon"/></a>
        <a href="https://www.instagram.com/gernerfitness/" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png" alt="Instagram" className="icon"/></a>
        <p id="footer-p">
        &copy; bgerner  |  <a id="resume-link" href={resume} download>download resume</a>
        </p>

    </div>
    </footer>
  );
}

export default Footer;
