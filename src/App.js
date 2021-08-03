import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
        <Route exact path="/" component={AboutMe} />
          {/* <AboutMe /> */}
        <Route exact path="/contact" component={Contact} />
          {/* <Contact /> */}
        <Route exact path="/portfolio" component={Portfolio} />
          {/* <Portfolio /> */}
        <Route exact path="/resume" component={Resume} />
          {/* <Resume /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
