import React from 'react';
import { Link } from 'react-router-dom';
import './Discover.css';

const Discover = () => {
  return (
    <>
    <div id="discover">
      <div className="divdresses"><Link className="discover-text" to="/dresses">Dresses</Link></div>
      <div className="divaccess"><Link className="discover-text" to="/accessories">Accessories</Link></div>
      <div className="divcosmt"><Link className="discover-text" to="/cosmetics">Cosmetics</Link></div>
      <div className="divjewels"><Link className="discover-text" to="/jewelry">Jewelry</Link></div>
      <div className="divfoots"><Link className="discover-text" to="/footwears">Footwears</Link></div>
    </div></>
    
  );
};

export default Discover;
