import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navabr.css'; // Style for the navbar

const Navbar = () => {
    const navigate = useNavigate(); // Navigation hook

    return (
        <div className="navbar">
            <div className="navdiv"><button className='navtext' onClick={() => navigate('/home')}>HOME</button></div>

            <div className="navdiv"><button className="navtext" onClick={() => navigate('/discover')}>DISCOVER</button></div>
            <div className="navdiv"><button className='navtext' onClick={() => navigate('/about')}>ABOUT US</button></div>
            <div className="navdiv"><button className='navtext' onClick={() => navigate('/feedback')}>FEEDBACK</button></div>
            <div className="navdiv">
                <button className="navtext logout-btn" onClick={() => navigate('/')}>LOGOUT</button>
            </div>
            <div className="toggle-btn"><i className="fa-solid fa-bars"></i></div> 
        </div>
    );
};

export default Navbar;
