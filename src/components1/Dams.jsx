// import React, { useEffect, useRef, useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup, Tooltip, ZoomControl, LayersControl } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import RoomIcon from '@mui/icons-material/Room';
// import ReactDOMServer from 'react-dom/server';
// import axios from 'axios';
// import { IconButton, Drawer, Button, Typography } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';

// function Dams() {
//     const dams = [
//         { name: 'Mettur Dam', lat: 11.816792191137534,  lng: 77.79811701859666, waterLevel: '72 m', height: '26 m', width: '13 m', capacity: '1.4 TMC', location: 'Mettur, Salem', floodAlerts: ['Salem', 'Namakkal'], waterUsed: '0.5 TMC' },
//         { name: 'Sathanur Dam', lat: 12.18482226830172, lng: 78.84996010098415, waterLevel: '80 m', height: '35 m', width: '12 m', capacity: '5.0 TMC', location: 'Sathanur, Thiruvannamalai', floodAlerts: ['Coimbatore', 'Palakkad'], waterUsed: '2.0 TMC' },
//         { name: 'Vaigai Dam', lat: 10.054807828489112, lng:  77.56641515758027, waterLevel: '85 m', height: '40 m', width: '15 m', capacity: '3.5 TMC', location: 'Vaigai, Madurai', floodAlerts: ['Madurai', ], waterUsed: '1.0 TMC' },
//         { name: 'Bhavanisagar Dam', lat: 11.471108506695543, lng:77.11432460930027, waterLevel: '78 m', height: '30 m', width: '14 m', capacity: '2.5 TMC', location: 'Erode', floodAlerts: ['Chengalpet', 'Erode'], waterUsed: '1.2 TMC' },
//         { name: 'Aliyar Dam', lat: 10.482915835998389,  lng:  76.98341087412295, waterLevel: '88 m', height: '28 m', width: '12 m', capacity: '3.0 TMC', location: ' Pollachi', floodAlerts: ['Erode', 'Tirupur'], waterUsed: '1.5 TMC' },
//         { name: 'Krishnagiri Dam', lat: 12.491239884194444, lng:  78.17321967454937, waterLevel: '85 m', height: '35 m', width: '10 m', capacity: '4.0 TMC', location: 'Krishnagiri', floodAlerts: ['Krishnagiri', 'Madurai'], waterUsed: '2.0 TMC' },
//         { name: 'Amaravati Dam', lat: 10.41845877295113, lng:  77.26347246679991, waterLevel: '80 m', height: '27 m', width: '10 m', capacity: '1.0 TMC', location: ' Tirupur', floodAlerts: ['Tirupur'], waterUsed: '0.6 TMC' },
//         { name: 'Kallanai Dam', lat: 10.833397420005232, lng:  78.8187062638811, waterLevel: '82 m', height: '25 m', width: '20 m', capacity: '13.4 TMC', location: 'Tirchy', floodAlerts: ['Karnataka', 'Tamil Nadu'], waterUsed: '5.0 TMC' },
//         { name: 'Mullaperiyar Dam', lat: 9.582, lng: 77.154, waterLevel: '95 m', height: '53 m', width: '14 m', capacity: '12.0 TMC', location: 'Mullaperiyar, Idukki', floodAlerts: ['Idukki', 'Kottayam'], waterUsed: '6.0 TMC' },
//         { name: 'Nallathangal Dam', lat: 11.566, lng: 77.734, waterLevel: '70 m', height: '25 m', width: '11 m', capacity: '3.1 TMC', location: 'Nallathangal, Namakkal', floodAlerts: ['Namakkal', 'Salem'], waterUsed: '1.0 TMC' },
//         { name: 'Oothangarai Dam', lat: 12.361, lng: 77.825, waterLevel: '78 m', height: '22 m', width: '12 m', capacity: '2.8 TMC', location: 'Oothangarai, Krishnagiri', floodAlerts: ['Krishnagiri', 'Dharmapuri'], waterUsed: '1.2 TMC' },
//         { name: 'Palar Dam', lat: 12.954, lng: 79.695, waterLevel: '90 m', height: '40 m', width: '15 m', capacity: '7.0 TMC', location: 'Palar, Vellore', floodAlerts: ['Vellore', 'Chennai'], waterUsed: '3.5 TMC' },
//         { name: 'Pangani Dam', lat: 10.790, lng: 77.247, waterLevel: '85 m', height: '28 m', width: '12 m', capacity: '3.0 TMC', location: 'Pangani, Coimbatore', floodAlerts: ['Coimbatore', 'Palakkad'], waterUsed: '1.5 TMC' },
//         { name: 'Ponniyin Selvan Dam', lat: 10.792, lng: 78.542, waterLevel: '87 m', height: '30 m', width: '10 m', capacity: '4.2 TMC', location: 'Ponniyin Selvan, Thanjavur', floodAlerts: ['Thanjavur', 'Cuddalore'], waterUsed: '2.0 TMC' },
//         { name: 'Sathiar Dam', lat: 10.689, lng: 76.732, waterLevel: '90 m', height: '25 m', width: '13 m', capacity: '2.8 TMC', location: 'Sathiar, Coimbatore', floodAlerts: ['Coimbatore', 'Palakkad'], waterUsed: '1.2 TMC' },
//         { name: 'Sathur Dam', lat: 9.708, lng: 77.956, waterLevel: '82 m', height: '22 m', width: '12 m', capacity: '3.3 TMC', location: 'Sathur, Virudhunagar', floodAlerts: ['Virudhunagar', 'Madurai'], waterUsed: '1.8 TMC' },
//         { name: 'Sholavanthan Dam', lat: 11.528, lng: 77.593, waterLevel: '75 m', height: '30 m', width: '14 m', capacity: '2.9 TMC', location: 'Sholavanthan, Salem', floodAlerts: ['Salem', 'Dharmapuri'], waterUsed: '1.3 TMC' },
//         { name: 'Siruvani Dam', lat: 10.915, lng: 76.956, waterLevel: '88 m', height: '50 m', width: '16 m', capacity: '4.5 TMC', location: 'Siruvani, Coimbatore', floodAlerts: ['Coimbatore', 'Palakkad'], waterUsed: '2.5 TMC' },
//         { name: 'Thambiparai Dam', lat: 10.312, lng: 77.241, waterLevel: '80 m', height: '25 m', width: '12 m', capacity: '1.9 TMC', location: 'Thambiparai, Theni', floodAlerts: ['Theni', 'Madurai'], waterUsed: '1.0 TMC' },
//         { name: 'Thoppai Dam', lat: 10.377, lng: 76.756, waterLevel: '85 m', height: '23 m', width: '14 m', capacity: '2.1 TMC', location: 'Thoppai, Coimbatore', floodAlerts: ['Coimbatore', 'Tiruppur'], waterUsed: '1.0 TMC' },
//         { name: 'Tiruchirappalli Dam', lat: 10.755, lng: 78.685, waterLevel: '82 m', height: '30 m', width: '12 m', capacity: '4.3 TMC', location: 'Tiruchirappalli', floodAlerts: ['Tiruchirappalli', 'Trichy'], waterUsed: '2.0 TMC' },
//         { name: 'Tirunelveli Dam', lat: 8.689, lng: 77.553, waterLevel: '90 m', height: '22 m', width: '15 m', capacity: '6.5 TMC', location: 'Tirunelveli', floodAlerts: ['Tirunelveli', 'Nagercoil'], waterUsed: '3.0 TMC' },
//         { name: 'Valparai Dam', lat: 10.332, lng: 76.943, waterLevel: '85 m', height: '27 m', width: '10 m', capacity: '3.1 TMC', location: 'Valparai, Coimbatore', floodAlerts: ['Coimbatore', 'Palakkad'], waterUsed: '1.6 TMC' },
//         { name: 'Vattamala Dam', lat: 10.343, lng: 77.426, waterLevel: '78 m', height: '25 m', width: '12 m', capacity: '2.5 TMC', location: 'Vattamala, Dindigul', floodAlerts: ['Dindigul', 'Madurai'], waterUsed: '1.1 TMC' },
//         { name: 'Vembadi Dam', lat: 10.228, lng: 77.217, waterLevel: '84 m', height: '32 m', width: '14 m', capacity: '3.6 TMC', location: 'Vembadi, Theni', floodAlerts: ['Theni', 'Dindigul'], waterUsed: '1.9 TMC' },
//         { name: 'Vedaranyam Dam', lat: 10.386, lng: 79.606, waterLevel: '90 m', height: '30 m', width: '16 m', capacity: '4.0 TMC', location: 'Vedaranyam, Nagapattinam', floodAlerts: ['Nagapattinam', 'Cuddalore'], waterUsed: '2.1 TMC' },
//         { name: 'Vellore Dam', lat: 12.917, lng: 79.133, waterLevel: '80 m', height: '25 m', width: '14 m', capacity: '2.8 TMC', location: 'Vellore', floodAlerts: ['Vellore', 'Chennai'], waterUsed: '1.4 TMC' },
//         { name: 'Vilangudi Dam', lat: 10.765, lng: 78.217, waterLevel: '85 m', height: '20 m', width: '10 m', capacity: '3.0 TMC', location: 'Vilangudi, Madurai', floodAlerts: ['Madurai', 'Tiruchirappalli'], waterUsed: '1.3 TMC' },
//         { name: 'Yercaud Dam', lat: 11.783, lng: 78.701, waterLevel: '90 m', height: '25 m', width: '12 m', capacity: '2.5 TMC', location: 'Yercaud, Salem', floodAlerts: ['Salem', 'Namakkal'], waterUsed: '1.1 TMC' },
//     ];

