import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home"; // Import your home component
import Features from "./Features"; // Import your features component
import Offers from "./Offers"; // Import your offers component
import About from "./About"; // Import your about component
import Contact from "./Contact"; // Import your contact component

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/features" component={Features} />
      <Route path="/offers" component={Offers} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
};

export default AppRouter;
