import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Home.css';

const Home = () => {
    const navigate = useNavigate(); // Initialize navigate

    const handleLogout = () => {
        navigate('/'); // Redirect to login page
    };

    return (
        <div id="homesec">
            <div className="navbar">
                <div className="navdiv"><a className="navtext" href="#homesec">HOME</a></div>
                <div className="navdiv"><a className="navtext" href="#discover">DISCOVER</a></div>
                <div className="navdiv"><a className="navtext" href="#about">ABOUT US</a></div>
                <div className="navdiv"><a className="navtext" href="#feedback">FEEDBACK</a></div>
                <div className="navdiv">
                    <button className="navtext logout-btn" onClick={handleLogout}>LOGOUT</button>
                </div>
                <div className="toggle-btn"><i className="fa-solid fa-bars"></i></div> 
            </div>
            
            <div className="mnmn">
                <div className="title">
                    Vogue Vista
                    <div><p className="subtitle">Fashion with westerns</p></div>
                </div>
            </div>
        </div>
    );
};

export default Home;
