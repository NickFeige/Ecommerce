import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import About from "../pages/About"; 
import Chalk from "../pages/Chalk";
import Clothing from "../pages/Clothing";
import Equipment from "../pages/Equipment";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About />} /> {/* 👈 Add this route */}
      <Route path="/chalk" element={<Chalk />} />
      <Route path="/clothing" element={<Clothing/>} />
      <Route path="/equipment" element={<Equipment/>} />
      
    </Routes>
  );
};

export default AppRoutes;