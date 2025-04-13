import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="main-background">
      <h1 className="title"><i>Grip Climbing</i></h1>

      <nav className="navbar">
        <button className="button">Categories</button>
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