import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Art from "../pages/Art"; // Import Art component

const Main = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/art" element={<Art />} /> {/* Specify the route for Art */}
      {/* Add more routes here if needed */}
    </Routes>
  );
};

export default Main;
