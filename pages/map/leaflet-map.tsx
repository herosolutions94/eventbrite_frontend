import React, { useEffect, useState } from 'react';
import { TileLayer, Marker, Popup } from 'react-leaflet';
import L, { LatLngBounds } from 'leaflet'; // Import Leaflet directly
import "leaflet/dist/leaflet.css";

interface MarkerData {
  latitude: number;
  longitude: number;
}

interface Props {
  markers: MarkerData[];
}

const LeafletMapComponent: React.FC<Props> = ({ markers }) => {
  const [map, setMap] = useState<L.Map | null>(null);

  useEffect(() => {
    if (map && markers.length > 0) {
      // Fit map to bounds of all markers when the markers change
      const bounds = L.latLngBounds(markers.map(marker => [marker.latitude, marker.longitude]));
      map.fitBounds(bounds);
    }
  }, [map, markers]);

  useEffect(() => {
    if (map) {
      map.setView([0, 0], 2); // Set initial view if map is available
    }
  }, [map]);

  const customIcon = new L.Icon({
    iconUrl: '/images/marker.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <div style={{ height: '300px', width: '100%' }} ref={(ref) => {
      if (ref && !map) {
        const newMap = L.map(ref);
        setMap(newMap);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(newMap);
      }
    }}>
      {markers.map((marker, index) => (
        <Marker key={index} position={[marker.latitude, marker.longitude]}>
          <Popup>
            <p style={{ fontSize: '12px' }}>Latitude: {marker.latitude}</p>
            <p style={{ fontSize: '12px' }}>Longitude: {marker.longitude}</p>
          </Popup>
        </Marker>
      ))}
    </div>
  );
};

export default LeafletMapComponent;
