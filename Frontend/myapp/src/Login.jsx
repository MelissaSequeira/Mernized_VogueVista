import React, { useState } from "react";
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState(null); // use 'msg' consistently
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            setMsg(response.data.message); // Set success message
            localStorage.setItem('token', response.data.token); // Store token
        } catch (error) {
            setMsg(error.response?.data?.message || 'An error occurred'); // Set error message
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {msg && <p>{msg}</p>} {/* Display message */}
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input 
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label>Password:</label>
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type='submit'>Login</button>
            </form>
        </div>
    );
};

export default Login;
