import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext'; // Import your context
import './Navabr.css'; // Assuming the typo is in the file name too

const Navbar = () => {
    const navigate = useNavigate();
    const { cartItems } = useContext(CartContext); // Access cart items

    return (
        <div className="navbar">
            <div className="navdiv"><button className="navtext" onClick={() => navigate('/home')}>HOME</button></div>
            <div className="navdiv"><button className="navtext" onClick={() => navigate('/discover')}>DISCOVER</button></div>
            <div className="navdiv"><button className="navtext" onClick={() => navigate('/feedback')}>FEEDBACK</button></div>
            
            <div className="navdiv cart-div">
                <button className="navtext cart-btn" onClick={() => navigate('/cart')}>
                    🛒 Cart <span className="cart-count">{cartItems.length}</span>
                </button>
            </div>

            <div className="navdiv"><button className="navtext logout-btn" onClick={() => navigate('/')}>LOGOUT</button></div>
        </div>
    );
};

export default Navbar;
