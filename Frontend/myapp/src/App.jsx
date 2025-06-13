import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Login from './Login';
import Home from './Home';
import Discover from './discover';
import Register from './Register';

const App = () => {
  const location = useLocation(); // Get the current route

  return (
    <>
      {/* Show Navbar on all pages except Login */}
      {location.pathname !== '/' && location.pathname !== '/register' && <Navbar />} 

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
      </Routes>
    </>
  );
};

export default App;
