import React, { useState } from "react";
import Header from "./components/Header/Header";
import CourseCards from "./components/Home/Courses/CourseCards";
import Caraousel from "./components/Home/Caraousel/Caraousel";

function App() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      {searchValue.toLowerCase() === "react" ? <CourseCards /> : <Caraousel />}
    </div>
  );
}

export default App;
