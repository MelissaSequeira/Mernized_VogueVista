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
