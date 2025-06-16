import React,{useState} from 'react';
import './Feedback.css';
const Feedback = () => {
const [name,setName]= useState('');
const [email,setEmail]= useState('');
const [message, setMessage]= useState('');
const [error, setError] = useState('');
const [loading,setLoading]=useState(false);
const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');
  setLoading(true);

  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/feed/feedpost`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Corrected content-type
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    const data = await response.json();

    if (response.status === 201 || response.ok) {
      alert('Feedback submitted successfully!');
      // Optional: reset form fields
      setName('');
      setEmail('');
      setMessage('');
    } else {
      console.error('Server error:', data);
      alert('Something went wrong. Please try again.');
    }
  } catch (err) {
    console.error('Network or server error:', err);
    alert('Failed to submit feedback. Please check your server.');

  }
  setLoading(false);
}

 return (
  <div id="feedback">
    <div className="feedform">
      <div className="formtitle">FEEDBACK</div>
      <form className="forms" onSubmit={handleSubmit}>
        <div className="formtext">
          <label htmlFor="name">Name:</label>
          <input
            className="feedbox"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter your name"
            name="name"
          />
        </div>

        <div className="formtext">
          <label htmlFor="email">Email:</label>
          <input
            className="feedbox"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            name="email"
          />
        </div>

        <div className="formtext">
          <label htmlFor="message">Feedback:</label>
          <textarea
            className="feedbox"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="Enter your feedback"
            name="message"
            rows="4"
          />
        </div>

        <button type="submit" className="feedback-submit-btn" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Feedback'}
        </button>
      </form>
    </div>
  </div>
);

};
export default Feedback;