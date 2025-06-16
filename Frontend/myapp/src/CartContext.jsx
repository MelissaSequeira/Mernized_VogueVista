import React, { createContext, useState } from 'react';

// Create context
export const CartContext = createContext();

// Provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart and send to backend
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);

    // Save to backend
    fetch(`${process.env.REACT_APP_API_URL}/api/cart/cartpost`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        iname: item.name,
        iprice: parseInt(item.price.replace(/[₹,]/g, '')),
      }),
    }).catch((err) => console.error('Failed to save item to backend:', err));
  };

  // Remove item from local cart (optional if backend handles this)
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