//     const [selectedDam, setSelectedDam] = useState(null);
//     const [rainfallData, setRainfallData] = useState('');
//     const [sidebarOpen, setSidebarOpen] = useState(false);
//     const [popupOpen, setPopupOpen] = useState(false);
//     const mapRef = useRef();

//     const createIcon = (icon) => {
//         return L.divIcon({
//             html: ReactDOMServer.renderToString(icon),
//             className: '',
//             iconSize: [32, 32],
//             iconAnchor: [16, 32],
//             popupAnchor: [0, -32]
//         });
//     };

//     useEffect(() => {
//         const handleResize = () => {
//             document.querySelector('.map').style.height = `${window.innerHeight * 0.5}px`;
//         };

//         handleResize(); // Set initial size
//         window.addEventListener('resize', handleResize);

//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);

//     useEffect(() => {
//         if (selectedDam) {
//             const { lat, lng } = selectedDam;
//             const map = mapRef.current;
//             if (map) {
//                 map.setView([lat, lng], 13);
//             }

//             const fetchRainfallData = async () => {
//                 try {
//                     const apiKey = 'a52446dde7fb4bf18b7181633241708';
//                     const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lng}`);
//                     const data = response.data;
//                     setRainfallData(data.current.precip_mm + " mm");
//                 } catch (error) {
//                     console.error('Error fetching rainfall data:', error);
//                 }
//             };

