import React from "react";
import ContactMe from "../ContactMe";
import '../assets/css/app.css';

function Contact() {
  return (
    <section id="contact" className="s">
    <div className="section-title">
        <h3>Contact</h3>
    </div>
    <ContactMe />
</section>
  );
}

export default Contact