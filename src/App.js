import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutMe from "./components/views/AboutMe";
import Contact from "./components/views/Contact";
import Portfolio from "./components/views/Portfolio";
import Resume from "./components/views/Resume";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/">
          <AboutMe />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
