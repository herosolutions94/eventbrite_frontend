import React, { useEffect } from "react";

interface MapProps {
  lat: number;
  lng: number;
}

const LeafLetMapSingle: React.FC<MapProps> = ({ lat, lng }) => {
  console.log(lat, lng);
  useEffect(() => {
    async function initializeMap() {
      if (typeof window === "undefined") {
        // window is not available, returning
        return;
      }

      const L = require("leaflet");
      require("leaflet/dist/leaflet.css");

      // Initialize Leaflet map
      const map = L.map("map").setView([lat, lng], 13); // Set the map view to the provided lat and lng

      // Add tile layer for map
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
      const customIcon = L.icon({
        iconUrl: "/images/marker.png", // URL of your custom marker icon
        iconSize: [32, 32], // Size of the icon
        iconAnchor: [16, 32], // Anchor point of the icon (centered bottom)
      });
      // Add marker to the map
      L.marker([lat, lng], { icon: customIcon }).addTo(map);

      return () => {
        // Cleanup
        map.remove();
      };
    }

    initializeMap();
  }, [lat, lng]);

  return <div id="map" style={{ height: "400px", width: "100%" }}></div>;
};

export default LeafLetMapSingle;
