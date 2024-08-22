import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip, ZoomControl, LayersControl } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import RoomIcon from '@mui/icons-material/Room';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import { IconButton, Drawer, Button, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Dams() {
    const dams = [
        { name: 'Mettur Dam', lat: 11.816792191137534,  lng: 77.79811701859666, waterLevel: '72 m', height: '26 m', width: '13 m', capacity: '1.4 TMC', location: 'Mettur, Salem', floodAlerts: ['Salem', 'Namakkal'], waterUsed: '0.5 TMC' },
        { name: 'Sathanur Dam', lat: 12.18482226830172, lng: 78.84996010098415, waterLevel: '80 m', height: '35 m', width: '12 m', capacity: '5.0 TMC', location: 'Sathanur, Thiruvannamalai', floodAlerts: ['Coimbatore', 'Palakkad'], waterUsed: '2.0 TMC' },
        { name: 'Vaigai Dam', lat: 10.054807828489112, lng:  77.56641515758027, waterLevel: '85 m', height: '40 m', width: '15 m', capacity: '3.5 TMC', location: 'Vaigai, Madurai', floodAlerts: ['Madurai', ], waterUsed: '1.0 TMC' },
        { name: 'Bhavanisagar Dam', lat: 11.471108506695543, lng:77.11432460930027, waterLevel: '78 m', height: '30 m', width: '14 m', capacity: '2.5 TMC', location: 'Erode', floodAlerts: ['Chengalpet', 'Erode'], waterUsed: '1.2 TMC' },
        { name: 'Aliyar Dam', lat: 10.482915835998389,  lng:  76.98341087412295, waterLevel: '88 m', height: '28 m', width: '12 m', capacity: '3.0 TMC', location: ' Pollachi', floodAlerts: ['Erode', 'Tirupur'], waterUsed: '1.5 TMC' },
        { name: 'Krishnagiri Dam', lat: 12.491239884194444, lng:  78.17321967454937, waterLevel: '85 m', height: '35 m', width: '10 m', capacity: '4.0 TMC', location: 'Krishnagiri', floodAlerts: ['Krishnagiri', 'Madurai'], waterUsed: '2.0 TMC' },
        { name: 'Amaravati Dam', lat: 10.41845877295113, lng:  77.26347246679991, waterLevel: '80 m', height: '27 m', width: '10 m', capacity: '1.0 TMC', location: ' Tirupur', floodAlerts: ['Tirupur'], waterUsed: '0.6 TMC' },
        { name: 'Kallanai Dam', lat: 10.833397420005232, lng:  78.8187062638811, waterLevel: '82 m', height: '25 m', width: '20 m', capacity: '13.4 TMC', location: 'Tirchy', floodAlerts: ['Karnataka', 'Tamil Nadu'], waterUsed: '5.0 TMC' },
        { name: 'Mullaperiyar Dam', lat: 9.582, lng: 77.154, waterLevel: '95 m', height: '53 m', width: '14 m', capacity: '12.0 TMC', location: 'Mullaperiyar, Idukki', floodAlerts: ['Idukki', 'Kottayam'], waterUsed: '6.0 TMC' },
        { name: 'Nallathangal Dam', lat: 11.566, lng: 77.734, waterLevel: '70 m', height: '25 m', width: '11 m', capacity: '3.1 TMC', location: 'Nallathangal, Namakkal', floodAlerts: ['Namakkal', 'Salem'], waterUsed: '1.0 TMC' },
        { name: 'Oothangarai Dam', lat: 12.361, lng: 77.825, waterLevel: '78 m', height: '22 m', width: '12 m', capacity: '2.8 TMC', location: 'Oothangarai, Krishnagiri', floodAlerts: ['Krishnagiri', 'Dharmapuri'], waterUsed: '1.2 TMC' },
        { name: 'Palar Dam', lat: 12.954, lng: 79.695, waterLevel: '90 m', height: '40 m', width: '15 m', capacity: '7.0 TMC', location: 'Palar, Vellore', floodAlerts: ['Vellore', 'Chennai'], waterUsed: '3.5 TMC' },
        { name: 'Pangani Dam', lat: 10.790, lng: 77.247, waterLevel: '85 m', height: '28 m', width: '12 m', capacity: '3.0 TMC', location: 'Pangani, Coimbatore', floodAlerts: ['Coimbatore', 'Palakkad'], waterUsed: '1.5 TMC' },
        { name: 'Ponniyin Selvan Dam', lat: 10.792, lng: 78.542, waterLevel: '87 m', height: '30 m', width: '10 m', capacity: '4.2 TMC', location: 'Ponniyin Selvan, Thanjavur', floodAlerts: ['Thanjavur', 'Cuddalore'], waterUsed: '2.0 TMC' },
        { name: 'Sathiar Dam', lat: 10.689, lng: 76.732, waterLevel: '90 m', height: '25 m', width: '13 m', capacity: '2.8 TMC', location: 'Sathiar, Coimbatore', floodAlerts: ['Coimbatore', 'Palakkad'], waterUsed: '1.2 TMC' },
        { name: 'Sathur Dam', lat: 9.708, lng: 77.956, waterLevel: '82 m', height: '22 m', width: '12 m', capacity: '3.3 TMC', location: 'Sathur, Virudhunagar', floodAlerts: ['Virudhunagar', 'Madurai'], waterUsed: '1.8 TMC' },
        { name: 'Sholavanthan Dam', lat: 11.528, lng: 77.593, waterLevel: '75 m', height: '30 m', width: '14 m', capacity: '2.9 TMC', location: 'Sholavanthan, Salem', floodAlerts: ['Salem', 'Dharmapuri'], waterUsed: '1.3 TMC' },
        { name: 'Siruvani Dam', lat: 10.915, lng: 76.956, waterLevel: '88 m', height: '50 m', width: '16 m', capacity: '4.5 TMC', location: 'Siruvani, Coimbatore', floodAlerts: ['Coimbatore', 'Palakkad'], waterUsed: '2.5 TMC' },
        { name: 'Thambiparai Dam', lat: 10.312, lng: 77.241, waterLevel: '80 m', height: '25 m', width: '12 m', capacity: '1.9 TMC', location: 'Thambiparai, Theni', floodAlerts: ['Theni', 'Madurai'], waterUsed: '1.0 TMC' },
        { name: 'Thoppai Dam', lat: 10.377, lng: 76.756, waterLevel: '85 m', height: '23 m', width: '14 m', capacity: '2.1 TMC', location: 'Thoppai, Coimbatore', floodAlerts: ['Coimbatore', 'Tiruppur'], waterUsed: '1.0 TMC' },
        { name: 'Tiruchirappalli Dam', lat: 10.755, lng: 78.685, waterLevel: '82 m', height: '30 m', width: '12 m', capacity: '4.3 TMC', location: 'Tiruchirappalli', floodAlerts: ['Tiruchirappalli', 'Trichy'], waterUsed: '2.0 TMC' },
        { name: 'Tirunelveli Dam', lat: 8.689, lng: 77.553, waterLevel: '90 m', height: '22 m', width: '15 m', capacity: '6.5 TMC', location: 'Tirunelveli', floodAlerts: ['Tirunelveli', 'Nagercoil'], waterUsed: '3.0 TMC' },
        { name: 'Valparai Dam', lat: 10.332, lng: 76.943, waterLevel: '85 m', height: '27 m', width: '10 m', capacity: '3.1 TMC', location: 'Valparai, Coimbatore', floodAlerts: ['Coimbatore', 'Palakkad'], waterUsed: '1.6 TMC' },
        { name: 'Vattamala Dam', lat: 10.343, lng: 77.426, waterLevel: '78 m', height: '25 m', width: '12 m', capacity: '2.5 TMC', location: 'Vattamala, Dindigul', floodAlerts: ['Dindigul', 'Madurai'], waterUsed: '1.1 TMC' },
        { name: 'Vembadi Dam', lat: 10.228, lng: 77.217, waterLevel: '84 m', height: '32 m', width: '14 m', capacity: '3.6 TMC', location: 'Vembadi, Theni', floodAlerts: ['Theni', 'Dindigul'], waterUsed: '1.9 TMC' },
        { name: 'Vedaranyam Dam', lat: 10.386, lng: 79.606, waterLevel: '90 m', height: '30 m', width: '16 m', capacity: '4.0 TMC', location: 'Vedaranyam, Nagapattinam', floodAlerts: ['Nagapattinam', 'Cuddalore'], waterUsed: '2.1 TMC' },
        { name: 'Vellore Dam', lat: 12.917, lng: 79.133, waterLevel: '80 m', height: '25 m', width: '14 m', capacity: '2.8 TMC', location: 'Vellore', floodAlerts: ['Vellore', 'Chennai'], waterUsed: '1.4 TMC' },
        { name: 'Vilangudi Dam', lat: 10.765, lng: 78.217, waterLevel: '85 m', height: '20 m', width: '10 m', capacity: '3.0 TMC', location: 'Vilangudi, Madurai', floodAlerts: ['Madurai', 'Tiruchirappalli'], waterUsed: '1.3 TMC' },
        { name: 'Yercaud Dam', lat: 11.783, lng: 78.701, waterLevel: '90 m', height: '25 m', width: '12 m', capacity: '2.5 TMC', location: 'Yercaud, Salem', floodAlerts: ['Salem', 'Namakkal'], waterUsed: '1.1 TMC' },
    ];

    const [selectedDam, setSelectedDam] = useState(null);
    const [rainfallData, setRainfallData] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);
    const mapRef = useRef();

    const createIcon = (icon) => {
        return L.divIcon({
            html: ReactDOMServer.renderToString(icon),
            className: '', 
            iconSize: [32, 32], 
            iconAnchor: [16, 32], 
            popupAnchor: [0, -32] 
        });
    };

    useEffect(() => {
        const handleResize = () => {
            document.querySelector('.map').style.height = `${window.innerHeight * 0.5}px`;
        };

        handleResize(); // Set initial size
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (selectedDam) {
            const { lat, lng } = selectedDam;
            const map = mapRef.current;
            if (map) {
                map.setView([lat, lng], 13);
            }

            const fetchRainfallData = async () => {
                try {
                    const apiKey = 'a52446dde7fb4bf18b7181633241708';
                    const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lng}`);
                    const data = response.data;
                    setRainfallData(data.current.precip_mm + " mm");
                } catch (error) {
                    console.error('Error fetching rainfall data:', error);
                }
            };

            fetchRainfallData();
        }
    }, [selectedDam]);

    const handleSidebarToggle = () => {
        setSidebarOpen(prev => !prev);
    };

    const handleDamClick = (dam) => {
        setSelectedDam(dam);
        setPopupOpen(true);
        setSidebarOpen(false); 
    };

    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        <div className="main-container">
            <IconButton 
                className="sidebar-button"
                color="primary"
                onClick={handleSidebarToggle}
            >
                <MenuIcon />
            </IconButton>
            <br></br>

            <Drawer 
                anchor="left"
                open={sidebarOpen}
                onClose={handleSidebarToggle}
                className="sidebar"
                variant="persistent"
                style={{ width: '300px', flexShrink: 0 }}
                PaperProps={{ style: { width: 250 } }}
            >
                <div className="sidebar-header">
                    <Typography variant="h6">Dams List</Typography>
                    <IconButton className="close-button" onClick={handleSidebarToggle}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <div className="sidebar-content">
                    {dams.map((dam, index) => (
                        <Button
                            key={index}
                            className="dam-button"
                            onClick={() => handleDamClick(dam)}
                        >
                            {dam.name}
                        </Button>
                    ))}
                </div>
            </Drawer>

            <div className="content" >
                <div className="section-container">
                    <div className="section water" >
                        <Typography variant="h5">Water Levels</Typography>
                        <Typography variant="body1">{selectedDam ? selectedDam.waterLevel : 'Select a dam to view water level data'}</Typography>
                    </div>
                        &emsp; &emsp;&emsp; &emsp;&emsp;&emsp;&emsp; &emsp;&emsp; &emsp;
                    <div className="section rainfall">
                        <Typography variant="h5">Rainfall</Typography>
                        <Typography variant="body1">{rainfallData || 'Select a dam to view rainfall data'}</Typography>
                    </div>
                       &emsp; &emsp; &emsp;&emsp;&emsp;&emsp;&emsp; &emsp; &emsp;&emsp;
                    <div className="section water-used">
                        <Typography variant="h5">Water Used</Typography>
                        <Typography variant="body1">{selectedDam ? selectedDam.waterUsed : 'Select a dam to view water used data'}</Typography>
                    </div>
                       
                </div>

                <div className="map-container">
                    <Typography variant="h5">Map of TN Dams</Typography>
                    <MapContainer 
                        center={[11.1271, 78.6569]} 
                        zoom={7} 
                        className="map" 
                        zoomControl={false}
                        whenCreated={mapInstance => { mapRef.current = mapInstance; }}
                        style={{width:"1300px"}}
                        Style={{height:"2000px"}}
                    >
                        <ZoomControl position="topright" />
                        <LayersControl position="topright">
                            <LayersControl.BaseLayer checked name="Standard View">
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; OpenStreetMap contributors'
                                />
                            </LayersControl.BaseLayer>
                            <LayersControl.BaseLayer name="Dark View">
                                <TileLayer
                                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                                    attribution='&copy; CARTO'
                                />
                            </LayersControl.BaseLayer>
                        </LayersControl>

                        {dams.map((dam, index) => (
                            <Marker 
                                key={index} 
                                position={[dam.lat, dam.lng]} 
                                icon={createIcon(<RoomIcon style={{ color: '#2196f3', fontSize: '32px' }} />)}
                            >
                                <Popup>{dam.name}</Popup>
                                <Tooltip>{`Lat: ${dam.lat}, Lng: ${dam.lng}`}</Tooltip>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>
            </div>

            {popupOpen && selectedDam && (
                <div className="dam-details-popup">
                    <IconButton className="popup-close" onClick={() => setPopupOpen(false)}>
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h6">{selectedDam.name} Details</Typography>
                    <Typography variant="body1"><strong>Height:</strong> {selectedDam.height}</Typography>
                    <Typography variant="body1"><strong>Width:</strong> {selectedDam.width}</Typography>
                    <Typography variant="body1"><strong>Capacity:</strong> {selectedDam.capacity}</Typography>
                    <Typography variant="body1"><strong>Location:</strong> {selectedDam.location}</Typography>
                    <Typography variant="body1"><strong>Nearby Flood Alert Locations:</strong> {selectedDam.floodAlerts.join(', ')}</Typography>
                    <Typography variant="body1"><strong>Water Used:</strong> {selectedDam.waterUsed}</Typography>
                </div>
            )}
        </div>
        </div>
    );
}

export default Dams;
