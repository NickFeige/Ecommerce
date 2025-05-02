import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import About from "../pages/About";
import Chalk from "../pages/Chalk";
import Clothing from "../pages/Clothing";
import Equipment from "../pages/Equipment";

// Define the structure for a cart item (ensure this matches your Cart component)
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const AppRoutes: React.FC = () => {
  // State to hold the cart items (lifted up to the routing component)
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Function to update local storage whenever cartItems change
  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to add an item to the cart
  const addItemToCart = (newItem: { id: number; name: string; price: number }) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === newItem.id);

    if (existingItemIndex !== -1) {
      const updatedCartItems = cartItems.map((item, index) =>
        index === existingItemIndex ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...newItem, quantity: 1 }]);
    }
  };

  // Function to remove an item from the cart
  const removeItemFromCart = (itemId: number) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  // Function to increase the quantity of an item in the cart
  const increaseQuantity = (itemId: number) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCartItems);
  };

  // Function to decrease the quantity of an item in the cart
  const decreaseQuantity = (itemId: number) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedCartItems.filter(item => item.quantity > 0));
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Pass cart items and functions to the Cart component */}
      <Route
        path="/cart"
        element={
          <Cart
            cartItems={cartItems}
            removeItem={removeItemFromCart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        }
      />
      <Route path="/about" element={<About />} />
      <Route path="/chalk" element={<Chalk />} />
      {/* Pass the addItemToCart function to the Clothing component */}
      <Route path="/clothing" element={<Clothing addToCart={addItemToCart} />} />
      <Route path="/equipment" element={<Equipment />} />
    </Routes>
  );
};

export default AppRoutes;