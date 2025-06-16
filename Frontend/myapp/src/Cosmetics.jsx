import React, { useContext } from 'react';
import './Dresses.css';
import { CartContext } from './CartContext';

const dressesData = [
  { id: 1, name: "Mini eye shadow palette", price: "₹1499", rating: 4.5, image: "/c1.jpg" },
  { id: 2, name: "Shimmer bright eye palette", price: "₹1999", rating: 4.7, image: "/c2.jpg" },
  { id: 3, name: "Deep Red Lipstick ", price: "₹1299", rating: 4.3, image: "/c3.jpg" },
  { id: 4, name: "Floral orange-Pink vitage lipstick", price: "₹2299", rating: 4.8, image: "/c4.jpg" },
  { id: 5, name: "Brown Matte Lipstick", price: "₹999", rating: 4.1, image: "/c5.jpg" },
  { id: 6, name: "Dual Ice cream Lipgloss", price: "₹2499", rating: 4.9, image: "/c6.jpg" },
  { id: 7, name: "Flavoured set of lip glosses", price: "₹1399", rating: 4.2, image: "/c7.avif" },
  { id: 8, name: "little Heart Lip shimmer gloss", price: "₹1599", rating: 4.4, image: "/c8.jpg" },
  { id: 9, name: "Face Blush", price: "₹1799", rating: 4.6, image: "/c9.jpeg" },
  { id: 10, name: "Peach shades blush", price: "₹1300", rating: 4.6, image: "/c10.jpg" },
  { id: 11, name: "Masscara & liquid eye liner", price: "₹1420", rating: 4.8, image: "/c11.jpg" },
  { id: 12, name: "Permanent Liquid eye liner", price: "₹1320", rating: 4.7, image: "/c12.jpg" },
];

const Cosmetics = () => {
const { addToCart } = useContext(CartContext);
  return (
    <div className="dresses-container">
      <h2>Explore Our Cosmetics Collection</h2>
      <div className="dresses-grid">
        {dressesData.map((item) => (
          <div className="dress-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>Price: {item.price}</p>
            <p>Rating: ⭐ {item.rating}</p>
            <button
              className="add-to-cart-btn"
              onClick={() => addToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  
  );
};

export default Cosmetics;
