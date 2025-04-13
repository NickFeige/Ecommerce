import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import About from "../pages/About"; // 👈 Add this line

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About />} /> {/* 👈 Add this route */}
    </Routes>
  );
};

export default AppRoutes;