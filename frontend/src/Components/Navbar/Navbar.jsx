import React from 'react';
import './navbar.css';
import logo from '../Assert/logo.jpg';
import user_image from '../Assert/user_image.jpg'

const Navbar = () => {
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
        <button className="logout-button">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;