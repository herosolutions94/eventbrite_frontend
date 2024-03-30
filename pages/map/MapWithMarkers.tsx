import React, { useEffect, useRef } from 'react';

interface Marker {
  latitude: number;
  longitude: number;
}

interface MapWithMarkersProps {
  markers: Marker[];
  center: Marker;
}

const MapWithMarkers: React.FC<MapWithMarkersProps> = ({ markers, center }) => {
  // const mapContainerRef = useRef<HTMLDivElement>(null);
  // const mapRef = useRef<google.maps.Map<Element> | null>(null);
  // const markersRef = useRef<google.maps.Marker[]>([]);

  // useEffect(() => {
  //   if (!window.google) {
  //     return;
  //   }

  //   const mapOptions: google.maps.MapOptions = {
  //       center: { lat: center.latitude, lng: center.longitude },
  //        zoom: 1, // Set the initial zoom level
  //   };

  //   const map = new window.google.maps.Map(mapContainerRef.current!, mapOptions);
  //   mapRef.current = map;

  //   return () => {
  //     if (mapRef.current) {
  //       mapRef.current = null;
  //     }
  //   };
  // }, []);

  // useEffect(() => {
  //   if (!mapRef.current || !window.google) {
  //     return;
  //   }

  //   markersRef.current.forEach((marker) => {
  //     marker.setMap(null); // Remove existing markers from the map
  //   });

  //   markersRef.current = markers.map((marker, index) => {
  //     return new window.google.maps.Marker({
  //       position: { lat: marker.latitude, lng: marker.longitude },
  //       map: mapRef.current as google.maps.Map<Element>,
  //       title: `Marker ${index + 1}`,
  //     });
  //   });
  // }, [markers]);

  // return <div ref={mapContainerRef} style={{ height: '400px' }} />;
  return <div style={{ height: '400px' }} />;
};

export default MapWithMarkers;
