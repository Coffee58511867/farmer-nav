import React from "react";

import { Routes, Route} from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Market from "./components/Market";
import Skills from './components/Skills';
import About from './components/About';
import Qualifications from './components/Qualifications';

const MainRoutes = () => {
  return (
    <div>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/qual" element={<Qualifications/>} />
      </Routes>
     
    </div>
  );
};

export default MainRoutes;
