// Home.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar"; // Import the Navbar component

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="main-background">
      <h1 className="title">Grip Climbing</h1>
      <Navbar /> {/* Use the Navbar component here */}
      {/* Other content specific to the Home page */}
    </div>
  );
};

export default Home;