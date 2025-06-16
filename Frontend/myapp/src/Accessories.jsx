import React, { useContext } from 'react';
import './Dresses.css';
import { CartContext } from './CartContext';

const dressesData = [
  { id: 1, name: "leopard print goggles", price: "₹1499", rating: 4.5, image: "/a1.jpg" },
  { id: 2, name: "Black transperent goggles", price: "₹1999", rating: 4.7, image: "/a2.avif" },
  { id: 3, name: "Brown aesthetic goggles ", price: "₹1299", rating: 4.3, image: "/a3.avif" },
  { id: 4, name: "silver ancient chain belt", price: "₹2299", rating: 4.8, image: "/a4.jpg" },
  { id: 5, name: "Silver moon-star chain belt", price: "₹999", rating: 4.1, image: "/a5.webp" },
  { id: 6, name: "little hearts chain belts", price: "₹2499", rating: 4.9, image: "/a6.jpg" },
  { id: 7, name: "Black star belt", price: "₹1399", rating: 4.2, image: "/a7.jpg" },
  { id: 8, name: "Golden Butterfly chain Belt", price: "₹1599", rating: 4.4, image: "/a8.jpg" },
  { id: 9, name: "Elegant Simple Butterfly", price: "₹1799", rating: 4.6, image: "/a9.jpg" },
  { id: 10, name: "Golden Sonata watch", price: "₹1300", rating: 4.6, image: "/a10.jpg" },
  { id: 11, name: "Yolako Stylist Fancy Watch", price: "₹1420", rating: 4.8, image: "/a11.webp" },
  { id: 12, name: "Duke Women Metal Strap Stylish Analog Black Wrist Watch", price: "₹1320", rating: 4.7, image: "/a12.webp" },
];

const Accessories = () => {
  const { addToCart } = useContext(CartContext);
  
    return (
      <div className="dresses-container">
        <h2>Explore Our Accessories Collection</h2>
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

export default Accessories;
