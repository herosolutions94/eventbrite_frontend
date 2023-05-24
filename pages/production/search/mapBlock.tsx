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

  // const markers: Marker[] = [
  //   { latitude: 40.7128, longitude: -74.006 },
  //   { latitude: 34.0522, longitude: -118.2437 },
  //   // Add more marker objects with latitude and longitude values as needed
  // ];
  const markers: Marker[] = tournaments.map((item: any) => {
    return {
      latitude: parseInt(item?.latitude),
      longitude: parseInt(item?.longitude),
    };
  });
  console.log(markers);

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
