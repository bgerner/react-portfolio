import React from "react";
import './assets/css/app.css';

import {
    NavLink
  } from "react-router-dom";

function Navigation() {
  return (
    <div id='nav-wrapper'>
      <h1>GERNER</h1>
      <nav>
        <ul>
          <a id="nav-link"><li>
            <NavLink exact to="/">About Me</NavLink>
          </li></a>
          <a id="nav-link"><li>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li></a>
          <a id="nav-link"><li>
            <NavLink to="/contact">Contact</NavLink>
          </li></a>
          <a id="nav-link"><li>
            <NavLink to="/resume">Resume</NavLink>
          </li></a>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;