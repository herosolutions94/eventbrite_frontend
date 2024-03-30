import React from 'react';
import MapWithMarkers from '../map/MapWithMarkers';
import LeafletMapComponent from '../map/leaflet-map';

export interface Marker {
  latitude: number;
  longitude: number;
}
interface MapProps {
  tournaments: any
}
const Map = ({ tournaments }: MapProps) => {

  const markers: Marker[] = tournaments && tournaments.map((item: any) => {
    return {
      latitude: parseFloat(item?.lat),
      longitude: parseFloat(item?.long),
    };
  });

  return (
    <div>
      {/* <LeafletMapComponent markers={markers} /> */}
    </div>
  );
};

export default Map;
