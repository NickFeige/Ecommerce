import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const [showCategories, setShowCategories] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="main-background">
      <h1 className="title">Grip Climbing</h1>

      <nav className="navbar">
        <div className="dropdown">
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