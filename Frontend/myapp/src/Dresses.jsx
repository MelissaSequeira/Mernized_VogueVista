import React, { useContext } from 'react';
import './Dresses.css';
import { CartContext } from './CartContext';

const dressesData = [
  { id: 1, name: "Floral Summer Dress", price: "₹1499", rating: 4.5, image: "/d1.jpeg" },
  { id: 2, name: "Ruched Mini bodycon Dress", price: "₹1999", rating: 4.7, image: "/d2.jpeg" },
  { id: 3, name: "Blush Garden Midi Dress", price: "₹1299", rating: 4.3, image: "/d3.jpg" },
  { id: 4, name: "Emerald Wrap Dress", price: "₹2299", rating: 4.8, image: "/d4.jpg" },
  { id: 5, name: "Vintage Plaid Skirt Dress", price: "₹999", rating: 4.1, image: "/d5.jpg" },
  { id: 6, name: "White Lace Gown", price: "₹2499", rating: 4.9, image: "/d6.jpg" },
  { id: 7, name: "Polka Dot Flare Dress", price: "₹1399", rating: 4.2, image: "/d7.jpg" },
  { id: 8, name: "Monochrome Polka Shift Dress", price: "₹1599", rating: 4.4, image: "/d8.jpg" },
  { id: 9, name: "Floral Ruffle Maxi Dress", price: "₹1799", rating: 4.6, image: "/d9.jpg" },
  { id: 10, name: "Boho Short dress", price: "₹1000", rating: 4.6, image: "/d10.webp" },
  { id: 11, name: "Navy blue floral ruched bodycon midi dress", price: "₹1220", rating: 4.8, image: "/d11.webp" },
  { id: 12, name: "Floral Print Mesh Splicing Dress", price: "₹1320", rating: 4.7, image: "/d12.webp" },
];

const Dresses = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="dresses-container">
      <h2>Explore Our Dress Collection</h2>
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

export default Dresses;
