import './App.css'
import { useState } from 'react'

function App() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <div className="top-bar">
        <span>ECG Scan</span>
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>☰</button>
          {dropdownOpen && (
            <div className="dropdown-content">
              <a href="Option1">Option 1</a>
              <a href="Option2">Option 2</a>
              <a href="About">About</a>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App