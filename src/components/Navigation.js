import React from "react";
import './assets/css/app.css';

import {
    Link
  } from "react-router-dom";

function Navigation() {
  return (
    <div id='nav-wrapper'>
      <h1>GERNER</h1>
      <nav>
        <ul>
          <a id="nav-link"><li>
            <Link to="/">About Me</Link>
          </li></a>
          <a id="nav-link"><li>
            <Link to="/portfolio">Work</Link>
          </li></a>
          <a id="nav-link"><li>
            <Link to="/contact">Contact</Link>
          </li></a>
          <a id="nav-link"><li>
            <Link to="/resume">Resume</Link>
          </li></a>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
