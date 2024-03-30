import React from 'react';
import LeafLetMap from '@/components/map';

export interface Marker {
  lat: number;
  lng: number;
  name: string
}
interface MapProps {
  tournaments: any
}

const Map = ({ tournaments }: MapProps) => {
  const markers: Marker[] = tournaments && tournaments.map((item: any) => {
    if (parseFloat(item?.lat) > 0 && parseFloat(item?.long) > 0) {
      return {
        lat: parseFloat(item?.lat),
        lng: parseFloat(item?.long),
        name: `
            <div class="tournament_markerr">
                
                <h5>Tournament: ${item.title}</h5>
                <h6>Location: ${item.location}</h6>
                <a href="/tournament-detail/${item?.id}" style="font-size:16px"></a>
            </div>
        `,
      };
    }

  });

  return (
    <div>
      <LeafLetMap markers={markers} />
    </div>
  );
};

export default Map;
