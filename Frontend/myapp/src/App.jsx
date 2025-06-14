
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Login from './Login';
import Home from './Home';
import Discover from './Discover';
import About from './About';
import Register from './Register';
import Feedback from './Feedback';
const App = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && location.pathname !== '/register' && <Navbar />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/about" element={<About />} />
        <Route path="/feedback" element={<Feedback />} /> {/* ✅ Temporary fix */}
      </Routes>
    </>
  );
};

export default App;
