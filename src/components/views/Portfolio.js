import React from "react";
import "../assets/css/app.css";
import Projects from '../assets/ProjectInfo';
import Project from '../Project';

function Portfolio() {
  return (
    <section id="work" className="s">
      <div className="section-title">
        <h3 id="work-title">Portfolio</h3>
        <p className='portfolio-subtitle'>GitHub logo - corresponding repository</p>
        <p className='portfolio-subtitle'>Rocket logo - corresponding deployed app</p>
      </div>

      <div className="applications">
        
          {Projects.map((project) => {
            return (
              <Project 
              title={project.title} 
              link={project.link} 
              repoLink={project.repoLink} 
              image={project.image} 
              />
            )
          })}
    
      </div>
    </section>
  );
}

export default Portfolio;
