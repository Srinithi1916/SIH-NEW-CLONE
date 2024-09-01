// import React, { useState, useEffect, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import Button from "@mui/material/Button";
// import MicIcon from "@mui/icons-material/Mic";
// import Avatar from "@mui/material/Avatar";
// import Collapse from "@mui/material/Collapse";
// import ExpandLess from "@mui/icons-material/ExpandLess";
// import ExpandMore from "@mui/icons-material/ExpandMore";
// import "./Navbar.css";

// const drawerWidth = 150;

// const Navbar = () => {
//   const { t, i18n } = useTranslation();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [username, setUsername] = useState("");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [languageAnchorEl, setLanguageAnchorEl] = useState(null);
//   const [openCrops, setOpenCrops] = useState(false); // State for expanding crops section
//   const navigate = useNavigate();
//   const recognitionRef = useRef(null);

//   useEffect(() => {
//     const loggedInUser = localStorage.getItem("username");
//     if (loggedInUser) {
//       setIsLoggedIn(true);
//       setUsername(loggedInUser);
//     }

//     // Speech recognition setup code here...

//     return () => {
//       // Cleanup code for speech recognition...
//     };
//   }, [navigate, t, i18n.language]);

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setUsername("");
//     localStorage.removeItem("username");
//     navigate("/login");
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen((prevState) => !prevState);
//   };

//   const handleCloseSidebar = () => {
//     setIsSidebarOpen(false);
//   };

//   const handleLanguageMenuOpen = (event) => {
//     setLanguageAnchorEl(event.currentTarget);
//   };

//   const handleLanguageMenuClose = () => {
//     setLanguageAnchorEl(null);
//   };

//   const handleLanguageChange = (lang) => {
//     i18n.changeLanguage(lang);
//     handleLanguageMenuClose();
//   };

//   const handleCropsClick = () => {
//     setOpenCrops((prevOpen) => !prevOpen); // Toggle the crops section
//   };

//   return (
//     <>
//       <AppBar position="fixed" style={{ backgroundColor: "#0073cf" }}>
//         <Toolbar>
//           <IconButton
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             onClick={toggleSidebar}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             style={{ marginRight: "auto" }}
//           >
//             {t("title")}
//           </Typography>

//           <div className="navbar-links">
//             <Link to="/" className="navbar-link">
//               <Button style={{ color: "white" }}>{t("home")}</Button>
//             </Link>

//             {!isLoggedIn ? (
//               <>
//                 <Link to="/login" className="navbar-link">
//                   <Button style={{ color: "white" }}>{t("login")}</Button>
//                 </Link>

//                 <Link to="/signup" className="navbar-link">
//                   <Button style={{ color: "white" }}>{t("signup")}</Button>
//                 </Link>
//               </>
//             ) : (
//               <>
//                 {/* Other Links */}
//                 <Link to="/weather" className="navbar-link">
//                   <Button style={{ color: "white" }}>{t("weather")}</Button>
//                 </Link>
//                 <a
//                   href="http://tnagriculture.in/ARS/home/reservoir"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="navbar-link"
//                 >
//                   <Button style={{ color: "white" }}>{t("damLevel")}</Button>
//                 </a>
//                 <Link to="/daminspection" className="navbar-link">
//                   <Button style={{ color: "white" }}>{t("inspection")}</Button>
//                 </Link>
//                 <Link to="/email" className="navbar-link">
//                   <Button style={{ color: "white" }}>{t("alert")}</Button>
//                 </Link>

//                 <Button onClick={handleLogout} style={{ color: "white" }}>
//                   {t("logout")}
//                 </Button>
//               </>
//             )}

//             {/* Voice Command */}
//             <Button id="btnGiveCommand" style={{ color: "white" }}>
//               <MicIcon />
//               {t("voice")}
//             </Button>

