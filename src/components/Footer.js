import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer" id="footer">
        <a href="https://github.com/bgerner"><img src="https://img.icons8.com/ios/50/000000/github--v1.png" alt="Github" className="icon"/></a>
        <a href="https://www.linkedin.com/in/ben-gerner-790683208/"><img src="https://img.icons8.com/ios/50/000000/linkedin.png" alt="LinkedIn" className="icon"/></a>
        <a href=""><img src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png" alt="Instagram" className="icon"/></a>
        <p id="footer-p">
        &copy; bgerner  |  <a href="https://github.com/bgerner/react-portfolio/raw/master/src/assets/Resume-Gerner.pdf" className="link">download resume</a>
        </p>

    </div>
    </footer>
  );
}

export default Footer;