//             fetchRainfallData();
//         }
//     }, [selectedDam]);

//     const handleSidebarToggle = () => {
//         setSidebarOpen(prev => !prev);
//     };

//     const handleDamClick = (dam) => {
//         setSelectedDam(dam);
//         setPopupOpen(true);
//         setSidebarOpen(false);
//     };

//     return (
//         <div>
//             <br></br>
//             <br></br>
//             <br></br>
//             <br></br>
//         <div className="main-container">
//             <IconButton
//                 className="sidebar-button"
//                 color="primary"
//                 onClick={handleSidebarToggle}
//             >
//                 <MenuIcon />
//             </IconButton>
//             <br></br>

//             <Drawer
//                 anchor="left"
//                 open={sidebarOpen}
//                 onClose={handleSidebarToggle}
//                 className="sidebar"
//                 variant="persistent"
//                 style={{ width: '300px', flexShrink: 0 }}
//                 PaperProps={{ style: { width: 250 } }}
//             >
//                 <div className="sidebar-header">
//                     <Typography variant="h6">Dams List</Typography>
//                     <IconButton className="close-button" onClick={handleSidebarToggle}>
//                         <CloseIcon />
//                     </IconButton>
//                 </div>
//                 <div className="sidebar-content">
//                     {dams.map((dam, index) => (
//                         <Button
//                             key={index}
//                             className="dam-button"
//                             onClick={() => handleDamClick(dam)}
//                         >
//                             {dam.name}
//                         </Button>
//                     ))}
//                 </div>
//             </Drawer>

//             <div className="content" >
//                 <div className="section-container">
//                     <div className="section water" >
//                         <Typography variant="h5">Water Levels</Typography>
//                         <Typography variant="body1">{selectedDam ? selectedDam.waterLevel : 'Select a dam to view water level data'}</Typography>
//                     </div>
//                         &emsp; &emsp;&emsp; &emsp;&emsp;&emsp;&emsp; &emsp;&emsp; &emsp;
//                     <div className="section rainfall">
//                         <Typography variant="h5">Rainfall</Typography>
//                         <Typography variant="body1">{rainfallData || 'Select a dam to view rainfall data'}</Typography>
//                     </div>
//                        &emsp; &emsp; &emsp;&emsp;&emsp;&emsp;&emsp; &emsp; &emsp;&emsp;
//                     <div className="section water-used">
//                         <Typography variant="h5">Water Used</Typography>
//                         <Typography variant="body1">{selectedDam ? selectedDam.waterUsed : 'Select a dam to view water used data'}</Typography>
//                     </div>

