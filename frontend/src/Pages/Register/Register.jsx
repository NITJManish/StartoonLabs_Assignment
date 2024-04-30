import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import './register.css';

const Register = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');

    const handleNameChange = (e) => setName(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleGenderChange = (e) => setGender(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, e.g., send data to backend
        console.log({ name, password, email, gender });
    };

    return (
        <div className="sign-up-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" value={name} placeholder='Name' onChange={handleNameChange} required />
                </div>
                <div className="form-group">
                    <input type="password" value={password} placeholder='Password' onChange={handlePasswordChange} required />
                </div>
                <div className="form-group">
                    <input type="email" value={email} placeholder='Email' onChange={handleEmailChange} required />
                </div>
                <div className="form-group gender-mf">
                    <label>Gender:</label>
                    <input type="radio" id="html" name="fav_language" value={gender} onChange={handleGenderChange} />
                    <label for="html">Male</label>
                        <input type="radio" id="css" name="fav_language" value={gender} onChange={handleGenderChange}  />
                        <label for="css">Female</label>
                           

                            {/* <select value={gender} onChange={handleGenderChange} required>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select> */}

                        </div>
                        <div className='button-sign'>
                        <button className='sign-up' type="submit">Sign Up</button>
                        <button className='sign-in' type="submit">Sign In</button>
                       {/* <Link to='/register'> <button className='sign-up' type="submit">Sign Up</button></Link>
                        <Link to='/'><button className='sign-in' type="submit">Sign In</button></Link> */}
                        </div>
                    </form>
                </div>
                );
  };


export default Register
