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

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  if (isLoading) {
    return null; 
  }

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
      <AppBar position="fixed" className="app-bar">
        <Toolbar>
          <img 
            src={logo}
            alt="ECGenius Logo" 
            className="logo"
            onClick={() => { navigate("/home"); }}
          />
          <Typography 
            variant="h6" 
            className="app-title"
            onClick={() => { navigate("/home"); }}
          >
            ECGenius
          </Typography>
          <Box sx={{ flexGrow: 10 }} />
          <IconButton color="inherit" onClick={toggleDropdown}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={dropdownOpen}
        open={Boolean(dropdownOpen)}
        onClose={() => setDropdownOpen(null)}
      >
        <MenuItem onClick={() => navigate("/home")} className="menu-item">Home</MenuItem>
        <MenuItem onClick={() => navigate("/about")} className="menu-item">About</MenuItem>
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