//                 </div>

//                 <div className="map-container">
//                     <Typography variant="h5">Map of TN Dams</Typography>
//                     <MapContainer
//                         center={[11.1271, 78.6569]}
//                         zoom={7}
//                         className="map"
//                         zoomControl={false}
//                         whenCreated={mapInstance => { mapRef.current = mapInstance; }}
//                         style={{width:"1300px"}}
//                         Style={{height:"2000px"}}
//                     >
//                         <ZoomControl position="topright" />
//                         <LayersControl position="topright">
//                             <LayersControl.BaseLayer checked name="Standard View">
//                                 <TileLayer
//                                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                                     attribution='&copy; OpenStreetMap contributors'
//                                 />
//                             </LayersControl.BaseLayer>
//                             <LayersControl.BaseLayer name="Dark View">
//                                 <TileLayer
//                                     url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
//                                     attribution='&copy; CARTO'
//                                 />
//                             </LayersControl.BaseLayer>
//                         </LayersControl>

//                         {dams.map((dam, index) => (
//                             <Marker
//                                 key={index}
//                                 position={[dam.lat, dam.lng]}
//                                 icon={createIcon(<RoomIcon style={{ color: '#2196f3', fontSize: '32px' }} />)}
//                             >
//                                 <Popup>{dam.name}</Popup>
//                                 <Tooltip>{`Lat: ${dam.lat}, Lng: ${dam.lng}`}</Tooltip>
//                             </Marker>
//                         ))}
//                     </MapContainer>
//                 </div>
//             </div>

//             {popupOpen && selectedDam && (
//                 <div className="dam-details-popup">
//                     <IconButton className="popup-close" onClick={() => setPopupOpen(false)}>
//                         <CloseIcon />
//                     </IconButton>
//                     <Typography variant="h6">{selectedDam.name} Details</Typography>
//                     <Typography variant="body1"><strong>Height:</strong> {selectedDam.height}</Typography>
//                     <Typography variant="body1"><strong>Width:</strong> {selectedDam.width}</Typography>
//                     <Typography variant="body1"><strong>Capacity:</strong> {selectedDam.capacity}</Typography>
//                     <Typography variant="body1"><strong>Location:</strong> {selectedDam.location}</Typography>
//                     <Typography variant="body1"><strong>Nearby Flood Alert Locations:</strong> {selectedDam.floodAlerts.join(', ')}</Typography>
//                     <Typography variant="body1"><strong>Water Used:</strong> {selectedDam.waterUsed}</Typography>
//                 </div>
//             )}
//         </div>
//         </div>
//     );
// }

