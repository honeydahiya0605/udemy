import React, { useState } from "react";
import Header from "./components/Header/Header";
import CourseCards from "./components/Home/Courses/CourseCards";
import Content from "./components/Home/Content/Content";

function App() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      {searchValue.toLowerCase() === "react" ? <CourseCards /> : <Content />}
    </div>
  );
}

export default App;
