import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate} from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import Home from './Pages/Home'; 
import Confirm from './Pages/Confirm';
import ConfirmUpload from './Pages/ConfirmUpload';

function App() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }
  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (!hasVisited) {
      sessionStorage.setItem("hasVisited", "true");
      navigate("/home");
    }
  }, [navigate]);
  return (
    <div>
      <div className="top-bar">
        <span style={{"cursor": "pointer"}} onClick={()=>{navigate("/home");}}>ECGenius</span>
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>☰</button>
          {dropdownOpen && (
            <div className="dropdown-content">

              {/* I prompted ChatGPT to ask "How do I set up React Router with multiple pages for a navigation menu?" */}

              <Link to="/home">Home</Link>
              <Link className="about-us" to="/about">About</Link>
            </div>
          )}
        </div>
      </div>

      <div className="main-content">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/confirmupload" element={<ConfirmUpload />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;