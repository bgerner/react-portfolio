import React from "react";
import '../assets/css/app.css';

function Portfolio() {
  return (
    <section id="work" className="s">
      <div className="section-title">
        <h3 id="work-title">Work</h3>
      </div>

      <div className="applications">
        <div>
          <figure>
            <a
              href="https://www.gernerfitness.com"
              target="_blank"
              rel="noreferrer"
            >
              <img id="application1" src="../assets/imgs/gerner-fitness.png" alt="tech share"/>
              <figcaption>Gerner Fitness</figcaption>
            </a>
          </figure>
          <figure>
            <a
              href="https://github.com/costanza13/cool-california/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="application"
                src="../assets/imgs/cool-california.png"
                alt="cool california"
              />
              <figcaption>Cool California</figcaption>
            </a>
          </figure>
        </div>
        <div>
          <figure>
            <a
              href="https://github.com/bgerner/tech-share/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="application"
                src="../assets/imgs/tech-share.png"
                alt="tech share"
              />
              <figcaption>Tech Share</figcaption>
            </a>
          </figure>
          <figure>
            <a
              href="https://github.com/bgerner/wild-thoughts/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="application"
                src="../assets/imgs/wild-thoughts.png"
                alt="wild thoughts"
              />
              <figcaption>Wild Thoughts</figcaption>
            </a>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
