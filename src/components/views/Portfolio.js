import React from "react";
import "../assets/css/app.css";
import gerner from "../assets/imgs/gerner-fitness-2.png";
import coolcali from "../assets/imgs/cool-california.png";
import techshare from "../assets/imgs/tech-share.png";
import wildthoughts from "../assets/imgs/wild-thoughts.png";
import readme from "../assets/imgs/readme-generator.png";
import portfolio from "../assets/imgs/portfolio.png";

function Portfolio() {
  return (
    <section id="work" className="s">
      <div className="section-title">
        <h3 id="work-title">Work</h3>
      </div>

      <div className="applications">
        
          <figure>
            <a
              href="https://www.gernerfitness.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="img-container">
                <img class="application" 
                src={gerner} 
                alt="tech share" />
              </div>
              <figcaption>Gerner Fitness</figcaption>
            </a>
          </figure>
          <figure>
            <a
              href="https://github.com/costanza13/cool-california/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="img-container">
                <img
                  className="application"
                  src={coolcali}
                  alt="cool california"
                />
              </div>
              <figcaption>Cool California</figcaption>
            </a>
          </figure>
        
        
          <figure>
            <a
              href="https://github.com/bgerner/tech-share/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="img-container">
                <img 
                className="application" 
                src={techshare} 
                alt="tech share" />
              </div>
              <figcaption>Tech Share</figcaption>
            </a>
          </figure>
          <figure>
            <a
              href="https://github.com/bgerner/wild-thoughts/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="img-container">
                <img
                  className="application"
                  src={wildthoughts}
                  alt="wild thoughts"
                />
              </div>
              <figcaption>Wild Thoughts</figcaption>
            </a>
          </figure>
        
        
          <figure>
            <a
              href="https://github.com/bgerner/readme-generator"
              target="_blank"
              rel="noreferrer"
            >
              <div className="img-container">
                <img class="application" src={readme} alt="readme-generator" />
              </div>
              <figcaption>ReadMe Generator</figcaption>
            </a>
          </figure>
          <figure>
            <a
              href="https://bgerner.github.io/react-portfolio/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="img-container">
                <img
                  className="application"
                  src={portfolio}
                  alt="react portfolio"
                />
              </div>
              <figcaption>React Portfolio (this!)</figcaption>
            </a>
          </figure>
    
      </div>
    </section>
  );
}

export default Portfolio;
