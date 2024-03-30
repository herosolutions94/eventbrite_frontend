import React from 'react';
// import MapWithMarkers from './map/MapWithMarkers';

export interface Marker {
  latitude: number;
  longitude: number;
}
const MyPage: React.FC = () => {
  const markers: Marker[] = [
    { latitude: 40.7128, longitude: -74.006 },
    { latitude: 34.0522, longitude: -118.2437 },
    // Add more marker objects with latitude and longitude values as needed
  ];

  return (
    <div>
      <h1>Map with Markers</h1>
      {/* <MapWithMarkers markers={markers} center={{latitude: 40.7128, longitude: -74.006}} /> */}
    </div>
  );
};

export default MyPage;
