// aboutus.js
import React from "react";
import "./aboutus.css";

const Aboutus = () => {
  return (
    <div className="about-us">
      <div className="about-img-container">
        <img className="about-img" src="src/pic/aboutus.jpeg" alt="" />
        <div className="text-overlay">
          <h2 className="Description-about">Description</h2>
          <p className="text-Description" >
            Welcome to SeaFace, the premier website dedicated to the preservation
            and cleansing of our planet's ecosystems, including ocean shores and
            rivers. At EcoClean, we believe that every individual has the power
            to make a difference, and we invite you to join our community in the
            noble mission of environmental stewardship.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
