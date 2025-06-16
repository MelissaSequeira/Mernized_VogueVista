import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Home.css';
import './About.css';

const Home = () => {
    const navigate = useNavigate(); // Initialize navigate

    const handleLogout = () => {
        navigate('/'); // Redirect to login page
    };

    return (
        <>
            <div id="homesec">
                <div className="mnmn">
                    <div className="title">
                        Vogue Vista
                        <div>
                            <p className="subtitle">Fashion with westerns</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="about">
                <div className="abt-sec-img"></div>
                <div className="abt-para-div">
                    <p className="abt-para-text">
                        <b style={{ fontSize: '35px' }}>W</b>
                        elcome to <b>Vogue Vista</b>, where style meets innovation and fashion flourishes. Our platform is a haven for those who embrace the artistry of clothing and the power of personal expression.
                        <br /><br />
                        Discover a curated collection that showcases the latest trends, timeless classics, and avant-garde designs from around the globe. From haute couture to streetwear, our selection offers something for every style journey.
                        <br /><br />
                        Indulge in our exquisite range of apparel, where every garment embodies grace and tells a unique story. Elevate your look with our curated selection of accessories, including handbags, shoes, and jewelry, designed to add sophistication to any ensemble.
                        <br /><br />
                        Experience the transformative power of beauty with our collection of cosmetics, skincare essentials, and fragrances. From luxurious formulations to makeup essentials, our beauty collection invites you to embrace radiance and glamour.
                        <br /><br />
                        More than just a fashion destination, Vogue Vista is a vibrant community—a place where fashion enthusiasts, trendsetters, and style mavens come together to celebrate their love for all things chic and fabulous. Join us on a journey of style discovery, where every interaction sparks creativity and every connection inspires greatness.
                        <br /><br />
                        With Vogue Vista, the world of fashion is at your fingertips. Explore our platform today and discover the endless possibilities of style, beauty, and elegance. Embrace your unique sense of style and embark on a transformative journey of self-expression and empowerment.
                    </p>
                </div>
            </div>
            <footer>
        <p class="f1-text">Made with  🤍 by Melissa</p>
        <p class="f2-text">© 2024 A_Melissa_Sequeira_website - All Rights Reserved</p>
    </footer>
        </>
    );
};

export default Home;
