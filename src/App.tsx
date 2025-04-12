

import React from "react";
import "./globalStyles.css"; // Import the CSS file

function App() {
  const navbarColor = "#77dd77"; // This will no longer dynamically apply unless handled differently

  return (
    <div>
    <i><h1 style={{ position: "absolute", top: 0, left: 0 }}>Grip Climbing</h1> </i>
    <nav className="navbar" style={{ backgroundColor: navbarColor }}>
    <button className="button"><i>Shop</i></button>
      <button className="button"><i>About</i></button>
      <button className="button"><i>Cart</i></button>
    </nav>
  </div>

  );
}

export default App;