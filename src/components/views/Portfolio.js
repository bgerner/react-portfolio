import React from "react";
import "../assets/css/app.css";
import Projects from '../assets/ProjectInfo';
import Project from '../Project';

function Portfolio() {
  return (
    <section id="work" className="s">
      <div className="section-title">
        <h3 id="work-title">Work</h3>
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
