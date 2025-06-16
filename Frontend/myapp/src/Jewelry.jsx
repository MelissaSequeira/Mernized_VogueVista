import React, { useContext } from 'react';
import './Dresses.css';
import { CartContext } from './CartContext';

const dressesData = [
  { id: 1, name: "Golden multiring earing", price: "₹1499", rating: 4.5, image: "/j1.jpg" },
  { id: 2, name: "Pearl bowed earings", price: "₹1999", rating: 4.7, image: "/j2.jpg" },
  { id: 3, name: "Floral dangling earings ", price: "₹1299", rating: 4.3, image: "/j3.avif" },
  { id: 4, name: "Ruby-Emerald drop earings", price: "₹2299", rating: 4.8, image: "/j4.jpg" },
  { id: 5, name: "Autumn leaf bronze pendant", price: "₹999", rating: 4.1, image: "/j5.webp" },
  { id: 6, name: "Golden butterflies necklace", price: "₹2499", rating: 4.9, image: "/j6.webp" },
  { id: 7, name: "Feather drop silver chain pendant", price: "₹1399", rating: 4.2, image: "/j7.avif" },
  { id: 8, name: "Bendable golden neck piece", price: "₹1599", rating: 4.4, image: "/j8.jpg" },
  { id: 9, name: "Red heart Silver pendant", price: "₹1799", rating: 4.6, image: "/j9.webp" },
  { id: 10, name: "Long Transformable necklace", price: "₹1300", rating: 4.6, image: "/j10.webp" },
  { id: 11, name: "Dual floral bracelet ", price: "₹1420", rating: 4.8, image: "/j11.webp" },
  { id: 12, name: "Blue Eye diamond bracelet", price: "₹1320", rating: 4.7, image: "/j12.webp" },
];

const Jewelry = () => {
  const { addToCart } = useContext(CartContext);
  
    return (
      <div className="dresses-container">
        <h2>Explore Our Jewewlry Collection</h2>
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

export default Jewelry;
