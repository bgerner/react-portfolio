import React from "react";

function Project({ title, link, repoLink, image }) {
  return (
    <figure>
      <div className="img-container">
        <img className="application" src={image} alt={title} />
      </div>

      <figcaption>{title}</figcaption>

      {repoLink ? <a
        href={repoLink}
        target="_blank"
        rel="noreferrer"
        className="git-icon"
      >
        <img src="https://img.icons8.com/color/45/000000/github--v3.png" alt="github icon" />
      </a> : ''}
      {link ? <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="deploy-icon"
      >
        <img src="https://img.icons8.com/fluency/45/000000/rocket.png" alt="deployment icon"/>
      </a> : ''}
    </figure>
  );
}

export default Project;
