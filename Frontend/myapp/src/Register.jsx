import React ,{useState}from 'react'; 
import { useNavigate } from 'react-router-dom';

import './Login.css';
const Register=()=>{
    const [name, setName]=useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // Initialize navigation

    const submit=async(e)=>{
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            const response= await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/auth/register`,{
                method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({name, email,password}),
            });
            const data=await response.json();
            if(data.error){
                setError(data.error);
            }
            else{
                navigate('/');
            }
            setLoading(false);
            
        } catch (error) {
            setError('Something went wrong')
        }
        setLoading(false);

    };

    return (
        <div className="login-container">
            <h2>Register</h2>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Registering...' : 'Register'}
                </button>
            </form>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};
export default Register;