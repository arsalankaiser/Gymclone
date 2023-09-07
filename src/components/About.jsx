import React from "react";
import aboutImage from "../Image/about.png";
function About() {
  return (
    <div id="about">
      <div className="about-image">
        <img src={aboutImage} alt="" srcset="" />
      </div>
      <div className="about-text">
        <h1>Learn More About Us </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sapiente
          quis est asperiores nobis? Eveniet atque quibusdam iste corrupti! Eum,
          distinctio! A tempore nam ut?
        </p>
        <button>Read More</button>
      </div>
    </div>
  );
}

export default About;
