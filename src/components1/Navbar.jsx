import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import './Navbar.css';

const drawerWidth = 150;

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false); // State for toggling logout option
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('username');
    if (loggedInUser) {
      setIsLoggedIn(true);
      setUsername(loggedInUser);
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    localStorage.removeItem('username');
    navigate('/login');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleCropsClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleProfileDropdown = () => {
    setIsProfileOpen(prevState => !prevState);
  };

  return (
    <>
      <AppBar position="fixed" style={{ backgroundColor: "#0073cf" }}>
        <Toolbar>
          &emsp;&emsp;
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" style={{ marginRight: "470px" }}>
            Blue Field Techno
          </Typography>

          <div className="navbar-links">
            <Link to="/" className="navbar-link">
              <Button style={{color:"white"}}>
                Home
              </Button>
            </Link>

            {!isLoggedIn ? (
              <>
                <Link to="/login" className="navbar-link">
                  <Button style={{color:"white"}}>
                    Login
                  </Button>
                </Link>

                <Link to="/signup" className="navbar-link">
                  <Button style={{color:"white"}}>
                    Sign Up
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Button  aria-controls="crops-menu"
                  aria-haspopup="true"
                  onClick={handleCropsClick}
                  style={{fontSize:"14.5px",color:"white"}}
                >
                  Crops&emsp;
                </Button>
                <Menu
                  id="crops-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={handleMenuClose}>
                    <Link to="/cropimprovement" className="menu-link">
                      <Button>
                        Crop Improvement
                      </Button>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <Link to="/cropmanagement" className="menu-link">
                      <Button>
                        Crop Management
                      </Button>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <Link to="/cropirrigation" className="menu-link">
                      <Button>
                        Crop Irrigation
                      </Button>
                    </Link>
                  </MenuItem>
                </Menu>

                <Link to="/weather1" className="navbar-link">
                  <Button style={{color:"white"}}>
                    Weather
                  </Button>
                </Link>
                <Link to="/maps" className="navbar-link">
                  <Button style={{color:"white"}}>
                    Maps
                  </Button>
                </Link>
                <Link to="/cropweather">
                  <Button style={{color:"white"}}>Crop Weather</Button>
                </Link>
                <Link to="/carbornfootprint">
                  <Button style={{color:"white"}}>Carborn Footprint</Button>
                </Link>

                <div className="navbar-profile" onClick={toggleProfileDropdown} style={{cursor: 'pointer'}}>
                  <div className="profile-circle">
                    <span>{username.charAt(0)}</span>
                  </div>
                  {isProfileOpen && (
                    <div className="profile-dropdown">
                      <span className="profile-username">{username}</span>
                      <button className="logout-button" onClick={handleLogout}>Logout</button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="persistent"
        anchor="left"
        open={isSidebarOpen}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#0073cf',
            color: '#fff',
          },
        }}
      >
        <Toolbar />
        <div className="sidebar-header">
          <IconButton edge="start" color="inherit" aria-label="close" onClick={handleCloseSidebar}>
            <CloseIcon />
          </IconButton>
        </div>
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <Link to="/weather">
              <Button>
                <ListItemText primary="Weather" />
              </Button>
            </Link>
            <a href="http://tnagriculture.in/ARS/home/reservoir" target="_blank">
              <Button>
                <ListItemText primary="Dam Level" />
              </Button>
            </a>
            <Link to="/daminspection">
              <Button><ListItemText primary="Inspection" /></Button>
            </Link>
            <Link to="/email">
              <Button><ListItemText primary="Email" /></Button>
            </Link>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
