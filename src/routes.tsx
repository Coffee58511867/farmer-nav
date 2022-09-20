import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Market from "./components/Market";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market/>} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
