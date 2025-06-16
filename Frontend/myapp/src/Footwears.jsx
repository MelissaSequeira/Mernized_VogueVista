import React, { useContext } from 'react';
import './Dresses.css';
import { CartContext } from './CartContext';

const dressesData = [
  { id: 1, name: "Block Heels", price: "₹1499", rating: 4.5, image: "/f1.avif" },
  { id: 2, name: "Black pencil heels", price: "₹1999", rating: 4.7, image: "/f2.jpg" },
  { id: 3, name: "Sky blue ankle trap heels", price: "₹1299", rating: 4.3, image: "/f3.jpg" },
  { id: 4, name: "Snake print pencil heels", price: "₹2299", rating: 4.8, image: "/f4.jpg" },
  { id: 5, name: "Black bowed Kitten heels", price: "₹999", rating: 4.1, image: "/f5.webp" },
  { id: 6, name: "Leopard print heels", price: "₹2499", rating: 4.9, image: "/f6.jpg" },
  { id: 7, name: "Black officewear flat heels", price: "₹1399", rating: 4.2, image: "/f7.webp" },
  { id: 8, name: "Black velvet high heels", price: "₹1599", rating: 4.4, image: "/f8.webp" },
  { id: 9, name: "Versace Summer heels", price: "₹1799", rating: 4.6, image: "/f9.webp" },
  { id: 10, name: "Pink Sneakers", price: "₹1300", rating: 4.6, image: "/f10.webp" },
  { id: 11, name: "White Sneakers", price: "₹1420", rating: 4.8, image: "/f11.webp" },
  { id: 12, name: "Converse shoes", price: "₹1320", rating: 4.7, image: "/f12.webp" },
];

const Footwears = () => {
  const { addToCart } = useContext(CartContext);
  
    return (
      <div className="dresses-container">
        <h2>Explore Our Footwears Collection</h2>
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

export default Footwears;
