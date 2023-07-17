import React, { useState, useEffect } from "react";
import coursesData from "../../../courses.json";
import "./CourseCards.css";

function CourseCards() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    filterCourses();
  }, [searchTerm]);

  function filterCourses() {
    const filtered = coursesData.filter((course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCourses(filtered);
  }

  return (
    <div>
      <div className="courseContainer">
        {filteredCourses.map((course) => (
          <div className="courseCard" key={course.title}>
            <img src={course.image} alt="logo" />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p>Instructor: {course.instructor}</p>
            <p>Rating: {course.rating}</p>
            <p>Hours: {course.hours}</p>
            <p>Lectures: {course.lectures}</p>
            <p>Price: {course.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseCards;
