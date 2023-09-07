import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Headers from "./components/Headers";
import Feature from "./components/Feature";
import Offer from "./components/Offer";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Headers />} />
          <Route path="/features" element={<Feature />} />
          <Route path="/offers" element={<Offer />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
