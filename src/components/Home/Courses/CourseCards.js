import React, { useState, useEffect } from "react";
import coursesData from "../../../courses.json";
import "./CourseCards.css";

function CourseCards() {
  const [sortOption, setSortOption] = useState("relevance");
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    filterCourses();
  }, [sortOption]);

  function filterCourses() {
    let filtered = coursesData.filter((course) =>
      course.title.toLowerCase().includes("react")
    );

    if (sortOption === "newest") {
      filtered = filtered.sort(
        (a, b) => new Date(b.publishedDate) - new Date(a.publishedDate)
      );
    } else if (sortOption === "rating") {
      filtered = filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === "review") {
      filtered = filtered.sort((a, b) => b.reviews - a.reviews);
    }
    setFilteredCourses(filtered);
  }

  return (
    <div>
      <div className="sort">
        <label htmlFor="sortOption">Sort by:</label>
        <select
          id="sortOption"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="relevance">Relevance</option>
          <option value="newest">Newest</option>
          <option value="rating">Highest Rated</option>
          <option value="review">Most Reviewed</option>
        </select>
      </div>
      <div className="courseContainer">
        {filteredCourses.map((course) => (
          <div className="courseCard" key={course.title}>
            <div className="image">
              <img src={course.image} alt="logo" />
            </div>
            <div className="about">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <p className="grey">{course.instructor}</p>
              <p className="grey">
                {course.rating}
                &#11088;&#11088;&#11088;&#11088;&#11088;
              </p>
              <p className="grey">{course.hours}</p>
              <p className="grey">{course.lectures}</p>
            </div>
            <div className="price">
              <p>
                <b>&#8377;{course.price}</b>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseCards;
