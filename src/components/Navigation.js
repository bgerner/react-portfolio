import React from "react";
import './assets/css/app.css';

import {
    Link
  } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <h1>GERNER</h1>
      <nav>
        <ul>
          <a><li>
            <Link to="/">About Me</Link>
          </li></a>
          <a><li>
            <Link to="/portfolio">Work</Link>
          </li></a>
          <a><li>
            <Link to="/contact">Contact</Link>
          </li></a>
          <a><li>
            <Link to="/resume">Resume</Link>
          </li></a>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
