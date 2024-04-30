import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './login.css'

const Login = () => {
    // const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    // const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here, e.g., send data to backend for authentication
      console.log({  email, password });
    };
  
    return (
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          {/* <div className="form-group">
            <input type="text" value={name} placeholder='Name' onChange={handleNameChange} required />
          </div> */}
          <div className="form-group">
            <input type="email" value={email} placeholder='Email' onChange={handleEmailChange} required />
          </div>
          <div className="form-group">
            <input type="password" value={password} placeholder='Password' onChange={handlePasswordChange} required />
          </div>
          <div className='button-sign'>
          <button className='sign-in' type="submit">Sign In</button>
          <button className='sign-up' type="submit">Sign Up</button>
          {/* <Link to='/'><button className='sign-in' type="submit">Sign In</button></Link>
          <Link to='/register'><button className='sign-up' type="submit">Sign Up</button></Link> */}
          </div>
        </form>
      </div>
    );
  };
  

export default Login
