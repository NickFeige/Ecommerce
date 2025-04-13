import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const [showCategories, setShowCategories] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowCategories(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="main-background">
      <h1 className="title">Grip Climbing</h1>

      <nav className="navbar">
        <div className="dropdown" ref={dropdownRef}>
          <button className="button" onClick={() => setShowCategories(!showCategories)}>
            <i>Categories</i>
          </button>
          {showCategories && (
            <div className="dropdown-menu">
              <button className="dropdown-item">Clothing</button>
              <button className="dropdown-item">Equipment</button>
              <button className="dropdown-item">Chalk</button>
            </div>
          )}
        </div>

        <button className="button" onClick={() => navigate("/about")}>
          <i>About</i>
        </button>
        <button className="button" onClick={() => navigate("/cart")}>
          <i>Cart</i>
        </button>
      </nav>
    </div>
  );
};

export default Home;