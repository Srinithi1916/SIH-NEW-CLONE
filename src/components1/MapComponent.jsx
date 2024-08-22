import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './MapComponent.css';
import 'leaflet/dist/leaflet.css';

function MapComponent() {
    const dams = [
        { name: 'Dam A', position: [11.1271, 78.6569], waterLevel: '75%' },
        { name: 'Dam B', position: [10.7905, 78.7047], waterLevel: '60%' },
    ];

    return (
        <div className="map-container">
            <MapContainer center={[11.1271, 78.6569]} zoom={7} style={{ height: "100%", width: "100%" }}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {dams.map((dam, idx) => (
                    <Marker key={idx} position={dam.position}>
                        <Popup>
                            <strong>{dam.name}</strong><br />
                            Water Level: {dam.waterLevel}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}

export default MapComponent;