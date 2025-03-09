import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import Home from './Pages/Home'; 
import Confirm from './Pages/Confirm';
import ConfirmUpload from './Pages/ConfirmUpload';
import logo from './assets/1-3b2842e1-removebg-preview.png'; 

// Import Material UI components
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Box, Switch } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function App() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = (event) => {
    setDropdownOpen(dropdownOpen ? null : event.currentTarget);
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (!hasVisited) {
      sessionStorage.setItem("hasVisited", "true");
      navigate("/home");
    }
    setIsLoading(false);
  }, [navigate]);

  if (isLoading) {
    return null; 
  }

  return (
    <div style={{ backgroundColor: darkMode ? '#121212' : '#d5e1ed', minHeight: '100vh', color: darkMode ? '#ffffff' : '#000000' }}>
      <AppBar position="fixed" style={{ backgroundColor: darkMode ? '#333333' : '#3f51b5' }}>
        <Toolbar>
          <img 
            src={logo}
            alt="ECGenius Logo" 
            style={{ cursor: 'pointer', height: '50px', marginRight: '3px' , marginLeft: '-15px' }} 
            onClick={() => { navigate("/home"); }}
          />
          <Typography 
            variant="h6" 
            sx={{ cursor: 'pointer', fontFamily: 'Monaco, monospace', fontWeight: 'bolder', fontSize: '2rem' }} 
            onClick={() => { navigate("/home"); }}
          >
            ECGenius
          </Typography>
          <Box sx={{ flexGrow: 10 }} />
          <IconButton color="inherit" onClick={toggleDropdown}>
            <MenuIcon sx={{ fontSize: '2rem', marginRight: '-12px' }}/>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={dropdownOpen}
        open={Boolean(dropdownOpen)}
        onClose={() => setDropdownOpen(null)}
      >
        <MenuItem onClick={() => navigate("/home")} sx={{ borderBottom: '1px solid #ddd' }}>Home</MenuItem>
        <MenuItem onClick={() => navigate("/about")} sx={{ borderBottom: '1px solid #ddd' }}>About</MenuItem>
        <MenuItem>
          Dark Mode
          <Switch checked={darkMode} onChange={handleDarkModeToggle} />
        </MenuItem>
      </Menu>

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
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