import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Login from './Login';
import Home from './Home';
import Discover from './Discover';
import Dresses from './Dresses';
import Accessories from './Accessories';
import Cosmetics from './Cosmetics';
import Jewelry from './Jewelry';
import Footwear from './Footwears';
import Register from './Register';
import Feedback from './Feedback';
import Cart from './Cart';
import { CartProvider } from './CartContext';

const App = () => {
  const location = useLocation();

  return (
    <CartProvider>
      {location.pathname !== '/' && location.pathname !== '/register' && <Navbar />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/dresses" element={<Dresses />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/cosmetics" element={<Cosmetics />} />
        <Route path="/jewelry" element={<Jewelry />} />
        <Route path="/footwears" element={<Footwear />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/cart" element={<Cart />} /> {/* Add this if not already present */}
      </Routes>
    </CartProvider>
  );
};

export default App;
