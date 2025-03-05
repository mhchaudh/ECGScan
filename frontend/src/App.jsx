import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import Home from './Pages/Home'; 
import Confirm from './Pages/Confirm';
import ConfirmUpload from './Pages/ConfirmUpload';

// Import Material UI components
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Button, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function App() {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const navigate = useNavigate();

  const toggleDropdown = (event) => {
    setDropdownOpen(dropdownOpen ? null : event.currentTarget);
  };

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (!hasVisited) {
      sessionStorage.setItem("hasVisited", "true");
      navigate("/home");
    }
  }, [navigate]);

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" sx={{ cursor: 'pointer' }} onClick={() => { navigate("/home"); }}>
            ECGenius
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
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
        <MenuItem onClick={() => navigate("/home")}>Home</MenuItem>
        <MenuItem onClick={() => navigate("/about")}>About</MenuItem>
      </Menu>

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
