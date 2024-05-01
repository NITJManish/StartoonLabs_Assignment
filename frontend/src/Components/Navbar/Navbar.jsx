import React from 'react';
import './navbar.css';
import logo from '../Assert/logo.jpg';
import user_image from '../Assert/user_image.jpg'
import axios from 'axios'

const Navbar = () => {
    const handleLogout = async () => {
      try {
        // Make a POST request to the logout API endpoint
        const response = await axios.post('/logout');
        if (response.status === 200) {
          // Clear any user-related state or token
          // Redirect the user to the login page or homepage
          window.location.href = '/'; // Redirect to login page
        } else {
          console.error('Logout failed');
        }
      } catch (error) {
        console.error('Error occurred during logout:', error);
      }
    };
  

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" height='20px' width='20px' />
      </div>
      <ul className="navbar-links">
        <li><a href="/#">Home</a></li>
        <li><a href="/#">About</a></li>
        <li><a href="/#">Contact</a></li>
        <li><a href="/#">Services</a></li>
      </ul>
      <div className="navbar-user">
        <img src={user_image} alt="User" className="user-photo" />
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;