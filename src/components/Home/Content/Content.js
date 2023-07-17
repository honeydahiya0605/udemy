import React from "react";
import "./Content.css";
import Caraousel from "../Caraousel/Caraousel";

const Content = () => {
  return (
    <>
      <Caraousel />
      <div className="wrapper">
        <div className="upper">
          <div className="heading">
            <h2>A broad selection of courses</h2>
          </div>
          <p className="line">
            Choose from over 210,000 online video courses with new additions
            published every month
          </p>
        </div>
        <div className="tabs">
          <div className="nav-tabs"></div>
          <div className="about">
            <span>Python</span>
            <span>Excel</span>
            <span>Web Development</span>
            <span>javascript</span>
            <span>Data Science</span>
            <span>Amazon AWS</span>
            <span>Drawing</span>
          </div>
        </div>
        <div className="bottom">
          <div className="descript">
            <h2>Expand your career opportunities with Python</h2>
            <p>
              Take one of Udemy's range of Python courses and learn how to code
              using this incredibly useful language. Its simple syntax and
              readability makes Python perfect for Flask, Django, data science,
              and machine learning. You'll learn how to build everything from
              games to sites to apps. Choose from a range of courses that will
              appeal to
            </p>
          </div>
          <button>Explore Python</button>
        </div>
      </div>
    </>
  );
};

export default Content;
