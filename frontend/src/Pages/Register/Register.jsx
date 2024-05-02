import React, { useState } from 'react'
// import {Link} from 'react-router-dom';
import './register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        gender: '',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          if (!response.ok) {
            throw new Error('Registration failed');
          }
          alert('Registration successful');
          window.location.href = '/';
        } catch (error) {
          console.error(error);
      console.log(error);

          alert('Registration failed');
        }
      };
    

    return (
        <div className="sign-up-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input name='name' type="text" value={formData.name} placeholder='Name' onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input type="password" name='password' value={formData.password} placeholder='Password' onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input type="email" name='email' value={formData.email} placeholder='Email' onChange={handleChange} required />
                </div>
                <div className="form-group gender-mf">
                    <label>Gender:</label>
                    <input type="radio" name='gender' id="html" value={formData.gender} onChange={handleChange} />
                    <label for="html">Male</label>
                        <input type="radio" id="css" name="fav_language" value={formData.gender} onChange={handleChange}  />
                        <label for="css">Female</label>                   
                        </div>
                        <div className='button-sign'>
                        <button className='sign-up' type="submit">Sign Up</button>
                        <button className='sign-in' type="submit">Sign In</button>
                       {/* <Link style={{textDecoration: 'none'}} to='/register'> <button className='sign-up' type="submit">Sign Up</button></Link> */}
                        {/* <Link style={{textDecoration: 'none'}} to='/'><button className='sign-in' type="submit">Sign In</button></Link> */}
                        </div>
                    </form>
                </div>
                );
  };


export default Register
