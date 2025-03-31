import { useState } from 'react';

import './App.css';

function App() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="div1">
      <form className="div2" onSubmit={handleSubmit}>
        <div className="welcomeDiv">
          <h1 className="welcome">Welcome back!</h1>
        </div>
        <div className="gap1"></div>
        <div className="inputsDiv">
          <input
            type="text"
            name="email"
            className="email"
            placeholder="UID"
            value={formData.email}
            onChange={handleChange}
          />
          <div className="gap2"></div>
          <input
            type="password"
            name="password"
            className="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="gap3"></div>
        <button type="submit" className="login">
          Login
        </button>
      </form>
    </div>
  );
}

export default App;
