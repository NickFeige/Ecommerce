import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Make sure this import is present
import Navbar from "./Navbar"; // Assuming Navbar.tsx is in the same directory

// Define the structure for a clothing item (adjust as needed)
interface ClothingItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string; // URL or path to the image
}

// Sample clothing data (replace with your actual data fetching)
const sampleClothing: ClothingItem[] = [
  {
    id: 101,
    name: "Cotton T-Shirt",
    description: "Comfortable and breathable cotton t-shirt.",
    price: 19.99,
    image: "https://via.placeholder.com/150/AAAAAA/FFFFFF?Text=T-Shirt", // Placeholder image URL
  },
  {
    id: 102,
    name: "Denim Jeans",
    description: "Classic blue denim jeans.",
    price: 59.99,
    image: "https://via.placeholder.com/150/BBBBBB/FFFFFF?Text=Jeans", // Placeholder image URL
  },
  {
    id: 103,
    name: "Hooded Sweatshirt",
    description: "Warm and cozy hooded sweatshirt.",
    price: 39.50,
    image: "https://via.placeholder.com/150/CCCCCC/FFFFFF?Text=Hoodie", // Placeholder image URL
  },
];

// Define the type for the function to add items to the cart (you'll need to pass this down)
type AddToCartFunction = (item: { id: number; name: string; price: number }) => void;

interface ClothingProps {
  addToCart: AddToCartFunction;
}

const Clothing: React.FC<ClothingProps> = ({ addToCart }) => {
  const navigate = useNavigate(); // Initialize useNavigate within the component

  const handleTitleClick = () => { // Define handleTitleClick within the component
    navigate("/");
  };

  return (
    <div>
      <Navbar />
      <h1 className="title" onClick={handleTitleClick} style={{ cursor: "pointer" }}>
        Clothing
      </h1>
      <div style={{ height: '140px' }}></div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
        {sampleClothing.map((item) => (
          <div key={item.id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}>
            <img src={item.image} alt={item.name} style={{ maxWidth: "100%", height: "auto" }} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price.toFixed(2)}</p>
            <button onClick={() => addToCart({ id: item.id, name: item.name, price: item.price })}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clothing;