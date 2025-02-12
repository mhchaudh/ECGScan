import './App.css';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import Home from './Pages/Home'; // Import the new Home component
import Confirm from './Pages/Confirm';


function App() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }
  return (
    <div>
      <div className="top-bar">
        <span>ECG Scan</span>
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>☰</button>
          {dropdownOpen && (
            <div className="dropdown-content">

              {/* I prompted ChatGPT to ask "How do I set up React Router with multiple pages for a navigation menu?" */}

              <Link to="/home">Home</Link>
              <Link to="/option2">Option 2</Link>
              <Link to="/about">About</Link>
            </div>
          )}
        </div>
      </div>


      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/confirm" element={<Confirm />} />
      </Routes>
    </div>
  );
}

export default App;