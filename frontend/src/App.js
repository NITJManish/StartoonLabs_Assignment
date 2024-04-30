import './App.css';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard';

function App() {
  return (
    <>
    <Navbar/>
<BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="register" element={<Register/>} />
        <Route path="home" element={<Home/>} />
        <Route path="admindashboard" element={<AdminDashboard/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
