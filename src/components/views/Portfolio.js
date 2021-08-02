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
          
              <div className="img-container">
                <img class="application" 
                src={gerner} 
                alt="tech share" />
              </div>

              <figcaption>Gerner Fitness</figcaption>

              {/* <a
              href="https://www.gernerfitness.com"
              target="_blank"
              rel="noreferrer"
              className="git-icon"
            >
              <img src="https://img.icons8.com/color/45/000000/github--v3.png"/>
            </a> */}
            <a
              href="https://www.gernerfitness.com"
              target="_blank"
              rel="noreferrer"
              className="deploy-icon"
            >
              <img src="https://img.icons8.com/fluency/45/000000/rocket.png"/>
            </a>
            
          </figure>
          <figure>
            
              <div className="img-container">
                <img
                  className="application"
                  src={coolcali}
                  alt="cool california"
                />
              </div>

              <figcaption>Cool California</figcaption>
            
              <a
              href="https://github.com/costanza13/cool-california"
              target="_blank"
              rel="noreferrer"
              className="git-icon"
            >
              <img src="https://img.icons8.com/color/45/000000/github--v3.png"/>
            </a>
            <a
              href="https://cool-california.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              className="deploy-icon"
            >
              <img src="https://img.icons8.com/fluency/45/000000/rocket.png"/>
            </a>

          </figure>      
          <figure>
            
              <div className="img-container">
                <img 
                className="application" 
                src={techshare} 
                alt="tech share" />
              </div>

              <figcaption>Tech Share</figcaption>

              <a
              href="https://github.com/bgerner/tech-share"
              target="_blank"
              rel="noreferrer"
              className="git-icon"
            >
              <img src="https://img.icons8.com/color/45/000000/github--v3.png"/>
            </a>
            <a
              href="https://gerner-tech-share.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              className="deploy-icon"
            >
              <img src="https://img.icons8.com/fluency/45/000000/rocket.png"/>
            </a>
            
          </figure>
          <figure>
            
              <div className="img-container">
                <img
                  className="application"
                  src={wildthoughts}
                  alt="wild thoughts"
                />
              </div>

              <figcaption>Wild Thoughts</figcaption>
            
              <a
              href="https://github.com/bgerner/wild-thoughts"
              target="_blank"
              rel="noreferrer"
              className="git-icon"
            >
              <img src="https://img.icons8.com/color/45/000000/github--v3.png"/>
            </a>
            {/* <a
              href="https://www.gernerfitness.com"
              target="_blank"
              rel="noreferrer"
              className="deploy-icon"
            >
              <img src="https://img.icons8.com/fluency/45/000000/rocket.png"/>
            </a> */}

          </figure>
          <figure>
            
              <div className="img-container">
                <img class="application" src={readme} alt="readme-generator" />
              </div>

              <figcaption>ReadMe Generator</figcaption>

            <a
              href="https://github.com/bgerner/readme-generator"
              target="_blank"
              rel="noreferrer"
              className="git-icon"
            >
              <img src="https://img.icons8.com/color/45/000000/github--v3.png"/>
            </a>
            {/* <a
              href="https://www.gernerfitness.com"
              target="_blank"
              rel="noreferrer"
              className="deploy-icon"
            >
              <img src="https://img.icons8.com/fluency/45/000000/rocket.png"/>
            </a> */}

          </figure>
          <figure>
            
              <div className="img-container">
                <img
                  className="application"
                  src={portfolio}
                  alt="react portfolio"
                />
              </div>

              <figcaption>React Portfolio (this!)</figcaption>

              <a
              href="https://github.com/bgerner/react-portfolio"
              target="_blank"
              rel="noreferrer"
              className="git-icon"
            >
              <img src="https://img.icons8.com/color/45/000000/github--v3.png"/>
            </a>
            <a
              href="https://bgerner.github.io/react-portfolio/"
              target="_blank"
              rel="noreferrer"
              className="deploy-icon"
            >
              <img src="https://img.icons8.com/fluency/45/000000/rocket.png"/>
            </a>

          </figure>
    
      </div>
    </section>
  );
}

export default Portfolio;
