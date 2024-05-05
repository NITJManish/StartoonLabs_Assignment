import React, { useState } from 'react'
// import {Link} from 'react-router-dom'
import './login.css'

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Login failed');
      }
      const data = await response.json();
      localStorage.setItem('token', data.token);
      // window.location.href = '/home';
      // alert('Login successful');
      setIsLoggedIn(true);
      setShowMessage(true);

    // Hide the message after 10 seconds
    setTimeout(() => {
      setShowMessage(false);
      window.location.href = '/home';
    }, 5000); // 10 seconds in milliseconds
    // window.location.href = '/home';

    } catch (error) {
      console.error(error);
      console.log(error);
      alert('Login failed');
    }
  };
    return (
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
         
          <div className="form-group">
            <input type="email" name='email' value={formData.email} placeholder='Email' onChange={handleChange} required />
          </div>
          <div className="form-group">
            <input type="password" name='password' value={formData.password} placeholder='Password' onChange={handleChange} required />
          </div>
          <div className='button-sign'>
          <div>
      {showMessage && (
        <p>Welcome! You have successfully logged in.</p>
      )}
      {!isLoggedIn && (
        <>
        <button className='sign-in' type="submit">Sign In</button>
          <button className='sign-up' type="submit">Sign Up</button>
        </>
      )}
    </div>
     {/*
          <button className='sign-in' type="submit">Sign In</button>
          <button className='sign-up' type="submit">Sign Up</button> */}
          {/* <Link style={{textDecoration: 'none'}} to='/'><button className='sign-in' type="submit">Sign In</button></Link> */}
          {/* <Link style={{textDecoration: 'none'}} to='/register'><button className='sign-up' type="submit">Sign Up</button></Link> */}
          </div>
        </form>
      </div>
    );
  };
  

export default Login
