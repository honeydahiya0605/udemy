import React from "react";
import "./Content.css";

const Content = () => {
  return (
    <div className="wrapper">
      <div className="upper">
        <div className="heading">
          <h2>A broad selection of courses</h2>
        </div>
        <p className="line"></p>Choose from over 210,000 online video courses
        with new additions published every month
      </div>
      <div className="tabs">
        <div className="nav-tabs"></div>
        <div className="about"></div>
      </div>
    </div>
  );
};

export default Content;
