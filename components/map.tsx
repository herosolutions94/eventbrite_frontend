import React, { useEffect } from 'react';
import customIconUrl from '/images/loser.png';
interface Marker {
    lat: number;
    lng: number;
    name: string;
}

interface MapProps {
    markers: Marker[];
}

const LeafLetMap: React.FC<MapProps> = ({ markers }) => {
    useEffect(() => {
        async function initializeMap() {
            if (typeof window === 'undefined') {
                // window is not available, returning
                return;
            }

            const L = require('leaflet');
            require('leaflet/dist/leaflet.css');

            // Import marker and shadow images as base64 strings
            const iconUrl = require('leaflet/dist/images/marker-icon.png').default;
            const shadowUrl = require('leaflet/dist/images/marker-shadow.png').default;

            // Initialize Leaflet map
            const map = L.map('map').setView([0, 0], 2);

            // Add tile layer for map
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(map);

            const customIcon = L.icon({
                iconUrl: "/images/marker.png", // URL of your custom marker icon
                iconSize: [32, 32], // Size of the icon
                iconAnchor: [16, 32], // Anchor point of the icon (centered bottom)
            });

            // Add markers to the map
            markers.forEach(marker => {
                L.marker([marker.lat, marker.lng], { icon: customIcon }) // Pass customIcon to icon option
                    .addTo(map)
                    .bindPopup(marker.name);
            });

            return () => {
                // Cleanup
                map.remove();
            };
        }

        initializeMap();
    }, [markers]);

    return <div id="map" style={{ height: '400px', width: '100%' }}></div>;
};

export default LeafLetMap;
