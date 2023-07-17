import React from "react";
import first from "../../../assets/first.png";
import "./Caraousel.css";

const Caraousel = () => {
  return (
    <div>
      <div className="image">
        <div className="photo">
          <img src={first} alt="first" />
          <div className="box">
            <h1>Subsrcibe to the best of Udemy</h1>
            <p>
              With Personal Plan, you get access to 8,000 of our top-rated
              courses in tech, business, and more.
            </p>
            <a href="/#">Learn More.</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caraousel;