//             {/* Language Selection */}
//             <Button
//               aria-controls="language-menu"
//               aria-haspopup="true"
//               onClick={handleLanguageMenuOpen}
//               style={{ color: "white" }}
//             >
//               {t("language")}
//             </Button>
//             <Menu
//               id="language-menu"
//               anchorEl={languageAnchorEl}
//               keepMounted
//               open={Boolean(languageAnchorEl)}
//               onClose={handleLanguageMenuClose}
//             >
//               <MenuItem onClick={() => handleLanguageChange("en")}>
//                 {t("english")}
//               </MenuItem>
//               <MenuItem onClick={() => handleLanguageChange("ta")}>
//                 {t("tamil")}
//               </MenuItem>
//               <MenuItem onClick={() => handleLanguageChange("hi")}>
//                 {t("hindi")}
//               </MenuItem>
//             </Menu>

//             {isLoggedIn && (
//               <div className="navbar-profile">
//                 <Avatar className="avatar">
//                   {username.charAt(0).toUpperCase()}
//                 </Avatar>
//               </div>
//             )}
//           </div>
//         </Toolbar>
//       </AppBar>

//       {/* Sidebar */}
//       <Drawer
//         variant="persistent"
//         anchor="left"
//         open={isSidebarOpen}
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           "& .MuiDrawer-paper": {
//             width: drawerWidth,
//             boxSizing: "border-box",
//             backgroundColor: "#0073cf",
//             color: "#fff",
//           },
//         }}
//       >
//         <Toolbar />
//         <div className="sidebar-header">
//           <IconButton
//             edge="start"
//             color="inherit"
//             aria-label="close"
//             onClick={handleCloseSidebar}
//           >
//             <CloseIcon />
//           </IconButton>
//         </div>
//         <Box sx={{ overflow: "auto" }}>
//           <List>
//             {/* Crops Menu */}
//             <Button onClick={handleCropsClick} className="sidebar-link">
//               <ListItemText primary={t("crops")} />
//               {openCrops ? <ExpandLess /> : <ExpandMore />}
//             </Button>
//             <Collapse in={openCrops} timeout="auto" unmountOnExit>
//               <List component="div" disablePadding>
//                 <Link to="/cropimprovement" className="sidebar-link">
//                   <Button>
//                     <ListItemText primary={t("cropImprovement")} />
//                   </Button>
//                 </Link>
//                 <Link to="/cropmanagement" className="sidebar-link">
//                   <Button>
//                     <ListItemText primary={t("cropManagement")} />
//                   </Button>
//                 </Link>
//                 <Link to="/cropirrigation" className="sidebar-link">
//                   <Button>
//                     <ListItemText primary={t("cropIrrigation")} />
//                   </Button>
//                 </Link>
//               </List>
//             </Collapse>

//             {/* Other Sidebar Links */}
//             <Link to="/weather1" className="sidebar-link">
//               <Button>
//                 <ListItemText primary={t("weather")} />
//               </Button>
//             </Link>
//             <Link to="/cropweather" className="sidebar-link">
//               <Button>
//                 <ListItemText primary={t("cropWeather")} />
//               </Button>
//             </Link>
//             <Link to="/carbonfootprint" className="sidebar-link">
//               <Button>
//                 <ListItemText primary={t("carbonFootprint")} />
//               </Button>
//             </Link>
//           </List>
//         </Box>
//       </Drawer>
//     </>
//   );
// };

// export default Navbar;
// import React, { useState, useEffect, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import Button from "@mui/material/Button";
// import MicIcon from "@mui/icons-material/Mic";
// import Avatar from "@mui/material/Avatar";
// import Collapse from "@mui/material/Collapse";
// import ExpandLess from "@mui/icons-material/ExpandLess";
// import ExpandMore from "@mui/icons-material/ExpandMore";
// import "./Navbar.css";

// const drawerWidth = 150;

// const Navbar = () => {
//   const { t, i18n } = useTranslation();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [username, setUsername] = useState("");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [languageAnchorEl, setLanguageAnchorEl] = useState(null);
//   const [openCrops, setOpenCrops] = useState(false);
//   const navigate = useNavigate();
//   const recognitionRef = useRef(null);

//   useEffect(() => {
//     const loggedInUser = localStorage.getItem("username");
//     if (loggedInUser) {
//       setIsLoggedIn(true);
//       setUsername(loggedInUser);
//     }

//     if ("webkitSpeechRecognition" in window) {
//       const recognition = new window.webkitSpeechRecognition();
//       recognition.lang = "en-US";
//       recognition.continuous = false;
//       recognition.interimResults = false;

//       recognition.onresult = (event) => {
//         const command = event.results[0][0].transcript;
//         console.log("Recognized command:", command); // Log the command
//         handleVoiceCommand(command);
//       };

//       recognition.onerror = (event) => {
//         console.error("Speech recognition error:", event.error);
//       };

//       recognition.onend = () => {
//         console.log("Speech recognition ended");
//       };

//       recognitionRef.current = recognition;
//     } else {
//       console.error("Speech recognition not supported");
//     }

//     return () => {
//       if (recognitionRef.current) {
//         recognitionRef.current.stop();
//         recognitionRef.current = null;
//       }
//     };
//   }, []);

//   const handleVoiceCommand = (command) => {
//     console.log("Handling command:", command); // Log command handling
//     switch (command.toLowerCase()) {
//       case "weather":
//         navigate("/weather");
//         break;
//       case "login":
//         navigate("/login");
//         break;
//       case "signup":
//         navigate("/signup");
//         break;
//       case "dam level":
//         window.open("http://tnagriculture.in/ARS/home/reservoir", "_blank");
//         break;
//       case "inspection":
//         navigate("/daminspection");
//         break;
//       case "alert":
//         navigate("/email");
//         break;
//       case "home":
//         navigate("/");
//         break;
//       case "cropimprovement":
//         navigate("/cropimprovement");
//         break;
//       default:
//         console.log("Command not recognized");
//     }
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setUsername("");
//     localStorage.removeItem("username");
//     navigate("/login");
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen((prevState) => !prevState);
//   };

//   const handleCloseSidebar = () => {
//     setIsSidebarOpen(false);
//   };

//   const handleLanguageMenuOpen = (event) => {
//     setLanguageAnchorEl(event.currentTarget);
//   };

//   const handleLanguageMenuClose = () => {
//     setLanguageAnchorEl(null);
//   };

//   const handleLanguageChange = (lang) => {
//     i18n.changeLanguage(lang);
//     handleLanguageMenuClose();
//   };

//   const handleCropsClick = () => {
//     setOpenCrops((prevOpen) => !prevOpen);
//   };

//   return (
//     <>
//       <AppBar position="fixed" style={{ backgroundColor: "#0073cf" }}>
//         <Toolbar>
//           <IconButton
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             onClick={toggleSidebar}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             style={{ marginRight: "auto" }}
//           >
//             {t("title")}
//           </Typography>

//           <div className="navbar-links">
//             <Link to="/" className="navbar-link">
//               <Button style={{ color: "white" }}>{t("home")}</Button>
//             </Link>

//             {!isLoggedIn ? (
//               <>
//                 <Link to="/login" className="navbar-link">
//                   <Button style={{ color: "white" }}>{t("login")}</Button>
//                 </Link>

//                 <Link to="/signup" className="navbar-link">
//                   <Button style={{ color: "white" }}>{t("signup")}</Button>
//                 </Link>
//               </>
//             ) : (
//               <>
//                 <Link to="/weather" className="navbar-link">
//                   <Button style={{ color: "white" }}>{t("weather")}</Button>
//                 </Link>
//                 <a
//                   href="http://tnagriculture.in/ARS/home/reservoir"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="navbar-link"
//                 >
//                   <Button style={{ color: "white" }}>{t("damLevel")}</Button>
//                 </a>
//                 <Link to="/daminspection" className="navbar-link">
//                   <Button style={{ color: "white" }}>{t("inspection")}</Button>
//                 </Link>
//                 <Link to="/email" className="navbar-link">
//                   <Button style={{ color: "white" }}>{t("alert")}</Button>
//                 </Link>

//                 <Button onClick={handleLogout} style={{ color: "white" }}>
//                   {t("logout")}
//                 </Button>
//               </>
//             )}

//             <Button
//               onClick={() => recognitionRef.current.start()}
//               style={{ color: "white" }}
//             >
//               <MicIcon />
//               {t("voice")}
//             </Button>

//             <Button
//               aria-controls="language-menu"
//               aria-haspopup="true"
//               onClick={handleLanguageMenuOpen}
//               style={{ color: "white" }}
//             >
//               {t("language")}
//             </Button>
//             <Menu
//               id="language-menu"
//               anchorEl={languageAnchorEl}
//               keepMounted
//               open={Boolean(languageAnchorEl)}
//               onClose={handleLanguageMenuClose}
//             >
//               <MenuItem onClick={() => handleLanguageChange("en")}>
//                 {t("english")}
//               </MenuItem>
//               <MenuItem onClick={() => handleLanguageChange("ta")}>
//                 {t("tamil")}
//               </MenuItem>
//               <MenuItem onClick={() => handleLanguageChange("hi")}>
//                 {t("hindi")}
//               </MenuItem>
//             </Menu>

//             {isLoggedIn && (
//               <div className="navbar-profile">
//                 <Avatar className="avatar">
//                   {username.charAt(0).toUpperCase()}
//                 </Avatar>
//               </div>
//             )}
//           </div>
//         </Toolbar>
//       </AppBar>

//       <Drawer
//         variant="persistent"
//         anchor="left"
//         open={isSidebarOpen}
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           "& .MuiDrawer-paper": {
//             width: drawerWidth,
//             boxSizing: "border-box",
//             backgroundColor: "#0073cf",
//             color: "#fff",
//           },
//         }}
//       >
//         <Toolbar />
//         <div className="sidebar-header">
//           <IconButton
//             edge="start"
//             color="inherit"
//             aria-label="close"
//             onClick={handleCloseSidebar}
//           >
//             <CloseIcon />
//           </IconButton>
//         </div>
//         <Box sx={{ overflow: "auto" }}>
//           <List>
//             <Button onClick={handleCropsClick} className="sidebar-link">
//               <ListItemText primary={t("crops")} />
//               {openCrops ? <ExpandLess /> : <ExpandMore />}
//             </Button>
//             <Collapse in={openCrops} timeout="auto" unmountOnExit>
//               <List component="div" disablePadding>
//                 <Link to="/cropimprovement" className="sidebar-link">
//                   <Button>
//                     <ListItemText primary={t("cropImprovement")} />
//                   </Button>
//                 </Link>
//                 <Link to="/cropmanagement" className="sidebar-link">
//                   <Button>
//                     <ListItemText primary={t("cropManagement")} />
//                   </Button>
//                 </Link>
//                 <Link to="/cropirrigation" className="sidebar-link">
//                   <Button>
//                     <ListItemText primary={t("cropIrrigation")} />
//                   </Button>
//                 </Link>
//               </List>
//             </Collapse>

//             <Link to="/weather1" className="sidebar-link">
//               <Button>
//                 <ListItemText primary={t("weather")} />
//               </Button>
//             </Link>

//             <Link to="/cropclimate" className="sidebar-link">
//               <Button>
//                 <ListItemText primary={t("cropClimate")} />
//               </Button>
//             </Link>

//             <Link to="/carbonfootprint" className="sidebar-link">
//               <Button>
//                 <ListItemText primary={t("carbonFootprint")} />
//               </Button>
//             </Link>
//           </List>
//         </Box>
//       </Drawer>
//     </>
//   );
// };

// export default Navbar;
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import MicIcon from "@mui/icons-material/Mic";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import "./Navbar.css";

const drawerWidth = 190;

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [languageAnchorEl, setLanguageAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false); // State for Dialog
  const navigate = useNavigate();
  const recognitionRef = useRef(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("username");
    if (loggedInUser) {
      setIsLoggedIn(true);
      setUsername(loggedInUser);
    }

    const setupSpeechRecognition = () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }

      recognitionRef.current = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();
      recognitionRef.current.lang = i18n.language === "en" ? "en-US" : "ta-IN";
      recognitionRef.current.interimResults = false;

      recognitionRef.current.onresult = function (event) {
        var last = event.results.length - 1;
        var command = event.results[last][0].transcript.toLowerCase();

        // Navbar commands
        if (command.includes(t("home").toLowerCase())) {
          navigate("/");
        } else if (command.includes(t("login").toLowerCase())) {
          navigate("/login");
        } else if (command.includes(t("signup").toLowerCase())) {
          navigate("/signup");
        } else if (command.includes(t("weather").toLowerCase())) {
          navigate("/weather1");
        } else if (command.includes(t("maps").toLowerCase())) {
          navigate("/maps");
        } else if (command.includes(t("cropWeather").toLowerCase())) {
          navigate("/cropweather");
        } else if (command.includes(t("carbonFootprint").toLowerCase())) {
          navigate("/carbornfootprint");
        } else if (command.includes(t("profile").toLowerCase())) {
          navigate("/profile");
        } else if (command.includes(t("logout").toLowerCase())) {
          handleLogout();
        }
        // Drawer commands
        else if (command.includes(t("cropImprovement").toLowerCase())) {
          navigate("/cropimprovement");
        } else if (command.includes(t("cropManagement").toLowerCase())) {
          navigate("/cropmanagement");
        } else if (command.includes(t("cropIrrigation").toLowerCase())) {
          navigate("/cropirrigation");
        } else if (command.includes(t("damLevel").toLowerCase())) {
          window.open("http://tnagriculture.in/ARS/home/reservoir", "_blank");
        } else if (command.includes(t("inspection").toLowerCase())) {
          navigate("/daminspection");
        } else if (command.includes(t("alert").toLowerCase())) {
          navigate("/email");
        }

        // Close the dialog after recognizing a command
        handleDialogClose();
      };

      recognitionRef.current.onspeechend = function () {
        recognitionRef.current.stop();
      };

      recognitionRef.current.onerror = function (event) {
        console.error("Error occurred in recognition:", event.error);
      };
    };

    setupSpeechRecognition();

    const startRecognition = () => {
      if (recognitionRef.current) {
        recognitionRef.current.start();
      }
    };

    document
      .getElementById("btnGiveCommand")
      ?.addEventListener("click", startRecognition);

    return () => {
      document
        .getElementById("btnGiveCommand")
        ?.removeEventListener("click", startRecognition);
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [navigate, i18n.language, t]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    localStorage.removeItem("username");
    navigate("/login");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
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

  const handleLanguageMenuOpen = (event) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setLanguageAnchorEl(null);
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    handleLanguageMenuClose();
  };

  const handleVoiceClick = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <AppBar position="fixed" style={{ backgroundColor: "#0073cf" }}>
        <Toolbar>
          &emsp;&emsp;
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleSidebar}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            style={{ marginRight: "230px" }}
          >
            {t("title")}
          </Typography>
          <div className="navbar-links">
            <Link to="/" className="navbar-link">
              <Button style={{ color: "white" }}>{t("home")}</Button>
            </Link>
            {!isLoggedIn ? (
              <>
                <Link to="/login" className="navbar-link">
                  <Button style={{ color: "white" }}>{t("login")}</Button>
                </Link>
                <Link to="/signup" className="navbar-link">
                  <Button style={{ color: "white" }}>{t("signup")}</Button>
                </Link>
                <Link to="/weather">
                  <Button style={{ color: "white" }}>{t("weather")}</Button>
                </Link>
                <a
                  href="http://tnagriculture.in/ARS/home/reservoir"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button style={{ color: "white" }}>{t("damLevel")}</Button>
                </a>
                <Link to="/daminspection">
                  <Button style={{ color: "white" }}>{t("inspection")}</Button>
                </Link>
                <Link to="/email">
                  <Button style={{ color: "white" }}>{t("alert")}</Button>
                </Link>
                <Link to="/profile" className="navbar-link">
                  <Button style={{ color: "white" }}>{t("profile")}</Button>
                </Link>
                <Link to="/maps" className="navbar-link">
                  <Button style={{ color: "white" }}>{t("maps")}</Button>
                </Link>
              </>
            ) : (
              <div className="navbar-profile">
                <Typography variant="h6" component="div">
                  {username}
                </Typography>
                <Button onClick={handleLogout} style={{ color: "white" }}>
                  {t("logout")}
                </Button>
              </div>
            )}

            <Button
              id="btnGiveCommand"
              variant="contained"
              color="secondary"
              startIcon={<MicIcon />}
              style={{ marginLeft: "20px", backgroundColor: "#0073cf" }}
              onClick={handleVoiceClick} // Open dialog on click
            >
              {t("voice")}
            </Button>

            <div style={{ marginLeft: "auto" }}>
              <Button
                aria-controls="language-menu"
                aria-haspopup="true"
                onClick={handleLanguageMenuOpen}
                style={{ color: "white" }}
              >
                {t("language")}
              </Button>
              <Menu
                id="language-menu"
                anchorEl={languageAnchorEl}
                keepMounted
                open={Boolean(languageAnchorEl)}
                onClose={handleLanguageMenuClose}
              >
                <MenuItem onClick={() => handleLanguageChange("en")}>
                  {t("english")}
                </MenuItem>
                <MenuItem onClick={() => handleLanguageChange("ta")}>
                  {t("tamil")}
                </MenuItem>
                <MenuItem onClick={() => handleLanguageChange("hi")}>
                  {t("hindi")}
                </MenuItem>
              </Menu>
            </div>
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
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#0073cf",
            color: "#fff",
          },
        }}
      >
        <Toolbar />
        <div className="sidebar-header">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="close"
            onClick={handleCloseSidebar}
          >
            <CloseIcon />
          </IconButton>
        </div>
        <Box sx={{ overflow: "auto" }}>
          <List>
            <Button
              aria-controls="crops-menu"
              aria-haspopup="true"
              onClick={handleCropsClick}
              style={{ fontSize: "14.5px", color: "white" }}
            >
              {t("crops")}&emsp;
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
                  <Button>{t("cropImprovement")}</Button>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="/cropmanagement" className="menu-link">
                  <Button>{t("cropManagement")}</Button>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="/cropirrigation" className="menu-link">
                  <Button>{t("cropIrrigation")}</Button>
                </Link>
              </MenuItem>
            </Menu>
            <Link to="/weather1" className="navbar-link">
              <Button style={{ color: "white" }}>{t("weather")}</Button>
            </Link>
            <Link to="/cropweather" className="navbar-link">
              <Button style={{ color: "white" }}>{t("cropWeather")}</Button>
            </Link>
            <Link to="/carbornfootprint" className="navbar-link">
              <Button style={{ color: "white" }}>{t("carbonFootprint")}</Button>
            </Link>
          </List>
        </Box>
      </Drawer>

      {/* Dialog for voice command */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>{t("speakNow")}</DialogTitle>
        <DialogContent>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MicIcon
              style={{ fontSize: 50, color: "#0073cf", marginRight: 20 }}
            />
            <Typography>{t("sayCommand")}</Typography>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            {t("close")}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Navbar;
