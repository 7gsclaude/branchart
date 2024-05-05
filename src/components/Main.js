import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Art from "../pages/Art"; // Import Art component
import Realestate from "../pages/Realestate"; // Import Realestate component

const Main = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/art" element={<Art />} /> {/* Specify the route for Art */}
      {/* Add more routes here if needed */}
      <Route path="/realestate" element={<Realestate />} /> {/* Specify the route for RealEstate */}
    </Routes>
  );
};

export default Main;
