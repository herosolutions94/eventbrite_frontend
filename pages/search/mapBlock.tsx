import React from 'react';
import MapWithMarkers from '../map/MapWithMarkers';

export interface Marker {
	latitude: number;
	longitude: number;
}
interface MapProps {
  tournaments : any
}
const Map = ({tournaments}: MapProps) => {
  const markers: Marker[] = tournaments && tournaments.map((item: any) => {
    return {
      latitude: parseInt(item?.latitude),
      longitude: parseInt(item?.longitude),
    };
  });
  return (
    <div>
      	<MapWithMarkers 
          markers={markers} 
          center={{latitude: 40.7128, longitude: -74.006}} 
		    />
    </div>
  );
};

export default Map;
