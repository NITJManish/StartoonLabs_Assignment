import React, {useState,useEffect} from 'react'
import './App.css';
import axios from 'axios';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkLoginStatus = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        await axios.post('http://localhost:5000/logout', { token }); // Assuming you have a checkLogin endpoint in your backend
        setIsLoggedIn(true);
      } catch (error) {
        console.error('Invalid token');
        setIsLoggedIn(false);
      }
    } else {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);



  return (
    <>
<BrowserRouter>
<Navbar/>
    <Routes>
     {!isLoggedIn && <Route exact path="/" element={<Login/>} />}
        <Route path="register" element={<Register/>} />
       {isLoggedIn && <Route path="home" element={<Home />} />} 
        {isLoggedIn && <Route path="admindashboard" element={<AdminDashboard/>} />}
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