// export default Dams;
import React, { useEffect, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import RoomIcon from "@mui/icons-material/Room";
import ReactDOMServer from "react-dom/server";
import { IconButton, Drawer, Button, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Dams.css"; // Import the new CSS file

function Dams() {
  const dams = [
    {
      name: "Kodiveri Dam",
      lat: 11.751,
      lng: 77.548,
      waterLevel: "70 m",
      height: "25 m",
      width: "12 m",
      capacity: "2.0 TMC",
      location: "Kodiveri, Erode",
      floodAlerts: ["Erode"],
      waterUsed: "1.0 TMC",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/b7/55/15/near-water-falling-location.jpg?w=2000&h=-1&s=1",
    },
    {
      name: "Kallanai Dam",
      lat: 10.833,
      lng: 78.818,
      waterLevel: "82 m",
      height: "25 m",
      width: "20 m",
      capacity: "13.4 TMC",
      location: "Tiruchirappalli",
      floodAlerts: ["Karnataka", "Tamil Nadu"],
      waterUsed: "5.0 TMC",
      image:
        "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/640986b903a061001d9a0157.jpg",
    },
    {
      name: "Aliyar Dam",
      lat: 10.482,
      lng: 76.983,
      waterLevel: "88 m",
      height: "28 m",
      width: "12 m",
      capacity: "3.0 TMC",
      location: "Pollachi",
      floodAlerts: ["Erode", "Tirupur"],
      waterUsed: "1.5 TMC",
      image:
        "https://media.assettype.com/TNIE%2Fimport%2F2018%2F3%2F30%2Foriginal%2FAliyardam_EPS.jpg?w=1200&auto=format%2Ccompress&fit=max",
    },
    {
      name: "Sholayar Dam",
      lat: 10.392,
      lng: 76.93,
      waterLevel: "85 m",
      height: "30 m",
      width: "15 m",
      capacity: "4.0 TMC",
      location: "Valparai",
      floodAlerts: ["Coimbatore", "Palakkad"],
      waterUsed: "2.0 TMC",
      image:
        "https://scontent.fcjb5-1.fna.fbcdn.net/v/t1.6435-9/44323412_10155860819056149_1438154221219217408_n.jpg?stp=dst-jpg_s720x720&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=cvSKo8Tg_HoQ7kNvgG5p62o&_nc_ht=scontent.fcjb5-1.fna&oh=00_AYAZ3JPp6OPXRMHz4CM0u_JEaNnJfs8DF_y4Fj6TgA-Vtg&oe=66FB6006",
    },
    {
      name: "Manimuthar Dam",
      lat: 8.826,
      lng: 77.368,
      waterLevel: "83 m",
      height: "27 m",
      width: "13 m",
      capacity: "2.0 TMC",
      location: "Manimuthar, Tirunelveli",
      floodAlerts: ["Tirunelveli", "Nagercoil"],
      waterUsed: "1.0 TMC",
      image:
        "https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/karayar-dam-1677221340_dc748c83a95b2cd4ae82.webp",
    },
    {
      name: "Papanasam Dam",
      lat: 8.831,
      lng: 77.344,
      waterLevel: "86 m",
      height: "28 m",
      width: "14 m",
      capacity: "3.5 TMC",
      location: "Papanasam, Tirunelveli",
      floodAlerts: ["Tirunelveli", "Nagercoil"],
      waterUsed: "1.8 TMC",
      image:
        "https://media-cdn.tripadvisor.com/media/photo-s/08/e9/93/07/manimuthar-and-papanasam.jpg",
    },
    {
      name: "Mettur Dam",
      lat: 11.817,
      lng: 77.798,
      waterLevel: "72 m",
      height: "26 m",
      width: "13 m",
      capacity: "1.4 TMC",
      location: "Mettur, Salem",
      floodAlerts: ["Salem", "Namakkal"],
      waterUsed: "0.5 TMC",
      image:
        "https://images.unsplash.com/photo-1663473128972-a9292b9d5946?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Thirumoorthi Dam",
      lat: 10.371,
      lng: 77.229,
      waterLevel: "80 m",
      height: "27 m",
      width: "12 m",
      capacity: "1.9 TMC",
      location: "Udumalaipet",
      floodAlerts: ["Tirupur"],
      waterUsed: "1.0 TMC",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/fc/04/b8/falls.jpg?w=1400&h=-1&s=1",
    },
    {
      name: "Vaigai Dam",
      lat: 10.055,
      lng: 77.566,
      waterLevel: "85 m",
      height: "40 m",
      width: "15 m",
      capacity: "3.5 TMC",
      location: "Vaigai, Madurai",
      floodAlerts: ["Madurai"],
      waterUsed: "1.0 TMC",
      image:
        "https://th-i.thgim.com/public/incoming/lyij7f/article65721725.ece/alternates/LANDSCAPE_1200/10216_3_8_2022_18_7_40_1_03_08_2022_VAIGAI_DAM.JPG",
    },
    {
      name: "Krishnagiri Dam",
      lat: 12.491,
      lng: 78.173,
      waterLevel: "85 m",
      height: "35 m",
      width: "10 m",
      capacity: "4.0 TMC",
      location: "Krishnagiri",
      floodAlerts: ["Krishnagiri", "Madurai"],
      waterUsed: "2.0 TMC",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/d2/66/39/view-from-dam-top.jpg?w=2000&h=-1&s=1",
    },
    {
      name: "Sathanur Dam",
      lat: 12.185,
      lng: 78.85,
      waterLevel: "80 m",
      height: "35 m",
      width: "12 m",
      capacity: "5.0 TMC",
      location: "Sathanur, Thiruvannamalai",
      floodAlerts: ["Coimbatore", "Palakkad"],
      waterUsed: "2.0 TMC",
      image:
        "https://www.trawell.in/admin/images/upload/195592249sathanur-dam.jpg",
    },
    {
      name: "Bhavanisagar Dam",
      lat: 11.471,
      lng: 77.114,
      waterLevel: "78 m",
      height: "30 m",
      width: "14 m",
      capacity: "2.5 TMC",
      location: "Erode",
      floodAlerts: ["Chengalpet", "Erode"],
      waterUsed: "1.2 TMC",
      image:
        "https://images.unsplash.com/photo-1649692337531-1f92d9f98947?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Aliyar Dam Reservoir Park",
      lat: 10.482,
      lng: 76.983,
      waterLevel: "88 m",
      height: "28 m",
      width: "12 m",
      capacity: "3.0 TMC",
      location: "Pollachi",
      floodAlerts: ["Erode", "Tirupur"],
      waterUsed: "1.5 TMC",
      image:
        "https://www.trawell.in/admin/images/upload/151634319AliyarDam_Main.jpg",
    },
    {
      name: "Rallia Dam",
      lat: 10.373,
      lng: 77.23,
      waterLevel: "85 m",
      height: "22 m",
      width: "10 m",
      capacity: "2.0 TMC",
      location: "Rallia, Coimbatore",
      floodAlerts: ["Coimbatore"],
      waterUsed: "1.0 TMC",
      image:
        "https://eindiatourism.in/wp-content/uploads/2023/07/Rallia-Dam.png",
    },
    {
      name: "Pechiparai Dam",
      lat: 8.865,
      lng: 77.343,
      waterLevel: "81 m",
      height: "25 m",
      width: "13 m",
      capacity: "3.0 TMC",
      location: "Pechiparai, Kanyakumari",
      floodAlerts: ["Kanyakumari", "Tirunelveli"],
      waterUsed: "1.4 TMC",
      image:
        "https://afreentravelbug.wordpress.com/wp-content/uploads/2014/12/pechiparai-dam.jpg",
    },
    {
      name: "Amaravathi Dam",
      lat: 10.418,
      lng: 77.263,
      waterLevel: "80 m",
      height: "27 m",
      width: "10 m",
      capacity: "1.0 TMC",
      location: "Tirupur",
      floodAlerts: ["Tirupur"],
      waterUsed: "0.6 TMC",
      image:
        "https://lh5.googleusercontent.com/p/AF1QipMZvQV9XIdHLzR9Z53FHQ7fbnJW5SzyWXZIRdHO=w810-h468-n-k-no",
    },
    {
      name: "Siruvani Dam",
      lat: 10.915,
      lng: 76.956,
      waterLevel: "88 m",
      height: "50 m",
      width: "16 m",
      capacity: "4.5 TMC",
      location: "Siruvani, Coimbatore",
      floodAlerts: ["Coimbatore", "Palakkad"],
      waterUsed: "2.5 TMC",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/11/4e/65/siruvani-reservoir.jpg?w=1600&h=-1&s=1",
    },
    {
      name: "Mullaperiyar Dam",
      lat: 9.582,
      lng: 77.154,
      waterLevel: "95 m",
      height: "53 m",
      width: "14 m",
      capacity: "12.0 TMC",
      location: "Mullaperiyar, Idukki",
      floodAlerts: ["Idukki", "Kottayam"],
      waterUsed: "6.0 TMC",
      image: "https://agritech.tnau.ac.in/agriculture/images/periyar.jpg",
    },
    {
      name: "Nallathangal Dam",
      lat: 11.566,
      lng: 77.734,
      waterLevel: "70 m",
      height: "25 m",
      width: "11 m",
      capacity: "2.5 TMC",
      location: "Nallathangal, Salem",
      floodAlerts: ["Salem"],
      waterUsed: "1.2 TMC",
      image: "https://www.mappls.com/place/7Z6GQ4_1695725509069_0.png",
    },
    {
      name: "Nirar Dam",
      lat: 10.396,
      lng: 76.928,
      waterLevel: "82 m",
      height: "32 m",
      width: "14 m",
      capacity: "3.0 TMC",
      location: "Valparai, Coimbatore",
      floodAlerts: ["Coimbatore"],
      waterUsed: "1.5 TMC",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/00/1a/c7/nirar-dam.jpg?w=1600&h=-1&s=1",
    },
    {
      name: "Parambikulam Dam",
      lat: 10.394,
      lng: 76.772,
      waterLevel: "97 m",
      height: "72 m",
      width: "17 m",
      capacity: "20.5 TMC",
      location: "Parambikulam, Coimbatore",
      floodAlerts: ["Coimbatore", "Palakkad"],
      waterUsed: "10.5 TMC",
      image:
        "https://th-i.thgim.com/public/incoming/xbl9l9/article65917608.ece/alternates/LANDSCAPE_1200/parambikulam%20dam.jpg",
    },
    {
      name: "Perunchani Dam",
      lat: 8.409,
      lng: 77.354,
      waterLevel: "76 m",
      height: "34 m",
      width: "13 m",
      capacity: "2.4 TMC",
      location: "Perunchani, Kanyakumari",
      floodAlerts: ["Kanyakumari"],
      waterUsed: "1.2 TMC",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/39/Perunchani_dam.JPG",
    },
    {
      name: "Poondi Reservoir",
      lat: 13.199,
      lng: 80.015,
      waterLevel: "88 m",
      height: "26 m",
      width: "14 m",
      capacity: "3.2 TMC",
      location: "Poondi, Tiruvallur",
      floodAlerts: ["Tiruvallur"],
      waterUsed: "1.6 TMC",
      image:
        "https://th-i.thgim.com/public/news/cities/chennai/1hr986/article36956705.ece/alternates/LANDSCAPE_1200/11OCTHPOONDIRESERVOIR",
    },
    {
      name: "Manimuktha Dam",
      lat: 11.591,
      lng: 79.366,
      waterLevel: "72 m",
      height: "29 m",
      width: "11 m",
      capacity: "1.5 TMC",
      location: "Kallakurichi",
      floodAlerts: ["Kallakurichi"],
      waterUsed: "0.8 TMC",
      image:
        "https://img.maalaimalar.com/Articles/2020/Dec/202012061527572481_Tamil_News_tamil-news-Continuous-rains-in-Kallakurichi-Water-level-of_SECVPF.gif",
    },
    {
      name: "Irukkangudi Dam",
      lat: 9.3415962690574,
      lng: 77.98858927310445,
      waterLevel: "82 m",
      height: "22 m",
      width: "12 m",
      capacity: "3.3 TMC",
      location: "Sathur, Virudhunagar",
      floodAlerts: ["Virudhunagar", "Madurai"],
      waterUsed: "1.8 TMC",
      image: "https://www.mappls.com/place/0O3MZ4_1695724771985_0.png",
    },
    {
      name: "Thenur Dam",
      lat: 986800401611497,
      lng: 77.99815607785054,
      waterLevel: "75 m",
      height: "30 m",
      width: "14 m",
      capacity: "2.9 TMC",
      location: "Sholavanthan, Salem",
      floodAlerts: ["Salem", "Dharmapuri"],
      waterUsed: "1.3 TMC",
      image:
        "https://lh5.googleusercontent.com/p/AF1QipON7jT1mJ-4MkvldtQfckWqtXsqLTmNM6t63Dc1=w408-h514-k-no",
    },
    {
      name: "Vembadi Dam",
      lat: 10.228,
      lng: 77.217,
      waterLevel: "84 m",
      height: "32 m",
      width: "14 m",
      capacity: "3.6 TMC",
      location: "Vembadi, Theni",
      floodAlerts: ["Theni", "Dindigul"],
      waterUsed: "1.9 TMC",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Mukkadal_Dam.jpg/760px-Mapcarta.jpg",
    },
    {
      name: "Vilangudi Dam",
      lat: 10.765,
      lng: 78.217,
      waterLevel: "85 m",
      height: "20 m",
      width: "10 m",
      capacity: "3.0 TMC",
      location: "Vilangudi, Madurai",
      floodAlerts: ["Madurai", "Tiruchirappalli"],
      waterUsed: "1.3 TMC",
      image:
        "https://img.maalaimalar.com/Articles/2020/Dec/202012061527572481_Tamil_News_tamil-news-Continuous-rains-in-Kallakurichi-Water-level-of_SECVPF.gif",
    },
    {
      name: "Check Dam",
      lat: 9.838,
      lng: 78.249,
      waterLevel: "82 m",
      height: "20 m",
      width: "10 m",
      capacity: "2.0 TMC",
      location: "Madurai",
      floodAlerts: ["Madurai"],
      waterUsed: "0.8 TMC",
      image: "https://example.com/check-dam-image.jpg",
    },
    {
      name: "Uppar Dam Kottagudi",
      lat: 9.974,
      lng: 77.314,
      waterLevel: "78 m",
      height: "22 m",
      width: "12 m",
      capacity: "2.3 TMC",
      location: "Kottagudi, Sivagangai",
      floodAlerts: ["Sivagangai"],
      waterUsed: "1.0 TMC",
      image: "https://example.com/uppar-dam-image.jpg",
    },
    {
      name: "Kalkurichi Dam",
      lat: 10.214,
      lng: 78.848,
      waterLevel: "80 m",
      height: "25 m",
      width: "13 m",
      capacity: "2.5 TMC",
      location: "Pudukottai",
      floodAlerts: ["Pudukottai"],
      waterUsed: "1.2 TMC",
      image: "https://example.com/kalkurichi-dam-image.jpg",
    },
    {
      name: "Vellar Dam",
      lat: 10.057,
      lng: 77.592,
      waterLevel: "84 m",
      height: "30 m",
      width: "15 m",
      capacity: "3.0 TMC",
      location: "Vellar, Tamil Nadu",
      floodAlerts: ["Madurai"],
      waterUsed: "1.5 TMC",
      image: "https://example.com/vellar-dam-image.jpg",
    },
    {
      name: "Kadalur Dam",
      lat: 9.924,
      lng: 78.142,
      waterLevel: "80 m",
      height: "25 m",
      width: "12 m",
      capacity: "2.0 TMC",
      location: "Kadalur, Tamil Nadu",
      floodAlerts: ["Sivagangai"],
      waterUsed: "1.0 TMC",
      image: "https://example.com/kadalur-dam-image.jpg",
    },
  ];

  const [selectedDam, setSelectedDam] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const mapRef = useRef();
  const markersRef = useRef([]); // Store markers refs in an array

  const handleDamClick = (dam, index) => {
    setSelectedDam(dam);

    if (mapRef.current) {
      const { lat, lng } = dam;
      mapRef.current.setView([lat, lng], 10);

      // Open the popup for the selected marker
      if (markersRef.current[index]) {
        markersRef.current[index].openPopup();
      }
    }
  };

  const createIcon = (icon) => {
    return L.divIcon({
      html: ReactDOMServer.renderToString(icon),
      className: "",
      iconSize: [32, 32],
      iconAnchor: [16, 32],
    });
  };

  const zoomIn = () => {
    if (mapRef.current) {
      mapRef.current.zoomIn();
    }
  };

  const zoomOut = () => {
    if (mapRef.current) {
      mapRef.current.zoomOut();
    }
  };

  return (
    <div className="dams-container">
      {/* Sidebar */}
      <Drawer
        anchor="left"
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      >
        <IconButton onClick={() => setSidebarOpen(false)}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" className="sidebar-title">
          Dams List
        </Typography>
        {dams.map((dam, index) => (
          <Button key={index} onClick={() => handleDamClick(dam, index)}>
            {dam.name}
          </Button>
        ))}
      </Drawer>

      {/* Main content */}
      <div className="map-container">
        <IconButton
          onClick={() => setSidebarOpen(true)}
          className="menu-button"
        >
          <MenuIcon />
        </IconButton>
        <MapContainer
          center={[11.1271, 78.6569]}
          zoom={8}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
          zoomControl={false}
          ref={mapRef}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          {dams.map((dam, index) => (
            <Marker
              key={index}
              position={[dam.lat, dam.lng]}
              icon={createIcon(<RoomIcon style={{ color: "red" }} />)}
              ref={(el) => (markersRef.current[index] = el)} // Store marker ref
              eventHandlers={{
                click: () => handleDamClick(dam, index),
              }}
            >
              <Popup>
                <div className="popup-container">
                  <img
                    src={dam.image}
                    alt={`${dam.name}`}
                    className="dam-image" // Add this CSS class for styling
                  />
                  <div className="popup-title">
                    <Typography variant="h6">{dam.name}</Typography>
                  </div>
                  <div className="popup-content">
                    <div className="popup-section">
                      <strong>Water Level:</strong> {dam.waterLevel}
                    </div>
                    <div className="popup-section">
                      <strong>Location:</strong> {dam.location}
                    </div>
                    <div className="popup-section">
                      <strong>Capacity:</strong> {dam.capacity}
                    </div>
                    <div className="popup-section">
                      <strong>Flood Zone:</strong> {dam.floodAlerts.join(", ")}
                    </div>
                    <div className="popup-section">
                      <strong>Latitude:</strong> {dam.lat}
                    </div>
                    <div className="popup-section">
                      <strong>Longitude:</strong> {dam.lng}
                    </div>
                    <div className="popup-section">
                      <strong>Height:</strong> {dam.height}
                    </div>
                    <div className="popup-section">
                      <strong>Width:</strong> {dam.width}
                    </div>
                    <div className="popup-section">
                      <strong>Water Used:</strong> {dam.waterUsed}
                    </div>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
        {/* Zoom Controls */}
        <div className="zoom-controls">
          <button className="zoom-button" onClick={zoomIn}>
            +
          </button>
          <button className="zoom-button" onClick={zoomOut}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dams;
