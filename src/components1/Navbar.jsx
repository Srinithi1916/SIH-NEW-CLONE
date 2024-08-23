import React, { useState, useEffect, useRef } from 'react';
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
import MicIcon from '@mui/icons-material/Mic';
import Avatar from '@mui/material/Avatar';
import './Navbar.css';

const drawerWidth = 150;

const translations = {
  en: {
    home: 'Home',
    login: 'Login',
    signup: 'Sign Up',
    crops: 'Crops',
    cropImprovement: 'Crop Improvement',
    cropManagement: 'Crop Management',
    cropIrrigation: 'Crop Irrigation',
    weather: 'Weather',
    maps: 'Maps',
    cropWeather: 'Crop Weather',
    carbonFootprint: 'Carbon Footprint',
    profile: 'Profile',
    logout: 'Logout',
    voice: 'Voice',
    damLevel: 'Dam Level',
    inspection: 'Inspection',
    email: 'Email',
    title: 'Blue Field Techno',
    language: 'Language',
    english: 'English',
    tamil: 'தமிழ்',
  },
  ta: {
    home: 'முகப்பு',
    login: 'உள்நுழைய',
    signup: 'பதிவு செய்ய',
    crops: 'பயிர்கள்',
    cropImprovement: 'பயிர் மேம்பாடு',
    cropManagement: 'பயிர் மேலாண்மை',
    cropIrrigation: 'பயிர் பாசனம்',
    weather: 'வானிலை',
    maps: 'வரைபடங்கள்',
    cropWeather: 'பயிர் காலநிலை',
    carbonFootprint: 'கார்பன் கால்',
    profile: 'சுயவிவரம்',
    logout: 'வெளியேறு',
    voice: 'குரல்',
    damLevel: 'அணை நிலை',
    inspection: 'ஆய்வு',
    email: 'மின்னஞ்சல்',
    title: 'ப்ளூ பீல்ட் டெக்னோ',
    language: 'மொழி',
    english: 'ஆங்கிலம்',
    tamil: 'தமிழ்',
  }
};

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [languageAnchorEl, setLanguageAnchorEl] = useState(null);
  const [language, setLanguage] = useState('en');
  const navigate = useNavigate();
  const recognitionRef = useRef(null);
  const profileButtonRef = useRef(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('username');
    if (loggedInUser) {
      setIsLoggedIn(true);
      setUsername(loggedInUser);
    }

    const setupSpeechRecognition = () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      
      recognitionRef.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognitionRef.current.lang = language === 'en' ? 'en-US' : 'ta-IN';
      recognitionRef.current.interimResults = false;

      recognitionRef.current.onresult = function (event) {
        var last = event.results.length - 1;
        var command = event.results[last][0].transcript.toLowerCase();

        if (command.includes(translations[language].home.toLowerCase())) {
          navigate('/');
        } else if (command.includes(translations[language].login.toLowerCase())) {
          navigate('/login');
        } else if (command.includes(translations[language].signup.toLowerCase())) {
          navigate('/signup');
        } else if (command.includes(translations[language].cropImprovement.toLowerCase())) {
          navigate('/cropimprovement');
        } else if (command.includes(translations[language].cropManagement.toLowerCase())) {
          navigate('/cropmanagement');
        } else if (command.includes(translations[language].cropIrrigation.toLowerCase())) {
          navigate('/cropirrigation');
        } else if (command.includes(translations[language].weather.toLowerCase())) {
          navigate('/weather1');
        } else if (command.includes(translations[language].maps.toLowerCase())) {
          navigate('/maps');
        } else if (command.includes(translations[language].cropWeather.toLowerCase())) {
          navigate('/cropweather');
        } else if (command.includes(translations[language].carbonFootprint.toLowerCase())) {
          navigate('/carbornfootprint');
        } else if (command.includes(translations[language].profile.toLowerCase())) {
          navigate('/profile');
        } else if (command.includes(translations[language].logout.toLowerCase())) {
          handleLogout();
        }
      };

      recognitionRef.current.onspeechend = function () {
        recognitionRef.current.stop();
      };

      recognitionRef.current.onerror = function (event) {
        console.error('Error occurred in recognition:', event.error);
      };
    };

    setupSpeechRecognition();

    const startRecognition = () => {
      if (recognitionRef.current) {
        recognitionRef.current.start();
      }
    };

    document.getElementById('btnGiveCommand')?.addEventListener('click', startRecognition);

    return () => {
      document.getElementById('btnGiveCommand')?.removeEventListener('click', startRecognition);
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [navigate, language]);

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

  const handleLanguageMenuOpen = (event) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setLanguageAnchorEl(null);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    handleLanguageMenuClose();
  };

  return (
    <>
      <AppBar position="fixed" style={{ backgroundColor: "#0073cf" }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" style={{ marginRight: "auto" }}>
            {translations[language].title}
          </Typography>

          <div className="navbar-links">
            <Link to="/" className="navbar-link">
              <Button style={{ color: "white" }}>
                {translations[language].home}
              </Button>
            </Link>

            {!isLoggedIn ? (
              <>
                <Link to="/login" className="navbar-link">
                  <Button style={{ color: "white" }}>
                    {translations[language].login}
                  </Button>
                </Link>

                <Link to="/signup" className="navbar-link">
                  <Button style={{ color: "white" }}>
                    {translations[language].signup}
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Button
                  aria-controls="crops-menu"
                  aria-haspopup="true"
                  onClick={handleCropsClick}
                  style={{ fontSize: "14.5px", color: "white" }}
                >
                  {translations[language].crops}&emsp;
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
                        {translations[language].cropImprovement}
                      </Button>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <Link to="/cropmanagement" className="menu-link">
                      <Button>
                        {translations[language].cropManagement}
                      </Button>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <Link to="/cropirrigation" className="menu-link">
                      <Button>
                        {translations[language].cropIrrigation}
                      </Button>
                    </Link>
                  </MenuItem>
                </Menu>
                
                <Link to="/weather1" className="navbar-link">
                  <Button style={{ color: "white" }}>
                    {translations[language].weather}
                  </Button>
                </Link>

                <Link to="/maps" className="navbar-link">
                  <Button style={{ color: "white" }}>
                    {translations[language].maps}
                  </Button>
                </Link>

                <Link to="/cropweather" className="navbar-link">
                  <Button style={{ color: "white" }}>
                    {translations[language].cropWeather}
                  </Button>
                </Link>

                <Link to="/carbornfootprint" className="navbar-link">
                  <Button style={{ color: "white" }}>
                    {translations[language].carbonFootprint}
                  </Button>
                </Link>
                
                
              </>
            )}

            <Button
              id="btnGiveCommand"
              aria-controls="voice-menu"
              aria-haspopup="true"
              style={{ color: "white" }}
            >
              <MicIcon />
              {translations[language].voice}
            </Button>

            <Button
              aria-controls="language-menu"
              aria-haspopup="true"
              onClick={handleLanguageMenuOpen}
              style={{ color: "white" }}
            >
              {translations[language].language}
            </Button>
            <Menu
              id="language-menu"
              anchorEl={languageAnchorEl}
              keepMounted
              open={Boolean(languageAnchorEl)}
              onClose={handleLanguageMenuClose}
            >
              <MenuItem onClick={() => handleLanguageChange('en')}>
                {translations[language].english}
              </MenuItem>
              <MenuItem onClick={() => handleLanguageChange('ta')}>
                {translations[language].tamil}
              </MenuItem>
            </Menu>

            
                <Button
                  ref={profileButtonRef}
                  onClick={toggleProfileDropdown}
                  style={{ color: "white" }}
                >
                  <Avatar>{username.charAt(0)}</Avatar>
                </Button>
                <Menu
                  anchorEl={profileButtonRef.current}
                  open={isProfileOpen}
                  onClose={toggleProfileDropdown}
                >
                  <MenuItem disabled>{username}</MenuItem>
                  <MenuItem onClick={handleLogout}>
                    {translations[language].logout}
                  </MenuItem>
                </Menu>
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
                <ListItemText primary={translations[language].weather} />
              </Button>
            </Link>
            <a href="http://tnagriculture.in/ARS/home/reservoir" target="_blank" rel="noopener noreferrer">
              <Button>
                <ListItemText primary={translations[language].damLevel} />
              </Button>
            </a>
            <Link to="/daminspection">
              <Button><ListItemText primary={translations[language].inspection} /></Button>
            </Link>
            <Link to="/email">
              <Button><ListItemText primary={translations[language].email} /></Button>
            </Link>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;